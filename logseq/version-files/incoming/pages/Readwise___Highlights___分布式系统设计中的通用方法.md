title:: Readwise/Highlights/分布式系统设计中的通用方法
author:: [[流沙]]
full-title:: 分布式系统设计中的通用方法
category:: #articles
url:: https://lichuanyang.top/posts/45718/

![](http://lichuanyang.top/img/lamport.png)
分布式系统设计中的通用方法主要讨论了分布式系统的概念和常见目标，以及解决分布式系统中的挑战的方法。文章提到了一些常见的分布式系统，如数据库、消息队列和基础设施，并强调了在分布式环境下保持良好性能和稳定性的重要性。文章还介绍了进程崩溃、网络延迟和中断、网络分区等问题的处理方式，以及write-ahead log和心跳模式等解决方案。最后，文章总结了分布式系统操作的几个步骤。
- 首先我们需要明确本文要讨论的分布式系统是什么，简单的说，就是满足多节点和有状态这两个条件即可。多节点很好理解，有状态则是指这个系统要维护一些数据，不然的话，其实我们无脑的水平扩容就没有任何问题，也就不存在分布式系统的问题了。 ([View Highlight](https://read.readwise.io/read/01hpsbadpga75zq49wrwncsvva)) #Highlight #[[2024-02-17]]