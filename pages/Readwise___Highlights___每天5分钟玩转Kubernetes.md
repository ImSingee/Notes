title:: Readwise/Highlights/每天5分钟玩转Kubernetes
author:: [[CloudMan]]
full-title:: 每天5分钟玩转Kubernetes
category:: #books

- 通过kubectl get pods可以观察滚动更新的过程：v1的Pod被逐个删除，同时启动了新的v2 Pod #Highlight #[[2023-04-26]]
- Pod是容器的集合，通常会将紧密相关的一组容器放到一个Pod中，同一个Pod中的所有容器共享IP地址和Port空间，也就是说它们在一个network namespace中。 #Highlight #[[2023-04-26]]
- od是Kubernetes调度的最小单位，同一Pod中的容器始终被一起调度 #Highlight #[[2023-04-26]]
- 执行kubectl cluster-info查看集群信息 #Highlight #[[2023-04-26]]
- Pod中的所有容器使用同一个网络namespace，即相同的IP地址和Port空间。它们可以直接用localhost通信。同样的，这些容器可以共享存储，当Kubernetes挂载volume到Pod，本质上是将volume挂载到Pod中的每一个容器。 #Highlight #[[2023-04-26]]
- Kubernetes通常不会直接创建Pod，而是通过Controller来管理Pod的。Controller中定义了Pod的部署特性，比如有几个副本、在什么样的Node上运行等。为了满足不同的业务场景，Kubernetes提供了多种Controller，包括Deployment、ReplicaSet、DaemonSet、StatefuleSet、Job等 #Highlight #[[2023-04-26]]
- Deployment可以管理Pod的多个副本，并确保Pod按照期望的状态运行 #Highlight #[[2023-04-26]]
- ReplicaSet实现了Pod的多副本管理。使用Deployment时会自动创建ReplicaSet，也就是说Deployment是通过ReplicaSet来管理Pod的多个副本的，我们通常不需要直接使用ReplicaSet。 #Highlight #[[2023-04-26]]
- DaemonSet用于每个Node最多只运行一个Pod副本的场景。正如其名称所揭示的，DaemonSet通常用于运行daemon。 #Highlight #[[2023-04-26]]
	- **Note**: DaemonSet确保每个（或者某些）节点上运行一个Pod副本。
	  当有新节点加入集群时，也会为它们新增一个Pod。当节点从集群中移除时，这些Pod也会被回收，删除DaemonSet将会删除它创建的所有Pod
- DaemonSet用于每个Node最多只运行一个Pod副本的场景。正如其名称所揭示的，DaemonSet通常用于运行daemon。 #Highlight #[[2023-04-26]]
- StatefuleSet能够保证Pod的每个副本在整个生命周期中名称是不变的，而其他Controller不提供这个功能。当某个Pod发生故障需要删除并重新启动时，Pod的名称会发生变化，同时StatefuleSet会保证副本按照固定的顺序启动、更新或者删除 #Highlight #[[2023-04-26]]
- Job用于运行结束就删除的应用，而其他Controller中的Pod通常是长期持续运行 #Highlight #[[2023-04-26]]
- Kubernetes Service定义了外界访问一组特定Pod的方式。Service有自己的IP和端口，Service为Pod提供了负载均衡。 #Highlight #[[2023-04-26]]
- Namespace可以将一个物理的Cluster逻辑上划分成多个虚拟Cluster，每个Cluster就是一个Namespace。不同Namespace里的资源是完全隔离的 #Highlight #[[2023-04-26]]
- kubelet运行在Cluster所有节点上，负责启动Pod和容器。
  •  kubeadm用于初始化Cluster。
  •  kubectl是Kubernetes命令行工具。通过kubectl可以部署和管理应用，查看各种资源，创建、删除和更新各种组件。
  ￼ #Highlight #[[2023-04-26]]