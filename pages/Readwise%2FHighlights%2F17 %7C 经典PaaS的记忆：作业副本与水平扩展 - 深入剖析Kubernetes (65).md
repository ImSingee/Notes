title:: Readwise/Highlights/17 | 经典PaaS的记忆：作业副本与水平扩展 - 深入剖析Kubernetes (65)
author:: [[张磊]]
full-title:: 17 | 经典PaaS的记忆：作业副本与水平扩展 - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/40906

- maxSurge 指定的是除了 DESIRED 数量之外，在一次“滚动”中，Deployment 控制器还可以创建多少个新 Pod；而 maxUnavailable 指的是，在一次“滚动”中，Deployment 控制器可以删除多少个旧 Pod。 #Highlight #[[2022-08-12]]
- ReplicaSet 的 DESIRED、CURRENT 和 READY 字段的含义，和 Deployment 中是一致的。所以，相比之下，Deployment 只是在 ReplicaSet 的基础上，添加了 UP-TO-DATE 这个跟版本有关的状态字段。 #Highlight #[[2022-08-12]]
- 在用户提交了一个 Deployment 对象后，Deployment Controller 就会立即创建一个 Pod 副本个数为 3 的 ReplicaSet。这个 ReplicaSet 的名字，则是由 Deployment 的名字和一个随机字符串共同组成。 #Highlight #[[2022-08-12]]
- AVAILABLE：当前已经可用的 Pod 的个数，即：既是 Running 状态，又是最新版本，并且已经处于 Ready（健康检查正确）状态的 Pod 的个数。 #Highlight #[[2022-08-12]]
- Deployment 控制器实际操纵的，正是这样的 ReplicaSet 对象，而不是 Pod 对象。 #Highlight #[[2022-08-12]]
- 一个 ReplicaSet 对象，其实就是由副本数目的定义和一个 Pod 模板组成的。不难发现，它的定义其实是 Deployment 的一个子集。 #Highlight #[[2022-08-12]]
- Deployment 看似简单，但实际上，它实现了 Kubernetes 项目中一个非常重要的功能：Pod 的“水平扩展 / 收缩”（horizontal scaling out/in）。这个功能，是从 PaaS 时代开始，一个平台级项目就必须具备的编排能力。 #Highlight #[[2022-08-12]]
- Deployment 实际上是一个两层控制器。首先，它通过 ReplicaSet 的个数来描述应用的版本；然后，它再通过 ReplicaSet 的属性（比如 replicas 的值），来保证 Pod 的副本数量。 #Highlight #[[2022-08-12]]