title:: Readwise/Highlights/Golang Pprof 监控系列(1) —— Go Trace 统计原理与使用
author:: [[juejin.cn]]
full-title:: Golang Pprof 监控系列(1) —— Go Trace 统计原理与使用
category:: #articles
url:: https://juejin.cn/post/7214024762855260215
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]
- 在分析延迟性问题的时候，go tool trace 能起到很重要的作用，因为它会记录各种延迟事件并且对其进行时长分析，连关键代码位置也能找出来。 ([View Highlight](https://read.readwise.io/read/01gxmfydrc77w7w106d6j4rrbv)) #Highlight #[[2023-04-10]]
- 在使用 prometheus 对应用服务进行监控时，我们主要还是采用埋点的方式，同样，go runtime 内部也是采用这样的方式对代码运行过程中的各种事件进行埋点，最后读取 整理后的埋点数据，形成我们在网页上看的 trace 监控图 ([View Highlight](https://read.readwise.io/read/01gxmg0yz6qkxzsm73mx5d1wdk)) #Highlight #[[2023-04-10]]
- 拿计算系统调用耗时来说，系统调用相关的事件有 GoSysExit,GoSysCall 分别是系统调用退出事件和系统调用开始事件，所以 GoSysExit.Ts - GoSysCall.Ts 就是系统调用的耗时。 ([View Highlight](https://read.readwise.io/read/01gxmg49beg5vmjhggs0r4xewq)) #Highlight #[[2023-04-10]]
- runtime 内部用到的监控事件枚举在 src/runtime/trace.go:39 位置 ，而 在读取文件中的监控事件用到的枚举是 在 src/internal/trace/parser.go:1028 ，虽然是两套，但是值是一样的。 ([View Highlight](https://read.readwise.io/read/01gxmg5frgaqznjzjbd7k9f387)) #Highlight #[[2023-04-10]]
- Goroutine analysis
  
  ![Goroutine analysis 页面显示](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13204300f74f4ac8910b9b37a3c6d64a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp) 进入到了一个显示代码调用位置的列表，列表中的每个代码位置都是事件 EvGoStart 协程开始运行时的位置，其中 N 代表 在采用期间 在这个位置上有 N 个协程开始过运行。 ([View Highlight](https://read.readwise.io/read/01gxmg776z5j3t2ryhdnnx4xga)) #Highlight #[[2023-04-10]]
- runtime 在记录协程开始执行的事件 EvGoStart 时，是会把栈帧也记录下来的，而栈帧中包含函数名和程序计数器 (PC) 的值，在 Goroutine analysis 页面 中就是协程就是按 PC 的值进行分组的 ([View Highlight](https://read.readwise.io/read/01gxmg7r76y7arf7n80za22haq)) #Highlight #[[2023-04-10]]
- 停顿则是由锁 block，系统调用阻塞，网络等待，抢占调度造成的 ([View Highlight](https://read.readwise.io/read/01gxmganccg28jax9v3kbk5r1c)) #Highlight #[[2023-04-10]]
- Sync block 时长是由于 锁 sync.mutex ，通道 channel，wait group，select case 语句产生的阻塞都会记录到这里 ([View Highlight](https://read.readwise.io/read/01gxmgb7xmcka83rtnjc068weq)) #Highlight #[[2023-04-10]]
- Scheduler wait 是协程从可执行状态到执行状态的时间段，注意协程是可执行状态时 是会放到 p 运行队列等待被调度的，只有被调度后，才会真正开始执行代码 ([View Highlight](https://read.readwise.io/read/01gxmgdbs1qh78n31p5zh06dp9)) #Highlight #[[2023-04-10]]
- golang 的这个 trace 工具，还允许用户可以自定义监控事件 ，生成的 trace 网页里，User-defined tasks，User-defined regions 就是记录用户自定义的一些监控事件 ([View Highlight](https://read.readwise.io/read/01gxmgcrxxwz7q2tycy2ks1p32)) #Highlight #[[2023-04-10]]