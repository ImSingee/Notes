title:: Readwise/Highlights/十年后数据库还是不敢拥抱numa？
author:: [[对比测试Intel NUMA 性能]]
full-title:: 十年后数据库还是不敢拥抱numa？
category:: #articles
url:: https://plantegg.github.io/2021/05/14/%E5%8D%81%E5%B9%B4%E5%90%8E%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%98%E6%98%AF%E4%B8%8D%E6%95%A2%E6%8B%A5%E6%8A%B1NUMA/

- 跨 NUMA 访问内存的延迟是本 Node 延迟的将近 2 倍 ([View Highlight](https://read.readwise.io/read/01h1rzz5maepef330fp4tyaxf7)) #Highlight #[[2023-05-31]]
- 开启 NUMA 会优先就近使用内存，在本 NUMA 上的内存不够的时候可以选择回收本地的 PageCache 还是到其它 NUMA 上分配内存，这是可以通过 Linux 参数 zone_reclaim_mode 来配置的，默认是到其它 NUMA 上分配内存，也就是跟关闭 NUMA 是一样的 ([View Highlight](https://read.readwise.io/read/01h1rzzs6s36w8mb1dmd6vmdhk)) #Highlight #[[2023-05-31]]
- 在开启 NUMA 和 zone_reclaim_mode 默认在内存不够的如果去其它 NUMA 上分配内存，比关闭 NUMA 要快很多而没有任何害处 ([View Highlight](https://read.readwise.io/read/01h1s0tw239yv801nmpm8vkw53)) #Highlight #[[2023-05-31]]
- 即使 Intel 在只有两个 NUMA 的情况下跨性能差异也有 2 倍，可见正确的绑核方法收益巨大 ([View Highlight](https://read.readwise.io/read/01h1s04c273v0myksc61ctw412)) #Highlight #[[2023-05-31]]
- 如果比较读写混合场景的话肯定会因为写锁导致 CPU 跑起来，最终的性能差异也不会这么大，但是绑在同一个 NUMA 下的性能肯定要好，IPC 也会高一些。具体好多少取决于锁的竞争程度。 ([View Highlight](https://read.readwise.io/read/01h1s05ckesg5p48n5s0pqjanb)) #Highlight #[[2023-05-31]]
- 实际我们使用 NUMA 的时候期望是：优先使用本 NUMA 上的内存，如果本 NUMA 不够了不要优先回收 PageCache 而是优先使用其它 NUMA 上的内存。 ([View Highlight](https://read.readwise.io/read/01h1s0t76w384nhyemz6v6mcx0)) #Highlight #[[2023-05-31]]
- Linux 识别到 NUMA 架构后，默认的内存分配方案就是：优先尝试在请求线程当前所处的 CPU 的 Local 内存上分配空间。**如果 local 内存不足，优先淘汰 local 内存中无用的 Page（Inactive，Unmapped）**。然后才到其它 NUMA 上分配内存 ([View Highlight](https://read.readwise.io/read/01h1s0wwj19wb3e328nxfq63a2)) #Highlight #[[2023-05-31]]
- intel 芯片跨 node 延迟远低于其他家，所以跨 node 性能损耗不大 ([View Highlight](https://read.readwise.io/read/01h1s0zj64cwy1re50rbcrpf3q)) #Highlight #[[2023-05-31]]
- zone_reclaim_mode，它用来管理当一个内存区域 (zone) 内部的内存耗尽时，是从其内部进行内存回收还是可以从其他 zone 进行回收的选项 ([View Highlight](https://read.readwise.io/read/01h1s0zqwb2pp2fs65h1yh2wz5)) #Highlight #[[2023-05-31]]
- zone_reclaim_mode 的四个参数值的意义分别是：
  
  0 = Allocate from all nodes before reclaiming memory  
  1 = Reclaim memory from local node vs allocating from next node  
  2 = Zone reclaim writes dirty pages out  
  4 = Zone reclaim swaps pages ([View Highlight](https://read.readwise.io/read/01h1s0ysvz1agv18b80vxgk13e)) #Highlight #[[2023-05-31]]