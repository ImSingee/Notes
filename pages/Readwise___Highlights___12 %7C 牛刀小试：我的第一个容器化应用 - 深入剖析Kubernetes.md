title:: Readwise/Highlights/12 | 牛刀小试：我的第一个容器化应用 - 深入剖析Kubernetes
author:: [[张磊]]
full-title:: 12 | 牛刀小试：我的第一个容器化应用 - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/40008
- Kubernetes 跟 Docker 等很多项目最大的不同，就在于它不推荐你使用命令行的方式直接运行容器（虽然 Kubernetes 项目也支持这种方式，比如：kubectl run），而是希望你用 YAML 文件的方式，即：把容器的定义、参数、配置，统统记录在一个 YAML 文件中 #Highlight #[[2023-06-07]]
- 所谓 Deployment，是一个定义多副本应用（即多个副本 Pod）的对象，我在前面的文章中（也是第 9 篇文章《从容器到容器云：谈谈 Kubernetes 的本质》）曾经简单提到过它的用法。此外，Deployment 还负责在 Pod 定义发生变化时，对每个副本进行滚动更新（Rolling Update）。 #Highlight #[[2023-06-07]]
- Pod 就是 Kubernetes 世界里的“应用”；而一个应用，可以由多个容器组成。 #Highlight #[[2023-06-07]]
- 像这样使用一种 API 对象（Deployment）管理另一种 API 对象（Pod）的方法，在 Kubernetes 中，叫作“控制器”模式（controller pattern）。在 #Highlight #[[2023-06-07]]
- 每一个 API 对象都有一个叫作 Metadata 的字段，这个字段就是 API 对象的“标识”，即元数据，它也是我们从 Kubernetes 里找到这个对象的主要依据。这其中最主要使用到的字段是 Labels。 #Highlight #[[2023-06-07]]
- Labels 就是一组 key-value 格式的标签。而像 Deployment 这样的控制器对象，就可以通过这个 Labels 字段从 Kubernetes 中过滤出它所关心的被控制对象。 #Highlight #[[2023-06-07]]
- 在 Metadata 中，还有一个与 Labels 格式、层级完全相同的字段叫 Annotations，它专门用来携带 key-value 格式的内部信息。所谓内部信息，指的是对这些信息感兴趣的，是 Kubernetes 组件本身，而不是用户。所以大多数 Annotations，都是在 Kubernetes 运行过程中，被自动加在这个 API 对象上。 #Highlight #[[2023-06-07]]
- 一个 Kubernetes 的 API 对象的定义，大多可以分为 Metadata 和 Spec 两个部分。前者存放的是这个对象的元数据，对所有 API 对象来说，这一部分的字段和格式基本上是一样的；而后者存放的，则是属于这个对象独有的定义，用来描述它所要表达的功能。 #Highlight #[[2023-06-07]]
- 在命令行中，所有 key-value 格式的参数，都使用“=”而非“:”表示。 #Highlight #[[2023-06-07]]
- 在 Kubernetes 执行的过程中，对 API 对象的所有重要操作，都会被记录在这个对象的 Events 里，并且显示在 kubectl describe 指令返回的结果中。 #Highlight #[[2023-06-07]]
- 用户，你不必关心当前的操作是创建，还是更新，你执行的命令始终是 kubectl apply，而 Kubernetes 则会根据 YAML 文件的内容变化，自动进行具体的处理。 #Highlight #[[2023-06-07]]
- Kubernetes 的 emptyDir 类型，只是把 Kubernetes 创建的临时目录作为 Volume 的宿主机目录，交给了 Docker。这么做的原因，是 Kubernetes 不想依赖 Docker 自己创建的那个 _data 目录。 #Highlight #[[2023-06-07]]
- Kubernetes 里“最小”的 API 对象是 Pod。Pod 可以等价为一个应用，所以，Pod 可以由多个紧密协作的容器组成。 #Highlight #[[2023-06-07]]
- Kubernetes API 对象，往往由 Metadata 和 Spec 两部分组成，其中 Metadata 里的 Labels 字段是 Kubernetes 过滤对象的主要手段。 #Highlight #[[2023-06-07]]
- 在实际使用 Kubernetes 的过程中，相比于编写一个单独的 Pod 的 YAML 文件，我一定会推荐你使用一个 replicas=1 的 Deployment #Highlight #[[2023-06-07]]