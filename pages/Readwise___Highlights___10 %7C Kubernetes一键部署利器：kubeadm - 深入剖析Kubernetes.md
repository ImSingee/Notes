title:: Readwise/Highlights/10 | Kubernetes一键部署利器：kubeadm - 深入剖析Kubernetes
author:: [[张磊]]
full-title:: 10 | Kubernetes一键部署利器：kubeadm - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/39712

- kubeadm 选择了一种妥协方案：
  把 kubelet 直接运行在宿主机上，然后使用容器部署其他的 Kubernetes 组件。 #Highlight #[[2023-06-07]]
- 到目前为止，在容器里运行 kubelet，依然没有很好的解决办法，我也不推荐你用容器去部署 Kubernetes 项目 #Highlight #[[2023-06-07]]
- Kubernetes 对外提供服务时，除非专门开启“不安全模式”，否则都要通过 HTTPS 才能访问 kube-apiserver。 #Highlight #[[2023-06-07]]
- 用户使用 kubectl 获取容器日志等 streaming 操作时，需要通过 kube-apiserver 向 kubelet 发起请求 #Highlight #[[2023-06-07]]
- Kubernetes 有三个 Master 组件 kube-apiserver、kube-controller-manager、kube-scheduler，而它们都会被使用 Pod 的方式部署起来 #Highlight #[[2023-06-07]]
- 在 Kubernetes 中，有一种特殊的容器启动方法叫做“Static Pod”。它允许你把要部署的 Pod 的 YAML 文件放在一个指定的目录里。这样，当这台机器上的 kubelet 启动时，它会自动检查这个目录，加载所有的 Pod YAML 文件，然后在这台机器上启动它们。 #Highlight #[[2023-06-07]]
- kubelet 在 Kubernetes 项目中的地位非常高，在设计上它就是一个完全独立的组件，而其他 Master 组件，则更像是辅助性的系统容器 #Highlight #[[2023-06-07]]
- 在 token 生成之后，kubeadm 会将 ca.crt 等 Master 节点的重要信息，通过 ConfigMap 的方式保存在 Etcd 当中，供后续部署 Node 节点使用。这个 ConfigMap 的名字是 cluster-info。 #Highlight #[[2023-06-07]]
- kubeadm init 的最后一步，就是安装默认插件。Kubernetes 默认 kube-proxy 和 DNS 这两个插件是必须安装的。它们分别用来提供整个集群的服务发现和 DNS 功能。其实，这两个插件也只是两个容器镜像而已，所以 kubeadm 只要用 Kubernetes 客户端创建两个 Pod 就可以了。 #Highlight #[[2023-06-07]]
- kubeadm 的源代码，直接就在 kubernetes/cmd/kubeadm 目录下，是 Kubernetes 项目的一部分 #Highlight #[[2023-06-07]]
- kubeadm 目前最欠缺的是，一键部署一个高可用的 Kubernetes 集群，即：Etcd、Master 组件都应该是多节点集群，而不是现在这样的单点 #Highlight #[[2023-06-07]]