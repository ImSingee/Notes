title:: Readwise/Highlights/字节一面：如何用 Udp 实现可靠传输？
author:: [[小林coding]]
full-title:: 字节一面：如何用 Udp 实现可靠传输？
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MzUxODAzNDg4NQ==&mid=2247511643&idx=1&sn=7f1b66c4e0050985190c667c968f3915&chksm=f98deaf1cefa63e711663a1f1d65880e6d22020f8125145d1ca243b87032bcabb3f4d9400b66#rd
tags:: #[[inoreader]] #[[star]] #[[微信公众号]]  
![](http://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZfegNsx0OLH9HjxgiaKardas9NTvlriaY9GDGg9wVBgwkQgQazrk75iaW88j6C5Aic0G5wVXfkRmuqvoQ/0?wx_fmt=jpeg)
功能介绍 专注图解计算机基础，让天下没有难懂的八股文！刷题网站：xiaolincoding.com 我记得之前在群里看到，有位读者字节一面的时候被问到：「如何基于 UDP 协议实现可靠传输？」
- TCP 协议四个方面的缺陷：
  
  •   升级 TCP 的工作很困难；
    
  •   TCP 建立连接的延迟；
    
  •   TCP 存在队头阻塞问题；
    
  •   网络迁移需要重新建立 TCP 连接； ([View Highlight](https://read.readwise.io/read/01hpkbtsag0j14grcbvtj2x994)) #Highlight #[[2024-02-14]]
- QUIC 也是需要三次握手来建立连接的，主要目的是为了确定连接 ID。
  
  建立连接时，连接 ID 是由服务器根据客户端的 Source Connection ID 字段生成的，这样后续传输时，双方只需要固定住 Destination Connection ID（连接 ID ），从而实现连接迁移功能。所以，你可以看到日常传输数据的 Short Packet Header 不需要在传输 Source Connection ID 字段了。 ([View Highlight](https://read.readwise.io/read/01hpkbvpr5p8grt0qcz8mea49j)) #Highlight #[[2024-02-14]]
- QUIC 报文中的 Pakcet Number 是严格递增的， 即使是重传报文，它的 Pakcet Number 也是递增的，这样就能更加精确计算出报文的 RTT。 ([View Highlight](https://read.readwise.io/read/01hpkbwptyz5kg8210w891epn2)) #Highlight #[[2024-02-14]]
- **QUIC 使用的 Packet Number 单调递增的设计，可以让数据包不再像TCP 那样必须有序确认，QUIC 支持乱序确认，当数据包Packet N 丢失后，只要有新的已接收数据包确认，当前窗口就会继续向右滑动**。 ([View Highlight](https://read.readwise.io/read/01hpkbwzatjmwczb6b0hmnde6k)) #Highlight #[[2024-02-14]]
- QUIC 实现了两种级别的流量控制，分别为 Stream 和 Connection 两种级别：
  
  •   **Stream 级别的流量控制**：每个 Stream 都有独立的滑动窗口，所以每个 Stream 都可以做流量控制，防止单个 Stream 消耗连接（Connection）的全部接收缓冲。
    
  •   **Connection 流量控制**：限制连接中所有 Stream 相加起来的总字节数，防止发送方超过连接的缓冲容量。 ([View Highlight](https://read.readwise.io/read/01hpkbykf5m2m96fxq342jna8y)) #Highlight #[[2024-02-14]]