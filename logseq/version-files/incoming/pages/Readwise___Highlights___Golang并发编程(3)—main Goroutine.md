title:: Readwise/Highlights/Golang并发编程(3)—main Goroutine
author:: [[juejin.cn]]
full-title:: Golang并发编程(3)—main Goroutine
category:: #articles
url:: https://juejin.cn/post/7212937418961895481
tags:: #[[go inbox]] #[[inoreader]] #[[博客]] #[[掘金专栏-iguochan]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)
上一篇博客我们分析了调度器的初始化，这篇博客我们正式进入main函数及为其创建的goroutine的过程分析。 以上代码创建了一个新的协程（在Go中，go func()之类的相当于调用runtime.
- systemstack函数的作用是切换到系统栈来执行其参数函数，也就是`g0`栈 ([View Highlight](https://read.readwise.io/read/01hncejjxqfap71xbd04fwbyqr)) #Highlight #[[2024-01-30]]