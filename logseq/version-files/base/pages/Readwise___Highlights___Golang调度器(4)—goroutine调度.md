title:: Readwise/Highlights/Golang调度器(4)—goroutine调度
author:: [[juejin.cn]]
full-title:: Golang调度器(4)—goroutine调度
category:: #articles
url:: https://juejin.cn/post/7215967453929799740
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)
- 调度中获取`goroutine`的规则是：
  
  •   每调度61次就需要从全局队列中获取`goroutine`；
  •   其次优先从本P所在队列中获取`goroutine`；
  •   如果还没有获取到，则从其他P的运行队列中窃取`goroutine`； ([View Highlight](https://read.readwise.io/read/01hg2eq3gvj7h146dkdnyh4bz1)) #Highlight #[[2023-11-25]]
- 从其他P队列中窃取`goroutine`，调用的是`findrunnable`函数 ([View Highlight](https://read.readwise.io/read/01hg2eq7zzk05cheh5vnjxq44v)) #Highlight #[[2023-11-25]]
- 工作线程会反复尝试寻找运行的`goroutine`，实在找不到的情况下才会进入到睡眠。需要注意的是，**工作线程M从其他P的本地队列中盗取`goroutine`时的状态称之为自旋（spinning）状态**，而前面讲到`wakep`调用`startm`函数，也是优先从自旋状态的M中选取，实在没有才去唤醒休眠的M，再没有就创建新的M ([View Highlight](https://read.readwise.io/read/01hg2eqm334w1pe8hkqbmse112)) #Highlight #[[2023-11-25]]
- 窃取算法`stealWork` ([View Highlight](https://read.readwise.io/read/01hg2eqqe7tmfzj8e4edr812hn)) #Highlight #[[2023-11-25]]
- `stopm`主要是将m对象放到调度器的空闲线程队列，然后通过`notesleep`进入睡眠状态。`note`是`go runtime`实现的一次性睡眠和唤醒机制，通过`notesleep`进入睡眠状态，然后另一个线程可以通过`notewakeup`唤醒这个线程 ([View Highlight](https://read.readwise.io/read/01hg2er101cv5za4dbqssm1rpb)) #Highlight #[[2023-11-25]]