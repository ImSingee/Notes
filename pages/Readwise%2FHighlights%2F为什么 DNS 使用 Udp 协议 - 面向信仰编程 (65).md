title:: Readwise/Highlights/为什么 DNS 使用 Udp 协议 - 面向信仰编程 (65)
author:: [[draveness.me]]
full-title:: 为什么 DNS 使用 Udp 协议 - 面向信仰编程
category:: #articles
url:: https://draveness.me/draveness.me/whys-the-design-dns-udp-tcp

- UDP 协议携带的消息不应该超过 512 字节，超过的消息会被截断并设置 DNS 协议的 TC 位 #Highlight #[[2022-07-14]]
- 解析器和命名服务需要使用 TCP 协议作为 UDP 无法满足需求时的备份 #Highlight #[[2022-07-14]]
- 使用 UDP 进行传输的 DNS 查询和响应最大不能超过 512 字节，不能支持大量 IPv6 地址或者 DNS 安全签名等记录的传输；EDNS 为 DNS 提供了扩展功能，让 DNS 通过 UDP 协议携带最多 4096 字节的数据； #Highlight #[[2022-07-14]]
- RFC7766 才终于提出了使用 TCP 协议作为主要协议来解决 UDP 无法解决的问题，TCP 协议也不再只是一种重试时使用的机制，随后出现的 DNS over TLS 和 DNS over HTTP 也都是对 DNS 协议的一种补充 #Highlight #[[2022-07-14]]
- 从理论上来说，一个 UDP 数据包的大小最多可以达到 64KB #Highlight #[[2022-07-14]]
- 在实际生产中，一旦数据包中的数据超过了传送链路的最大传输单元（MTU，也就是单个数据包大小的上限，一般为 1500 字节），当前数据包就可能会被分片传输、丢弃，部分的网络设备甚至会直接拒绝处理包含 EDNS(0) 选项的请求 #Highlight #[[2022-07-14]]