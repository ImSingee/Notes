title:: Readwise/Highlights/深入理解Linux内核之内存寻址
author:: [[谢子飏]]
full-title:: 深入理解Linux内核之内存寻址
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MzA3NzYzODg1OA==&mid=2648466491&idx=1&sn=e1f4d355e1c7d0be2af7b51410903df1&chksm=8766399eb011b08834f35179f31f35c0e9105b59974981b19a7c2cbf1168a16ce1bf55a027de#rd
tags:: #[[inoreader]] #[[star]] #[[微信公众号]]  
![](http://mmbiz.qpic.cn/mmbiz_jpg/ciab8jTiab9J7nmGHFufLG4p61yBDORFOGnPoNSrU75EySpjVL7kc6pibZsnxW1ttT8bLiafIZezQ7w5qib4Bb49ArA/0?wx_fmt=jpeg)
功能介绍 以简单的方式介绍 Linux 内核的原理，以通俗的语言分析 Linux 内核的实现。如果你没有接触过 Linux 内核，那么就关注我们的公众号吧，我们将以图解的方式让内核更亲民...
- 在多核系统中，所有的CPU核心共享同一内存，则代表着CPU可以并发的访问内存。而内存的读写必须是串行执行，所以需要专用元器件对内存访问进行排序，其称为内存仲裁器。
  
  内存仲裁器是在内存总线和RAM芯片之间的硬件电路
  
  •   **若内存空闲：**允许访问
    
  •   **若内存被占用：**延迟CPU访问 ([View Highlight](https://read.readwise.io/read/01hq2a14hvfpp7246z13b8pwry)) #Highlight #[[2024-02-20]]