title:: Readwise/Highlights/「RustCn 翻译计划」异步 Rust：协作与抢占式调度 (65)
author:: [[知乎专栏]]
full-title:: 「RustCn 翻译计划」异步 Rust：协作与抢占式调度
category:: #articles
url:: https://zhuanlan.zhihu.com/p/499791233

- 抢占式调度有很多优点
  
  •   更易于学习：对于开发者来说，异步和同步代码是一样的。
  •   几乎不可能被滥用：因为运行时会帮我们打理好一切。 ([View Highlight](https://read.readwise.io/read/01ga2xg3g2e4k56hpdzzzd15z3)) #Highlight #[[2022-08-12]]
- 抢占式调度也有一些缺点：
  
  •   速度：完全取决于运行时的管理能力
  •   难以调试：如果运行时出现 bug，可能很难发现原因，因为运行时对于开发者就像黑魔法。 ([View Highlight](https://read.readwise.io/read/01ga2xg83k2w9y1trw2whbahfh)) #Highlight #[[2022-08-12]]
- 使用协作式调度时，异步程序必须非常谨慎的对待计算密集型操作 ([View Highlight](https://read.readwise.io/read/01ga2xhxxczayae9sfr3115jsp)) #Highlight #[[2022-08-12]]
- Rust 本身只提供了异步编程所需的基本特性，例如 `async/.await` 关键字，`Future` 特征等。但是并不提供执行 `Futures` 和  
  `Streams` 执行所需的上下文环境。这个执行上下文被称为运行时。如果没有运行时，你就不能运行异步代码。 ([View Highlight](https://read.readwise.io/read/01ga2xjbjy8ejn5bjqs974v14h)) #Highlight #[[2022-08-12]]
- 不要直接调用可能运行超过  
  [10 到 100 微秒](https://link.zhihu.com/?target=https%3A//ryhl.io/blog/async-what-is-blocking/)的函数。你应该将这些任务放到单独的阻塞队列里。 ([View Highlight](https://read.readwise.io/read/01ga2xmzpm6ps8ebcmr3kewjdb)) #Highlight #[[2022-08-12]]
- Tokio 在底层维护着两个线程池。
  
  一个是固定大小的线程池，分配给执行异步任务的执行器（事件循环、处理器）。可以使用 `tokio::spawn` 将异步任务分派到此线程池
  
  还有一个动态大小的线程池，分配给阻塞任务使用。
  
  默认情况下，后者将增长到 512 个线程，它的大小会根据正在运行的阻塞任务数量而扩大或缩小。可以使用  
  `tokio::task::spawn_blocking` 将阻塞任务分派到此线程池。 ([View Highlight](https://read.readwise.io/read/01ga2xp49dnr7bm7z6y4tc7zts)) #Highlight #[[2022-08-12]]