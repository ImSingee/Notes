title:: Readwise/Highlights/【Go 语言原理与实践学习资料（下）】第三届字节跳动青训营-后端专场
author:: [[首页]]
full-title:: 【Go 语言原理与实践学习资料（下）】第三届字节跳动青训营-后端专场
category:: #articles
url:: https://juejin.cn/post/7095977466094682148
tags:: #[[favorite]] #[[golang]] #[[memory]]

- •   自动内存管理：由程序语言的运行时系统管理动态内存
  
  •   避免手动内存管理，专注于实现业务逻辑
  
  •   保证内存使用的**正确性**和**安全性**: double-free problem, use-after-free problem
  
  •   三个任务
    
    •   为新对象分配空间
    •   找到存活对象
    •   回收死亡对象的内存空间 ([View Highlight](https://read.readwise.io/read/01hdg0rpnpchf74b4ejfxtpn51)) #Highlight #[[2023-10-24]]
- •   Mutator: 业务线程，分配新对象，修改对象指向关系
    
  •   Collector: GC 线程，找到存活对象，回收死亡对象的内存空间 ([View Highlight](https://read.readwise.io/read/01hdg0rxb5e619zrjbjkzg13px)) #Highlight #[[2023-10-24]]
- •   Serial GC: 只有一个 collector
    
  •   ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/089ec51585cd4d4aa11f294095ae6979~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp) ([View Highlight](https://read.readwise.io/read/01hdg0sw16ac3s23wz5tv6j6pa)) #Highlight #[[2023-10-24]]
- •   Parallel GC: 并行 GC，支持多个 collectors 同时回收的 GC 算法
    
  •   ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/569c278f98a746d3ae97cd8ddff6a213~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp) ([View Highlight](https://read.readwise.io/read/01hdg0sy6yf4zheh38amr00w75)) #Highlight #[[2023-10-24]]
- Concurrent GC: 并发 GC，支持 mutator(s) 和 collector(s) **同时执行**的 GC 算法
  
  •   ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/279daa762d0149fc856a937972442340~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp) ([View Highlight](https://read.readwise.io/read/01hdg0t1eem9g79gcgryz69hgb)) #Highlight #[[2023-10-24]]
- Copying GC: 将存活对象从一块内存空间复制到另外一块内存空间，原先的空间可以直接进行对象分配 ([View Highlight](https://read.readwise.io/read/01hdg0tsa2jvmjf1r1h7am64r7)) #Highlight #[[2023-10-24]]
- Mark-sweep GC: 将死亡对象所在内存块标记为可分配，使用 free list 管理可分配的空间 ([View Highlight](https://read.readwise.io/read/01hdg0txh3trsw0af24mresf4j)) #Highlight #[[2023-10-24]]
- Mark-compact GC: 将存活对象复制到同一块内存区域的开头 ([View Highlight](https://read.readwise.io/read/01hdg0v1m33p1r8rvzjebv50zv)) #Highlight #[[2023-10-24]]
- •   TCMalloc: TC is short for thread caching
  
  •   目标：为对象在 heap 上分配内存 ([View Highlight](https://read.readwise.io/read/01hdg0w4f9zghsf3tj6qbm4atw)) #Highlight #[[2023-10-24]]
- •   提前将**内存分块**
    
    •   调用系统调用 mmap() 向 OS 申请一大块内存，例如 4 MB
    •   先将内存划分成大块，例如 8 KB，称作 mspan
    •   再将大块继续划分成**特定大小**的小块，用于对象分配
    •   noscan mspan: 分配不包含指针的对象 —— GC 不需要扫描
    •   scan mspan: 分配包含指针的对象 —— GC 需要扫描
    •   ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8b7e176dac544c5e87e073c7508fa15d~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)
  
  •   对象分配：根据对象的大小，选择最合适的块返回 ([View Highlight](https://read.readwise.io/read/01hdg0wcftjc4yjfntkfab2ybw)) #Highlight #[[2023-10-24]]
- Go 内存管理构成了多级缓存机制，从 OS 分配得的内存被内存管理回收后，也不会立刻归还给 OS，而是在 Go runtime 内部先缓存起来，从而避免频繁向 OS 申请内存。 ([View Highlight](https://read.readwise.io/read/01hdg0wmg4kpqtx2x1d9cyehhw)) #Highlight #[[2023-10-24]]
- •   •   内存分配的路线图如下。
  
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/abd17ddd80514e18a9045fbdc66af1d1~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp) ([View Highlight](https://read.readwise.io/read/01hdg0wrrsd7wq8a0y1hr1sepd)) #Highlight #[[2023-10-24]]
- mspan, mcache 和 mcentral 构成了内存管理的多级缓存机制。 ([View Highlight](https://read.readwise.io/read/01hdg0x2e34b7ws2r8y90wdrmr)) #Highlight #[[2023-10-24]]
- 4.  编译原理 The Dragon book, Compilers: Principles, Techniques, and Tools
  
  在编译器前端着墨较多。本书第二版的第九章 **机器无关优化**，推荐大家反复仔细阅读。这一章主要讲述的是编译优化中常见的数据流分析问题，建议大家跟随书本仔细推导书中的例子，会帮助你对数据流分析有个大致的认识。这一章给出的引用文献大多是编译和静态分析领域非常有影响力的论文，有兴趣的同学可以阅读。 ([View Highlight](https://read.readwise.io/read/01hdg114x6nqjfw5ee6wjzeavb)) #Highlight #[[2023-10-24]]