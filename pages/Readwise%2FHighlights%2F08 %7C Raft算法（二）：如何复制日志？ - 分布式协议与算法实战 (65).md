title:: Readwise/Highlights/08 | Raft算法（二）：如何复制日志？ - 分布式协议与算法实战 (65)
author:: [[韩健]]
full-title:: 08 | Raft算法（二）：如何复制日志？ - 分布式协议与算法实战
category:: #articles
url:: https://time.geekbang.org/column/article/205784

- 在 Raft 算法中，副本数据是以日志的形式存在的，领导者接收到来自客户端写请求后，处理写请求的过程就是一个复制和应用（Apply）日志项到状态机的过程。 #Highlight #[[2022-09-08]]