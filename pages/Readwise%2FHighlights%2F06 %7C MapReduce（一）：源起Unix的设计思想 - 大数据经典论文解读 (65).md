title:: Readwise/Highlights/06 | MapReduce（一）：源起Unix的设计思想 - 大数据经典论文解读 (65)
author:: [[徐文浩]]
full-title:: 06 | MapReduce（一）：源起Unix的设计思想 - 大数据经典论文解读
category:: #articles
url:: https://time.geekbang.org/column/article/423595

- Map 函数会运行开发者写好的映射逻辑，把数据作为新的一组键值对输出出去。
  Map 函数的输出结果，会被整个 MapReduce 程序接手，进行一个叫做混洗的操作。混洗会把 Map 函数输出的所有相同的 Key 的 Value 整合到一个列表中，给到 Reduce 函数。并且给到 Reduce 函数的 Key，在每个 Reduce 里，都是按照 Key 排好序的。
  这里排好序并不是 MapReduce 框架本身的核心需求，而是为了技术上实现方便。因为我们要把相同 Key 的数据放到一起处理，而通过一个 HashMap 把所有的数据放在内存里又不一定放得下。那么利用硬盘进行外部排序是一个最简单的，没有内存大小依赖的对数据根据 Key 进行分组的解决办法。最后，在拿到混洗完成，分好组的数据之后，Reduce 函数就会运行你写好的化简逻辑，最终输出结果。 #Highlight #[[2022-03-15]]
- MapReduce 的编程模型非常简单，对于想要利用 MapReduce 框架进行数据处理的开发者来说，只需要实现一个 Map 函数，一个 Reduce 函数。 #Highlight #[[2022-03-15]]
- 分布式系统的首要目标：开发人员不懂分布式 #Highlight #[[2022-03-15]]