title:: Readwise/Highlights/MIT6.S081 Lab5：Lazy Allocation
author:: [[首页]]
full-title:: MIT6.S081 Lab5：Lazy Allocation
category:: #articles
url:: https://juejin.cn/post/7100016969264398366

![](https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png)
- 对于页表硬件，O/S可以使用许多巧妙的技巧之一是用户空间**堆内存**的懒分配。xv6应用程序使用`sbrk()`系统调用向内核请求堆内存。 在给出的内核中，`sbrk()`分配物理内存并将其映射到进程的虚拟地址空间。内核为大型请求分配和映射内存可能需要很长时间。比如，一个GB包含262144个4096字节的页面，这是一个巨大的配置数量。 此外，一些程序分配的内存比实际使用的要多（比如，**实现稀疏数组**），或者为了更好的使用，而分配较多的内存。 为了允许`sbrk()`在这些情况下更快地完成任务，复杂的内核会**惰性地分配用户内存**。 也就是说，`sbrk()`不分配物理内存，而只是**记住分配了哪些用户地址**，并**在用户页表中将这些地址标记为无效**。 当进程第一次尝试使用任何给定的惰性分配的内存页时，CPU会产生一个页面错误，内核通过分配物理内存、清零和映射来处理这个错误。 ([View Highlight](https://read.readwise.io/read/01hhfdj0ff0dytk7c0ng4hdjrq)) #Highlight #[[2023-12-13]]