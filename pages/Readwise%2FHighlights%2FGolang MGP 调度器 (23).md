title:: Readwise/Highlights/Golang MGP 调度器 (23)
author:: [[mp.weixin.qq.com]]
full-title:: Golang MGP 调度器
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MzAwNjMxMTgwNw==&mid=2247490447&idx=1&sn=6b9d3acfa7c86a04dab3fc54eedabca7&chksm=9b0e019fac798889170b189d7476ec382b5bc19ebfc9c7ceabe6b4322d3323dc7d2ab4bdd359

- Runtime 所担任的职责：goroutines 调度，垃圾回收，当然还提供goroutines 执行的环境 #Highlight #[[2022-02-04]]
- go 的可执行程序可以分成两个层：用户代码和运行时 #Highlight #[[2022-02-04]]
- 线程这里可以创建不止一个，可以按需不断地创建，而活跃的线程（处于非阻塞状态的线程）的最大个数存储在变量GOMAXPROCS中 #Highlight #[[2022-02-04]]
- 一个 G 代表一个 goroutine，包含当前栈，当前状态和函数体。 #Highlight #[[2022-02-04]]
- 造成阻塞的都是系统调用，在调用返回之前，线程会一直则塞。但是注意，M 不会在 channel 的操作中阻塞，这是因为操作系统并不知道 channel ，channel 的所有的操作都是有运行时来处理的。所以如果 goroutine 执行了channel 操作，这时 goroutine可能会需要阻塞，但是这个阻塞不是操作系统带来的阻塞，因此M并不需要一起阻塞。这种场景下，这个 G 会被标记为 waiting，然后原来执行这个 G 的 M 会继续去执行别的 G。waiting 的 G 在 channel 操作完成后会设为runable状态，并等待空闲的 M 来执行，不一定是先前那个 M 了。 #Highlight #[[2022-02-04]]
- GOMAXPROCS用来控制 P 的个数，同时 P 作为 M 执行 G 代码时的必需资源。 #Highlight #[[2022-02-04]]
- SCHED 结构保留全局 G 队列，同时每个 P 中都会有一个本地的 G 队列 #Highlight #[[2022-02-04]]
- 当一个新的 G 被创建的时候，G 被放到当前 M 所关联的 P 的本地队列结尾，这样 G 虽然不是立即执行，但最终会得到执行。 #Highlight #[[2022-02-04]]
- 当一个 P 执行完本地所有的 G 之后，会尝试随机挑选一个受害者 P，从它的 G 队列中窃取一半的 G #Highlight #[[2022-02-04]]
- P 的算法中还会每个 N 轮调度之后就去全局队列拿一个 G 。那么全局队列的 G 又是谁放进去的呢？是在新建 G 时 P 的本地 G 队列放不下的时候会放半数 G 到全局队列去,阻塞的系统调用返回时找不到空闲 P 也会放到全局队列。 #Highlight #[[2022-02-04]]
- 线程自旋，自旋有好处有坏处，好处是避免线程被阻塞陷入内核，坏处是自旋属于空转，浪费 CPU #Highlight #[[2022-02-04]]
- sysmon 主要做下面几个事:释放闲置超过5 分钟的 span 物理内存；如果超过2分钟没有垃圾回收，强制执行；将长时间未处理的 netpoll 结果添加到全局 G 队列；向长时间运行的 G 任务发出抢占调度；收回因 syscall 长时间阻塞的 P； #Highlight #[[2022-02-04]]
- 当 sysmon 发现一个 p 一直处于 running 状态超过了 10ms，那么就给这个 g 设置一个标志位，随后等到这个 g 调用新函数的时候，会检查到这个标志位，并且重新进行调度，不让这个 g 继续执行。 #Highlight #[[2022-02-04]]
- 不过并不是设置了标志位就一定会被调度，这里有两个条件，一个是 g 必须调用函数，否则如果是一个简单的死循环是无法抢占成功的；另一个条件是即使调用了新函数，如果新函数所需的栈空间很少，那么也不会触发检查这个标志位，只有调用了会触发栈空间检查（所需栈大于128字节，详见知乎回答 https://www.zhihu.com/question/308020301/answer/587239642）的函数，才会抢占成功。 #Highlight #[[2022-02-04]]
- golang 的 goroutines 是基于 CSP(Communicating Sequential Processes)理论模型来设计的 #Highlight #[[2022-02-04]]
- CSP 主要是指两个独立的 Process，通过共享 Channel 来交互。并发模型除了 CSP 另外还有 Actors 模型 #Highlight #[[2022-02-04]]
- CSP 模型就是 coroutine+channel 的模式。 #Highlight #[[2022-02-04]]
- Actors 模型就是 coroutine+message 的模式。 #Highlight #[[2022-02-04]]
- CSP 没有定义容错方面的内容，所以开发者需要自己处理 channel 接收和发送的错误，这些错误处理逻辑可能会到处都是。Actors 支持容错，你可以定义错误的类型，错误处理方式，错误的级别等。 #Highlight #[[2022-02-04]]