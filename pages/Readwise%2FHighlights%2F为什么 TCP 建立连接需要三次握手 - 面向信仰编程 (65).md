title:: Readwise/Highlights/为什么 TCP 建立连接需要三次握手 - 面向信仰编程 (65)
author:: [[draveness.me]]
full-title:: 为什么 TCP 建立连接需要三次握手 - 面向信仰编程
category:: #articles
url:: https://draveness.me/draveness.me/whys-the-design-tcp-three-way-handshake

- RFC 793 - Transmission Control Protocol 文档中非常清楚地定义了 TCP 中的连接是什么，我们简单总结一下：用于保证可靠性和流控制机制的信息，包括 Socket、序列号以及窗口大小叫做连接。 #Highlight #[[2022-07-26]]
- 连接中的一对 Socket 是由互联网地址标志符和端口组成的，窗口大小主要用来做流控制，最后的序列号是用来追踪通信发起方发送的数据包序号，接收方可以通过序列号向发送方确认某个数据包的成功接收。 #Highlight #[[2022-07-26]]
- 『两次握手』：无法避免历史错误连接的初始化，浪费接收方的资源； #Highlight #[[2022-07-26]]