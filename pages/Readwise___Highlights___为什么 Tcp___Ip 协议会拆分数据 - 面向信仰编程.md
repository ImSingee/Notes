title:: Readwise/Highlights/为什么 Tcp/Ip 协议会拆分数据 - 面向信仰编程
author:: [[draveness.me]]
full-title:: 为什么 Tcp/Ip 协议会拆分数据 - 面向信仰编程
category:: #articles
url:: https://draveness.me/draveness.me/whys-the-design-tcp-segment-ip-packet

- IP 协议会分片传输过大的数据包（Packet）避免物理设备的限制；TCP 协议会分段传输过大的数据段（Segment）保证传输的性能； #Highlight #[[2022-07-24]]
- IP 数据包的大小上限，即最大传输单元（Maximum transmission unit，即 MTU），MTU 是 IP 数据包能够传输的数据上限 #Highlight #[[2022-07-24]]
- MTU 的值不是越大越好，更大的 MTU 意味着更低的额外开销，更小的 MTU 意味着更低的网络延迟。每一个物理设备都有自己的 MTU，两个主机之间的 MTU 依赖于底层的网络能力，它由整个链路上 MTU 最小的物理设备决定 #Highlight #[[2022-07-24]]
- 路径最大传输单元发现（Path MTU Discovery，PMTUD）是用来确定两个主机传输路径 MTU 的机制 #Highlight #[[2022-07-24]]
- ICMP 是互联网控制消息协议（Internet Control Message Protocol，ICMP），它能在 IP 主机之间传递控制消息 #Highlight #[[2022-07-24]]
- 以太网对数据帧的限制一般都是 1500 字节6，在一般情况下，IP 主机的路径 MTU 都是 1500，去掉 IP 首部的 20 字节，如果待传输的数据大于 1480 节，那么该 IP 协议就会将数据包分片传输 #Highlight #[[2022-07-24]]
- 数据的接收方在收到数据包时会对分片的数据进行重组，不过因为第二个数据包中不包含 UDP 协议的相关信息，一旦发生丢包，整个 UDP 数据报就无法重新拼装。如果 UDP 数据报需要传输的数据过多，那么 IP 协议就会大量分片，增加了不稳定性 #Highlight #[[2022-07-24]]
- TCP 协议引入了最大分段大小（Maximum segment size，MSS）这一概念，它是 TCP 数据段能够携带的数据上限8。在正常情况下，TCP 连接的 MSS 是 MTU - 40 字节9，即 1460 字节；不过如果通信双方没有指定 MSS 的话，在默认情况下 MSS 的大小是 536 字节 #Highlight #[[2022-07-24]]
- IP 协议的 MTU 是物理设备上的限制，它限制了路径能够发送数据包的上限，而 TCP 协议的 MSS 是操作系统内核层面的限制，通信双方会在三次握手11时确定这次连接的 MSS。一旦确定了 MSS，TCP 协议就会对应用层交给 TCP 协议发送的数据进行拆分，构成多个数据段 #Highlight #[[2022-07-24]]
- IP 协议和 TCP 协议虽然都会对数据进行拆分，但是 IP 协议以数据包（Package）为单位组织数据，而 TCP 协议以数据段（Segment）为单位组织数据 #Highlight #[[2022-07-24]]
- TCP 协议为了保证可靠性，会通过 IP 协议的 MTU 计算出 MSS 并根据 MSS 分段避免 IP 协议对数据包进行分片。因为 IP 协议对数据包的分片对上层是透明的，如果协议不根据 MTU 做一些限制，那么 IP 协议的分片会导致部分数据包失去传输层协议头，一旦数据包发生丢失就只能丢弃全部数据 #Highlight #[[2022-07-24]]
- TCP 协议为了保证可靠性，会通过 IP 协议的 MTU 计算出 MSS 并根据 MSS 分段避免 IP 协议对数据包进行分片 #Highlight #[[2022-07-24]]