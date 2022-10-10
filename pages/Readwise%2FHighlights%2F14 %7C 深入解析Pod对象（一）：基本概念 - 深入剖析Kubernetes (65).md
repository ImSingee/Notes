title:: Readwise/Highlights/14 | 深入解析Pod对象（一）：基本概念 - 深入剖析Kubernetes (65)
author:: [[张磊]]
full-title:: 14 | 深入解析Pod对象（一）：基本概念 - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/40366

- Pod 生命周期的变化，主要体现在 Pod API 对象的 Status 部分，这是它除了 Metadata 和 Spec 之外的第三个重要字段。其中，pod.status.phase，就是 Pod 的当前状态 #Highlight #[[2022-08-12]]
- preStop 操作的执行，是同步的。所以，它会阻塞当前的容器杀死流程，直到这个 Hook 定义操作完成之后，才允许容器被杀死，这跟 postStart 不一样。 #Highlight #[[2022-08-12]]
- 需要明确的是，postStart 定义的操作，虽然是在 Docker 容器 ENTRYPOINT 执行之后，但它并不严格保证顺序。也就是说，在 postStart 启动时，ENTRYPOINT 有可能还没有结束。 #Highlight #[[2022-08-12]]
- NodeSelector：是一个供用户将 Pod 与 Node 进行绑定的字段 #Highlight #[[2022-08-12]]
- 凡是调度、网络、存储，以及安全相关的属性，基本上是 Pod 级别的。
  这些属性的共同特征是，它们描述的是“机器”这个整体，而不是里面运行的“程序”。比如，配置这个“机器”的网卡（即：Pod 的网络定义），配置这个“机器”的磁盘（即：Pod 的存储定义），配置这个“机器”的防火墙（即：Pod 的安全定义）。更不用说，这台“机器”运行在哪个服务器之上（即：Pod 的调度）。 #Highlight #[[2022-08-12]]