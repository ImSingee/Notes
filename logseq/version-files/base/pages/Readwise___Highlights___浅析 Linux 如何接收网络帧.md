title:: Readwise/Highlights/浅析 Linux 如何接收网络帧
author:: [[Waynerv]]
full-title:: 浅析 Linux 如何接收网络帧
category:: #articles
url:: https://www.waynerv.com/posts/how-linux-process-input-frames/
tags:: #[[inoreader]] #[[shall we code?]] #[[博客]]  
![](https://waynerv.com/2022-04-21-soft-interrupt.png)
本文将从初学者角度，介绍 Linux 内核如何接收网络帧：从网卡设备完成数据帧的接收开始，到数据帧被传递到网络栈中的第三层结束。着重介绍内核的工作机制，不会深入过多驱动层面的细节，示例代码来自 Linux 2.6。
- CPU 在执行中断号对应处理程序的期间处于中断上下文，中断会被禁用。这意味着 CPU 在处理某个中断期间，它既不会处理其他中断，也不能被其他进程抢占，CPU 资源由该中断处理程序独占。这种设计决定减少了竞争条件的可能性，但也带来了潜在的性能影响。
  
  显然，中断处理程序应当尽可能快地完成工作。不同的中断事件所需要的处理工作量并不相同，比如当键盘的按键被按下时，触发的中断处理函数只需要将该按键的编码记录下来，而且这种事件的发生频率不会很高；而处理网络设备收到的新数据帧时，需要为 `skb` 分配内存空间，拷贝接收到的数据，同时完成一些初始化工作比如判断数据所属的网络协议等。
  
  为了尽量减少 CPU 处于中断上下文的时间，操作系统为中断处理程序引入了上、下半部的概念。 ([View Highlight](https://read.readwise.io/read/01hq29x9fh2nknfw5n5grypmk3)) #Highlight #[[2024-02-20]]
- 现代中断处理程序被分为上半部和下半部。上半部分执行在释放 CPU 资源之前必须完成的工作，如保存接收的数据；下半部分则执行可以在推迟到空闲时完成的工作，如完成接收数据的进一步处理。
  
  你可以认为下半部是一个可以异步执行的特定函数。当一个中断触发时，有些工作并不要求马上完成，我们可以把这部分工作包装为下半部处理程序延后执行。 上、下半部工作模型可以有效缩短 CPU 处于中断上下文（即禁用中断）的时间 ([View Highlight](https://read.readwise.io/read/01hq29y7hw5tve2sbtd8qa5ee7)) #Highlight #[[2024-02-20]]
- Linux 为下半部处理实现了多种不同的机制：软中断、微任务和工作队列，这些机制同样适用于操作系统中的延时任务 ([View Highlight](https://read.readwise.io/read/01hq29yk4q3am60qahtxb790vj)) #Highlight #[[2024-02-20]]