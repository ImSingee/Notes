title:: Readwise/Highlights/Redis源码剖析与实战_Redis_Redis源码_数据结构_主从复制_缓存_集群_分布式数据库_键值数据库_事件驱动框架-极客时间
author:: [[time.geekbang.org]]
full-title:: Redis源码剖析与实战_Redis_Redis源码_数据结构_主从复制_缓存_集群_分布式数据库_键值数据库_事件驱动框架-极客时间
category:: #articles
url:: https://time.geekbang.org/column/intro/100084301

- 压缩列表（ziplist） #Highlight #[[2021-08-16]]
- ziplist 的最大特点，就是它被设计成一种内存紧凑型的数据结构，占用一块连续的内存空间，以达到节省内存的目的 #Highlight #[[2021-08-16]]
- 虽然 ziplist 节省了内存开销，可它也存在两个设计代价：一是不能保存过多的元素，否则访问性能会降低；二是不能保存过大的元素，否则容易导致内存重新分配，甚至可能引发连锁更新的问题。所谓的连锁更新，简单来说，就是 ziplist 中的每一项都要被重新分配内存空间，造成 ziplist 的性能降低。 #Highlight #[[2021-08-16]]
- 为了节省内存空间，在 Stream 数据类型的底层数据结构中，采用了 Radix Tree 和 listpack 两种数据结构来保存消息 #Highlight #[[2021-08-17]]
- 一个 ziplist 数据结构在内存中的布局，就是一块连续的内存空间 #Highlight #[[2021-08-16]]
- Stream 使用了两种内存友好的数据结构：listpack 和 Radix Tree。其中，消息 ID 是作为 Radix Tree 中的 key，消息具体数据是使用 listpack 保存，并作为 value 和消息 ID 一起保存到 Radix Tree 中。 #Highlight #[[2021-08-17]]
- 一个 quicklist 就是一个链表，而链表中的每个元素又是一个 ziplist #Highlight #[[2021-08-16]]
- quicklist 通过控制每个 quicklistNode 中，ziplist 的大小或是元素个数，就有效减少了在 ziplist 中新增或修改元素后，发生连锁更新的情况，从而提供了更好的访问性能 #Highlight #[[2021-08-16]]
- 非压缩节点可以指向多个子节点 #Highlight #[[2021-08-17]]
- 压缩节点只能指向一个子节点 #Highlight #[[2021-08-17]]
- 在 listpack 中，因为每个列表项只记录自己的长度，而不会像 ziplist 中的列表项那样，会记录前一项的长度。所以，当我们在 listpack 中新增或修改元素时，实际上只会涉及每个列表项自己的操作，而不会影响后续列表项的长度变化，这就避免了连锁更新。 #Highlight #[[2021-08-16]]