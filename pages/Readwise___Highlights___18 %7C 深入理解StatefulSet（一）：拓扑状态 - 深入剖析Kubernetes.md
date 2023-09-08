title:: Readwise/Highlights/18 | 深入理解StatefulSet（一）：拓扑状态 - 深入剖析Kubernetes
author:: [[张磊]]
full-title:: 18 | 深入理解StatefulSet（一）：拓扑状态 - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/41017
- Deployment 对应用做了一个简单化假设。
  它认为，一个应用的所有 Pod，是完全一样的。所以，它们互相之间没有顺序，也无所谓运行在哪台宿主机上。需要的时候，Deployment 就可以通过 Pod 模板创建新的 Pod；不需要的时候，Deployment 就可以“杀掉”任意一个 Pod。
  但是，在实际的场景中，并不是所有的应用都可以满足这样的要求。 #Highlight #[[2023-06-08]]
- 分布式应用，它的多个实例之间，往往有依赖关系，比如：主从关系、主备关系 #Highlight #[[2023-06-08]]
- 实例之间有不对等关系，以及实例对外部数据有依赖关系的应用，就被称为“有状态应用”（Stateful Application）。 #Highlight #[[2023-06-08]]
- 得益于“控制器模式”的设计思想，Kubernetes 项目很早就在 Deployment 的基础上，扩展出了对“有状态应用”的初步支持。这个编排功能，就是：StatefulSet。 #Highlight #[[2023-06-08]]
- StatefulSet 的设计其实非常容易理解。它把真实世界里的应用状态，抽象为了两种情况：
  拓扑状态。这种情况意味着，应用的多个实例之间不是完全对等的关系。这些应用实例，必须按照某些顺序启动，比如应用的主节点 A 要先于从节点 B 启动。而如果你把 A 和 B 两个 Pod 删除掉，它们再次被创建出来时也必须严格按照这个顺序才行。并且，新创建出来的 Pod，必须和原来 Pod 的网络标识一样，这样原先的访问者才能使用同样的方法，访问到这个新 Pod。
  存储状态。这种情况意味着，应用的多个实例分别绑定了不同的存储数据。对于这些应用实例来说，Pod A 第一次读取到的数据，和隔了十分钟之后再次读取到的数据，应该是同一份，哪怕在此期间 Pod A 被重新创建过。这种情况最典型的例子，就是一个数据库应用的多个存储实例。 #Highlight #[[2023-06-08]]
- StatefulSet 的核心功能，就是通过某种方式记录这些状态，然后在 Pod 被重新创建时，能够为新 Pod 恢复这些状态 #Highlight #[[2023-06-08]]
- Service 是 Kubernetes 项目中用来将一组 Pod 暴露给外界访问的一种机制。比如，一个 Deployment 有 3 个 Pod，那么我就可以定义一个 Service。然后，用户只要能访问到这个 Service，它就能访问到某个具体的 Pod #Highlight #[[2023-06-08]]
- Headless Service 不需要分配一个 VIP，而是可以直接以 DNS 记录的方式解析出被代理 Pod 的 IP 地址 #Highlight #[[2023-06-08]]
- 所谓的 Headless Service，其实仍是一个标准 Service 的 YAML 文件。只不过，它的 clusterIP 字段的值是：None，即：这个 Service，没有一个 VIP 作为“头”。这也就是 Headless 的含义。所以，这个 Service 被创建后并不会被分配一个 VIP，而是会以 DNS 记录的方式暴露出它所代理的 Pod。 #Highlight #[[2023-06-08]]
- StatefulSet 给它所管理的所有 Pod 的名字，进行了编号，编号规则是：<statefulset name>-<ordinal index>。
  而且这些编号都是从 0 开始累加，与 StatefulSet 的每个 Pod 实例一一对应，绝不重复 #Highlight #[[2023-06-08]]
- 对于“有状态应用”实例的访问，你必须使用 DNS 记录或者 hostname 的方式，而绝不应该直接访问这些 Pod 的 IP 地址。 #Highlight #[[2023-06-08]]
- 在部署“有状态应用”的时候，应用的每个实例拥有唯一并且稳定的“网络标识”，是一个非常重要的假设。 #Highlight #[[2023-06-08]]
- serviceName=nginx 字段。
  这个字段的作用，就是告诉 StatefulSet 控制器，在执行控制循环（Control Loop）的时候，请使用 nginx 这个 Headless Service 来保证 Pod 的“可解析身份”。 #Highlight #[[2023-06-09]]