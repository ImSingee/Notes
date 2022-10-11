title:: Readwise/Highlights/13 | 为什么我们需要Pod？ - 深入剖析Kubernetes (65)
author:: [[张磊]]
full-title:: 13 | 为什么我们需要Pod？ - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/40092

- 无论是从具体的实现原理，还是从使用方法、特性、功能等方面，容器与虚拟机几乎没有任何相似的地方；也不存在一种普遍的方法，能够把虚拟机里的应用无缝迁移到容器中。因为，容器的性能优势，必然伴随着相应缺陷，即：它不能像虚拟机那样，完全模拟本地物理机环境中的部署方法。 #Highlight #[[2022-08-12]]
- Istio 项目使用 sidecar 容器完成微服务治理的原理 #Highlight #[[2022-08-12]]
- 这个所谓的“组合”操作，正是容器设计模式里最常用的一种模式，它的名字叫：sidecar。
  顾名思义，sidecar 指的就是我们可以在一个 Pod 中，启动一个辅助容器，来完成一些独立于主进程（主容器）之外的工作。 #Highlight #[[2022-08-12]]
- 在 Pod 中，所有 Init Container 定义的容器，都会比 spec.containers 定义的用户容器先启动。并且，Init Container 容器会按顺序逐一启动，而直到它们都启动并且退出了，用户容器才会启动。 #Highlight #[[2022-08-12]]
- 当用户想在一个容器里跑多个功能并不相关的应用时，应该优先考虑它们是不是更应该被描述成一个 Pod 里的多个容器。 #Highlight #[[2022-08-12]]
- 对于同一个 Pod 里面的所有用户容器来说，它们的进出流量，也可以认为都是通过 Infra 容器完成的。这一点很重要，因为将来如果你要为 Kubernetes 开发一个网络插件时，应该重点考虑的是如何配置这个 Pod 的 Network Namespace，而不是每一个用户容器如何使用你的网络配置，这是没有意义的。
  这就意味着，如果你的网络插件需要在容器里安装某些包或者配置才能完成的话，是不可取的：Infra 容器镜像的 rootfs 里几乎什么都没有，没有你随意发挥的空间。当然，这同时也意味着你的网络插件完全不必关心用户容器的启动与否，而只需要关注如何配置 Pod，也就是 Infra 容器的 Network Namespace 即可。 #Highlight #[[2022-08-12]]
- Pod 的生命周期只跟 Infra 容器一致，而与容器 A 和 B 无关。 #Highlight #[[2022-08-12]]
- 一个 Pod 只有一个 IP 地址，也就是这个 Pod 的 Network Namespace 对应的 IP 地址； #Highlight #[[2022-08-12]]
- 在 Kubernetes 项目里，Infra 容器一定要占用极少的资源，所以它使用的是一个非常特殊的镜像，叫作：k8s.gcr.io/pause。这个镜像是一个用汇编语言编写的、永远处于“暂停”状态的容器，解压后的大小也只有 100~200 KB 左右。 #Highlight #[[2022-08-12]]
- 在 Kubernetes 项目里，Pod 的实现需要使用一个中间容器，这个容器叫作 Infra 容器。在这个 Pod 中，Infra 容器永远都是第一个被创建的容器，而其他用户定义的容器，则通过 Join Network Namespace 的方式，与 Infra 容器关联在一起。 #Highlight #[[2022-08-12]]
- Pod，其实是一组共享了某些资源的容器。 #Highlight #[[2022-08-12]]
- Pod 里的所有容器，共享的是同一个 Network Namespace，并且可以声明共享同一个 Volume。 #Highlight #[[2022-08-12]]
- Kubernetes 真正处理的，还是宿主机操作系统上 Linux 容器的 Namespace 和 Cgroups，而并不存在一个所谓的 Pod 的边界或者隔离环境。 #Highlight #[[2022-08-12]]
- 关于 Pod 最重要的一个事实是：它只是一个逻辑概念。 #Highlight #[[2022-08-12]]
- Pod 是 Kubernetes 里的原子调度单位。这就意味着，Kubernetes 项目的调度器，是统一按照 Pod 而非容器的资源需求进行计算的。 #Highlight #[[2022-08-12]]
- 资源囤积带来了不可避免的调度效率损失和死锁的可能性；而乐观调度的复杂程度，则不是常规技术团队所能驾驭的。 #Highlight #[[2022-08-12]]
- 他们部署的应用，往往都存在着类似于“进程和进程组”的关系。更具体地说，就是这些应用之间有着密切的协作关系，使得它们必须部署在同一台机器上。 #Highlight #[[2022-08-12]]
- Pod，是 Kubernetes 项目中最小的 API 对象。如果换一个更专业的说法，我们可以这样描述：Pod，是 Kubernetes 项目的原子调度单位。 #Highlight #[[2022-08-12]]