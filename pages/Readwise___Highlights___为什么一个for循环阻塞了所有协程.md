title:: Readwise/Highlights/为什么一个for循环阻塞了所有协程
author:: [[封幼麟]]
full-title:: 为什么一个for循环阻塞了所有协程
category:: #articles
url:: https://fengyoulin.com/for-block-all.html

- 现在主流的协程实现，比如Go和Lua中的协程，运行时并不会主动抢占，都是以协程主动让出CPU的方式来进行调度的，所以如果某个协程很长时间不让出CPU，就会对整体调度造成影响。
  
  *注：Go1.14已经实现了真正意义上的抢占，不用再担心for循环阻塞GC了，这个以后再聊。*
  
  协程主动让出CPU是通过运行时中的调度代码实现的，要求当前执行线程的指令流必须能够从用户编写的代码中跳出，回到运行时调度逻辑中，才能完成这一操作。Lua中的协程通过调用coroutine.yield来主动让出CPU，Go的运行时提供了runtime.Gosched来实现同样的功能。
  
  Go语言gc执行STW时密切依赖协程调度，它会设置运行时中的gcwaiting标识，其他的执行线程在调度协程时会检测到该标识，然后主动暂停运行。当所有其他线程都暂停运行后，发起并等待STW完成的gc线程得以继续执行。上述main函数中的for循环把当前执行线程的指令流限制在了循环体内 ，无法回到Go runtime中执行调度代码，从而无法停止自己，进而影响到了STW。 ([View Highlight](https://read.readwise.io/read/01hdg45wr7ha8tekaqn5y06p7r)) #Highlight #[[2023-10-24]]
- 如果了解过Go语言的运行时栈增长的话，应该知道编译器会在一些函数的入口处加入检测代码，按需进行栈增长。其实协程能够主动让出CPU，也依赖于这部分插入的代码。 ([View Highlight](https://read.readwise.io/read/01hdg46809rbv2xrrznkjz1kag)) #Highlight #[[2023-10-24]]
- runtime.morestack_noctxt就是编译器安插在函数入口处，用来按需进行栈增长的。因为fibR是递归函数，对栈空间有较大消耗，所以编译器插入了栈增长代码，在一些基本上不消耗栈空间的函数里是不会插入这个调用的，如fib。
  
  继续追踪下去，最终在栈增长调用的runtime.newstack里发现了调度相关的逻辑，在进行栈增长的同时会判断是否需要进行协程调度，按需让出CPU ([View Highlight](https://read.readwise.io/read/01hdg46pjhc6zxzrrgrvfd0f6v)) #Highlight #[[2023-10-24]]