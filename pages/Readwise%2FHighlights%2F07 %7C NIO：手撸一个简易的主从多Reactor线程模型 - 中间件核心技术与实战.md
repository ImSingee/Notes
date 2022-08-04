title:: Readwise/Highlights/07 | NIO：手撸一个简易的主从多Reactor线程模型 - 中间件核心技术与实战
author:: [[丁威]]
full-title:: 07 | NIO：手撸一个简易的主从多Reactor线程模型 - 中间件核心技术与实战
category:: #articles
url:: https://time.geekbang.org/column/article/532729

- 我们为了保证数据库服务端的可用性，通常需要强制限制客户端能使用的连接数量。这就注定了数据库客户端没有需要支持大量连接的诉求，在这个场景下，客户端使用阻塞型 IO 对保护数据库服务端更有优势。 #Highlight #[[2022-08-04]]
- 基于 NIO，在业界有一种标准的线程模型 Reactor #Highlight #[[2022-08-04]]
- BIO 领域一种经典的设计范式是每个请求对应一个线程。 #Highlight #[[2022-08-04]]
- 在编写网络通信相关的功能模块时，建立一套线程模型是非常重要的一环，经过各位前辈不断的实践，Reactor 线程模型已成为 NIO 领域的事实标准，无论是网络编程类库 NIO，还是 Kafka、Dubbo 等主流中间件的底层网络模型都是直接或间接受到了 Reactor 模型的影响。 #Highlight #[[2022-08-04]]