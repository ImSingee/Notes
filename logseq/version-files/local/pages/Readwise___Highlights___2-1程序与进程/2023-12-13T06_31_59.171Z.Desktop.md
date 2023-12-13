title:: Readwise/Highlights/2-1程序与进程
author:: [[王二]]
full-title:: 2-1程序与进程
category:: #articles
url:: https://w.toomore.us/posts/dev/liunx%E4%B8%8Bphp%E5%A4%9A%E8%BF%9B%E7%A8%8B%E7%BC%96%E7%A8%8B/%E7%AC%AC%E4%BA%8C%E7%AB%A0%E8%BF%9B%E7%A8%8B%E7%8E%AF%E5%A2%83/2-1%E7%A8%8B%E5%BA%8F%E4%B8%8E%E8%BF%9B%E7%A8%8B/
tags:: #[[inoreader]] #[[star]] #[[博客]]

- ELF文件种类：[#](https://w.toomore.us/posts/dev/liunx%E4%B8%8Bphp%E5%A4%9A%E8%BF%9B%E7%A8%8B%E7%BC%96%E7%A8%8B/%E7%AC%AC%E4%BA%8C%E7%AB%A0%E8%BF%9B%E7%A8%8B%E7%8E%AF%E5%A2%83/2-1%E7%A8%8B%E5%BA%8F%E4%B8%8E%E8%BF%9B%E7%A8%8B#elf文件种类)
  
  1.  EXEC 可执行文件
    
  2.  object code 目标代码文件
    
  3.  shared libraries 共享库文件
    
  4.  REL 可重定位文件
    
    > 在Linux中为 xx.o xx.a，也称为静态库文件，其中 xx.o 称为目标文件，可被链接器链接成为可执行文件，静态库文件，动态库文件。
    
    > 示例：php扩展中常用的动态库文件如curl,网络框架库如event.so socket扩展库sockets.so
    
    > c/c++项目程序员一般引用第三方的库函数都是使用第三方编译好的动态库或是静态库文件 .so, .a。
    
  5.  core dump 核心转储文件
    
    > 存储进程产生的异常信息。是操作系统在进程收到某些信号而终止运行时，将此时进程地址空间的内容以及有关进程状态的其他信息写入一个磁盘文件。这种信息往往用于调试。 ([View Highlight](https://read.readwise.io/read/01he4hqjsdy1eaxdbsvqqc8vms)) #Highlight #[[2023-11-01]]