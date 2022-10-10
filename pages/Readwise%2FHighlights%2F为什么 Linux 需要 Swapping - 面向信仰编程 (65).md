title:: Readwise/Highlights/为什么 Linux 需要 Swapping - 面向信仰编程 (65)
author:: [[draveness.me]]
full-title:: 为什么 Linux 需要 Swapping - 面向信仰编程
category:: #articles
url:: https://draveness.me/draveness.me/whys-the-design-linux-swapping

- 在 SSD 中随机访问 4KB 数据所需要的时间是访问主存的 1,500 倍，机械磁盘的寻道时间是访问主存的 100,000 倍 #Highlight #[[2022-07-18]]
- 触发 Swapping 的进程可能会遇到性能损失，同一个页面的频繁换入换出会导致极其明显的性能抖动 #Highlight #[[2022-07-18]]
- Linux 提供了两种不同的方法启用 Swapping，分别是 Swap 分区（Swap 
        
          Partition
          (分区)
        
        ）和 Swap 文件（Swapfile）：Swap 分区是硬盘上的独立区域，该区域只会用于交换分区，其他的文件不能存储在该区域上，我们可以使用 swapon -s 命令查看当前系统上的交换分区；Swap 文件是文件系统中的特殊文件，它与文件系统中的其他文件也没有太多的区别； #Highlight #[[2022-07-18]]
- 桌面系统的交换分区大小可以是系统内存的两倍，这可以让我们同时运行更多的应用程序；服务器的交换分区应该关闭或者使用少量的交换分区，不过一旦启用交换分区，就应该引入监控监控应用程序的性能 #Highlight #[[2022-07-18]]
- Swapping 可以直接将进程中使用相对较少的页面换出内存，立刻给正在执行的进程分配内存；Swapping 可以将进程中的闲置页面换出内存，为其他进程未来使用内存做好准备； #Highlight #[[2022-07-18]]
- 当系统需要的内存超过了可用的物理内存时，内核会将内存中不常使用的内存页交换到磁盘上为当前进程让出内存，保证正在执行的进程的可用性，这个内存回收的过程是强制的直接内存回收（Direct Page Reclaim） #Highlight #[[2022-07-18]]
- Linux 在内存也不足时获取内存的几个常见方法：内存压缩、直接回收以及触发内存不足错误杀掉部分进程 #Highlight #[[2022-07-18]]
- 应用程序在启动阶段使用的大量内存在启动后往往都不会使用，通过后台运行的守护进程，我们可以将这部分只使用一次的内存交换到磁盘上为其他内存的申请预留空间 #Highlight #[[2022-07-18]]
- kswapd 是 Linux 负责页面置换（Page replacement）的守护进程，它也是负责交换闲置内存的主要进程，它会在空闲内存低于一定水位时，回收内存页中的空闲内存保证系统中的其他进程可以尽快获得申请的内存 #Highlight #[[2022-07-18]]
- Linux 操作系统采用最近最少使用（Least Recently Used、LRU）算法置换内存中的页面，系统中的每个区都会在内存中持有 active_list 和 inactive_list 两种链表，其中前者包含活跃的内存页，后者中存储的内存页都是回收的候选页面 #Highlight #[[2022-07-18]]