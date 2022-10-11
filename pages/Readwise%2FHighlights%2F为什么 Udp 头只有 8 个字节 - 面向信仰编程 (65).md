title:: Readwise/Highlights/为什么 Udp 头只有 8 个字节 - 面向信仰编程 (65)
author:: [[draveness.me]]
full-title:: 为什么 Udp 头只有 8 个字节 - 面向信仰编程
category:: #articles
url:: https://draveness.me/draveness.me/whys-the-design-udp-minimum-header

- UDP 是能够传输数据的最简单的协议，它的协议首部（也称作协议头）只有 8 个字节 #Highlight #[[2022-07-16]]
- UDP 协议头中只包含 4 个字段，分别是源端口、目的端口、长度和校验码，其中每一个字段都占 16 比特，即 2 字节 #Highlight #[[2022-07-16]]
- 真正在主机间完成『数据传输』工作的是 IP 协议，UDP 协议只起到了定位具体进程的作用 #Highlight #[[2022-07-16]]
- IP 协议是 TCP/IP 协议栈的核心成员，它不保证端到端数据的可靠性和顺序，也不包含流控制等机制，其作用就是从来源向目的地传输数据包 #Highlight #[[2022-07-16]]
- 虽然 TCP 和 UDP 协议中都有端口号这一概念，但是因为它们两者的端口不在一个命名空间下（TCP 和 UDP 是两套命名空间），所以 TCP 和 UDP 可以同时使用相同的端口号，例如：53/TCP 和 53/UDP，这两个端口号后的服务都处理 DNS 请求。从这一点来看，只有通过 IP 地址、传输层协议和端口号三者才能在网络上定位到具体的服务，只凭借 IP 地址和端口号是不可行的。 #Highlight #[[2022-07-16]]