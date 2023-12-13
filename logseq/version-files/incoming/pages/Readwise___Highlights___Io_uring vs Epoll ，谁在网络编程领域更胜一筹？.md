title:: Readwise/Highlights/Io_uring vs Epoll ，谁在网络编程领域更胜一筹？
author:: [[juejin.cn]]
full-title:: Io_uring vs Epoll ，谁在网络编程领域更胜一筹？
category:: #articles
url:: https://juejin.cn/post/7045098217121251335

![](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)
- io_uring 在传统存储 io 场景已经证明其价值，但 io_uring 不仅支持传统存储 io，也支持网络 io ([View Highlight](https://read.readwise.io/read/01hhecxasc0vwptxw44frgrfez)) #Highlight #[[2023-12-12]]
- 在 io_uring 社区，关于 io_uring 和 epoll 孰优孰劣也一直存在争论，有些开发者宣称 io_uring 可以获得比 epoll 更好的性能，有些开发者则宣称二者性能持平或者 io_uring 甚至不如 epoll。 ([View Highlight](https://read.readwise.io/read/01hhecxhx4z54awkds0ssxe1s0)) #Highlight #[[2023-12-12]]
- epoll 采用 send(2) 和 recv(2) 进行数据的读写操作；而 io_uring 采用 IORING_OP_SEND 和 IORING_OP_RECV 进行数据的读写操作 ([View Highlight](https://read.readwise.io/read/01hhecyvgx92w04thjscs8tne0)) #Highlight #[[2023-12-12]]
- 结合 echo server 的模型，我们分析有四个因素会影响 io_uring 和 epoll 的性能，分别是：
  
  1、系统调用用户态到内核态上下文切换开销，记为 **s**；
  
  2、系统调用自身内核态工作逻辑开销，记为 **w**；
  
  3、io_uring 框架本身开销，记为 **o**；
  
  4、io_uring 的 batch 量，记为 **n**，epoll 版 echo server 由于直接调用 recv(2) 和 send(2), 其 batch 实际为 1。 ([View Highlight](https://read.readwise.io/read/01hhecza21bxwc83am4t0500ef)) #Highlight #[[2023-12-12]]