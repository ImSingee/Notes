title:: Readwise/Highlights/深度剖析 Linux Cp 的秘密
author:: [[奇伢]]
full-title:: 深度剖析 Linux Cp 的秘密
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MzkyOTU5MTc3NQ==&mid=2247499074&idx=1&sn=75a497df86d8b81b6e048fc1a5893de3&source=41#wechat_redirect
tags:: #[[favorite]] #[[linux]]  
![](http://mmbiz.qpic.cn/mmbiz_jpg/4UtmXsuLoNd7TgWQgNicxERn4VwB6EKE0lL22NTc18zMQnhYEybhyTKmXUb3WQ6PuZwQ4GubOhPOXvQXDU1Cibxw/0?wx_fmt=jpeg)
Linux cp 命令我真的用过吗？为什么还能写出两万字的干货？奇伢带你深度探索 cp 的秘密。
- 文件系统中，一个 inode 唯一对应一个文件，inode 的个数则是在文件系统格式化的时候就确定好了的，换言之，**一个 local 文件系统支持的文件数是天然就有上限的**。 ([View Highlight](https://read.readwise.io/read/01hr48sxxnkeqpwca55y12sm7m)) #Highlight #[[2024-03-04]]
- 一个文件的对应一个 inode，这个文件需要按照 Block 切分存储在磁盘上，存储的位置则由 inode 记录起来，通过 inode 则能找到 block，也就获取到用户数据。 ([View Highlight](https://read.readwise.io/read/01hr48tff2qm4891wxfg2125ex)) #Highlight #[[2024-03-04]]
- 一个文件除了数据需要存储之外，一些元信心也需要存储，例如文件类型，权限，文件大小，创建/修改/访问时间等，这些信息存在 inode 中，每个文件唯一对应一个inode 。 ([View Highlight](https://read.readwise.io/read/01hr48v9khvn3twmxyq6xev45q)) #Highlight #[[2024-03-04]]
- **重点：文件 size 只是 inode 里面的一个属性，实际物理空间占用则是要看用户数据放了多少个 block 。**
  
  **划重点：没写数据的地方不用分配物理 block 块**。 ([View Highlight](https://read.readwise.io/read/01hr492kav3tbxknxgd0mm6nrc)) #Highlight #[[2024-03-04]]
- **对于稀疏文件空洞的地方，不占用物理空间，但要保证读的时候返回全 0 数据的语义，即可。**
  
  又一个知识点：有时候稀疏文件的空洞和用户真正的全 0 数据是无法区分的，因为对外表现是一样的。
  
  **稀疏文件也要文件系统支持，并不是所有的文件系统都支持稀疏语义，比如 ext2 就没有，ext4 才有稀疏语义，支持的标志是实现文件系统的 fallocate 接口。** ([View Highlight](https://read.readwise.io/read/01hr493wnjg3aj9dz3e8txhar1)) #Highlight #[[2024-03-04]]
- 稀疏语义的几个接口：
  
  1.  preallocate（预分配）：提供接口可以让用户预占用文件内指定范围的物理空间；
    
  2.  punch hole（打洞）：提供接口可以让用户释放文件内指定范围的物理空间； ([View Highlight](https://read.readwise.io/read/01hr4964fj3x17sec7snkfn9fa)) #Highlight #[[2024-03-04]]
- fiemap 这个是一个非常关键的特性，ioctl 搭配 FS_IOC_FIEMAP 这个函数能够拿到文件的物理空间分配关系，能够让用户知道长达 100G 的文件中，哪些位置才是真正有物理块存储数据的，哪些位置是空洞。
  
  这个特性则由文件系统提供，也就是说，只有文件系统提供了这个对外接口，我们才能拿得到，比如 ext4，就支持这个接口，ext2 就没有。 ([View Highlight](https://read.readwise.io/read/01hr49e4kx0nnet6vg0f5zkqqz)) #Highlight #[[2024-03-04]]
- 经典的文件系统主要划分 3 大块 superblock 区，inode 区，block 区（块描述区，bitmap区这里暂不介绍）。一个文件在文件系统的内部形态由一个 inode 记录元数据加上 block 存储用户存储用户数据样子； ([View Highlight](https://read.readwise.io/read/01hr49ghyjknhndc3xf4q6aqvh)) #Highlight #[[2024-03-04]]