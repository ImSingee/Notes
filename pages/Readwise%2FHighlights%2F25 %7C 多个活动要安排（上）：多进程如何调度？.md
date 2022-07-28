title:: Readwise/Highlights/25 | 多个活动要安排（上）：多进程如何调度？
author:: [[geekbang.org]]
full-title:: 25 | 多个活动要安排（上）：多进程如何调度？
category:: #articles
url:: https://time.geekbang.org/column/article/391222

- 进程的生命周期
  
  人有生老病死，对于一个进程来说也是一样。一个进程从建立开始，接着运行，然后因为资源问题不得不暂停运行，最后退出系统。这一过程，我们称为进程的生命周期。在系统实现中，通常用进程的状态表示进程的生命周期。进程的状态我们用几个宏来定义，如下所示。
  
  #define TDSTUS_RUN 0 // 进程运行状态
  
  #define TDSTUS_SLEEP 3 // 进程睡眠状态
  
  #define TDSTUS_WAIT 4 // 进程等待状态
  
  #define TDSTUS_NEW 5 // 进程新建状态
  
  #define TDSTUS_ZOMB 6 // 进程僵死状态
  
  可以发现，我们的进程有 5 个状态。其中进程僵死状态，表示进程将要退出系统不再进行调度。那么进程状态之间是如何转换的，别急，我来给画一幅图解释，如下所示。
  
  ![](https://static001.geekbang.org/resource/image/a3/7a/a3ec5e2e1c0dc6acdb50095b20e2977a.jpg?wh=3453x2630)
  
  进程状态切换示意图
  
  上图中已经为你展示了，从建立进程到进程退出系统各状态之间的转换关系和需要满足的条件。 ([View Highlight](https://read.readwise.io/read/01g8srfaa2bf65jmpp58tvvtvs)) #Highlight #[[2022-07-25]]