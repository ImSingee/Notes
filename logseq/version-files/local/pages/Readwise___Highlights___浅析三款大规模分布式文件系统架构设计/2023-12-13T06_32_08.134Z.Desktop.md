title:: Readwise/Highlights/浅析三款大规模分布式文件系统架构设计
author:: [[juejin.cn]]
full-title:: 浅析三款大规模分布式文件系统架构设计
category:: #articles
url:: https://juejin.cn/post/7208380301024952378
tags:: #[[favorite]] #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e4d5776142bf4d4dab6eb0b375462b85~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp) ([View Highlight](https://read.readwise.io/read/01hdkerpw5sdyp4km88hzgnxhg)) #Highlight #[[2023-10-25]]
- 日常使用 Linux 的时候，所有的系统调用请求都会先到达 VFS，然后才会由 VFS 向下请求实际使用的文件系统。文件系统的设计者需要遵守 VFS 的接口协议来设计文件系统，接口是共享的，但是文件系统具体实现是不同的，每个文件系统都可以有自己的实现方式。文件系统再往下是存储介质，会根据不同的存储介质再去组织存储的数据形式。 ([View Highlight](https://read.readwise.io/read/01hdkes1q5f57mbrn8mekhkz0n)) #Highlight #[[2023-10-25]]
- **GFS 证明了我们可以用相对廉价的通用计算机，来组建一个足够强大、可扩展、可靠的分布式存储**，完全基于软件来定义一个文件系统，而不需要依赖很多专有或者高昂的硬件资源，才能去搭建一套分布式存储系统。 ([View Highlight](https://read.readwise.io/read/01hdketsgccpzv98efef5yv2m8)) #Highlight #[[2023-10-25]]
- GFS 很大程度上降低了分布文件系统的使用门槛，所以在后续的各个分布式文件系统上都可以或多或少看到 GFS 的影子。比如雅虎开源的 HDFS 它基本上就是按照 GFS 这篇论文来实现的，HDFS 也是目前大数据领域使用最广泛的存储系统 ([View Highlight](https://read.readwise.io/read/01hdkev453m0dj3m23nnrje7z9)) #Highlight #[[2023-10-25]]
- **Google 当时在设计 GFS 时做了很多取舍，它舍弃掉了很多传统单机文件系统的特性，保留了对于当时 Google 搜索引擎场景需要的一些分布式存储的需求**。所以严格上来说，GFS 并不是一个 POSIX 兼容的文件系统，但是它给了大家一个启发，还可以这样设计分布式文件系统。 ([View Highlight](https://read.readwise.io/read/01hdkevfvd8p7wbnb701gsqv3k)) #Highlight #[[2023-10-25]]
- ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ed6e853ef48d49568945ae10f6da01de~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp) ([View Highlight](https://read.readwise.io/read/01hdkevsb7g90tqj79tg9zv8ep)) #Highlight #[[2023-10-25]]
- GFS 的主要组件可以分为三块，最左边的 GFS client 也就是它的客户端，然后就是中间的 GFS master 也就是它的元数据节点，最下面两块是 GFS chunkserver 就是数据实际存储的节点，master 和 chunkserver 之间是通过网络来通信，所以说它是一个分布式的文件系统。Chunkserver 可以随着数据量的增长不断地横向扩展。 ([View Highlight](https://read.readwise.io/read/01hdkewdwn2s0m51ejd0qd1cp0)) #Highlight #[[2023-10-25]]
- Chunkserver 和 master、client 之间互相会有连接，比如说 client 端发起一个请求的时候，需要先从 master 获取到当前文件的元数据信息，再去和 chunkserver 通信，然后再去获取实际的数据。在 GFS 里面所有的文件都是分块（chunk）存储，比如一个 1GB 的大文件，GFS 会按照一个固定的大小（64MB）对这个文件进行分块，分块了之后会分布到不同的 chunkserver 上，所以当你读同一个文件时其实有可能会涉及到和不同的 chunkserver 通信。
  
  同时每个文件的 chunk 会有多个副本来保证数据的可靠性，比如某一个 chunkserver 挂了或者它的磁盘坏了，整个数据的安全性还是有保障的，可以通过副本的机制来帮助你保证数据的可靠性。 ([View Highlight](https://read.readwise.io/read/01hdkeys7zn6gzdes6dpgqbd5q)) #Highlight #[[2023-10-25]]
- GFS 的下一代产品: Colossus。由于 GFS 的架构设计存在明显的扩展性问题，所以 Google 内部基于 GFS 继续研发了 Colossus。Colossus 不仅为谷歌内部各种产品提供存储能力，还作为谷歌云服务的存储底座开放给公众使用。Colossus 在设计上增强了存储的可扩展性，提高了可用性，以处理大规模增长的数据需求 ([View Highlight](https://read.readwise.io/read/01hdkez52t47cvadtgph3t0cgg)) #Highlight #[[2023-10-25]]
- Tectonic
  
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a839bbd30a634889a40fca5008877dd7~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp) ([View Highlight](https://read.readwise.io/read/01hdkf0pv7hsfaj96dn4msmse3)) #Highlight #[[2023-10-25]]
- **Tectonic 比较创新的点在于它在 Metadata 这一层做了分层处理，以及存算分离的架构设计** 。从架构图可以看到 Metadata 分了三层：Name layer、File layer 和 Block layer。传统分布式文件系统会把所有的元数据都看作同一类数据，不会把它们显式区分。在 Tectonic 的设计中，Name layer 是与文件的名字或者目录结构有关的元数据，File layer 是跟当前文件本身的一些属性相关的数据，Block layer 是每一个数据块在 Chunk Store 位置的元数据。
  
  **Tectonic 之所以要做这样一个分层的设计是因为它是一个非常大规模的分布式文件系统，特别是在 Meta 这样的量级下（EB 级数据）。在这种规模下，对于 Metadata Store 的负载能力以及扩展性有着非常高的要求**。 ([View Highlight](https://read.readwise.io/read/01hdkf1xcf5fxnza139mmttq8v)) #Highlight #[[2023-10-25]]
- 事务功能是非常重要的一点，如果要实现一个大规模的分布式文件系统，势必要把 Metadata Store 做横向扩展。横向扩展之后就涉及数据分片，但是在文件系统里面有一个非常重要的语义是强一致性，比如重命名一个目录，目录里面会涉及到很多的子目录，**这个时候要怎么去高效地重命名目录以及保证重命名过程中的一致性，是分布式文件系统设计中是一个非常重要的点，也是业界普遍认为的难点**。 ([View Highlight](https://read.readwise.io/read/01hdkf3bp1byjsy88rft3hhh24)) #Highlight #[[2023-10-25]]
- 对于像 Meta 这种 EB 级的文件系统，三副本的设计机制会带来非常高昂的成本，**所以他们在 Chunk Store 层使用 EC（Erasure Code）也就是纠删码的方式去实现。通过这种方式可以只用大概 1.2~1.5 倍的冗余空间，就能够保证整个集群数据的可靠性和安全性，相比三副本的冗余机制节省了很大的存储成本** ([View Highlight](https://read.readwise.io/read/01hdkf45cxtc36yn32t2xe3kxa)) #Highlight #[[2023-10-25]]
- EC 的缺点在于当数据损坏或丢失时重建数据的成本很高，需要额外消耗更多计算和 IO 资源 ([View Highlight](https://read.readwise.io/read/01hdkf4caat3gzbff52a96xv5p)) #Highlight #[[2023-10-25]]
- ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/43aeca9088044061b7a7781f134d7a66~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp) ([View Highlight](https://read.readwise.io/read/01hdkf5f1wat4ws2tpp83hqww3)) #Highlight #[[2023-10-25]]
- 首先是数据存储这部分，相比 GFS 和 Tectonic 使用自研的数据存储服务，JuiceFS 在架构设计上顺应了云原生时代的特点，直接使用对象存储作为数据存储。前面看到 Tectonic 为了存储 EB 级的数据用了 4000 多台服务器，可想而知，如此大规模存储集群的运维成本也必然不小。**对于普通用户来说，对象存储的好处是开箱即用、容量弹性，运维复杂度陡然下降。对象存储也支持 Tectonic 中使用的 EC 特性，因此存储成本相比一些多副本的分布式文件系统也能降低不少**。
  
  但是对象存储的缺点也很明显，例如不支持修改对象、元数据性能差、无法保证强一致性、随机读性能差等。这些问题都被 JuiceFS 设计的独立元数据引擎，Chunk、Slice、Block 三层数据架构设计，以及多级缓存解决了。 ([View Highlight](https://read.readwise.io/read/01hdkf6caht1xmcs6hbpp3ns2d)) #Highlight #[[2023-10-25]]