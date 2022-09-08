title:: Readwise/Highlights/05 | Paxos算法（一）：如何在多个节点间确定某变量的值？ - 分布式协议与算法实战
author:: [[韩健]]
full-title:: 05 | Paxos算法（一）：如何在多个节点间确定某变量的值？ - 分布式协议与算法实战
category:: #articles
url:: https://time.geekbang.org/column/article/201700

- 兰伯特提出的 Paxos 算法包含 2 个部分：
  一个是 Basic Paxos 算法，描述的是多节点之间如何就某个值（提案 Value）达成共识；
  另一个是 Multi-Paxos 思想，描述的是执行多个 Basic Paxos 实例，就一系列值达成共识。 #Highlight #[[2022-09-08]]