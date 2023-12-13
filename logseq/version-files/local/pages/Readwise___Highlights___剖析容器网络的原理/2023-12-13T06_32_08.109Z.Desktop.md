title:: Readwise/Highlights/剖析容器网络的原理
author:: [[juejin.cn]]
full-title:: 剖析容器网络的原理
category:: #articles
url:: https://juejin.cn/post/7176478145841725499
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- 理解 iptables 的主要工作流程有一张比较经典的图：
  
  ![img/tables_traverse.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e1b06285f5974b938b35bd8b51a72408~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp) ([View Highlight](https://read.readwise.io/read/01hepe2hd71ccrxyq8w33fmy47)) #Highlight #[[2023-11-08]]
- 以上规则是在 filter 表中生效的：
  
  •   第一条是 `-A FORWARD -j DOCKER-USER` 这表示流量进入 FORWARD 链后，直接进入到 DOCKER-USER 链；
  •   最后一条 `-A DOCKER-USER -j RETURN` 这表示流量进入 DOCKER-USER 链处理后，（如果无其他处理）可以再 RETURN 回原先的链，进行后续规则的匹配。
  
  这其实是 Docker 预留的一个链，供用户来自行配置的一些额外的规则的。 ([View Highlight](https://read.readwise.io/read/01hepeaa5bx02zwg6gba472rwq)) #Highlight #[[2023-11-08]]
- Docker 默认的路由规则是允许所有客户端访问的 ([View Highlight](https://read.readwise.io/read/01hepeaw6j74rjk1rc9dk94z87)) #Highlight #[[2023-11-08]]
- Docker 在重启之类的操作时候，会进行 iptables 相关规则的清理和重建，但是 DOCKER-USER 链中的规则可以持久化，不受影响 ([View Highlight](https://read.readwise.io/read/01hepeb8vq8hn8eb1b4zkan78x)) #Highlight #[[2023-11-08]]
- DOCKER-ISOLATION-STAGE-1/2 这两条链作用类似 ... 这两条链主要是分两个阶段进行了桥接网络隔离。所谓的桥接网络，通常就是指通过 `docker0` 这个由 Docker 创建的接口的网络。 #Highlight #[[2023-11-08]]
- 如果是相同 network 的容器是可以 ping 成功的，但如果是不同 network 的容器则不能 ping 通。
  
  DOCKER-ISOLATION-STAGE-1 会首先匹配来自桥接网络的网桥，目标是不同的接口，如果匹配到就进入 DOCKER-ISOLATION-STAGE-2， 不匹配就返回父链。
  
  DOCKER-ISOLATION-STAGE-2 匹配目标是桥接网络的网桥，如果匹配，意味着数据包是来自于一个桥接网络的网桥， 目的地是另一个桥接网络的网桥，并将其 DROP 丢弃掉。不匹配则返回父链。 ([View Highlight](https://read.readwise.io/read/01hepey9fsppj0wg05s8m00423)) #Highlight #[[2023-11-08]]
- **为什么要分两个阶段进行隔离？用一条链直接隔离行不行？**
  
  答案是行，一条链也能隔离，Docker 很早的版本就是这样做的。
  
  但是当时的实在超过 30 个 network 以后，就会导致 Docker 启动很慢。所以后来做了这个优化， 将这部分的复杂度从 O(N^2) 降低到 O(2N) ，Docker 就不再会出现启动慢的情况了。 ([View Highlight](https://read.readwise.io/read/01hepeyfrvgy9zff3rvbp51npx)) #Highlight #[[2023-11-08]]
- 我们启动一个容器，并进行端口映射，来看看会有哪些变化 ... Docker 分别在 `filter` 表和 `nat` 表增加了规则。它的具体含义如下：
  
  `filter` 表中新增的这条规则表示：在自定义的 `DOCKER` 链中，对于目标地址是 172.18.0.2 且不是从 `docker0` 进入的但从 `docker0` 出去的，目标端口是 6379 的 TCP 协议则接收。
  
  简单点来说就是放行通过 `docker0` 流出的，目标为 172.18.0.2:6379 的 TCP 协议的流量。
  
  `nat` 表中这两条规则的表示：
  
  •   为 172.18.0.2 上目标端口为 6379 的流量执行 MASQUERADE 动作（这里就简单的将它理解为 SNAT 也可以）；
  •   在自定义的 `DOCKER` 链中，如果入口不是 `docker0` 并且目标端口是 6379 则进行 DNAT 动作，将目标地址转换为 172.18.0.2:6379 。简单点来说，这条规则就是为我们提供了 Docker 容器端口转发的能力，将访问主机本地 6379 端口流量的目标地址转换为 172.18.0.2:6379 。 #Highlight #[[2023-11-08]]
- 在 containerd 中实际上是无法进行端口映射（端口发布）的 ... 如果确实想用这样的功能，怎么做呢？
  
  一种方式是自己来管理 iptables 规则，但比较繁琐了。
  
  另一种方式，推荐大家可以直接使用 [nerdctl](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fcontainerd%2Fnerdctl) 这是一个专为 containerd 做的， 兼容 Docker CLI 的工具。提供了很多远比默认的 `ctr` 工具更丰富的能力 #Highlight #[[2023-11-08]]