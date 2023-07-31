title:: Readwise/Highlights/从源码角度剖析 Golang 如何fork一个进程
author:: [[juejin.cn]]
full-title:: 从源码角度剖析 Golang 如何fork一个进程
category:: #articles
url:: https://juejin.cn/post/7239617977364054075
tags:: #[[go inbox]] #[[inoreader]] #[[博客]] #[[掘金专栏-蓝胖子的编程梦]]

- golang 中 fork 和 execve 创建子进程 的过程 被封装成了一个统一的方法 **forkExec，它能够控制子进程，只继承特定的文件描述符，而对其他文件描述符则进行关闭**。而内核 fork 系统调用则是会对父进程的所有文件描述符进行复制 ([View Highlight](https://read.readwise.io/read/01h25q3pyapyns567ptackwtv4)) #Highlight #[[2023-06-05]]