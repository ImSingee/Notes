title:: Readwise/Highlights/11 | 从0到1：搭建一个完整的Kubernetes集群 - 深入剖析Kubernetes
author:: [[张磊]]
full-title:: 11 | 从0到1：搭建一个完整的Kubernetes集群 - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/39724

- Kubernetes 支持容器网络插件，使用的是一个名叫 CNI 的通用接口，它也是当前容器网络的事实标准，市面上的所有容器网络开源项目都可以通过 CNI 接入 Kubernetes，比如 Flannel、Calico、Canal、Romana 等等 #Highlight #[[2023-06-07]]
- 如果你在某一台机器上启动的一个容器，显然无法看到其他机器上的容器在它们的数据卷里写入的文件。这是容器最典型的特征之一：无状态 #Highlight #[[2023-06-07]]
- 容器的持久化存储，就是用来保存容器存储状态的重要手段：存储插件会在容器里挂载一个基于网络或者其他机制的远程数据卷，使得在容器里创建的文件，实际上是保存在远程存储服务器上，或者以分布式的方式保存在多个节点上，而与当前宿主机没有任何绑定关系。这样，无论你在其他哪个宿主机上启动新的容器，都可以请求挂载指定的持久化存储卷，从而访问到数据卷里保存的内容。这就是“持久化”的含义。 #Highlight #[[2023-06-07]]
- 其实，在很多时候，大家说的所谓“云原生”，就是“Kubernetes 原生”的意思。而像 Rook、Istio 这样的项目，正是贯彻这个思路的典范。在我 #Highlight #[[2023-06-07]]