title:: Readwise/Highlights/Linux入门的基础知识点，有这篇就够了（持续更新） (30)
author:: [[juejin.cn]]
full-title:: Linux入门的基础知识点，有这篇就够了（持续更新）
category:: #articles
url:: https://juejin.cn/post/6964347950495596551

- 磁盘文件系统：NTFS,EXT3
  闪存文件系统：JFFS2,YAFFS
  数据库文件系统：BFFS,WINFS
  网络文件系统：NFS
  虚拟文件系统：VFS（Proc） ([View Highlight](https://instapaper.com/read/1415146391/16511336)) #Highlight #[[2021-05-27]]
- EXT3：是一个日志方式的文件系统，系统中的每个文件都有索引，用户对文件的每个操作都会记录在日志中，形成一个任务队列。
  
  SWAP：是交换分区的文件系统，类似于windows的虚拟内存，其实现的方式有以下两种： ([View Highlight](https://instapaper.com/read/1415146391/16511368)) #Highlight #[[2021-05-27]]
- 应用程序可以随机访问块设备文件的数据，程序可以自行确定数据的位置，硬盘、软盘等都是块设备。使用 ls -l 命令查看，块设备文件的第一个字符是 "b"（block）。 ([View Highlight](https://instapaper.com/read/1415146391/16511415)) #Highlight #[[2021-05-27]]
- 字符设备文件以字节流的方式进行访问，由字符设备驱动程序来实现这种特性，这通常要用到 open、close、read、write 等系统调用。字符终端、串口和键盘等就是字符设备。另外，由于字符设备文件是以文件流的方式进行访问的，因此可以顺序读取，但通常不支持随机存取。使用 ls -l 命令查看，字符设备文件的第一个字符是 "c"（char）。 ([View Highlight](https://instapaper.com/read/1415146391/16511417)) #Highlight #[[2021-05-27]]
- 在 FIFO 中可以很好地解决在无关进程间数据交换的要求，FIFO 的通信方式类似于在进程中使用文件来传输数据，只不过 FIFO 类型的文件同时具有管道的特性，在读取数据时，FIFO 管道中同时清除数据。 ([View Highlight](https://instapaper.com/read/1415146391/16511421)) #Highlight #[[2021-05-27]]
- 套接字文件，通常指域套接字文件，使用 ls -l 命令查看，第一个字符为 "s"。
  
  域套接字是进程间通信(IPC)的一种方法，是可靠的一种IPC通信，是POSIX标准的一个组件，只能用于同一主机间的通信。 ([View Highlight](https://instapaper.com/read/1415146391/16511423)) #Highlight #[[2021-05-27]]
- 使用-k参数，man可以在所有的man文档和简介中查找符合条件的命令。 ([View Highlight](https://instapaper.com/read/1415146391/16511425)) #Highlight #[[2021-05-27]]
- 有的关键词在系统中对应多个手册， 使用-f参数,用于查找同名的手册： ([View Highlight](https://instapaper.com/read/1415146391/16511428)) #Highlight #[[2021-05-27]]
- man文档的分类编号
  
  1 - commands（普通的命令）
  2 - system calls（系统调用）
  
  3 - library calls（库函数）
  4 - special files（特殊文件：/dev下设备文件）
  5 - file formats and convertions（文件格式）
  
  6 - games for linux（游戏和娱乐）
  7 - macro packages and conventions（杂项）
  8 - system management commands（管理员命令）
  9 - 其他（Linux特定， 用来存放内核例行程序的文档） ([View Highlight](https://instapaper.com/read/1415146391/16511429)) #Highlight #[[2021-05-27]]