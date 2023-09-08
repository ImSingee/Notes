title:: Readwise/Highlights/第 1 章 GNU-Linux 教程
author:: [[debian.org]]
full-title:: 第 1 章 GNU/Linux 教程
category:: #articles
url:: https://www.debian.org/doc/manuals/debian-reference/ch01.zh-cn.html#_procfs_and_sysfs

- [procfs](https://zh.wikipedia.org/wiki/Procfs) 和 [sysfs](https://zh.wikipedia.org/wiki/Sysfs) 两个伪文件系统，分别加载于 "`/proc`"和"`/sys`" 之上，将内核中的数据结构暴露给用户空间。或者说，这些条目是虚拟的，他们打开了深入了解操作系统运行的方便之门。 ([View Highlight](https://read.readwise.io/read/01h4dd8qjd9wcetndnfqskjhzm)) #Highlight #[[2023-07-04]]
- "`/proc/sys`" 之下的目录，包含了可以更改某些内核运行参数的接口。（你也可以使用专门的 `sysctl`() 命令修改，或者使用其预加载 / 配置文件 "`/etc/sysctl.conf`"。） ([View Highlight](https://read.readwise.io/read/01h4dd8z754drp7wpgdxkx0hp3)) #Highlight #[[2023-07-04]]
- 当人们看到这个特别大的文件 "`/proc/kcore`" 时，常常会惊慌失措。这个文件于你的的电脑内存大小相差不多。它被用来调试内核。它是一个虚拟文件，指向系统内存，所以不必担心它的大小。 ([View Highlight](https://read.readwise.io/read/01h4dd9b48efy003qpmnv15fvj)) #Highlight #[[2023-07-04]]
- [tmpfs](https://zh.wikipedia.org/wiki/Tmpfs#Linux) 是一个临时文件系统，它的文件都保存在 [虚拟内存](https://zh.wikipedia.org/wiki/Virtual_memory)中。必要时，位于内存[页缓存](https://zh.wikipedia.org/wiki/Page_cache)的 tmpfs 数据可能被交换到硬盘中的[交换分区](https://zh.wikipedia.org/wiki/Paging)。 ([View Highlight](https://read.readwise.io/read/01h4ddb3gmb47ctg87j3btwp4w)) #Highlight #[[2023-07-04]]