title:: Readwise/Highlights/为什么 HugePages 可以提升数据库性能 - 面向信仰编程
author:: [[draveness.me]]
full-title:: 为什么 HugePages 可以提升数据库性能 - 面向信仰编程
category:: #articles
url:: https://draveness.me/draveness.me/whys-the-design-linux-hugepages

- 虽然 HugePages 的申请方式与默认的内存相差不多，但是它实际上是操作系统单独管理的特殊资源，Linux 会在 /proc/meminfo 中单独展示 HugePages 的相关数据，而容器编排系统 Kubernetes 也会认为大页是不同于内存的独立资源 #Highlight #[[2022-07-19]]
- 作为 Linux 从 2.6.32 引入的新特性，HugePages 能够提升数据库、Hadoop 全家桶等占用大量内存的服务的性能，该特性对于常见的 Web 服务以及后端服务没有太多的帮助，反而可能会影响服务的性能 #Highlight #[[2022-07-19]]
- HugePages 可以降低内存页面的管理开销；HugePages 可以锁定内存，禁止操作系统的内存交换和释放 #Highlight #[[2022-07-19]]
- 更大的内存页能够减少内存中的页表层级，这不仅可以降低页表的内存占用，也能降低从虚拟内存到物理内存转换的性能损耗 #Highlight #[[2022-07-19]]
- 更大的内存页意味着更高的缓存命中率，CPU 有更高的几率可以直接在 TLB（Translation lookaside buffer）中获取对应的物理地址 #Highlight #[[2022-07-19]]
- 更大的内存页面意味着更高的缓存命中率，因为 TLB 缓存的容量是一定的，它只能缓存指定数量的页面，在这种情况下，缓存 2MB 的大页能够为系统提高缓存的命中率，从而提高系统的整体性能 #Highlight #[[2022-07-19]]
- 预先在操作系统上使用命令分配的，当进程通过 mmap 或者其他系统调用申请大页时，它们得到的都是预先分配的资源。Linux 中的 HugePages 都被锁定在内存中，所以哪怕是在系统内存不足时，它们也不会被 Swap 到磁盘上，这也就能从根源上杜绝了重要内存被频繁换入和换出的可能 #Highlight #[[2022-07-19]]