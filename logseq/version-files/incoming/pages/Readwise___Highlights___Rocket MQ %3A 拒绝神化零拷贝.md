title:: Readwise/Highlights/Rocket MQ : 拒绝神化零拷贝
author:: [[juejin.cn]]
full-title:: Rocket MQ : 拒绝神化零拷贝
category:: #articles
url:: https://juejin.cn/post/7169913280654213151
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]
- 有没有一种机制使得进程可以独占一部分物理内存，不允许内核交换呢？神说要有光，于是Linux就暴露了`mlock system call` ([View Highlight](https://read.readwise.io/read/01hekrn0p2sw4d8p2d361wzry2)) #Highlight #[[2023-11-07]]
- 为了更加极致的性能体验，Linux操作系统暴露了`madvise sysytem call` ，madvise()系统调用，用于向内核提供对于起始地址为`addr`，长度为`length`的**内存空间的操作建议或者指示**。在大多数情况下，此类建议的目标是提高系统或者应用程序的性能。 ([View Highlight](https://read.readwise.io/read/01hekrnf88yx5970sh3rcrtznf)) #Highlight #[[2023-11-07]]
- 页缓存（PageCache)是OS对文件的缓存，用于加速对文件的读写。一般来说，程序对文件进行顺序读写的速度几乎接近于内存的读写速度，主要原因就是由于OS使用PageCache机制对读写访问操作进行了性能优化，将一部分的内存用作PageCache。对于数据的写入，OS会先写入至Cache内，随后通过异步的方式由pdflush内核线程将Cache内的数据刷盘至物理磁盘上。对于数据的读取，如果一次读取文件时出现未命中PageCache的情况，OS从物理磁盘上访问读取文件的同时，会顺序对其他相邻块的数据文件进行预读取。 ([View Highlight](https://read.readwise.io/read/01hekrp5j1x4pkgwj3cqnmm25v)) #Highlight #[[2023-11-07]]