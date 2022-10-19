title:: Readwise/Highlights/为什么 Https 需要 7 次握手以及 9 倍时延 - 面向信仰编程
author:: [[draveness.me]]
full-title:: 为什么 Https 需要 7 次握手以及 9 倍时延 - 面向信仰编程
category:: #articles
url:: https://draveness.me/draveness.me/whys-the-design-https-latency

- TCP 快启策略使用存储在客户端的 TFO Cookie 与服务端快速建立连接。TCP 连接的客户端向服务端发送 SYN 消息时会携带快启选项，服务端会生成一个 Cookie 并将其发送至客户端，客户端会缓存该 Cookie，当其与服务端重新建立连接时，它会使用存储的 Cookie 直接建立 TCP 连接，服务端验证 Cookie 后会向客户端发送 SYN 和 ACK 并开始传输数据，这也就能减少通信的次数。 #Highlight #[[2022-07-26]]
- HTTPS 协议需要 9 倍时延才能完成通信的原因：TCP 协议需要通过三次握手建立 TCP 连接保证通信的可靠性（1.5-RTT）；TLS 协议会在 TCP 协议之上通过四次握手建立 TLS 连接保证通信的安全性（2-RTT）；HTTP 协议会在 TCP 和 TLS 上通过一次往返发送请求并接收响应（1-RTT）； #Highlight #[[2022-07-26]]