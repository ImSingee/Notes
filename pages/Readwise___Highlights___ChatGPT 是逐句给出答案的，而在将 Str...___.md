title:: Readwise/Highlights/ChatGPT 是逐句给出答案的，而在将 Str...
author:: [[@mr_easonyang on Twitter]]
full-title:: ChatGPT 是逐句给出答案的，而在将 Str...
category:: #tweets
url:: https://twitter.com/mr_easonyang/status/1632407953889447937
- ChatGPT 是逐句给出答案的，而在将 stream 参数设置为 true 后 API 也可以实现和 ChatGPT 一样的流式返回，进而更快地给到用户反馈，同时也可以缓解连接超时。
  
  那这是怎么实现的呢？不同于更常见的 WebSocket，OpenAI 选择了使用 Server-sent events 来实现 https://t.co/HeEqUBtpn0🧵👇 ([View Tweet](https://twitter.com/mr_easonyang/status/1632407953889447937)) #Highlight #[[2023-03-06]]
- Server-sent events 与 WebSocket 主要有两大不同：
  
  首先前者在建连后只能由服务端单向发送数据至客户端，而后者是可以双向通信的；
  
  其次前者仍然是基于 HTTP 协议，而后者在不降级的情况下使用的是基于 TCP 的 WS 协议。
  
  我觉得本质上 SSE 是对传统长轮询的优化。👇 ([View Tweet](https://twitter.com/mr_easonyang/status/1632407956443774977)) #Highlight #[[2023-03-06]]
- SSE 的流程其实很简单，简化而言：
  
  首先是客户端请求时指定 Accept: text/event-stream header 做握手动作，服务端收到后回复 Content-Type: text/event-stream 和 Transfer-Encoding: chunked 两个 header 即完成订阅。
  
  随后服务端保持同一连接，以 data: 开头、\n\n 结尾逐步发送数据。👇 ([View Tweet](https://twitter.com/mr_easonyang/status/1632407958876479488)) #Highlight #[[2023-03-06]]
- 对于连接保活，则还是经典的由服务端发送空包或约定好的特定无意义数据做为 ping 动作。
  
  对于连接断开，通常客户端会尝试重连，服务端也可以通过向客户端发送 retry 命令来指定重连尝试周期。此外，服务端还可以选择维护一个 Last-Event-ID 字段，让客户端重连时带上，这样就可以做到消息续传了。👇 ([View Tweet](https://twitter.com/mr_easonyang/status/1632407961330126848)) #Highlight #[[2023-03-06]]
- 以上就是 SSE 的主要交互流程了，相比起需要处理众多边界场景的 WS ，他足以被称为轻量级方案。不过基于 HTTP 也就意味着可靠性会不如 WS 这种定向设计的应用协议，而单向传输也限定了其使用场景和扩展性。
  
  这里有一份更偏向协议解释的原始标准文档，可以补充阅读 https://t.co/VoASaRg6M5 (the end) ([View Tweet](https://twitter.com/mr_easonyang/status/1632407963695738881)) #Highlight #[[2023-03-06]]