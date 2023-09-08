title:: Readwise/Highlights/27 | 聪明的微创新：Operator工作原理解读 - 深入剖析Kubernetes
author:: [[张磊]]
full-title:: 27 | 聪明的微创新：Operator工作原理解读 - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/42493

- 在 Kubernetes 中，管理“有状态应用”是一个比较复杂的过程，尤其是编写 Pod 模板的时候，总有一种“在 YAML 文件里编程序”的感觉，让人很不舒服。
  而在 Kubernetes 生态中，还有一个相对更加灵活和编程友好的管理“有状态应用”的解决方案，它就是：Operator。 #Highlight #[[2023-06-13]]
- Operator 的工作原理，实际上是利用了 Kubernetes 的自定义 API 资源（CRD），来描述我们想要部署的“有状态应用”；然后在自定义控制器里，根据自定义 API 对象的变化，来完成具体的部署和运维工作。 #Highlight #[[2023-06-13]]
- Etcd Operator 部署 Etcd 集群，采用的是静态集群（Static）的方式。
  静态集群的好处是，它不必依赖于一个额外的服务发现机制来组建集群，非常适合本地容器化部署。而它的难点，则在于你必须在部署的时候，就规划好这个集群的拓扑结构，并且能够知道这些节点固定的 IP 地址 #Highlight #[[2023-06-13]]