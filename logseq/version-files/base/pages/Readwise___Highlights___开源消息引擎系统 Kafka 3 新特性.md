title:: Readwise/Highlights/开源消息引擎系统 Kafka 3 新特性
author:: [[屈志平]]
full-title:: 开源消息引擎系统 Kafka 3 新特性
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MjM5ODYwMjI2MA==&mid=2649770210&idx=1&sn=5fe3cf70e9860583e37e9c93c7c69963&chksm=beccdb9989bb528f49915f3a64dbb1ad824a04718c309116f30af67c4766afa09189d91d725b#rd
tags:: #[[favorite]] #[[inoreader]] #[[star]] #[[微信公众号]]

- 不管是 kafka2 还是 kafka3 当中，controller 控制器都是必不可少的，通过 controller 控制器来维护 kafka 集群的正常运行，例如 ISR 列表的变更，broker 的上线或者下线，topic 的创建，分区的指定等等各种操作都需要依赖于 Controller，在 kafka2 当中，controller 的选举需要通过 zk 来实现，我们没法控制哪些机器选举成为 Controller,而在 kafka3 当中,我们可以通过配置文件来自己指定哪些机器成为 Controller,这样做的好处就是我们可以指定一些配置比较高的机器作为 Controller 节点,从而保证 controller 节点的稳健性。 ([View Highlight](https://read.readwise.io/read/01hdg5pfj2hgqr9xa5bf3sj75f)) #Highlight #[[2023-10-24]]
- 实际工作当中，如果有条件的话，尽量还是将 Broker 和 Controller 节点进行分离部署。避免由于服务器资源不够的情况导致 OOM 等一系列的问题 ([View Highlight](https://read.readwise.io/read/01hdg5q90k25w89320993gs685)) #Highlight #[[2023-10-24]]
- **Kafka 为什么快?**
  
  主要是 3 个方面：
  
  **顺序 IO**
  
  kafka 写消息到分区采用追加的方式，也就是顺序写入磁盘，不是随机写入，这个速度比普通的随机 IO 快非常多，几乎可以和网络 IO 的速度相媲美。
  
  **Page Cache 和零拷贝**
  
  kafka 在写入消息数据的时候通过 mmap 内存映射的方式，不是真正立刻写入磁盘，而是利用操作系统的文件缓存 PageCache 异步写入，提高了写入消息的性能，另外在消费消息的时候又通过 sendfile 实现了零拷贝。
  
  **批量处理和压缩**
  
  Kafka 在发送消息的时候不是一条条的发送的，而是会把多条消息合并成一个批次进行处理发送，消费消息也是一个道理，一次拉取一批次的消息进行消费。
  
  并且 Producer、Broker、Consumer 都使用了优化后的压缩算法，发送和消息消息使用压缩节省了网络传输的开销，Broker 存储使用压缩则降低了磁盘存储的空间。 ([View Highlight](https://read.readwise.io/read/01hdg5v97k92a43665xd5abr6z)) #Highlight #[[2023-10-24]]