title:: Readwise/Highlights/14 | 深入解析Pod对象（一）：基本概念 - 深入剖析Kubernetes
author:: [[张磊]]
full-title:: 14 | 深入解析Pod对象（一）：基本概念 - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/40366
- 凡是调度、网络、存储，以及安全相关的属性，基本上是 Pod 级别的。
  这些属性的共同特征是，它们描述的是“机器”这个整体，而不是里面运行的“程序”。比如，配置这个“机器”的网卡（即：Pod 的网络定义），配置这个“机器”的磁盘（即：Pod 的存储定义），配置这个“机器”的防火墙（即：Pod 的安全定义）。更不用说，这台“机器”运行在哪个服务器之上（即：Pod 的调度）。 #Highlight #[[2022-08-12]]
- NodeSelector：是一个供用户将 Pod 与 Node 进行绑定的字段 #Highlight #[[2022-08-12]]
- 需要明确的是，postStart 定义的操作，虽然是在 Docker 容器 ENTRYPOINT 执行之后，但它并不严格保证顺序。也就是说，在 postStart 启动时，ENTRYPOINT 有可能还没有结束。 #Highlight #[[2022-08-12]]
- preStop 操作的执行，是同步的。所以，它会阻塞当前的容器杀死流程，直到这个 Hook 定义操作完成之后，才允许容器被杀死，这跟 postStart 不一样。 #Highlight #[[2022-08-12]]
- Pod 生命周期的变化，主要体现在 Pod API 对象的 Status 部分，这是它除了 Metadata 和 Spec 之外的第三个重要字段。其中，pod.status.phase，就是 Pod 的当前状态 #Highlight #[[2022-08-12]]
- Pod，而不是容器，才是 Kubernetes 项目中的最小编排单位。将这个设计落实到 API 对象上，容器（Container）就成了 Pod 属性里的一个普通的字段 #Highlight #[[2023-06-08]]
- 而如果你能把 Pod 看成传统环境里的“机器”、把容器看作是运行在这个“机器”里的“用户程序”，那么很多关于 Pod 对象的设计就非常容易理解了。
  比如，凡是调度、网络、存储，以及安全相关的属性，基本上是 Pod 级别的。
  这些属性的共同特征是，它们描述的是“机器”这个整体，而不是里面运行的“程序”。比如， #Highlight #[[2023-06-08]]
- 凡是 Pod 中的容器要共享宿主机的 Namespace，也一定是 Pod 级别的定义 #Highlight #[[2023-06-08]]
- ImagePullPolicy 的值默认是 Always，即每次创建 Pod 都重新拉取一次镜像。另外，当容器的镜像是类似于 nginx 或者 nginx:latest 这样的名字时，ImagePullPolicy 也会被认为 Always。
  而如果它的值被定义为 Never 或者 IfNotPresent，则意味着 Pod 永远不会主动拉取这个镜像，或者只在宿主机上不存在这个镜像时才拉取。 #Highlight #[[2023-06-08]]
- Lifecycle 字段。它定义的是 Container Lifecycle Hooks。顾名思义，Container Lifecycle Hooks 的作用，是在容器状态发生变化时触发一系列“钩子”。 #Highlight #[[2023-06-08]]
- postStart 定义的操作，虽然是在 Docker 容器 ENTRYPOINT 执行之后，但它并不严格保证顺序。也就是说，在 postStart 启动时，ENTRYPOINT 有可能还没有结束 #Highlight #[[2023-06-08]]
- preStop 发生的时机，则是容器被杀死之前（比如，收到了 SIGKILL 信号）。而需要明确的是，preStop 操作的执行，是同步的。所以，它会阻塞当前的容器杀死流程，直到这个 Hook 定义操作完成之后，才允许容器被杀死，这跟 postStart 不一样 #Highlight #[[2023-06-08]]
- Pod 对象的 Status 字段，还可以再细分出一组 Conditions。这些细分状态的值包括：PodScheduled、Ready、Initialized，以及 Unschedulable。它们主要用于描述造成当前 Status 的具体原因是什么。 #Highlight #[[2023-06-08]]