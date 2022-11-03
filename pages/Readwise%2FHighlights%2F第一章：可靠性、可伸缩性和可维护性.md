title:: Readwise/Highlights/第一章：可靠性、可伸缩性和可维护性
author:: [[Loading ...]]
full-title:: 第一章：可靠性、可伸缩性和可维护性
category:: #articles
url:: http://ddia.vonng.com/#/ch1

- 近些年来，出现了许多新的数据存储工具与数据处理工具。它们针对不同应用场景进行优化，因此不再适合生硬地归入传统类别【1】。类别之间的界限变得越来越模糊，例如：数据存储可以被当成消息队列用（Redis），消息队列则带有类似数据库的持久保证（Apache Kafka）。 ([View Highlight](https://read.readwise.io/read/01g9e9e8yztv1x3nyq91vg8zm0)) #Highlight #[[2022-08-02]]
- 因为写请求在不同的时间到达不同的节点。无论数据库使用何种复制方法（单主复制，多主复制或无主复制），都会出现这些不一致情况。 ([View Highlight](https://read.readwise.io/read/01gb9tk2t7hnmz4770096rm93h)) #Highlight #[[2022-08-25]]
- 大多数复制的数据库至少提供了 **最终一致性**，这意味着如果你停止向数据库写入数据并等待一段不确定的时间，那么最终所有的读取请求都会返回相同的值【1】。换句话说，不一致性是暂时的，最终会自行解决（假设网络中的任何故障最终都会被修复）。最终一致性的一个更好的名字可能是 **收敛（convergence）**，因为我们预计所有的副本最终会收敛到相同的值【2】。 ([View Highlight](https://read.readwise.io/read/01gb9tk5z4rbzpsvqar8vbnx74)) #Highlight #[[2022-08-25]]
- 在收敛之前，读操作可能会返回任何东西或什么都没有【1】。例如，如果你写入了一个值，然后立即再次读取，这并不能保证你能看到刚才写入的值，因为读请求可能会被路由到另外的副本上。 ([View Highlight](https://read.readwise.io/read/01gb9tkgw2xetqvwyjwk6mxq0q)) #Highlight #[[2022-08-25]]
- 事务所提供的安全保证，通常由众所周知的首字母缩略词 ACID 来描述，ACID 代表 **原子性（Atomicity）**，**一致性（Consistency）**，**隔离性（Isolation）** 和 **持久性（Durability）**。它由 Theo Härder 和 Andreas Reuter 于 1983 年提出，旨在为数据库中的容错机制建立精确的术语。 ([View Highlight](https://read.readwise.io/read/01gb9tbaa2jjbwnknj02japf7m)) #Highlight #[[2022-08-25]]
- 不符合 ACID 标准的系统有时被称为 BASE，它代表 **基本可用性（Basically Available）**，**软状态（Soft State）** 和 **最终一致性（Eventual consistency）**【9】，这比 ACID 的定义更加模糊，似乎 BASE 的唯一合理的定义是 “不是 ACID”，即它几乎可以代表任何你想要的东西。 ([View Highlight](https://read.readwise.io/read/01gb9tbygy84rqgphcearw9xbj)) #Highlight #[[2022-08-25]]
- 在 **最终一致** 的数据库，如果你在同一时刻问两个不同副本相同的问题，可能会得到两个不同的答案。这很让人困惑。如果数据库可以提供只有一个副本的假象（即，只有一个数据副本），那么事情就简单太多了。那么每个客户端都会有相同的数据视图，且不必担心复制滞后了。 ([View Highlight](https://read.readwise.io/read/01gb9tn8vgehnr9hp87z4xq15t)) #Highlight #[[2022-08-25]]
- ACID 的原子性并 **不** 是关于 **并发（concurrent）** 的。它并不是在描述如果几个进程试图同时访问相同的数据会发生什么情况，这种情况包含在缩写 ***I*** 中，即 [**隔离性**](http://ddia.vonng.com#/ch7?id=%e9%9a%94%e7%a6%bb%e6%80%a7)。 ([View Highlight](https://read.readwise.io/read/01gb9tcsp93q0ma157regcj43a)) #Highlight #[[2022-08-25]]
- **线性一致性（linearizability）** 背后的想法【6】（也称为 **原子一致性（atomic consistency）**【7】，**强一致性（strong consistency）**，**立即一致性（immediate consistency）** 或 **外部一致性（external consistency ）**【8】）。线性一致性的精确定义相当微妙，我们将在本节的剩余部分探讨它。但是基本的想法是让一个系统看起来好像只有一个数据副本，而且所有的操作都是原子性的。有了这个保证，即使实际中可能有多个副本，应用也不需要担心它们。 ([View Highlight](https://read.readwise.io/read/01gb9tnvytfrcxkzhn957d4yn0)) #Highlight #[[2022-08-25]]
- 在一个线性一致的系统中，只要一个客户端成功完成写操作，所有客户端从数据库中读取数据必须能够看到刚刚写入的值 ([View Highlight](https://read.readwise.io/read/01gb9tpdg9pkarg9mze01hphjh)) #Highlight #[[2022-08-25]]
- ACID 原子性的定义特征是：**能够在错误时中止事务，丢弃该事务进行的所有写入变更的能力。** 或许 **可中止性（abortability）** 是更好的术语 ([View Highlight](https://read.readwise.io/read/01gb9td6449bpx3htne2an0jte)) #Highlight #[[2022-08-25]]
- 原子性，隔离性和持久性是数据库的属性，而一致性（在 ACID 意义上）是应用程序的属性。应用可能依赖数据库的原子性和隔离属性来实现一致性，但这并不仅取决于数据库。因此，字母 C 不属于 ACID ([View Highlight](https://read.readwise.io/read/01gb9tewt2xyeqxe2q0ccb7dkv)) #Highlight #[[2022-08-25]]
- 一致性哈希由 Karger 等人定义。【7】 用于跨互联网级别的缓存系统，例如 CDN 中，是一种能均匀分配负载的方法。它使用随机选择的 **分区边界（partition boundaries）** 来避免中央控制或分布式共识的需要。 请注意，这里的一致性与复制一致性（请参阅 [第五章](http://ddia.vonng.com#/ch5)）或 ACID 一致性（请参阅 [第七章](http://ddia.vonng.com#/ch7)）无关，而只是描述了一种重新平衡（reblancing）的特定方法。 ([View Highlight](https://read.readwise.io/read/01gb9th76v89a2qhhsj4e13jn9)) #Highlight #[[2022-08-25]]
- 因为有可能产生混淆，所以最好避免使用一致性哈希这个术语，而只是把它称为 **散列分区（hash partitioning）**。 ([View Highlight](https://read.readwise.io/read/01gb9thbpprwxf98be9gs4d03r)) #Highlight #[[2022-08-25]]