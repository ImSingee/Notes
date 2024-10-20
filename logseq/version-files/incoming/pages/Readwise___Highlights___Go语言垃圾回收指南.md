title:: Readwise/Highlights/Go语言垃圾回收指南
author:: [[涛叔]]
full-title:: Go语言垃圾回收指南
category:: #articles
url:: https://taoshu.in/go/gc-guide.html
tags:: #[[inoreader]] #[[博客]] #[[涛叔]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)
本文是 Go 语言官方文档 A Guide to the Go Garbage Collector 的中译本。我之前尝试总结 Go 语言 GC 相关问题。在准备资料的过程中我发现官方手册基本上是最系统的学习资料了，所以尝试将其译成中文。当今时代机器翻译已经越来智能
- GC 需要在 CPU 时间成本和内存之间做取舍[18](https://taoshu.in/go/gc-guide.html#fn18)。这种取舍取决于多长久执行一次 GC 操作。换句话说就是这种取舍完全由**GC 频率**来定义。 ([View Highlight](https://read.readwise.io/read/01hq7ypvcdbp68rkq7k343af24)) #Highlight #[[2024-02-22]]
- Go 运行时并不保证在所有情况下都能将内存维持在限制以内，它只是尽最大努力来处理。放松内存上限是避免出现假死问题的关键，因为它给了 GC 一种选择：为了避免 GC 消耗太多 CPU 时间，允许内存超过上限 ([View Highlight](https://read.readwise.io/read/01hq7yw3s84zmepsjx6qhyqhyz)) #Highlight #[[2024-02-22]]
- 对于同样的时间窗口，GC 会设置一个可用的 CPU 使用时间上限（时间窗口结束后会有一个很短的 CPU 使用尖峰）。当前该上限大约是 50%，时间窗口是`2 * GOMAXPROCS` CPU 秒数。限制 GC 的 CPU 时间会导致垃圾延迟回收，Go 程序同时也可能继续分配新内存，甚至可能会超出内存的上限。 ([View Highlight](https://read.readwise.io/read/01hq7ywrs6rgqk0gech1y129m5)) #Highlight #[[2024-02-22]]
- Go 的 GC 并非完全是 stop-the-world，而且它的大部分工作会跟应用程序并行执行。这种设计主要为了降低应用程序的**延迟** ([View Highlight](https://read.readwise.io/read/01hq7yy83nzfwe3sxet32pyyaj)) #Highlight #[[2024-02-22]]
- Go GC 避免产生跟堆内存成比例的全局应用暂停时间。它的核心是在程序运行的时候扫描算法也能并行执行。（从算法上看，暂停时间更多是跟 GOMAXPROCS 成正比，但是大部分时间都消耗在停止协程上） ([View Highlight](https://read.readwise.io/read/01hq7yyqpk1tctdexs9pbtskvm)) #Highlight #[[2024-02-22]]