title:: Readwise/Highlights/35 | 解读Kubernetes三层网络方案 - 深入剖析Kubernetes
author:: [[张磊]]
full-title:: 35 | 解读Kubernetes三层网络方案 - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/67775

- host-gw 模式的工作原理，其实就是将每个 Flannel 子网（Flannel Subnet，比如：10.244.1.0/24）的“下一跳”，设置成了该子网对应的宿主机的 IP 地址。 #Highlight #[[2023-06-13]]
- host-gw 模式能够正常工作的核心，就在于 IP 包在封装成帧发送出去的时候，会使用路由表里的“下一跳”来设置目的 MAC 地址。这样，它就会经过二层网络到达目的宿主机。
  所以说，Flannel host-gw 模式必须要求集群宿主机之间是二层连通的。 #Highlight #[[2023-06-13]]
- 宿主机之间二层不连通的情况也是广泛存在的 #Highlight #[[2023-06-13]]
- 在使用了 BGP 之后，你可以认为，在每个边界网关上都会运行着一个小程序，它们会将各自的路由表信息，通过 TCP 传输给其他的边界网关。而其他边界网关上的这个小程序，则会对收到的这些数据进行分析，然后将需要的信息添加到自己的路由表里。 #Highlight #[[2023-06-13]]
- 所谓 BGP，就是在大规模网络中实现节点路由信息共享的一种协议 #Highlight #[[2023-06-13]]