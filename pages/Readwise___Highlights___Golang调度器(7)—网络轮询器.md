title:: Readwise/Highlights/Golang调度器(7)—网络轮询器
author:: [[juejin.cn]]
full-title:: Golang调度器(7)—网络轮询器
category:: #articles
url:: https://juejin.cn/post/7219847723092738106
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- 磁盘IO并不支持非阻塞IO ([View Highlight](https://read.readwise.io/read/01herzergr7nmmvmhdkk1j3zak)) #Highlight #[[2023-11-09]]
- select使用磁盘IO无意义，因为其永远是ready的 ([View Highlight](https://read.readwise.io/read/01herzf9m0qj91dcyq4x62qqgv)) #Highlight #[[2023-11-09]]
- epoll直接不支持磁盘IO ([View Highlight](https://read.readwise.io/read/01herzfbtt5z9zjrawtjf1m94x)) #Highlight #[[2023-11-09]]
- `Go`是一门跨平台的编程语言，而不同平台针对IO多路复用也有不同的实现方式，`Go netpoller`通过在底层对Linux下的`epoll`、freeBSD或者MacOS下的`kqueue`或者Windows下的`iocp`进行封装，实现使用同步编程模式达到异步执行的效果，实现`Go`语言的网络轮询器，提升网络IO密集型应用的效率 ([View Highlight](https://read.readwise.io/read/01herzh99gfd3w4nrqpbfy673g)) #Highlight #[[2023-11-09]]
- `kqueue`支持对磁盘IO做多路复用 ([View Highlight](https://read.readwise.io/read/01herzhepe4r0xw81vwsqnt9et)) #Highlight #[[2023-11-09]]
- `Go`中的`net.Listen`封装了原来C语言建立tcp服务时调用系统调用的`socket -> bind -> listen`三个步骤 ([View Highlight](https://read.readwise.io/read/01herzmdkx25j9m1cwx1z6rgy1)) #Highlight #[[2023-11-09]]
- `net.netFD`是网络描述符，其包含了重要的网络轮询器的结构体`pfd`，类型是`poll.FD` ([View Highlight](https://read.readwise.io/read/01herzpfwfdpw3av4n9xbgyry5)) #Highlight #[[2023-11-09]]
- `netpollBreakRd`和`netpollBreakWr`是注册的管道，用于唤醒`epollwait`函数的，将`netpollBreakRd`注册到`epoll`中，如果需要唤醒`epollwait`阻塞，则利用`netpollBreakWr`在管道这端写入即可 ([View Highlight](https://read.readwise.io/read/01herzwrp42mrspwz40fq5mv3j)) #Highlight #[[2023-11-09]]