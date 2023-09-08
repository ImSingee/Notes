title:: Readwise/Highlights/Golang Pprof 监控系列(3) —— Memory，block，mutex 统计原理
author:: [[juejin.cn]]
full-title:: Golang Pprof 监控系列(3) —— Memory，block，mutex 统计原理
category:: #articles
url:: https://juejin.cn/post/7218411904699908156
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]
- memory，block，mutex 把这 3 类数据放在一起讲，是因为他们统计的原理是很类似的。今天来看看它们究竟是如何统计的。
  
  先说下结论，**这 3 种类型在 runtime 内部都是通过一个叫做 bucket 的结构体做的统计**，bucket 结构体内部有指针指向下一个 bucket 这样构成了 bucket 的链表，每次分配内存，或者每次阻塞产生时，会判断是否会创建一个新的 bucket 来记录此次分配信息。 ([View Highlight](https://read.readwise.io/read/01gxmjvk5czytcqjae776sxpnm)) #Highlight #[[2023-04-10]]
- allnext 指针的作用就是形成一个链表结构，刚才提到的每次记录分配信息时，如果新增了 bucket，那么这个 bucket 的 allnext 指针将会指向 bucket 的链表头部。 ([View Highlight](https://read.readwise.io/read/01gxmjx13ndfxpspwybfqgv940)) #Highlight #[[2023-04-10]]
- **buckethash 结构，无论那种指标类型，只要有 bucket 结构被创建，那么都将会在 buckethash 里存上一份**，而 buckethash 用于解决 hash 冲突的方式则是将冲突的 bucket 通过指针形成链表联系起来，这个指针就是刚刚提到的 next 指针了。 ([View Highlight](https://read.readwise.io/read/01gxmjwt57x0tcp5y83wpj5dxe)) #Highlight #[[2023-04-10]]