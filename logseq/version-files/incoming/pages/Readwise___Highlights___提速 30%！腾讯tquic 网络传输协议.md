title:: Readwise/Highlights/提速 30%！腾讯tquic 网络传输协议
author:: [[sTGW-QUIC]]
full-title:: 提速 30%！腾讯tquic 网络传输协议
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MjM5ODYwMjI2MA==&mid=2649765817&idx=1&sn=2eeb275c0200f6469c0b22c2eca62d08&chksm=becca4c289bb2dd4b3972c3a830c1c76d7b82e1a8d09edb6ce3a7f350d0ab1e663e320765b55#rd
tags:: #[[inoreader]] #[[star]] #[[微信公众号]]  
![](http://mmbiz.qpic.cn/mmbiz_jpg/j3gficicyOvave0aU9VPsdSd9KFWjGQoIRKHRribHOzt2oAvmn7z67dIcq567vh8aTwul9ygQKQLogeDHbn2fPdKw/0?wx_fmt=jpeg)
微信号 Tencent_TEG 功能介绍 腾讯技术官方号。腾讯技术创新、前沿领域发布解读平台。 作者：腾讯 sTGW-TQUIC腾讯sTGW如何助力核心业务用户登录耗时降低30%，下载场景500ms内请求成功率从HTTPS的60%提升到90%，移动端APP在弱网、跨网
- 相比于 HTTP/2 的多路复用，QUIC 不会受到队头阻塞的影响，各个流更独立，多路复用的效果也更好。 ([View Highlight](https://read.readwise.io/read/01hpf9bj02jvrfezkkkpk1zqa1)) #Highlight #[[2024-02-13]]
- 跟 TCP 用四元组标识一个唯一连接不同，QUIC 使用一个 64 位的 ConnectionID 来标识连接，基于这个特点，QUIC 的使用连接迁移机制，在四元组发生变化时（比如客户端从 WIFI 切换到蜂窝网络），尝试“保留”先前的连接，从而维持数据传输不中断。 ([View Highlight](https://read.readwise.io/read/01hpf9byhy6ccxhwmgj88053z7)) #Highlight #[[2024-02-13]]
- QUIC 核心逻辑都在用户态，能灵活的修改连接参数、替换拥塞算法、更改传输行为。而 TCP 核心实现在内核态，改造需要修改内核并且进行系统重启，成本极高。 ([View Highlight](https://read.readwise.io/read/01hpf9c7mpkfjkkaef1dv3frxx)) #Highlight #[[2024-02-13]]