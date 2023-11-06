title:: Readwise/Highlights/7.1 内存分配器
author:: [[draveness.me]]
full-title:: 7.1 内存分配器
category:: #articles
url:: https://draveness.me/golang/docs/part3-runtime/ch07-memory/golang-memory-allocator/

- 内存管理一般包含三个不同的组件，分别是用户程序（Mutator）、分配器（Allocator）和收集器（Collector）[1](https://draveness.me/golang/docs/part3-runtime/ch07-memory/golang-memory-allocator#fn:1)，当用户程序申请内存时，它会通过内存分配器申请新内存，而分配器会负责从堆中初始化相应的内存区域。
  
  ![mutator-allocator-collector](https://img.draveness.me/2020-02-29-15829868066411-mutator-allocator-collector.png) ([View Highlight](https://read.readwise.io/read/01g9cjqjwz02qd23ba3aey4dh2)) #Highlight #[[2022-08-01]]
- 编程语言的内存分配器一般包含两种分配方法，一种是线性分配器（ Sequential Allocator，Bump Allocator），另一种是空闲链表分配器（Free-List Allocator） ([View Highlight](https://read.readwise.io/read/01g9cjth3htkhcsczj8ev9037d)) #Highlight #[[2022-08-01]]
- 线性分配（Bump Allocator）是一种高效的内存分配方法，但是有较大的局限性。当我们使用线性分配器时，只需要在内存中维护一个指向内存特定位置的指针，如果用户程序向分配器申请内存，分配器只需要检查剩余的空闲内存、返回分配的内存区域并修改指针在内存中的位置，即移动下图中的指针：
  
  ![bump-allocator](https://img.draveness.me/2020-02-29-15829868066435-bump-allocator.png) ([View Highlight](https://read.readwise.io/read/01g9cjv9ney3519ghgbr02mq5d)) #Highlight #[[2022-08-01]]
- 虽然线性分配器实现为它带来了较快的执行速度以及较低的实现复杂度，但是线性分配器无法在内存被释放时重用内存 ([View Highlight](https://read.readwise.io/read/01g9cjvnf3bb0bws5ddmqsa893)) #Highlight #[[2022-08-01]]
- 因为线性分配器具有上述特性，所以需要与合适的垃圾回收算法配合使用，例如：标记压缩（Mark-Compact）、复制回收（Copying GC）和分代回收（Generational GC）等算法，它们可以通过拷贝的方式整理存活对象的碎片，将空闲内存定期合并，这样就能利用线性分配器的效率提升内存分配器的性能了。
  
  因为线性分配器需要与具有拷贝特性的垃圾回收算法配合，所以 C 和 C++ 等需要直接对外暴露指针的语言就无法使用该策略 ([View Highlight](https://read.readwise.io/read/01g9cjwa10hz3wmp5k97y452rz)) #Highlight #[[2022-08-01]]
- 空闲链表分配器（Free-List Allocator）可以重用已经被释放的内存，它在内部会维护一个类似链表的数据结构。当用户程序申请内存时，空闲链表分配器会依次遍历空闲的内存块，找到足够大的内存，然后申请新的资源并修改链表：
  
  ![free-list-allocator](https://img.draveness.me/2020-02-29-15829868066446-free-list-allocator.png)
  
  **图 7-4 空闲链表分配器**
  
  因为不同的内存块通过指针构成了链表，所以使用这种方式的分配器可以重新利用回收的资源，但是因为分配内存时需要遍历链表，所以它的时间复杂度是 𝑂(𝑛)O(n)O(n)。 ([View Highlight](https://read.readwise.io/read/01g9ckpt95jg1d1rnxag4ar9xz)) #Highlight #[[2022-08-01]]
- 空闲链表分配器可以选择不同的策略在链表中的内存块中进行选择，最常见的是以下四种：
  
  •   首次适应（First-Fit）— 从链表头开始遍历，选择第一个大小大于申请内存的内存块；
  •   循环首次适应（Next-Fit）— 从上次遍历的结束位置开始遍历，选择第一个大小大于申请内存的内存块；
  •   最优适应（Best-Fit）— 从链表头遍历整个链表，选择最合适的内存块；
  •   隔离适应（Segregated-Fit）— 将内存分割成多个链表，每个链表中的内存块大小相同，申请内存时先找到满足条件的链表，再从链表中选择合适的内存块； ([View Highlight](https://read.readwise.io/read/01g9ckqd2xksdew5b734bmq92t)) #Highlight #[[2022-08-01]]
- 线程缓存分配（Thread-Caching Malloc，TCMalloc）是用于分配内存的机制，它比 glibc 中的 `malloc` 还要快很多 [2](https://draveness.me/golang/docs/part3-runtime/ch07-memory/golang-memory-allocator#fn:2)。Go 语言的内存分配器就借鉴了 TCMalloc 的设计实现高速的内存分配，它的核心理念是使用多级缓存将对象根据大小分类，并按照类别实施不同的分配策略。 ([View Highlight](https://read.readwise.io/read/01g9ckrjnmwz9ke066agyd8bgz)) #Highlight #[[2022-08-01]]
- Go 语言的内存分配器会根据申请分配的内存大小选择不同的处理逻辑，运行时根据对象的大小将对象分成微对象、小对象和大对象三种：
  
  类别
  
  大小
  
  微对象
  
  `(0, 16B)`
  
  小对象
  
  `[16B, 32KB]`
  
  大对象
  
  `(32KB, +∞)` ([View Highlight](https://read.readwise.io/read/01g9ckrw285kz2kcf5338rjjvv)) #Highlight #[[2022-08-01]]
- 程序中的绝大多数对象的大小都在 32KB 以下 ([View Highlight](https://read.readwise.io/read/01g9cks0qe2var216bjmagfgex)) #Highlight #[[2022-08-01]]
- 内存分配器不仅会区别对待大小不同的对象，还会将内存分成不同的级别分别管理，TCMalloc 和 Go 运行时分配器都会引入线程缓存（Thread Cache）、中心缓存（Central Cache）和页堆（Page Heap）三个组件分级管理内存：
  
  ![multi-level-cache](https://img.draveness.me/2020-02-29-15829868066457-multi-level-cache.png) ([View Highlight](https://read.readwise.io/read/01g9cm4r0wq8ph76yepr712d07)) #Highlight #[[2022-08-01]]
- 线程缓存属于每一个独立的线程，它能够满足线程上绝大多数的内存分配需求，因为不涉及多线程，所以也不需要使用互斥锁来保护内存，这能够减少锁竞争带来的性能损耗。当线程缓存不能满足需求时，运行时会使用中心缓存作为补充解决小对象的内存分配，在遇到 32KB 以上的对象时，内存分配器会选择页堆直接分配大内存。 ([View Highlight](https://read.readwise.io/read/01g9cm5g9pt4wmk6397y8h4kz1)) #Highlight #[[2022-08-01]]
- 在 Go 语言 1.10 以前的版本，堆区的内存空间都是连续的；但是在 1.11 版本，Go 团队使用稀疏的堆内存空间替代了连续的内存，解决了连续内存带来的限制以及在特殊场景下可能出现的问题 ([View Highlight](https://read.readwise.io/read/01g9cm6ce56s1714pfh76xr0q2)) #Highlight #[[2022-08-01]]
- Go 语言程序的 1.10 版本在启动时会初始化整片虚拟内存区域，如下所示的三个区域 `spans`、`bitmap` 和 `arena` 分别预留了 512MB、16GB 以及 512GB 的内存空间，这些内存并不是真正存在的物理内存，而是虚拟内存：
  
  ![heap-before-go-1-10](https://img.draveness.me/2020-10-19-16031147347484/heap-before-go-1-10.png) ([View Highlight](https://read.readwise.io/read/01g9cm98qb78b3fstx78x1kch5)) #Highlight #[[2022-08-01]]
- •   `spans` 区域存储了指向内存管理单元 [`runtime.mspan`](https://draveness.me/golang/tree/runtime.mspan) 的指针，每个内存单元会管理几页的内存空间，每页大小为 8KB；
  •   `bitmap` 用于标识 `arena` 区域中的那些地址保存了对象，位图中的每个字节都会表示堆区中的 32 字节是否空闲；
  •   `arena` 区域是真正的堆区，运行时会将 8KB 看做一页，这些内存页中存储了所有在堆上初始化的对象； ([View Highlight](https://read.readwise.io/read/01g9cmbz9bw8a7samz1ptfatyg)) #Highlight #[[2022-08-01]]
- 对于任意一个地址，我们都可以根据 `arena` 的基地址计算该地址所在的页数并通过 `spans` 数组获得管理该片内存的管理单元 [`runtime.mspan`](https://draveness.me/golang/tree/runtime.mspan)，`spans` 数组中多个连续的位置可能对应同一个 [`runtime.mspan`](https://draveness.me/golang/tree/runtime.mspan) 结构。 ([View Highlight](https://read.readwise.io/read/01g9cmf9z197qsdbhdcr1wb8gf)) #Highlight #[[2022-08-01]]
- 因为基于稀疏内存的内存管理失去了内存的连续性这一假设，这也使内存管理变得更加复杂 ([View Highlight](https://read.readwise.io/read/01g9cva27njs0jfhret1z23bq5)) #Highlight #[[2022-08-02]]
- 运行时使用二维的 [`runtime.heapArena`](https://draveness.me/golang/tree/runtime.heapArena) 数组管理所有的内存，每个单元都会管理 64MB 的内存空间 ([View Highlight](https://read.readwise.io/read/01g9cvs0p6t07s8dpg8pq2y80h)) #Highlight #[[2022-08-02]]
- 将原有的连续大内存切分成稀疏的小内存，而用于管理这些内存的元信息也被切成了小块 ([View Highlight](https://read.readwise.io/read/01g9cvhx74c5tvsc75chxjyv23)) #Highlight #[[2022-08-02]]
- Go 语言的内存分配器包含内存管理单元、线程缓存、中心缓存和页堆 ([View Highlight](https://read.readwise.io/read/01g9cw7jqj18ex81gmee1bwmbp)) #Highlight #[[2022-08-02]]
- 每个类型的内存管理单元都会管理特定大小的对象，当内存管理单元中不存在空闲对象时，它们会从 [`runtime.mheap`](https://draveness.me/golang/tree/runtime.mheap) 持有的 134 个中心缓存 [`runtime.mcentral`](https://draveness.me/golang/tree/runtime.mcentral) 中获取新的内存单元，中心缓存属于全局的堆结构体 [`runtime.mheap`](https://draveness.me/golang/tree/runtime.mheap)，它会从操作系统中申请内存。 ([View Highlight](https://read.readwise.io/read/01g9cx197dwkyfvzq92502va0a)) #Highlight #[[2022-08-02]]
- 不同的内存块通过指针构成了链表，所以使用这种方式的分配器可以重新利用回收的资源，但是因为分配内存时需要遍历链表，所以它的时间复杂度是 𝑂(𝑛)O(n)O(n)。空闲链表分配器可以选择不同的策略在链表中的内存块中进行选择，最常见的是以下四种：
  
  •   首次适应（First-Fit）— 从链表头开始遍历，选择第一个大小大于申请内存的内存块；
  •   循环首次适应（Next-Fit）— 从上次遍历的结束位置开始遍历，选择第一个大小大于申请内存的内存块；
  •   最优适应（Best-Fit）— 从链表头遍历整个链表，选择最合适的内存块；
  •   隔离适应（Segregated-Fit）— 将内存分割成多个链表，每个链表中的内存块大小相同，申请内存时先找到满足条件的链表，再从链表中选择合适的内存块； ([View Highlight](https://read.readwise.io/read/01heh9pbt0bysssj0zsvyjzean)) #Highlight #[[2023-11-06]]
- ![segregated-list](https://img.draveness.me/2020-02-29-15829868066452-segregated-list.png) ([View Highlight](https://read.readwise.io/read/01heh9qah2t2f01h73t4pqdwpa)) #Highlight #[[2023-11-06]]
- 线程缓存分配（Thread-Caching Malloc，TCMalloc）是用于分配内存的机制，它比 glibc 中的 `malloc` 还要快很多[2](https://draveness.me/golang/docs/part3-runtime/ch07-memory/golang-memory-allocator#fn:2)。Go 语言的内存分配器就借鉴了 TCMalloc 的设计实现高速的内存分配，它的核心理念是使用多级缓存将对象根据大小分类，并按照类别实施不同的分配策略。 ([View Highlight](https://read.readwise.io/read/01heh9qmsw84z8a8n01z5c0ptp)) #Highlight #[[2023-11-06]]
- •   `spans` 区域存储了指向内存管理单元 [`runtime.mspan`](https://draveness.me/golang/tree/runtime.mspan) 的指针，每个内存单元会管理几页的内存空间，每页大小为 8KB；
  •   `bitmap` 用于标识 `arena` 区域中的那些地址保存了对象，位图中的每个字节都会表示堆区中的 32 字节是否空闲；
  •   `arena` 区域是真正的堆区，运行时会将 8KB 看做一页，这些内存页中存储了所有在堆上初始化的对象； ([View Highlight](https://read.readwise.io/read/01heh9r8cbwctxkd2dcqekxfkh)) #Highlight #[[2023-11-06]]
- 运行时中包含多个操作系统实现的状态转换方法，所有的实现都包含在以 `mem_` 开头的文件中，本节将介绍 Linux 操作系统对上图中方法的实现：
  
  •   [`runtime.sysAlloc`](https://draveness.me/golang/tree/runtime.sysAlloc) 会从操作系统中获取一大块可用的内存空间，可能为几百 KB 或者几 MB；
  •   [`runtime.sysFree`](https://draveness.me/golang/tree/runtime.sysFree) 会在程序发生内存不足（Out-of Memory，OOM）时调用并无条件地返回内存；
  •   [`runtime.sysReserve`](https://draveness.me/golang/tree/runtime.sysReserve) 会保留操作系统中的一片内存区域，访问这片内存会触发异常；
  •   [`runtime.sysMap`](https://draveness.me/golang/tree/runtime.sysMap) 保证内存区域可以快速转换至就绪状态；
  •   [`runtime.sysUsed`](https://draveness.me/golang/tree/runtime.sysUsed) 通知操作系统应用程序需要使用该内存区域，保证内存区域可以安全访问；
  •   [`runtime.sysUnused`](https://draveness.me/golang/tree/runtime.sysUnused) 通知操作系统虚拟内存对应的物理内存已经不再需要，可以重用物理内存；
  •   [`runtime.sysFault`](https://draveness.me/golang/tree/runtime.sysFault) 将内存区域转换成保留状态，主要用于运行时的调试； ([View Highlight](https://read.readwise.io/read/01heh9skjp3ycvm05hqp9hnb8f)) #Highlight #[[2023-11-06]]
- •   [`runtime.sysAlloc`](https://draveness.me/golang/tree/runtime.sysAlloc) 会从操作系统中获取一大块可用的内存空间，可能为几百 KB 或者几 MB；
  •   [`runtime.sysFree`](https://draveness.me/golang/tree/runtime.sysFree) 会在程序发生内存不足（Out-of Memory，OOM）时调用并无条件地返回内存；
  •   [`runtime.sysReserve`](https://draveness.me/golang/tree/runtime.sysReserve) 会保留操作系统中的一片内存区域，访问这片内存会触发异常；
  •   [`runtime.sysMap`](https://draveness.me/golang/tree/runtime.sysMap) 保证内存区域可以快速转换至就绪状态；
  •   [`runtime.sysUsed`](https://draveness.me/golang/tree/runtime.sysUsed) 通知操作系统应用程序需要使用该内存区域，保证内存区域可以安全访问；
  •   [`runtime.sysUnused`](https://draveness.me/golang/tree/runtime.sysUnused) 通知操作系统虚拟内存对应的物理内存已经不再需要，可以重用物理内存；
  •   [`runtime.sysFault`](https://draveness.me/golang/tree/runtime.sysFault) 将内存区域转换成保留状态，主要用于运行时的调试； ([View Highlight](https://read.readwise.io/read/01heh9fkvr7e29r4spq9xy4p4x)) #Highlight #[[2023-11-06]]
- ![go-memory-layout](https://img.draveness.me/2020-02-29-15829868066479-go-memory-layout.png) ([View Highlight](https://read.readwise.io/read/01heh9syn828y0a6bq1b0crzz7)) #Highlight #[[2023-11-06]]
- 每一个处理器都会分配一个线程缓存 [`runtime.mcache`](https://draveness.me/golang/tree/runtime.mcache) 用于处理微对象和小对象的分配，它们会持有内存管理单元 [`runtime.mspan`](https://draveness.me/golang/tree/runtime.mspan) ([View Highlight](https://read.readwise.io/read/01heh9ta4vdxa9ckagmfa4hxtb)) #Highlight #[[2023-11-06]]
- 每个类型的内存管理单元都会管理特定大小的对象，当内存管理单元中不存在空闲对象时，它们会从 [`runtime.mheap`](https://draveness.me/golang/tree/runtime.mheap) 持有的 134 个中心缓存 [`runtime.mcentral`](https://draveness.me/golang/tree/runtime.mcentral) 中获取新的内存单元，中心缓存属于全局的堆结构体 [`runtime.mheap`](https://draveness.me/golang/tree/runtime.mheap)，它会从操作系统中申请内存。
  
  在 amd64 的 Linux 操作系统上，[`runtime.mheap`](https://draveness.me/golang/tree/runtime.mheap) 会持有 4,194,304 [`runtime.heapArena`](https://draveness.me/golang/tree/runtime.heapArena)，每个 [`runtime.heapArena`](https://draveness.me/golang/tree/runtime.heapArena) 都会管理 64MB 的内存，单个 Go 语言程序的内存上限也就是 256TB。 ([View Highlight](https://read.readwise.io/read/01heh9tjnhb486td31sxky115p)) #Highlight #[[2023-11-06]]
- [`runtime.mspan`](https://draveness.me/golang/tree/runtime.mspan) 是 Go 语言内存管理的基本单元，该结构体中包含 `next` 和 `prev` 两个字段，它们分别指向了前一个和后一个 [`runtime.mspan`](https://draveness.me/golang/tree/runtime.mspan) ([View Highlight](https://read.readwise.io/read/01heh9tv7jy1vh4jn5gbtwv5d5)) #Highlight #[[2023-11-06]]
- [`runtime.mcentral`](https://draveness.me/golang/tree/runtime.mcentral) 是内存分配器的中心缓存，与线程缓存不同，访问中心缓存中的内存管理单元需要使用互斥锁 ([View Highlight](https://read.readwise.io/read/01heh9vyjn4tg20fydvzhcynnv)) #Highlight #[[2023-11-06]]
- [`runtime.mheap`](https://draveness.me/golang/tree/runtime.mheap) 是内存分配的核心结构体，Go 语言程序会将其作为全局变量存储，而堆上初始化的所有对象都由该结构体统一管理，该结构体中包含两组非常重要的字段，其中一个是全局的中心缓存列表 `central`，另一个是管理堆区内存区域的 `arenas` 以及相关字段。
  
  页堆中包含一个长度为 136 的 [`runtime.mcentral`](https://draveness.me/golang/tree/runtime.mcentral) 数组，其中 68 个为跨度类需要 `scan` 的中心缓存，另外的 68 个是 `noscan` 的中心缓存 ([View Highlight](https://read.readwise.io/read/01heh9wnjend1bkvg977d9nq32)) #Highlight #[[2023-11-06]]
- Go 语言所有的内存空间都由如下所示的二维矩阵 [`runtime.heapArena`](https://draveness.me/golang/tree/runtime.heapArena) 管理，这个二维矩阵管理的内存可以是不连续的：
  
  ![mheap-and-memories](https://img.draveness.me/2020-02-29-15829868066531-mheap-and-memories.png) ([View Highlight](https://read.readwise.io/read/01heh9wwavdve2nqr61pmawzen)) #Highlight #[[2023-11-06]]
- [`runtime.mheap`](https://draveness.me/golang/tree/runtime.mheap) 是内存分配器中的核心组件，运行时会通过它的 [`runtime.mheap.alloc`](https://draveness.me/golang/tree/runtime.mheap.alloc) 方法在系统栈中获取新的 [`runtime.mspan`](https://draveness.me/golang/tree/runtime.mspan) 单元 ([View Highlight](https://read.readwise.io/read/01heh9x4gqr0aj0j7r7af3zv0e)) #Highlight #[[2023-11-06]]