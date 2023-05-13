title:: Readwise/Highlights/17  | Hashicorp Raft（一）：如何跨过理论和代码之间的鸿沟？ - 分布式协议与算法实战
author:: [[韩健]]
full-title:: 17  | Hashicorp Raft（一）：如何跨过理论和代码之间的鸿沟？ - 分布式协议与算法实战
category:: #articles
url:: https://time.geekbang.org/column/article/213872

- 在不需要进行日志一致性检测，复制功能已正常运行的时候，开启了流水线复制模式，目标是在环境正常的情况下，提升日志复制性能，如果在日志复制过程中出错了，就进入 RPC 复制模式 #Highlight #[[2023-04-26]]
- 在初始状态下，集群中所有的节点都处于跟随者状态 #Highlight #[[2023-04-26]]
- 典型的领导者选举在本质上是节点状态的变更。具体到 Hashicorp Raft 源码中，领导者选举的入口函数 run()，在 raft.go 中以一个单独的协程运行，来实现节点状态变迁 #Highlight #[[2023-04-26]]