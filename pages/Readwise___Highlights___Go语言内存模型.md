title:: Readwise/Highlights/Go语言内存模型
author:: [[涛叔]]
full-title:: Go语言内存模型
category:: #articles
url:: https://taoshu.in/go/memory-model.html
tags:: #[[inoreader]] #[[博客]] #[[涛叔]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

- **程序在读取内存数据时，如果数据的长度为一个字长[2](https://taoshu.in/go/memory-model.html#fn2)或者半个字长，那么读取的结果一定是原子的**。换句话说就是要么读到更新前的值、要么读到更新后的值，而绝不会读到更新了「一半」的值。这简化了调试和排错过程 ([View Highlight](https://read.readwise.io/read/01hhe8jh1z5jfxxapk7ez1cptn)) #Highlight #[[2023-12-12]]
- 所谓内存模型，其实是一种技术规范，它规定了在不显式同步的情况下，不同协程并发读写相同区域内存的行为。具体来说包含两部分。一部分是明确了特定并发场景下各协程的执行顺序。另一部分是规定了多协程并发更新同一内存区域后，更新结果能否被其他协程读取到的具体规则。 ([View Highlight](https://read.readwise.io/read/01hhe8k38vha6mvesrm62gmwwt)) #Highlight #[[2023-12-12]]
- 协程退出并**不保证**一定会执行数据同步 ([View Highlight](https://read.readwise.io/read/01hhecb2wd6mactn0gzjnqra77)) #Highlight #[[2023-12-12]]
- `runtime`包提供`SetFinalizer`函数，可以在特定对象注册「类析构」函数，运行时会在内存回收之前执行该函数。调用`SetFinalizer(x, f)`之前的改动会完成数据同步，`f`在执行的时候可以读取到 ([View Highlight](https://read.readwise.io/read/01hhecbxfbmcpf5736899jcwb7)) #Highlight #[[2023-12-12]]