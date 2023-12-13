title:: Readwise/Highlights/一文读懂 Linux 内存分配全过程
author:: [[juejin.cn]]
full-title:: 一文读懂 Linux 内存分配全过程
category:: #articles
url:: https://juejin.cn/post/6959754877400514574
tags:: #[[favorite]] #[[ifttt]] #[[instapaper]] #[[linux]]
- Linux 会把进程虚拟内存空间划分为多个分区，在 Linux 内核中使用 `vm_area_struct` 对象来表示 ([View Highlight](https://read.readwise.io/read/01he6wyzhb2f88wf9c03jtfrge)) #Highlight #[[2023-11-02]]
- 内核就是使用 `vm_area_struct` 对象来记录一个内存分区（如 `代码段`、`数据段` 和 `堆空间` 等），下面介绍一下 `vm_area_struct` 对象各个字段的作用：
  
  •   `vm_mm`：指定了当前内存分区所属的内存管理对象。
    
  •   `vm_start`：内存分区的开始地址。
    
  •   `vm_end`：内存分区的结束地址。
    
  •   `vm_next`：通过这个指针把进程中所有的内存分区连接成一个链表。
    
  •   `vm_rb`：另外，为了快速查找内存分区，内核还把进程的所有内存分区保存到一棵红黑树中。`vm_rb` 就是红黑树的节点，用于把内存分区保存到红黑树中。 ([View Highlight](https://read.readwise.io/read/01he6wzpkhkx42vgkm9vs2963h)) #Highlight #[[2023-11-02]]
- ![图片](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fa776183ef894599aad53e5235d4912f~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp) ([View Highlight](https://read.readwise.io/read/01he6x139fj88x0w4vdb6gefbv)) #Highlight #[[2023-11-02]]
- `mm_struct` 的对象，此对象每个进程都持有一个，是进程虚拟内存空间和物理内存空间的管理对象 ([View Highlight](https://read.readwise.io/read/01he6x1hhsg3ttjne3mdhc91x3)) #Highlight #[[2023-11-02]]
- `mm_struct` 对象各个字段的作用：
  
  •   `mmap`：指向由进程所有内存分区连接成的链表。
    
  •   `mm_rb`：内核为了加快查找内存分区的速度，使用了红黑树保存所有内存分区，这个就是红黑树的根节点。
    
  •   `start_brk`：堆空间的开始内存地址。
    
  •   `brk`：堆空间的顶部内存地址。 ([View Highlight](https://read.readwise.io/read/01he6x29scdgf75baj4xnk8s5j)) #Highlight #[[2023-11-02]]
- ![图片](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52b9e23e47f649fdae028fd79e98732a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)
  
  `start_brk` 和 `brk` 字段用来记录堆空间的范围， 如 图2 所示。一般来说，`start_brk` 是不会变的，而 `brk` 会随着分配内存和释放内存而变化。 ([View Highlight](https://read.readwise.io/read/01he6x2z0ybde74wxz8hjnj9kf)) #Highlight #[[2023-11-02]]
- `brk` 系统调用申请的是 `虚拟内存`，但存储数据只能使用 `物理内存`。所以，虚拟内存必须映射到物理内存才能被使用 ([View Highlight](https://read.readwise.io/read/01he6x3jbs16tay5bm2rvact05)) #Highlight #[[2023-11-02]]
- 当对没有映射的虚拟内存地址进行读写操作时，CPU 将会触发 `缺页异常`。内核接收到 `缺页异常` 后， 会调用 `do_page_fault` 函数进行修复 ([View Highlight](https://read.readwise.io/read/01he6x3r9xtv0fqct8g5jj1ga3)) #Highlight #[[2023-11-02]]
- `do_page_fault` 函数主要完成以下操作：
  
  1.  获取导致页缺失异常的虚拟内存地址，保存到 `address` 变量中。
    
  2.  调用 `find_vma` 函数从进程内存分区中查找异常的虚拟内存地址对应的内存分区对象。
    
  3.  如果找到内存分区对象，那么调用 `handle_mm_fault` 函数对虚拟内存地址进行映射操作。
    
  
  从上面的分析可知，对虚拟内存进行映射操作是通过 `handle_mm_fault` 函数完成的，而 `handle_mm_fault` 函数的主要工作就是完成对进程 `页表` 的填充。 ([View Highlight](https://read.readwise.io/read/01he6x4evmntxgk8mrtx6zmd14)) #Highlight #[[2023-11-02]]
- `do_anonymous_page` 函数的实现比较有趣，它会根据 `缺页异常` 是由读操作还是写操作导致的，分为两个不同的处理逻辑，如下：
  
  •   如果是读操作导致的，那么将会使用 `零页` 进行映射（`零页` 是 Linux 内核中一个比较特殊的内存页，所有读操作引起的 `缺页异常` 都会指向此页，从而可以减少物理内存的消耗），并且设置其为只读（因为 `零页` 是不能进行写操作）。如果下次对此页进行写操作，将会触发写操作的 `缺页异常`，从而进入下面步骤。
    
  •   如果是写操作导致的，就申请一块新的物理内存页，然后根据物理内存页的地址生成映射关系，再对页表项进行填充（映射）。 ([View Highlight](https://read.readwise.io/read/01he6x5vxfenj523akcdvr22y9)) #Highlight #[[2023-11-02]]