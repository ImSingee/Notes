title:: Readwise/Highlights/为什么 Redis 选择单线程模型 - 面向信仰编程
author:: [[draveness.me]]
full-title:: 为什么 Redis 选择单线程模型 - 面向信仰编程
category:: #articles
url:: https://draveness.me/draveness.me/whys-the-design-redis-single-thread

- 在较新的版本中引入了多线程，不过是在部分命令上引入的，其中包括非阻塞的删除操作，在整体的架构设计上，主处理程序还是单线程模型的 #Highlight #[[2022-07-26]]
- Redis 并不是 CPU 密集型的服务，如果不开启 AOF 备份，所有 Redis 的操作都会在内存中完成不会涉及任何的 I/O 操作，这些数据的读写由于只发生在内存中，所以处理速度是非常快的；整个服务的瓶颈在于网络传输带来的延迟和等待客户端的数据传输，也就是网络 I/O，所以使用多线程模型处理全部的外部请求可能不是一个好的方案 #Highlight #[[2022-07-26]]
- UNLINK 命令的实现原理，它只会将键从元数据中删除，真正的删除操作会在后台异步执行 #Highlight #[[2022-07-26]]