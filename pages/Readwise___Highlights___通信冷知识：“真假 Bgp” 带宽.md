title:: Readwise/Highlights/通信冷知识：“真假 Bgp” 带宽
author:: [[人见人爱的雷蒙德]]
full-title:: 通信冷知识：“真假 Bgp” 带宽
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MzUyMDA1NDQwNw==&mid=2247483944&idx=1&sn=7297314a7e887288b409902dc3b97b75&chksm=f9f171c0ce86f8d6f00a334dea6dfebe652dd50c99f56aac483f5428abb7066cf2c839f98e30#rd
tags:: #[[知拾收藏]]

- 理论上讲，就一家中立的 ISP（Internet Service Provider） 而言，**其互联的 BGP 的出口（Peer）越多，它的网络的通达性和可靠性就越高**，其用户所获得的网络品质就越好 ([View Highlight](https://read.readwise.io/read/01h24z19qgace0d3qxa0mg2n68)) #Highlight #[[2023-06-05]]
- 互联网 BGP 带宽接入（IP Transit）中的三个重要概念，分别是**非穿透**、****部分穿透****和**全穿透** ([View Highlight](https://read.readwise.io/read/01h24z1m5jr66jkn4400x2eewz)) #Highlight #[[2023-06-05]]
- “真 BGP” 带宽，指的 ISP 所有的上连网络带宽均为全穿透，**即****该 ISP 从每一个上连网络收到的都是全网路由**（可以通俗地理解为，每个上连网络都可以承载前往互联网任保何部分的流量）。如此一来，假设其中一个上连网络出现故障，其余的上连网络能够自动起到备份的作用，这对互联网接入用户而言几乎是无感的。而正常情况下，ISP 的互联网流量会根据 BGP 的策略，从多个上连网络中择优选路 ([View Highlight](https://read.readwise.io/read/01h24z3wmawk12pvfd02b53b38)) #Highlight #[[2023-06-05]]
- 与 “真 BGP” 带宽相对，“假 BGP” 带宽上连网络带宽均为非穿透或部分穿透，**即****该 ISP 从单个上连网络收到的并非全网路由，而是一部分路由**（可以通俗地理解为，每个上连网络各司其职，只负责承载前往互联网某一部分的流量）。如此一来，假设其中一个上连网络出现故障，那么去往该上连网络的流量将受到影响，因为其余的上连网络无法起到备份的作用。 ([View Highlight](https://read.readwise.io/read/01h24z478qh5k5a8aqpbkbxkt3)) #Highlight #[[2023-06-05]]