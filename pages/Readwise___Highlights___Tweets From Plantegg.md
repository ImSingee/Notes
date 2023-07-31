title:: Readwise/Highlights/Tweets From Plantegg
author:: [[@plantegg on Twitter]]
full-title:: Tweets From Plantegg
category:: #tweets
url:: https://twitter.com/plantegg

- 一语惊醒梦中人的感觉最爽，我是做了10年性能优化后碰到了一次醍醐灌顶般的醒悟
  这之后，无数次只需要看一眼服务的RT、CPU状态就能很快给出服务的极限QPS是多少。
  
  这个原理最简单的总结就是：QPS和延时的乘积是常量（复杂版总结如图1）；分析案例如图2 
  
  ![](https://pbs.twimg.com/media/FjdrfahVEAIyAIp.jpg) 
  
  ![](https://pbs.twimg.com/media/FjdroVeUYAAyUgJ.jpg) ([View Tweet](https://twitter.com/plantegg/status/1601051759727845378)) #Highlight #[[2022-12-10]]
- TCP Delay ACK 百闻不如一见 
  
  ![](https://pbs.twimg.com/media/Fjdp8axUUAA8Et9.jpg) 
  
  ![](https://pbs.twimg.com/media/FjdqG-IXEAI0Yrx.jpg) ([View Tweet](https://twitter.com/plantegg/status/1600864876901339136)) #Highlight #[[2022-12-10]]
- 超线程(Hyper-Threading)原理
  一个物理核还可以进一步分成几个逻辑核，来执行多个控制流程，这样可以进一步>提高并行程度，这一技术就叫超线程，有时叫做 simultaneous multi-threading（
  SMT） https://t.co/FHTpfdJ7p4
  
  ![](https://pbs.twimg.com/media/Fo1GEQCacAAWRGs.jpg) ([View Tweet](https://twitter.com/plantegg/status/1626843960810569731)) #Highlight #[[2023-05-04]]
- 挺好的文章，推荐配合这篇中文的一起阅读效果更好：https://t.co/86kpwWxsjR https://t.co/nb62JrlbVG ([View Tweet](https://twitter.com/plantegg/status/1667821557614354434)) #Highlight #[[2023-06-11]]
- 本文将演示 OpenResty XRay 如何使用“智能抓包”功能，只抓取慢速的（或有其他错误的）TCP 连接上的数据包而不影响生产服务器的性能。——怎么实现呢？看完我觉得有点囧，客户端发请求慢，服务端怎么会记录出来响应慢的？上行时延、下行时延！https://t.co/fXUVIisq1H ([View Tweet](https://twitter.com/plantegg/status/1679071098577510400)) #Highlight #[[2023-07-13]]