title:: Readwise/Highlights/Golang Pprof监控系列（2） —— Memory，block，mutex 使用
author:: [[juejin.cn]]
full-title:: Golang Pprof监控系列（2） —— Memory，block，mutex 使用
category:: #articles
url:: https://juejin.cn/post/7215523663217737786
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- allocs ,heap
  
  这两个值都是记录程序内存分配的情况。 ([View Highlight](https://read.readwise.io/read/01gxmhr7k4ge77za9tarhkyv4e)) #Highlight #[[2023-04-10]]
- 按 pprof http 服务器启动网页上的显示来说，allocs 是过去内存的采样，heap 是存活对象的采用记录，然而实际上在代码实现上两者是一致的。并没有做区分。 ([View Highlight](https://read.readwise.io/read/01gxmhrmw7nq92jwpv0bk82j50)) #Highlight #[[2023-04-10]]
- heap profile: 7: 5536 [110: 2178080] @ heap/1048576
    复制代码
  
  输出的第一行含义分别是: 7 代表 当前活跃的对象个数 5536 代表 当前活跃对象占用的字节数 110 代表 所有 (包含历史的对象) 对象个数 2178080 代表 所有对象 (包含历史的对象) 占用的对象字节数 1048576 控制了内存采样的频率，1048576 是两倍的内存采样频率的大小，默认采样频率是 512kb 即平均每 512kb 就会采样一次，注意这个值 512kb 不是绝对的达到 512kb 就会进行采样，而是从一段时间内的采样来看的一个平均值。 ([View Highlight](https://read.readwise.io/read/01gxmjd4gdsks4km3eh8fa3ayt)) #Highlight #[[2023-04-10]]
- block 会对哪些行为产生记录，每次程序锁阻塞发生时，select 阻塞，channel 通道阻塞，wait group 产生阻塞时就会记录一次阻塞行为。对阻塞行为的记录其实是和 trace 的 Synchronization blocking profile 是一致的，但是和其他两个 blocking profile 不一样。 ([View Highlight](https://read.readwise.io/read/01gxmjfenfw6knfhf949ykx356)) #Highlight #[[2023-04-10]]
- 要得到 block 的输出信息首先要开启下记录 block 的开关.
  
       // 1 代表 全部采样，0 代表不进行采用， 大于1则是设置纳秒的采样率
    	runtime.SetBlockProfileRate(1) ([View Highlight](https://read.readwise.io/read/01gxmjfy7rx15dmjhs3gw75jrh)) #Highlight #[[2023-04-10]]
- --- contention:
    cycles/second=1000000000
    180001216583 1 @ 0x1002a1198 0x1005159b8 0x100299fc4
- 无论是阻塞周期时长还是次数，都是一个累加值，即在相同的地方阻塞会导致这个值变大，并且次数会增加。剩下的部分就是函数堆栈信息了。 ([View Highlight](https://read.readwise.io/read/01gxmjn8nvew1ezpxna9r1q387)) #Highlight #[[2023-04-10]]
- mutex 是在解锁 unlock 时才会记录一次阻塞行为，而 block 在记录 mutex 锁阻塞信息时，是在开始执行 lock 调用的时候记录的。 ([View Highlight](https://read.readwise.io/read/01gxmjqhpwc5b4q2vh2tgr2d6h)) #Highlight #[[2023-04-10]]
- 要想记录 mutex 信息，和 block 类似，也需要开启 mutex 采样开关。
  
       // 0 代表不进行采用， 1则全部采用，大于1则是一个随机采用
       	runtime.SetMutexProfileFraction(1) ([View Highlight](https://read.readwise.io/read/01gxmjqwfpvtwpya2wj5pnj429)) #Highlight #[[2023-04-10]]