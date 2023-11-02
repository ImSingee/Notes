title:: Readwise/Highlights/25 | 多个活动要安排（上）：多进程如何调度？
author:: [[geekbang.org]]
full-title:: 25 | 多个活动要安排（上）：多进程如何调度？
category:: #articles
url:: https://time.geekbang.org/column/article/391222

- 进程的生命周期
  
  人有生老病死，对于一个进程来说也是一样。一个进程从建立开始，接着运行，然后因为资源问题不得不暂停运行，最后退出系统。这一过程，我们称为进程的生命周期。在系统实现中，通常用进程的状态表示进程的生命周期。进程的状态我们用几个宏来定义，如下所示。
  
  #define TDSTUS_RUN 0 // 进程运行状态
  
  #define TDSTUS_SLEEP 3 // 进程睡眠状态
  
  #define TDSTUS_WAIT 4 // 进程等待状态
  
  #define TDSTUS_NEW 5 // 进程新建状态
  
  #define TDSTUS_ZOMB 6 // 进程僵死状态
  
  可以发现，我们的进程有 5 个状态。其中进程僵死状态，表示进程将要退出系统不再进行调度。那么进程状态之间是如何转换的，别急，我来给画一幅图解释，如下所示。
  
  ![](https://static001.geekbang.org/resource/image/a3/7a/a3ec5e2e1c0dc6acdb50095b20e2977a.jpg?wh=3453x2630)
  
  进程状态切换示意图
  
  上图中已经为你展示了，从建立进程到进程退出系统各状态之间的转换关系和需要满足的条件。 ([View Highlight](https://read.readwise.io/read/01g8srfaa2bf65jmpp58tvvtvs)) #Highlight #[[2022-07-25]]
- CPU 同一时刻只能运行一个进程，而 CPU 个数总是比进程个数少，这就需要让多进程共用一个 CPU，每个进程在这个 CPU 上运行一段时间 ([View Highlight](https://read.readwise.io/read/01hdz7p68yce5mcdcm3g577g4d)) #Highlight #[[2023-10-30]]
- 当一个进程不能获取某种资源，导致它不能继续运行时，就应该让出 CPU。当然你也可以把第一点中的 CPU 时间，也归纳为一种资源，这样就合并为一点：进程拿不到资源就要让出 CPU ([View Highlight](https://read.readwise.io/read/01hdz7pnbjqh5hszgaph5qp6a0)) #Highlight #[[2023-10-30]]
- 每个进程都会依赖一种资源，那就是 CPU 时间，你可以把 CPU 时间理解为它就是 CPU，一个进程必须要有 CPU 才能运行 ([View Highlight](https://read.readwise.io/read/01hdz7q17pjrth1vntfj9jx1pa)) #Highlight #[[2023-10-30]]
- ![](https://static001.geekbang.org/resource/image/a3/7a/a3ec5e2e1c0dc6acdb50095b20e2977a.jpg?wh=3453x2630)
  
  进程状态切换示意图 ([View Highlight](https://read.readwise.io/read/01hdz7qy59c31z0x2z6ddb484w)) #Highlight #[[2023-10-30]]
- 根据调度器入口函数的设计，取得了当前正在运行的进程之后，下一步就是选择下个将要投入运行的进程。
  
  在商业系统中，这个过程极为复杂。因为这个过程是进程调度算法的核心，它关乎到进程的吞吐量，能否及时响应请求，CPU 的利用率，各个进程之间运行获取资源的公平性，这些问题综合起来就会影响整个操作系统的性能、可靠性。 ([View Highlight](https://read.readwise.io/read/01hdz7vzy997sjxa4qba0kzsk3)) #Highlight #[[2023-10-30]]
- 有了前面的基础，现在我们来动手实现进程切换的函数。在这个函数中，我们要干这几件事。
  
  首先，我们把当前进程的通用寄存器保存到当前进程的内核栈中；然后，保存 CPU 的 RSP 寄存器到当前进程的机器上下文结构中，并且读取保存在下一个进程机器上下文结构中的 RSP 的值，把它存到 CPU 的 RSP 寄存器中；接着，调用一个函数切换 MMU 页表；最后，从下一个进程的内核栈中恢复下一个进程的通用寄存器。 ([View Highlight](https://read.readwise.io/read/01hdz7y332bz8vw65fv7hg4w7x)) #Highlight #[[2023-10-30]]