title:: Readwise/Highlights/06 | Paxos算法（二）：Multi-Paxos不是一个算法，而是统称 - 分布式协议与算法实战 (65)
author:: [[韩健]]
full-title:: 06 | Paxos算法（二）：Multi-Paxos不是一个算法，而是统称 - 分布式协议与算法实战
category:: #articles
url:: https://time.geekbang.org/column/article/202772

- 兰伯特提到的 Multi-Paxos 是一种思想，不是算法，而且还缺少算法过程的细节和编程所必须的细节，比如如何选举领导者等，这也就导致了每个人实现的 Multi-Paxos 都不一样。而 Multi-Paxos 算法是一个统称，它是指基于 Multi-Paxos 思想，通过多个 Basic Paxos 实例实现一系列数据的共识的算法（比如 Chubby 的 Multi-Paxos 实现、Raft 算法等）。 #Highlight #[[2022-09-08]]
- 我想补充一点：在 Chubby 中，为了实现了强一致性，读操作也只能在主节点上执行。 也就是说，只要数据写入成功，之后所有的客户端读到的数据都是一致的。 #Highlight #[[2022-09-08]]