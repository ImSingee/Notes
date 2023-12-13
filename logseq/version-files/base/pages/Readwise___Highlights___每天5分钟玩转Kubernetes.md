title:: Readwise/Highlights/每天5分钟玩转Kubernetes
author:: [[CloudMan]]
full-title:: 每天5分钟玩转Kubernetes
category:: #books

- kubelet运行在Cluster所有节点上，负责启动Pod和容器。
  •  kubeadm用于初始化Cluster。
  •  kubectl是Kubernetes命令行工具。通过kubectl可以部署和管理应用，查看各种资源，创建、删除和更新各种组件。
  ￼ #Highlight #[[2023-04-26]]
- 通过kubectl get pods可以观察滚动更新的过程：v1的Pod被逐个删除，同时启动了新的v2 Pod #Highlight #[[2023-04-26]]
- Pod是容器的集合，通常会将紧密相关的一组容器放到一个Pod中，同一个Pod中的所有容器共享IP地址和Port空间，也就是说它们在一个network namespace中。 #Highlight #[[2023-04-26]]
- Pod是Kubernetes调度的最小单位，同一Pod中的容器始终被一起调度 #Highlight #[[2023-04-26]]
- 执行kubectl cluster-info查看集群信息 #Highlight #[[2023-04-26]]
- Pod中的所有容器使用同一个网络namespace，即相同的IP地址和Port空间。它们可以直接用localhost通信。同样的，这些容器可以共享存储，当Kubernetes挂载volume到Pod，本质上是将volume挂载到Pod中的每一个容器。 #Highlight #[[2023-04-26]]
- Kubernetes通常不会直接创建Pod，而是通过Controller来管理Pod的。Controller中定义了Pod的部署特性，比如有几个副本、在什么样的Node上运行等。为了满足不同的业务场景，Kubernetes提供了多种Controller，包括Deployment、ReplicaSet、DaemonSet、StatefuleSet、Job等 #Highlight #[[2023-04-26]]
- Deployment可以管理Pod的多个副本，并确保Pod按照期望的状态运行 #Highlight #[[2023-04-26]]
- ReplicaSet实现了Pod的多副本管理。使用Deployment时会自动创建ReplicaSet，也就是说Deployment是通过ReplicaSet来管理Pod的多个副本的，我们通常不需要直接使用ReplicaSet。 #Highlight #[[2023-04-26]]
- DaemonSet用于每个Node最多只运行一个Pod副本的场景。正如其名称所揭示的，DaemonSet通常用于运行daemon。 #Highlight #[[2023-04-26]]
	- **Note**: DaemonSet确保每个（或者某些）节点上运行一个Pod副本。
	  当有新节点加入集群时，也会为它们新增一个Pod。当节点从集群中移除时，这些Pod也会被回收，删除DaemonSet将会删除它创建的所有Pod
- DaemonSet用于每个Node最多只运行一个Pod副本的场景。正如其名称所揭示的，DaemonSet通常用于运行daemon。 #Highlight #[[2023-04-26]]
	- **Note**: DaemonSet确保每个（或者某些）节点上运行一个Pod副本。
	  当有新节点加入集群时，也会为它们新增一个Pod。当节点从集群中移除时，这些Pod也会被回收，删除DaemonSet将会删除它创建的所有Pod
- StatefuleSet能够保证Pod的每个副本在整个生命周期中名称是不变的，而其他Controller不提供这个功能。当某个Pod发生故障需要删除并重新启动时，Pod的名称会发生变化，同时StatefuleSet会保证副本按照固定的顺序启动、更新或者删除 #Highlight #[[2023-04-26]]
- Job用于运行结束就删除的应用，而其他Controller中的Pod通常是长期持续运行 #Highlight #[[2023-04-26]]
- Kubernetes Service定义了外界访问一组特定Pod的方式。Service有自己的IP和端口，Service为Pod提供了负载均衡。 #Highlight #[[2023-04-26]]
- Namespace可以将一个物理的Cluster逻辑上划分成多个虚拟Cluster，每个Cluster就是一个Namespace。不同Namespace里的资源是完全隔离的 #Highlight #[[2023-04-26]]
- chart是Helm的应用打包格式。chart由一系列文件组成，这些文件描述了Kubernetes部署应用时所需要的资源，比如Service、Deployment、PersistentVolumeClaim、Secret、ConfigMap等。 #Highlight #[[2023-12-01]]
- Helm有两个重要的概念：chart和release。
  •  chart是创建一个应用的信息集合，包括各种Kubernetes对象的配置模板、参数定义、依赖关系、文档说明等。chart是应用部署的自包含逻辑单元。可以将chart想象成apt、yum中的软件安装包。
  •  release是chart的运行实例，代表了一个正在运行的应用。当chart被安装到Kubernetes集群，就生成一个release。chart能够多次安装到同一个集群，每次安装都是一个release。 #Highlight #[[2023-12-01]]
- Kubernetes能够很好地组织和编排容器，但它缺少一个更高层次的应用打包工具，而Helm就是来干这件事的 #Highlight #[[2023-12-01]]
- 单个的chart可以非常简单，只用于部署一个服务，比如Memcached。chart也可以很复杂，部署整个应用，比如包含HTTP Servers、 Database、消息中间件、Cache等。 #Highlight #[[2023-12-01]]
- Helm是包管理工具，这里的包就是指的chart #Highlight #[[2023-12-01]]
- Helm安装时已经默认配置好了两个仓库：stable和local。stable是官方仓库，local是用户存放自己开发的chart的本地仓库 #Highlight #[[2023-12-01]]
- Tiller服务器运行在Kubernetes集群中，它会处理Helm客户端的请求，与Kubernetes API Server交互。 #Highlight #[[2023-12-01]]
- 简单地讲，Helm客户端负责管理chart，Tiller服务器负责管理release。 #Highlight #[[2023-12-01]]
- chart可能依赖其他的chart，这些依赖关系可通过requirements.yaml指定 #Highlight #[[2023-12-01]]