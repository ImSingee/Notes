title:: Readwise/Highlights/Golang 系统调用与阻塞处理
author:: [[李乾坤]]
full-title:: Golang 系统调用与阻塞处理
category:: #articles
url:: https://qiankunli.github.io/2020/11/21/goroutine_system_call.html
- 在 Go 里面阻塞主要分为以下 4 种场景：
  
  1.  由于原子、互斥量或通道操作调用导致 Goroutine 阻塞，调度器将把当前阻塞的 Goroutine 切换出去，重新调度 LRQ 上的其他 Goroutine；
  2.  由于网络请求和 IO 操作导致 Goroutine 阻塞。Go 程序提供了网络轮询器（NetPoller）来处理网络请求和 IO 操作的问题，其后台通过 kqueue（MacOS），epoll（Linux）或 iocp（Windows）来实现 IO 多路复用。通过**使用 NetPoller 进行网络系统调用**，调度器可以防止 Goroutine 在进行这些系统调用时阻塞 M。这可以让 M 执行 P 的 LRQ 中其他的 Goroutines，而不需要创建新的 M。执行网络系统调用不需要额外的 M，**网络轮询器使用系统线程**，它时刻处理一个有效的事件循环，有助于减少操作系统上的调度负载。用户层眼中看到的 Goroutine 中的“block socket”，实现了 goroutine-per-connection 简单的网络编程模式。实际上是通过 Go runtime 中的 netpoller 通过 Non-block socket + I/O 多路复用机制“模拟”出来的。
  3.  当调用一些系统方法的时候（如文件 I/O），如果系统方法调用的时候发生阻塞，这种情况下，网络轮询器（NetPoller）无法使用，而进行系统调用的 G1 将阻塞当前 M1。调度器引入 其它M 来服务 M1 的P。
  4.  如果在 Goroutine 去执行一个 sleep 操作，导致 M 被阻塞了。Go 程序后台有一个监控线程 sysmon，它监控那些长时间运行的 G 任务然后设置可以强占的标识符，别的 Goroutine 就可以抢先进来执行。 ([View Highlight](https://read.readwise.io/read/01hak183d1meh0e3zfbwfbtmvh)) #Highlight #[[2023-09-18]]
- Go 适合的是网络 IO 密集型的场景，而非磁盘 IO 密集型。甚至可以说，Go 对于磁盘 IO 密集型并不友好。根本原因：在于网络 socket 句柄和文件句柄的不同。网络 IO 能够用异步化的事件驱动的方式来管理，磁盘 IO 则不行 ([View Highlight](https://read.readwise.io/read/01hak18n9cmcxgpafy3g2p38gs)) #Highlight #[[2023-09-18]]
- 系统调用的逻辑是属于 Go 程序外部代码，Go 用 entersyscall 和 exitsyscall 来包装一下，主要是和调度交互。
  
  1.  entersyscall 的作用：把当前 M 的 P 设置为 _Psyscall 状态，打上标识 解绑 P -> M 的绑定，但 M 还保留 P 的指针。
  2.  existsyscall 的作用：由于 M 到 P 的指向还在，那么优先还是用原来的 P。 如果原来的 P 被处理掉了，那么就去用一个新的 P ，如果还没有，那就只能把G 挂到全局队列了。 Go 的 sysmon（内部监控线程）发现有这种卡了超过 10 ms 的 M ，那么就会把 P 剥离出来，给到其他的 M 去处理执行，M 数量不够就会新创建。 ([View Highlight](https://read.readwise.io/read/01hak19eys18gnq0gxcyfyhs7q)) #Highlight #[[2023-09-18]]
- Go 程序启动时，运行时会去启动一个名为 sysmon 的 M（一般称为监控线程），这个 M 的特殊之处在于它不需要绑定 P 就可以运行（以 g0 这个 G 的形式） ([View Highlight](https://read.readwise.io/read/01hak1ad04j18chrdf8qnwqwv2)) #Highlight #[[2023-09-18]]