title:: Readwise/Highlights/深入 Go 并发原语 — Channel 底层实现
author:: [[Halfrost's Field | 冰霜之地]]
full-title:: 深入 Go 并发原语 — Channel 底层实现
category:: #articles
url:: https://halfrost.com/go_channel/
tags:: #[[favorite]] #[[golang]] #[[halfrost\'s field | 冰霜之地]] #[[inoreader]] #[[博客]]  
![](https://img.halfrost.com/2021/04/149_0.png)
作为 Go 并发原语的第一篇文章，一定绕不开 Go 的并发哲学。从 Tony Hoare 写的 Communicating Sequential Processes 这篇文章说起，这篇经典论文算是 Go 语言并发原语的根基。
- lock 锁保护 hchan 中的所有字段，以及此通道上被阻塞的 sudogs 中的多个字段。持有 lock 的时候，禁止更改另一个 G 的状态（特别是不要使 G 状态变成ready），因为这会因为堆栈 shrinking 而发生死锁。
  
  ![](https://img.halfrost.com/Blog/ArticleImage/149_5_.png)
  
  recvq 和 sendq 是等待队列，waitq 是一个双向链表 ([View Highlight](https://read.readwise.io/read/01hpsf0r8v9rjajwhx6fp46f1c)) #Highlight #[[2024-02-17]]
- channel 最核心的数据结构是 sudog。sudog 代表了一个在等待队列中的 g。sudog 是 Go 中非常重要的数据结构，因为 g 与同步对象关系是多对多的。一个 g 可以出现在许多等待队列上，因此一个 g 可能有很多sudog。并且多个 g 可能正在等待同一个同步对象，因此一个对象可能有许多 sudog。sudog 是从特殊池中分配出来的。使用 acquireSudog 和 releaseSudog 分配和释放它们。 ([View Highlight](https://read.readwise.io/read/01hpsexcstnv3h83zqt3pznxzd)) #Highlight #[[2024-02-17]]
- channel 的创建全部调用的 mallocgc()，在堆上开辟的内存空间，channel 本身会被 GC 自动回收 ([View Highlight](https://read.readwise.io/read/01hpzm3bmgep7avc7c7pn0xhwx)) #Highlight #[[2024-02-19]]
- 往 channel 中发送数据并非立即可以从接收方获取到 ... 在 runqput() 函数的作用是把 g 绑定到本地可运行的队列中。此处 next 传入的是 true，将 g 插入到 runnext 插槽中，等待下次调度便立即运行。因为这一点导致了虽然 goroutine 保证了线程安全，但是在读取数据方面比数组慢了几百纳秒。 #Highlight #[[2024-02-19]]