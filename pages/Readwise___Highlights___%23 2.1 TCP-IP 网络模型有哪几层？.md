title:: Readwise/Highlights/# 2.1 TCP-IP 网络模型有哪几层？
author:: [[小林coding]]
full-title:: \# 2.1 TCP/IP 网络模型有哪几层？
category:: #articles
url:: https://xiaolincoding.com/network/1_base/tcp_ip_model.html#%E7%BD%91%E7%BB%9C%E5%B1%82

- 在寻址的过程中，先匹配到相同的网络号（表示要找到同一个子网），才会去找对应的主机。
  
  除了寻址能力， IP 协议还有另一个重要的能力就是**路由**。实际场景中，两台设备并不是用一条网线连接起来的，而是通过很多网关、路由器、交换机等众多网络设备连接起来的，那么就会形成很多条网络的路径，因此当数据包到达一个网络节点，就需要通过路由算法决定下一步走哪条路径。
  
  路由器寻址工作中，就是要找到目标地址的子网，找到后进而把数据包转发给对应的网络内。 ([View Highlight](https://read.readwise.io/read/01h77m82rj3es3ndw5jv9sw7e3)) #Highlight #[[2023-08-07]]
- 网络接口层主要为网络层提供「链路级别」传输的服务，负责在以太网、WiFi 这样的底层网络上发送原始数据包，工作在网卡这个层次，使用 MAC 地址来标识网络上的设备。
  
  [#](https://xiaolincoding.com/network/1_base/tcp_ip_model.html#总结) ([View Highlight](https://read.readwise.io/read/01h77maf7w7aq02ewwyyqyvf78)) #Highlight #[[2023-08-07]]
- 网络接口层的传输单位是帧（frame），IP 层的传输单位是包（packet），TCP 层的传输单位是段（segment），HTTP 的传输单位则是消息或报文（message）。但这些名词并没有什么本质的区分，可以统称为数据包。 ([View Highlight](https://read.readwise.io/read/01h77mazehetnj2y7dqq09m1x5)) #Highlight #[[2023-08-07]]