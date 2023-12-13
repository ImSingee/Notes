title:: Readwise/Highlights/用Rust实现的长连接方案
author:: [[juejin.cn]]
full-title:: 用Rust实现的长连接方案
category:: #articles
url:: https://juejin.cn/post/7171975224856936479
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- •   **SSE** ：Server Send Event 能满足服务端向客户端发送数据的需求，协议简单，但因为不是双工的数据通路后期无法实现 HTTP 的请求优化。
  •   **TCP** ：目前最主流的长连接协议，配合 TLS 1.3 可以做到很好的使用效果。
  •   **QUIC** ：本身握手和 TLS1.3 融合，还支持连接恢复，多Stream避免包头阻塞问题，有很多优势，因为基于UDP，可能会有部分特殊网络环境被禁止。
  •   **UDP** ：需要自己实现丢包重传，部分网络环境有可能被限制。
  •   **WebSocket** ：对浏览器友好，小程序唯一支持的双向收发 (全双工) 协议，很难做连接优化。 ([View Highlight](https://read.readwise.io/read/01hekth2zpb8dxk74zd7v7nwfw)) #Highlight #[[2023-11-07]]