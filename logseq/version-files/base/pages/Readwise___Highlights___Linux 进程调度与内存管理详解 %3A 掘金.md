title:: Readwise/Highlights/Linux 进程调度与内存管理详解 : 掘金
author:: [[juejin.cn]]
full-title:: Linux 进程调度与内存管理详解 : 掘金
category:: #articles
url:: https://juejin.cn/post/7116412907860000776
tags:: #[[favorite]] #[[inoreader]] #[[linux]] #[[read]] #[[star]]

- 我们常常提到的“僵尸进程”，就是进程的堆栈信息被回收了，但是其 task_struct 却依旧存活在操作系统中。 “僵尸进程”往往是因为父进程处理子进程的销毁信号错误导致的。也是因为 task_struct 留存在操作系统中，所以“僵尸进程”是会消耗操作系统资源的。 ([View Highlight](https://read.readwise.io/read/01he6xns0g2fpvr4703ptd4yfj)) #Highlight #[[2023-11-02]]
- “孤儿进程”是父进程先于子进程销毁导致的，不过“孤儿进程”会进行“寻找养父”的过程，先找“亲生父亲”的进程组中的兄弟进程，找不到的话就会认“0”号进程为父亲，所以“孤儿进程”的销毁并不会受阻，不会消耗操作系统过多的资源。 ([View Highlight](https://read.readwise.io/read/01he6xp0nbkg2ajwcxf29qzgj4)) #Highlight #[[2023-11-02]]
- 完全公平调度算法 CFS ... CFS 会根据权重为各进程尽量“公平”的分配时间片 ... 虽然叫做完全公平，但 CFS 算法并不是完全相同的未每个进程分配同样的时间片来运行，导致其不公平的原因有以下两点：
  
  •   CFS 是根据权重为每个进程分配时间片的（体现在其具体实现的红黑树上就是vruntime）。
    
  •   为了避免进程的过度频繁切换，时间片的分配有一个最小值。 ... CFS 算法的底层实现是靠维护一棵进程vruntime的红黑树实现的，每一次选取vruntime最小的进程占据CPU #Highlight #[[2023-11-02]]
- Linux 底层实现了SCHED_FIFO 或 SCHED_RR 两种实时进程调度策略。
  
  •   SCHED_FIFO 先到先服务，所有进程排队，先到的进程先执行，执行完到下一个进程。
    
  •   SCHED_RR 时间片轮转，所有进程排队，但是一次只能领取一定的时间片，如果时间片用完，进程任务还没执行完，就会到队尾排队。 ([View Highlight](https://read.readwise.io/read/01he6xr8cmp6rheyqy3wf2ggkd)) #Highlight #[[2023-11-02]]
- Linux 采用两个单独的优先级范围，一个用于实时任务，另一个用于正常任务。实时任务分配的静态优先级为 0〜99，而正常任务分配的优先级为 100〜139。  
  
  这两个值域合并成为一个全局的优先级方案，其中较低数值表明较高的优先级。正常任务，根据它们的友好值，分配一个优先级；这里 -20 的友好值映射到优先级 100，而 +19 的友好值映射到 139。 ([View Highlight](https://read.readwise.io/read/01he6xrrcje1v04cnpyam42vxx)) #Highlight #[[2023-11-02]]
- inux 中的进程与线程都是靠 task_struct 管理的，所以正好可以通过 mm_struct 结构体来共享堆内存 ([View Highlight](https://read.readwise.io/read/01he6xskjrzczx2q34rw3kwgds)) #Highlight #[[2023-11-02]]
- slab 高速缓存
  
  slab分配器是基于对象进行管理的，所谓的对象就是内核中的数据结构（例如：task_struct,file_struct 等）。相同类型的对象归为一类，每当要申请这样一个对象时，slab分配器就从一个slab列表中分配一个这样大小的单元出去，而当要释放时，将其重新保存在该列表中，而不是直接返回给伙伴系统，从而避免内部碎片。slab分配器并不丢弃已经分配的对象，而是释放并把它们保存在内存中。slab分配对象时，会使用最近释放的对象的内存块，因此其驻留在cpu高速缓存中的概率会大大提高。 ([View Highlight](https://read.readwise.io/read/01he6xt1s17jpmsvpr1b79gbdf)) #Highlight #[[2023-11-02]]
- buddy 伙伴系统
  
  一言以蔽之，伙伴系统就是空闲列表+内存块的合并与拆分机制。
  
  空闲列表是操作系统内维护的几个由空闲内存块连接成的链表，每个列表上的内存块大小都相同，不同的列表都不同，当需要进行内存分配时，会从大于所需内存的链表上找一个内存快分配，以避免外部碎片的产生。当所需的空闲列表中的内存块不够用时，会在大一倍的列表中拿一个内存块拆成两块来使用，被拆开的内存块在空闲之后会合并还原。使用结束的内存块也会还回原空闲列表。 ([View Highlight](https://read.readwise.io/read/01he6xt6m69s16n9vjnfna6kea)) #Highlight #[[2023-11-02]]
- Linux 的内存有三个分区，DMA 区提供给外设直接访问，Normal 区是内核空间可以直接访问，用户空间用三级页表的方式来管理 ([View Highlight](https://read.readwise.io/read/01he6xtep077tzdkx5av6n3keg)) #Highlight #[[2023-11-02]]