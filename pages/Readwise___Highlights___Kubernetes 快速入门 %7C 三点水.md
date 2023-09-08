title:: Readwise/Highlights/Kubernetes 快速入门 | 三点水
author:: [[lotabout.me]]
full-title:: Kubernetes 快速入门 | 三点水
category:: #articles
url:: https://lotabout.me/2020/Kubernetes-Introduction/
- 我们知道每个 pod 有自己的 IP，在更新版本或增减副本数时，一些 pod 可能被杀死，新的 pod 会被启动，那么其它服务如何决定连接到哪个 pod 呢？
  
  [Service](https://kubernetes.io/docs/concepts/services-networking/service/) 就是针对这种需求创建的抽象，对使用方屏蔽内部 pod 变化。使用方将流量发到 Service，而 Service 需要将流量转发到底层的 pod ([View Highlight](https://read.readwise.io/read/01h2fdmtm7dcyz2s84nb1833vz)) #Highlight #[[2023-06-09]]
- 在部署 Service 后 k8s 会为 Service 分配一个虚拟 IP[[3]](https://lotabout.me/2020/Kubernetes-Introduction#fn3)，称作 `Cluster IP`。
  
  在集群的 pod 里可以尝试 `telnet <service name> <port>` 或 `telnet <cluster ip> <port>` 来访问对应的 Service。注意的是这个虚拟 IP 是 ping 不通的，因为它是 ip tables 实现的（也有其它实现方式） ([View Highlight](https://read.readwise.io/read/01h2fdnkregpmwpg9zjrrncvk9)) #Highlight #[[2023-06-09]]
- 当指定 NodePort 时，k8s 会在集群所有节点 (物理机) 上开相应的端口，集群外的流量通过这个端口转发到 kube-proxy，再由 kube-proxy 转发到后台的 pod 中 ([View Highlight](https://read.readwise.io/read/01h2fdqb6xfz0cc307pdyqv4xn)) #Highlight #[[2023-06-09]]