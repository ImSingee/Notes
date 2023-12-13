title:: Readwise/Highlights/TCP 长连接层的设计和在 Im 项目的实战应用
author:: [[juejin.cn]]
full-title:: TCP 长连接层的设计和在 Im 项目的实战应用
category:: #articles
url:: https://juejin.cn/post/7168429340646965279
tags:: #[[inoreader]] #[[read]] #[[star]]

- 长连接接入层一定是有多个的，一台机器肯定扛不住，也无法做到高可用。因此在每个接入层节点中的处理上，还有一点非常重要的就是，维持着大量长连接后，如果客户端一直没有请求，或者客户端以为异常导致关闭了连接但是服务端并不知晓，那么这些无用的长连接，服务端肯定是需要清理的，避免占用大量资源。 ([View Highlight](https://read.readwise.io/read/01he4j27hy4qxmdx5f0gdrnbhc)) #Highlight #[[2023-11-01]]
- 通过心跳来保持连接，如果心跳超时则踢出连接。心跳这里多说一句，一般固定心跳设置为 4.5 分钟，还有更为合适的智能心跳策略 ([View Highlight](https://read.readwise.io/read/01he4j2nqh688z348hyz739zyr)) #Highlight #[[2023-11-01]]
- 针对 IM 场景，最合理的负载均衡策略，就是根据连接数来负载均衡，客户端新发起连接需要接入的接入层节点一定是连接数最少的，因为每台节点会需要控制最大连接数的限制才能保证最优性能，并且能够及时给压力大的节点减压。
  
  怎么实现呢？这里就需要有一个服务注册发现的组件（如 Etcd）来帮助我们达到诉求。首先，接入层启动后，往 Etcd 里面注册信息，并且再在后续的生命周期中，定期更新当前节点已有的连接数到 Etcd 中；然后我们需要有一个 Router Server，这个服务去 watch Etcd 中的接入层节点信息，Etcd 的使用可以参考etcd/clientv3；然后实时计算，得到一个列表排序，这个排序是按照节点数最少的节点排序的。
  
  然后 Router Server 提供一个 HTTP 服务的 API 接口，用来返回所有节点中连接数最少的节点的一批 IP 列表（一般可以 3 个）给到客户端。为何不是返回一个呢？因为我们返回的节点，可能因为其他原因导致连接不上，或者连接不稳定，那么此时 客户端就可以有备选方案，选择返回的下一个节点建连。 ([View Highlight](https://read.readwise.io/read/01he4j4aczgrg3xzb9tgydnfss)) #Highlight #[[2023-11-01]]
- 客户端通过 TCP 长连接连接到接入层，因此接入层如果需要重启，那么必然会导致客户端连接断开，发生重连。如果此时用户正在发送消息，那么必然会导致发送异常，从而影响用户体验。 ([View Highlight](https://read.readwise.io/read/01he4j5a66524dhtpsasc5f0tr)) #Highlight #[[2023-11-01]]
- 接入层做的足够轻量，尽量只是维持 TCP 长连接和数据包的转发，所有其他业务逻辑，尽量转发到业务层去处理，接入层与业务逻辑层严格分离；因为业务层逻辑是需要频繁变动，而接入层的长连接维持可以做到尽量不变，这样就会尽可能的减少重启 ([View Highlight](https://read.readwise.io/read/01he4j5p0rdg9syw767f8gmpmp)) #Highlight #[[2023-11-01]]
- 接入层尽可能的做到无状态化，方便随时的扩缩容；这样就需要有一个叫用户中心的服务来保存用户的各种状态和信息，如在线状态、离线状态、用户是通过哪个接入层节点连接的；通过这个方式，用户就可以随意接入到任何接入层节点，并且接入层节点也可随时扩缩容；这样的话，业务逻辑层就可以和用户中心通过 RPC 通信获取用户的各种连接信息和是否在线的状态，然后精准下发消息到指定接入层，然后接入层将消息下发给客户端用户 ([View Highlight](https://read.readwise.io/read/01he4j62j83hvg45t6nhf35hwj)) #Highlight #[[2023-11-01]]
- 主动迁移信令。增加一条信令和客户端进行交互，服务端如果要重启/缩容，那么主动告知连接在此接入层节点上的所有客户端，服务端主动发送迁移信令，比如 `publish(迁移信令,100%)`，表示发送给所有此接入层节点上的客户端，客户端收到此迁移信令后，就主动进行重新连接其他节点。因为是客户端主动断开重连其他节点的，虽然还是会有重连，但是客户端是主动发起的，因此可以通过代码逻辑来保证从业务逻辑上不会影响用户的体验，这样的话，用户在操作上就会无感知，从而提升用户体验。同时，接入层节点要发送主动迁移信令之前，需要先从服务发现与注册中心（Etcd）中下线自己，避免重连的时候还继续连接到此节点。然后当重启之前，也需要判断一下是否当前节点上所有的用户连接都已经迁移到其他节点上了。 ([View Highlight](https://read.readwise.io/read/01he4j6rtx46xw7fx72tnfse2q)) #Highlight #[[2023-11-01]]
- SYN 攻击是一个典型的 DDOS 攻击，具体就是攻击客户端在短时间内伪造大量不存在的 IP 地址，然后向服务端发送 TCP 握手连接的 SYN 请求包，服务端收到 SYN 包后会回复 ACK 确认包，并等待客户端的 ACK 确认。但是，由于源 IP 地址不是真实有效的，因此服务端需要不断的重发直至 63s 超时后才会断开连接。这些伪造的 SYN 包将长时间占用未连接队列，引起网络堵塞甚至系统瘫痪，让正常的 TCP 握手连接请求不能处理。通过 `netstat -n -p TCP | grep SYN_RECV` 可以查看是否有大量 SYN_RECV 状态，如果有则可能存在 SYN 攻击。
  
  Linux 在系统层面上，提供了三个选项来应对相关攻击：
  
  •   • tcp_max_syn_backlog，增大 SYN 连接数
    
  •   • tcp_synack_retries，减少重试次数
    
  •   • tcp_abort_on_overflow，过载直接丢弃，拒绝连接
    
  
  另外，还有一个 tcp_syncookies 参数可以缓解，当 SYN 队列满了后，TCP 会通过相关信息（源 IP、源 port）制造出一个 SYN Cookie 返回，如果是攻击者则不会有响应，如果是正常连接，则会把这个 SYN Cookie 发回来，然后服务端可以通过 SYN Cookie 建连接。 ([View Highlight](https://read.readwise.io/read/01he4j7j17wkjt5h4ndj9me502)) #Highlight #[[2023-11-01]]
- IM 系统为了防止恶意攻击，需要防止单个 IP 大量频繁建连，避免异常 socket 连接数爆满；因此需要限制每个 IP 每秒建立速度，如果单个 IP 在单位时间内建连的连接数超过一定阈值（如 100）该值，则将 IP 列入黑名单并且同时关闭此连接 ([View Highlight](https://read.readwise.io/read/01he4j82w6b3af7afvy848gp76)) #Highlight #[[2023-11-01]]
- 为了避免 token 等被窃取，为了更为安全，登录之后发送消息的频率也需要进行控制；控制的机制就是针对单个连接限制每秒处理包的上限，在单位时间内收到的包的请求数量超过一定阈值（如 100p/s）则直接丢弃。 ([View Highlight](https://read.readwise.io/read/01he4j8fa5dhadtcxc30smshq1)) #Highlight #[[2023-11-01]]