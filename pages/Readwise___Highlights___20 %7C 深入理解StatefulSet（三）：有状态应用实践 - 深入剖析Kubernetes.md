title:: Readwise/Highlights/20 | 深入理解StatefulSet（三）：有状态应用实践 - 深入剖析Kubernetes
author:: [[张磊]]
full-title:: 20 | 深入理解StatefulSet（三）：有状态应用实践 - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/41217
- 部署这样一个主从模式的 MySQL 集群的主要难点在于：如何让从节点能够拥有主节点的数据，即：如何配置主（Master）从（Slave）节点的复制与同步 #Highlight #[[2023-06-09]]
- 将部署 MySQL 集群的流程迁移到 Kubernetes 项目上，需要能够“容器化”地解决下面的“三座大山”：
  Master 节点和 Slave 节点需要有不同的配置文件（即：不同的 my.cnf）；
  Master 节点和 Slave 节点需要能够传输备份信息文件；
  在 Slave 节点第一次启动之前，需要执行一些初始化 SQL 操作； #Highlight #[[2023-06-09]]
- 需要注意的是：Pod 里的容器并没有先后顺序 #Highlight #[[2023-06-09]]
- StorageClass 来完成这个操作。它的作用，是自动地为集群里存在的每一个 PVC，调用存储插件（Rook）创建对应的 PV，从而省去了我们手动创建 PV 的机械劳动 #Highlight #[[2023-06-09]]
- StatefulSet 其实是一种特殊的 Deployment，只不过这个“Deployment”的每个 Pod 实例的名字里，都携带了一个唯一并且固定的编号。这个编号的顺序，固定了 Pod 的拓扑关系；这个编号对应的 DNS 记录，固定了 Pod 的访问方式；这个编号对应的 PV，绑定了 Pod 与持久化存储的关系。所以，当 Pod 被删除重建时，这些“状态”都会保持不变。 #Highlight #[[2023-06-09]]