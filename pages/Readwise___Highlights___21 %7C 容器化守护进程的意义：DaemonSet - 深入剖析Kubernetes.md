title:: Readwise/Highlights/21 | 容器化守护进程的意义：DaemonSet - 深入剖析Kubernetes
author:: [[张磊]]
full-title:: 21 | 容器化守护进程的意义：DaemonSet - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/41366

- StatefulSet Controller 就会按照与 Pod 编号相反的顺序，从最后一个 Pod 开始，逐一更新这个 StatefulSet 管理的每个 Pod。而如果更新发生了错误，这次“滚动更新”就会停止。此外，StatefulSet 的“滚动更新”还允许我们进行更精细的控制，比如金丝雀发布（Canary Deploy）或者灰度发布，这意味着应用的多个实例中被指定的一部分不会被更新到最新的版本。 #Highlight #[[2023-06-09]]
- DaemonSet 的主要作用，是让你在 Kubernetes 集群里，运行一个 Daemon Pod。 所以，这个 Pod 有如下三个特征：
  这个 Pod 运行在 Kubernetes 集群里的每一个节点（Node）上；
  每个节点上只有一个这样的 Pod 实例；
  当有新的节点加入 Kubernetes 集群后，该 Pod 会自动地在新节点上被创建出来；而当旧节点被删除后，它上面的 Pod 也相应地会被回收掉。 #Highlight #[[2023-06-09]]
- DaemonSet Controller，首先从 Etcd 里获取所有的 Node 列表，然后遍历所有的 Node。这时，它就可以很容易地去检查，当前这个 Node 上是不是有一个携带了 name=fluentd-elasticsearch 标签的 Pod 在运行 #Highlight #[[2023-06-09]]
- 在 Kubernetes 项目中，当一个节点的网络插件尚未安装时，这个节点就会被自动加上名为node.kubernetes.io/network-unavailable的“污点”。 #Highlight #[[2023-06-09]]
- DaemonSet 其实是一个非常简单的控制器。在它的控制循环中，只需要遍历所有节点，然后根据节点上是否有被管理 Pod 的情况，来决定是否要创建或者删除一个 Pod。
  只不过，在创建每个 Pod 的时候，DaemonSet 会自动给这个 Pod 加上一个 nodeAffinity，从而保证这个 Pod 只会在指定节点上启动。同时，它还会自动给这个 Pod 加上一个 Toleration，从而忽略节点的 unschedulable“污点”。 #Highlight #[[2023-06-09]]
- 需要注意的是，在 DaemonSet 上，我们一般都应该加上 resources 字段，来限制它的 CPU 和内存使用，防止它占用过多的宿主机资源。 #Highlight #[[2023-06-09]]