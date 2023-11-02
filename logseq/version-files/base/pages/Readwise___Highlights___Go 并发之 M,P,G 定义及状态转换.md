title:: Readwise/Highlights/Go 并发之 M,P,G 定义及状态转换
author:: [[微信公众平台]]
full-title:: Go 并发之 M,P,G 定义及状态转换
category:: #articles
url:: http://mp.weixin.qq.com/s?__biz=MzAwNjMxMTgwNw==&mid=2247491361&idx=1&sn=37b55494305ceda2f8c9dead8f510270&chksm=9b0e0531ac798c27c8f3dca0f768b29d6b5d23d4a91355d9b12569f0c8d304f96aca5c473a28#rd
tags:: #[[favorite]] #[[golang]]

- go语言并发模型调度器的源码大多集中在/runtime/文件夹之下。此文件夹之下有很多文件。包括 .s 类型的汇编码和 .go 类型的go语言源码。
  
  首先编译器通过rt0_linux_arm64.s文件开启Go语言调度器。此文件名后半部分对应着不同的系统版本。 ([View Highlight](https://read.readwise.io/read/01hdg95jem9e2a4yttrq2ex2r8)) #Highlight #[[2023-10-24]]
- **g0**；它不运行代码程序，而是用于各种goroutine在m、p之间的调度 ([View Highlight](https://read.readwise.io/read/01hdg95vdmtmkjnywzr5m52xak)) #Highlight #[[2023-10-24]]
- 创建了一个新线程，用于接下来runtime的初始化和返回；它就是**m0**，毕竟一个线程对应着一个**m**；不管有没有goroutine被创建，一个go进程总要有一个线程的 ([View Highlight](https://read.readwise.io/read/01hdg968fhcrqwpjttnx41bakg)) #Highlight #[[2023-10-24]]
- g0和m0是在proc.go文件中的两个全局变量，**m0就是进程启动后的初始线程**，**g0也是代表着初始线程的stack**。上文提到的汇编中新建的第一个线程就是m0，它在全局变量中， 无需在heap上分配，是一个脱离go本身内存分配机制的存在。而m0中的g0也是全局变量，上面提到的runtime.rt0_go中设置了很多g0的各个成员变量。 ([View Highlight](https://read.readwise.io/read/01hdg9742sax2v99hxwfyyccs1)) #Highlight #[[2023-10-24]]
- **每个之后创建的m也都有自己的g0，负责调度**而不是执行用户程序里面的函数。  
  每个M可以运行各个goroutine，在结构体M的定义中有一个相对特殊的goroutine叫g0。g0的特殊之处在于**它是带有调度栈的goroutine**，下文就将其称为“**m的g0栈**“。Go在执行**调度相关代码**时，**都是使用的m的g0栈。当一个g执行的是调度相关的代码时，它并不是直接在自己的栈中执行，而是先切换到m的g0栈然后再执行代码。**  
  m的g0栈是一个特殊的栈，g0的分配和普通goroutine的分配过程不同，**g0是在m建立时就生成的，并且给它分配的栈空间比较大**，可以假定它的大小是足够大而不必使用分段栈。而**普通的goroutine是在runtime.newproc时建立**（后面会解释），并且初始栈空间分配得很小(4K)，会在需要时增长。不仅如此，**m的g0栈同时也是这个m对应的物理线程的栈。** ([View Highlight](https://read.readwise.io/read/01hdg97tpnvcbnmkgxvtrferv0)) #Highlight #[[2023-10-24]]
- ![Image](https://mmbiz.qpic.cn/mmbiz_jpg/IgylNib7ZE2I7juMgeR4FrdGlw535tyyTc51riaTSvXMQMn21mAAO7IBwyhIJzQdzcfCREgsjvADQXyh5V3ytgCQ/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1) ([View Highlight](https://read.readwise.io/read/01hdg982r3et065neqmdpwsq1n)) #Highlight #[[2023-10-24]]
- Golang调度器有三个主要数据结构。
  
  1.  M，操作系统的线程，被操作系统管理的，原生线程。
    
  2.  G，goroutine，被Golang语言本身管理的线程，该结构体中包含一些指令或者调度的信息。
    
  3.  P，调度的上下文，运行在M上的调度器。
    
  
  他们的数据结构定义都在/runtime2中 ([View Highlight](https://read.readwise.io/read/01hdg99485nc0rxtgxx5e35zqn)) #Highlight #[[2023-10-24]]
- **G**定义了一个比较重要的字段：**atomicstatus**，表示当前这个G的状态：
  
  主要有_Gidle、_Grunnable、_Grunning、_Gsyscall和_Gwaiting五个状态 ([View Highlight](https://read.readwise.io/read/01hdg9bsgbpk3afpv113kg576h)) #Highlight #[[2023-10-24]]
- ![Image](https://mmbiz.qpic.cn/mmbiz_jpg/IgylNib7ZE2I7juMgeR4FrdGlw535tyyTdrWwuyB47Uy0cnibNqY58UYQgmUA7A2N7uwIicpaOt7aS9Dhq4T4KeOg/640?wx_fmt=jpeg&wxfrom=5&wx_lazy=1&wx_co=1) ([View Highlight](https://read.readwise.io/read/01hdg9bxcjv7jt5g9gxy44mbvz)) #Highlight #[[2023-10-24]]
- _Gscan与除_Grunning之外的上述状态之一结合，**以表示GC正在扫描堆栈**。因为状态的转换总是要涉及到堆栈的获取和释放，获取堆栈之前设置_Gscan位；_GscanXXX表示正在扫描，就相当于是互斥锁 ([View Highlight](https://read.readwise.io/read/01hdg9fdgh54bafyf51spjpt8z)) #Highlight #[[2023-10-24]]
- P中定义了一些变量，用来表示线程上下文的“个人”信息（就像id，status，schedtick，syscalltick）；还有与P相关联的m（muintptr，指向m的指针）、与P关联的G（run queue，运行队列）；还有一些有关堆栈、有关实体线程信息的指针和缓存字段 ([View Highlight](https://read.readwise.io/read/01hdg9g9pkydaw2mq9s0vd6k50)) #Highlight #[[2023-10-24]]
- 链接在p上的run queue叫local list，此外还有global list ([View Highlight](https://read.readwise.io/read/01hdg9gjxvb84c2pzb23swq8ww)) #Highlight #[[2023-10-24]]
- status在调度中会经常变换，我们可以看看。包括Pidle、Prunning、Psyscall、Pgcstop、Pdead ([View Highlight](https://read.readwise.io/read/01hdg9gxtrtad140nv54hbcd11)) #Highlight #[[2023-10-24]]
- M的结构。它对应着实体线程。可以看到它有一些对于线程的抽象，比如：procid-线程id、mallocing-分配内存 ([View Highlight](https://read.readwise.io/read/01hdg9ha1x735x77vp5r94zsg4)) #Highlight #[[2023-10-24]]
- **spinning：**m处于一种像纺轮的状态，处于轮转的状态；此时的m没有可以工作的G，正在积极的寻找 ([View Highlight](https://read.readwise.io/read/01hdg9hhmwdj81jxc9m4bjvtj0)) #Highlight #[[2023-10-24]]