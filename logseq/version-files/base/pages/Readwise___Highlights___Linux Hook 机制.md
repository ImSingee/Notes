title:: Readwise/Highlights/Linux Hook 机制
author:: [[Shadow Walker 松烟阁]]
full-title:: Linux Hook 机制
category:: #articles
url:: https://www.edony.ink/details-of-linux-hook/
tags:: #[[inoreader]] #[[shadow walker 松烟阁]] #[[博客]]  
![](https://www.edony.ink/content/images/2022/12/ED08A607-22C6-4910-AEDC-C5EAA293679D.png)
Linux hook 有很多中实现方式，从 ring0 到 ring3 都有对应的实现方式。
- 在 Linux 下，ELF 文件 的 GOT 被拆分成`.got`和`.got.plt`2个表。其中`.got`用来保存全局变量引用的地址，`.got.plt`用来保存函数引用的地址 ([View Highlight](https://read.readwise.io/read/01hr45xngdwqycg50ftk1xcbph)) #Highlight #[[2024-03-04]]
- Linux 设计了一段比较精巧的指令来实现延迟重定位，历史的版本是进程运行的时候，如果依赖动态库，那么运行之前，需要把程序依赖的动态库里面的每个变量和函数都初始化 GOT 表，这样的后果就是如果依赖比较多，加载缓慢； 后来通过 PLT 设计了延迟加载的功能， 主要思想是第一次运行的时候，通过一段跳转指令， 转去动态链接器中的 `_dl_runtime_resolve` 函数查找，查找后写入 GOT，第二次的时候便可以直接访问 GOT，直接地址访问。 ([View Highlight](https://read.readwise.io/read/01hr45ypt07m26fzmyz4159yy8)) #Highlight #[[2024-03-04]]