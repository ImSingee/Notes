title:: Readwise/Highlights/08 | Netty：如何优雅地处理网络读写，制定网络通信协议？ - 中间件核心技术与实战 (65)
author:: [[丁威]]
full-title:: 08 | Netty：如何优雅地处理网络读写，制定网络通信协议？ - 中间件核心技术与实战
category:: #articles
url:: https://time.geekbang.org/column/article/533590

- TCP 是全双工通信模型，任意一端都可以关闭接收或者写入，如果对端连接调用了关闭（半关闭），那么我们尝试从网络中读取字节时就会返回 -1 #Highlight #[[2022-08-04]]
- Netty 的线程模型采取的是业界的主流线程模型，也就是主从多 Reactor 模型 #Highlight #[[2022-08-04]]
- 网络编程中包含编码、解码、网络读取、业务逻辑等多个步骤，所以如何使用多线程提升并发度，合理处理多线程之间的高效协作就显得尤为重要 #Highlight #[[2022-08-04]]