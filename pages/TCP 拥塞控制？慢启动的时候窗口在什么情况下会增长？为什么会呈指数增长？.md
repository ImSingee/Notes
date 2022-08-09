- #CruelFundamental #[[2022-08-09]] #计算机网络 #TCP
- 拥塞控制是一个网络全局的概念，担心的是网络拥堵造成包丢失而需要不停的重传。
- 在不引入拥塞控制时，只存在接收窗口 rwnd 和发送窗口 swnd（swnd 随 rwnd 变化而变化）。而引入了拥塞控制后增加了一个拥塞窗口，swnd 被计算为 cwnd 与 rwnd 的最小值。
- ![Replaced by Image Uploader](https://vip2.loli.io/2022/08/09/Ns9plHFoUZVb54q.png)
- 拥塞控制主要由四个算法组成：慢启动（Slow Start）、拥塞避免（Congestion voidance）、快速重传 （Fast Retransmit）、快速恢复（Fast Recovery）
	- **慢启动**：初始的 cwnd 大小（IW，Initial Window ）在现代 Linux 系统中默认为 10 * [[MSS]]，每当发送成功便将之翻倍，称为指数增长。
	- **拥塞避免**：拥塞避免包括两个部分：加法增大和乘法减小。有一个初始预定义的 ssthresh（Slow Start Thresh 慢启动阈值），当慢启动到 ssthresh 后转为线性增长（具体公式为  `cwnd+= smss*smss/cwnd` ），直到丢包以后又重新恢复至原来的慢启动，并将 ssthresh 修改为拥塞时 cwnd 的一半。
	- **快速重传**：接收方收到一个失序数据段后立刻发送它所期待的缺口 ACK 序列号而接收到缺口序列号后立刻发送它所期待的下一个 ACK 序列号；发送方在接收到 3 个重复的失序 ACK（即 4 个相同的 ACK 段）后不再等待 RTO 到达而是立刻重发缺少的报文段。
	- **快速恢复**：启动快速重传且正常未失序 ACK 段到达前启动快速恢复（因为这种情况意味着整体的网络环境还是通的）。将 ssthresh 设定为 cwnd 一半后将 cwnd 设定为 ssthresh+3MSS，之后每收到一个重复 ACK 则将 cwnd 增加 1MSS，一直到不重复的新数据 ACK 到达后将 cwnd 重新减少为之前设定的 ssthresh。
### 基于带宽测量的 BBR 拥塞控制算法

传统的拥塞控制是基于丢包实现的，而 Google 的 BBR 是基于测量 RTT 进行实现，Linux 4.9 内核引入。

**基于丢包的拥塞控制点**
- 高时延，大量丢包
- 随着内存便宜，路由器队列扩大，时延更高
  
  **最佳控制点**
- 最大带宽下
- 最小时延
- 最低丢包率
  
  **想要满足最佳控制点的问题**：RTT 与带宽 Bw 独立变化，同时只有一个可以被准确测量