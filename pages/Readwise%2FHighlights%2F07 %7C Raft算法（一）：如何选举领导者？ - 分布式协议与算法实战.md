title:: Readwise/Highlights/07 | Raft算法（一）：如何选举领导者？ - 分布式协议与算法实战
author:: [[韩健]]
full-title:: 07 | Raft算法（一）：如何选举领导者？ - 分布式协议与算法实战
category:: #articles
url:: https://time.geekbang.org/column/article/204472

- Raft 算法是通过一切以领导者为准的方式，实现一系列值的共识和各节点日志的一致。 #Highlight #[[2022-09-08]]
- Raft 算法属于 Multi-Paxos 算法，它是在兰伯特 Multi-Paxos 思想的基础上，做了一些简化和限制，比如增加了日志必须是连续的，只支持领导者、跟随者和候选人三种状态，在理解和算法实现上都相对容易许多。 #Highlight #[[2022-09-08]]