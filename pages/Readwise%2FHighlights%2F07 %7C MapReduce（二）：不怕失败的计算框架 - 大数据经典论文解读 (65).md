title:: Readwise/Highlights/07 | MapReduce（二）：不怕失败的计算框架 - 大数据经典论文解读 (65)
author:: [[徐文浩]]
full-title:: 07 | MapReduce（二）：不怕失败的计算框架 - 大数据经典论文解读
category:: #articles
url:: https://time.geekbang.org/column/article/423598

- map 和 reduce 的任务都是在分布式集群上运行的，这个就给我们对程序 debug 带来了很大的挑战。 #Highlight #[[2022-03-15]]
- Combiner 函数，会对在同一个服务器上所有 map 输出的结果运行一次，然后进行数据合并 #Highlight #[[2022-03-15]]
- GFS 是知道每一个 Block 的数据是在哪台服务器上的。而 MapReduce，会找到同样服务器上的 worker，来分配对应的 map 任务。如果那台服务器上没有，那么它就会找离这台服务器最近的、有 worker 的服务器，来分配对应的任务。 #Highlight #[[2022-03-15]]
- MapReduce 会记录 Map 或者 Reduce 函数，运行出错的具体数据的行号，如果同样行号的数据执行重试还是出错，它就会跳过这一行的数据。如果这样的数据行数在总体数据中的比例很小，那么整个 MapReduce 程序会忽视这些错误，仍然执行完成。毕竟，一个 URL 被访问了 1 万次还是 9999 次，对于搜素引擎的排序结果不会有什么影响。 #Highlight #[[2022-03-15]]
- 那么我们动一下脑筋，我们可以把这个 Checkpoint 直接写到 GFS 里，然后让调度系统监控 master。这样一旦 master 失效，我们就可以启动一个新的 master，来读取 Checkpoints 数据，然后就可以恢复任务的继续执行了，而不需要重新运行整个任务。 #Highlight #[[2022-03-15]]
- 对于 master 节点的失效，事实上谷歌已经告诉了我们，他们就任由 master 节点失败了，也就是整个 MapReduce 任务失败了。那么，对于开发者来说，解决这个问题的办法也很简单，就是再次提交一下任务去重试。 #Highlight #[[2022-03-15]]
- master 节点会定时地去 ping 每一个 worker 节点，一旦 worker 节点没有响应，我们就会认为这个节点失效了。 #Highlight #[[2022-03-15]]
- 在 Hadoop 2.0，Hadoop 社区把 JobTracker 的角色，拆分成了进行任务调度的 Resource Mananger，以及监控单个 MapReduce 任务执行的 Application Master，回到了和 MapReduce 论文相同的架构。 #Highlight #[[2022-03-15]]
- 在 Hadoop 里，每一个 MapReduce 的任务并没有一个独立的 master 进程，而是直接让调度系统承担了所有的 worker 的 master 的角色，这就是 Hadoop 1.0 里的 JobTracker。 #Highlight #[[2022-03-15]]
- map 和 reduce 所在的 worker 之间并不会直接通信，它们都只和 master 通信 #Highlight #[[2022-03-15]]
- 并不是每一个 map 和 reduce 任务，都会单独建立一个新的 worker 进程来执行。而是 master 进程会把 map 和 reduce 任务分配给有限的 worker，因为一个 worker 通常可以顺序地执行多个 map 和 reduce 的任务。 #Highlight #[[2022-03-15]]
- 这里的 master 进程，是负责找到空闲的（idle）worker 进程，然后再把 map 任务或者 reduce 任务，分配给 worker 进程去处理。 #Highlight #[[2022-03-15]]