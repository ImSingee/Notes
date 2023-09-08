title:: Readwise/Highlights/36 | 为什么说Kubernetes只有soft multi-tenancy？ - 深入...
author:: [[张磊]]
full-title:: 36 | 为什么说Kubernetes只有soft multi-tenancy？ - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/68316
- 一旦 Pod 被 NetworkPolicy 选中，那么这个 Pod 就会进入“拒绝所有”（Deny All）的状态，即：这个 Pod 既不允许被外界访问，也不允许对外界发起访问。 #Highlight #[[2023-07-11]]
- 在具体实现上，凡是支持 NetworkPolicy 的 CNI 网络插件，都维护着一个 NetworkPolicy Controller，通过控制循环的方式对 NetworkPolicy 对象的增删改查做出响应，然后在宿主机上完成 iptables 规则的配置工作。 #Highlight #[[2023-07-11]]
- iptables 只是一个操作 Linux 内核 Netfilter 子系统的“界面” #Highlight #[[2023-07-11]]
- Netfilter 子系统的作用，就是 Linux 内核里挡在“网卡”和“用户态进程”之间的一道“防火墙”。 #Highlight #[[2023-07-11]]
- 当一个 IP 包通过网卡进入主机之后，它就进入了 Netfilter 定义的流入路径（Input Path）里 #Highlight #[[2023-07-11]]
- Kubernetes 从底层的设计和实现上，更倾向于假设你已经有了一套完整的物理基础设施。然后，Kubernetes 负责在此基础上提供一种“弱多租户”（soft multi-tenancy）的能力 #Highlight #[[2023-07-11]]
- Kubernetes 的网络模型以及大多数容器网络实现，其实既不会保证容器之间二层网络的互通，也不会实现容器之间的二层网络隔离。 #Highlight #[[2023-07-11]]
- Kubernetes 项目在云计算生态里的定位，其实是基础设施与 PaaS 之间的中间层。这是非常符合“容器”这个本质上就是进程的抽象粒度的。 #Highlight #[[2023-07-11]]