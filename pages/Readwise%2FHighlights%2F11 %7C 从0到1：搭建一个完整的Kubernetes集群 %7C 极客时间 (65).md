title:: Readwise/Highlights/11 | 从0到1：搭建一个完整的Kubernetes集群 | 极客时间 (65)
author:: [[time.geekbang.org]]
full-title:: 11 | 从0到1：搭建一个完整的Kubernetes集群 | 极客时间
category:: #articles
url:: https://time.geekbang.org/column/article/39724

- Pod 这个看似复杂的 API 对象，实际上就是对容器的进一步抽象和封装而已。 #Highlight #[[2022-06-24]]
- 如果通过容器镜像，我们能够保证应用本身在开发与部署环境里的一致性的话，那么现在，Kubernetes 项目通过这些 YAML 文件，就保证了应用的“部署参数”在开发与部署环境中的一致性。 #Highlight #[[2022-06-24]]
- Kubernetes 的 Worker 节点跟 Master 节点几乎是相同的，它们运行着的都是一个 kubelet 组件。唯一的区别在于，在 kubeadm init 的过程中，kubelet 启动后，Master 节点上还会自动运行 kube-apiserver、kube-scheduler、kube-controller-manger 这三个系统 Pod。 #Highlight #[[2022-06-24]]
- 默认情况下 Master 节点是不允许运行用户 Pod 的。而 Kubernetes 做到这一点，依靠的是 Kubernetes 的 Taint/Toleration 机制。它的原理非常简单：一旦某个节点被加上了一个 Taint，即被“打上了污点”，那么所有 Pod 就都不能在这个节点上运行，因为 Kubernetes 的 Pod 都有“洁癖”。除非，有个别的 Pod 声明自己能“容忍”这个“污点”，即声明了 Toleration，它才可以在这个节点上运行。 #Highlight #[[2022-06-24]]
- Master 节点默认被加上了node-role.kubernetes.io/master:NoSchedule这样一个“污点”，其中“键”是node-role.kubernetes.io/master，而没有提供“值”。 #Highlight #[[2022-06-24]]