title:: Readwise/Highlights/9张图轻松吃透Go内存管理单元 : 掘金
author:: [[juejin.cn]]
full-title:: 9张图轻松吃透Go内存管理单元 : 掘金
category:: #articles
url:: https://juejin.cn/post/7094060088217829390
tags:: #[[inoreader]] #[[read]] #[[star]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)
导读 想深入了解Go语言的内存管理实现，必然绕不开「Go内存管理单元mspan」，今天我们就通过几张图，层层深入并解开「Go内存管理单元mspan」的神秘面纱。 本文也包含的具体概念如下： page的
- 操作系统是按`page`管理内存的，同样Go语言也是也是按`page`管理内存的，1page为8KB，保证了和操作系统一致 ([View Highlight](https://read.readwise.io/read/01hpgyhmnpac6z47x3jh9ssqvd)) #Highlight #[[2024-02-13]]
- Go内存管理单元`mspan`通常由**N个**且**连续**的`page`组成 ([View Highlight](https://read.readwise.io/read/01hpgyhrx077qbcxzqbnc045kf)) #Highlight #[[2024-02-13]]
- `FreeList`本质上还是个`LinkedList`，和`LinkedList`的区别：
  
  •   `FreeList`没有`Next`属性，所以不是用`Next`属性存放下一个节点的指针的值。
  •   `FreeList`“相当于使用了`Value`的前8字节”(其实就是整块内存的前8字节)存放下一个节点的指针。
  •   分配出去的节点，节点整块内存空间可以被复写(指针的值可以被覆盖掉) ([View Highlight](https://read.readwise.io/read/01hpgym8cbs71takj6wqywtefz)) #Highlight #[[2024-02-13]]
- Go内存管理单元`mspan`被分为了两类：
  
  •   第一类：需要垃圾回收扫描的`mspan`，简称`scan`
  •   第二类：不需要垃圾回收扫描的`mspan`，简称`noscan` ([View Highlight](https://read.readwise.io/read/01hpgynaerhgfyftqbhj73sxaj)) #Highlight #[[2024-02-13]]