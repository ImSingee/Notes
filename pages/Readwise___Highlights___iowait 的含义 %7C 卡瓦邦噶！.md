title:: Readwise/Highlights/iowait 的含义 | 卡瓦邦噶！
author:: [[kawabangga.com]]
full-title:: iowait 的含义 | 卡瓦邦噶！
category:: #articles
url:: https://www.kawabangga.com/posts/5903

![](https://www.kawabangga.com/wp-content/uploads/2017/04/favicon.png)
None
- iowait 是 CPU 的一种状态，表示此时 CPU 正处于 idle 状态，并且至少有一个进程正在等待 IO。 #Highlight #[[2024-04-07]]
- CPU 一共有四种状态。在任一时刻，CPU 的状态都是四种中的一种。这四种状态是：user, sys, idle iowait. #Highlight #[[2024-04-07]]
- 其实准确来说，CPU 只有两种状态：busy 和 idle。Busy 又分成了两种，user 和 system，可以表示 CPU 目前正在执行用户空间的代码，还是正在执行 kernel 空间的代码，方便开发者定位问题。Idle 又分成了两种：idle 和 iowait。笼统来说，idle 就是目前系统中没有 Runnable 的进程了（参考之前的博文：[Linux 进程的生命周期](https://www.kawabangga.com/posts/3636)），iowait 就是目前系统中没有 Runnable 进程（所以说 iowait 是 idle 的一种），并且，有进程卡在 IO 上。 #Highlight #[[2024-04-07]]
- Kernel 会定期更新 counter（AIX，CPU state counter 每个 clock interrrupt 更新，每 10ms 一个 interrupt）。
  
  对于每次更新，检查 CPU 是否是 busy，如果是 busy，检查 CPU 在执行用户态还是内核态的代码，增加相应的计数器。如果不是 busy，那就是 idle，检查此 CPU 之前有没有发出 IO 操作，如果有，那么就增加 iowait，如果没有，那么就增加 idle 的计数器。（所以可以认为这个数值是抽样统计的方法？）
  
  像 sar，top 这种展示工具，就去读 counter，计算时间段内的比例，展示结果。 #Highlight #[[2024-04-07]]
- iowait [只包括文件系统的 IO](https://serverfault.com/questions/37441/does-iowait-include-time-waiting-for-network-calls)，不包括：sockets, pipes, ttys, select(), poll(), sleep(), pause()。 #Highlight #[[2024-04-07]]
- iowait 的时候，如果能有别的事情可以做，CPU 就会去做别的事情 #Highlight #[[2024-04-07]]
- iowait 是一种 idle，如果比例过高，它可以告诉我们几件事情：
  
  *   系统正在做的工作，大部分时间都是在等待 io 了，io 系统的性能不够高（也有可能是硬盘坏了）；
  *   CPU 没有更多的工作可以做了，我们可以给系统分配更多的计算工作；
  *   它不是 CPU 的一种“阻塞”状态，它**不能**说明：CPU 现在在等待 IO，无法运行其他进程。而是：没有可以运行的进程能给 CPU 做； #Highlight #[[2024-04-07]]
- iowiat 是 CPU 角度的一个状态，它不是进程角度的状态。iowait 很低，**不能代表进程没有卡在 IO 上** #Highlight #[[2024-04-07]]