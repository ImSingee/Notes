title:: Readwise/Highlights/Goroutine是如何处理栈的？ - Jiajun的编程随想 (44)
author:: [[jiajunhuang.com]]
full-title:: Goroutine是如何处理栈的？ - Jiajun的编程随想
category:: #articles
url:: https://jiajunhuang.com/articles/2020_08_26-goroutine_stack.md.html

- 栈里的地址，只被栈内使用，而堆里没有使用 ([View Highlight](https://instapaper.com/read/1414457057/16517103)) #Highlight #[[2021-05-28]]
- 函数内，变量如果没有被传到函数外，就没有逃逸，否则，则逃逸。对于逃逸的变量，分配到堆上，否则，分配到栈上。 ([View Highlight](https://instapaper.com/read/1414457057/16517113)) #Highlight #[[2021-05-28]]
- Go在1.3以前，是使用一种叫做 segmented stacks 的栈策略。而1.3时，换成了 contiguous stacks ([View Highlight](https://instapaper.com/read/1414457057/16517118)) #Highlight #[[2021-05-28]]
- segmented stacks
  
  在1.2之前，每一个Goroutine创建的时候，都会申请一个8KB大小的空间作为该Goroutine的栈。当8KB用完时，Go会通过 morestack 函数为之 再申请一块内存，然后把两个栈连起来。
  
  当函数返回时，把新申请的那个栈释放掉。
  
  segmented stacks有这么一个缺点，就是当一个栈快要满时，会申请一个 新的栈来执行子函数，当子函数执行完成时，会把栈回收。 如果不断重复上面这个过程，那么就会出现这个Goroutine频繁的申请和释放栈，因此产生了 “hot split” 问题。 ([View Highlight](https://instapaper.com/read/1414457057/16517119)) #Highlight #[[2021-05-28]]
- Go在1.13时，切换到了新的策略，叫做 “contiguous stacks”，它的策略如下：
  
  当栈不够用时，创建一个更大的栈
  把老栈的所有内容copy到新的栈
  调整copy过去的内容中的指针地址(把老栈的地址，改成新栈的)
  销毁老的栈 ([View Highlight](https://instapaper.com/read/1414457057/16517121)) #Highlight #[[2021-05-28]]