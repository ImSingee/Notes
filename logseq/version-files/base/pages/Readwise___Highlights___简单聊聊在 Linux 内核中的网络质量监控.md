title:: Readwise/Highlights/简单聊聊在 Linux 内核中的网络质量监控
author:: [[manjusaka.blog]]
full-title:: 简单聊聊在 Linux 内核中的网络质量监控
category:: #articles
url:: https://www.manjusaka.blog/posts/2022/01/31/a-simple-introduction-about-network-monitoring-in-linux-kernel/index.html

- 随着技术的发展，大家对于服务的稳定性要求越来越高，而保证服务质量的前提就是有着合格的监控的覆盖面（阿里对于服务稳定性的要求叫做 “1-5-10” 即，一分钟发现，五分钟处理，十分钟自愈，而这样一个对于稳定性的要求没有足够的覆盖面的监控的话，那么一切等于圈圈）。而在这其中，网络质量的监控是重中之重 #Highlight #[[2023-10-30]]
- 在讨论网络质量的监控之前，我们需要来明确网络质量这个定义的覆盖范围。
  
  网络链路上的异常情况
  服务端网络的处理能力 #Highlight #[[2023-10-30]]
- 在 /proc/net/tcp 中，我们可以获取到内核吐出的 Metric，现在包括这样一些
  
  连接状态
  本地端口，地址
  远程端口，地址
  接收队列长度
  发送队列长度
  慢启动阈值
  RTO 值
  连接所属的 socket 的 inode id
  uid
  delay ack 软时钟 #Highlight #[[2023-10-30]]
- 内核已经明确不推荐使用 proc_net_tcp.txt5，换句话说，并不保证未来的兼容性与维护 #Highlight #[[2023-10-30]]
- 内核已经明确不推荐使用 proc_net_tcp.txt5，换句话说，并不保证未来的兼容性与维护
  
  那么推荐的做法是什么呢？答案是 netlink+sock_diag #Highlight #[[2023-10-30]]
- netlink6 是 Linux 2.2 引入的一种 Kernel Space 与 User Space 进行通信的机制，最早由 RFC35497 提出 #Highlight #[[2023-10-30]]
- 可以利用 sock_diag7 来获取不同 socket 的连接状态及相应的指标 #Highlight #[[2023-10-30]]
- 如果要在具体的比如重传，connection reset 等事件发生的时候，直接触发我们的调用。看过我之前博客的同学，可能第一时间考虑使用 eBPF + kprobe 的组合，在一些诸如 tcp_reset ，tcp_retransmit_skb 之类的关键调用上打点来获取实时的数据。Sounds good！
  不过实际上还是有一些小小的问题
  
  kprobe 的开销在高频的情况下，相对来说会比较大一些
  如果我们仅仅需要一些诸如 source_address, dest_address, source_port, dest_port 之类的信息，我们直接走 kprobe 拿完整地 skb 再来 cast 属实有点浪费 #Highlight #[[2023-10-30]]
- 在 Linux 中，对于一系列的类似我们需求这样的特殊事件的触发与回调的场景，有一套基础设施叫做 Tracepoint9。这套设施，能够很好的帮我们处理监听事件并回调的需求。而在 Linux 4.15 以及 4.16 之后，Linux 新增了 6 个 tcp 相关的 Tracepoint9
  分别是
  
  tcp:tcp_destroy_sock
  tcp:tcp_probe
  tcp:tcp_receive_reset
  tcp:tcp_retransmit_skb
  tcp:tcp_retransmit_synack
  tcp:tcp_send_reset #Highlight #[[2023-10-30]]