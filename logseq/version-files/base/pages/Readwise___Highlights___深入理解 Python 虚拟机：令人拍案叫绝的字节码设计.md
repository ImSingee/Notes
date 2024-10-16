title:: Readwise/Highlights/深入理解 Python 虚拟机：令人拍案叫绝的字节码设计
author:: [[juejin.cn]]
full-title:: 深入理解 Python 虚拟机：令人拍案叫绝的字节码设计
category:: #articles
url:: https://juejin.cn/post/7217449801632530487
tags:: #[[favorite]] #[[inoreader]] #[[python]] #[[read]] #[[掘金 - 后端]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)
在本篇文章当中主要给大家介绍 cpython 虚拟机对于字节码的设计以及在调试过程当中一个比较重要的字段 co_lnotab 的设计原理！
- 一条 python 字节码主要有两部分组成，一部分是操作码，一部分是这个操作码的参数，在 cpython 当中只有部分字节码有参数，如果对应的字节码没有参数，那么 oparg 的值就等于 0 ，在 cpython 当中 opcode < 90 的指令是没有参数的。
  
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/11dda3456d15499dbde0ab8bc4f72b8a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)
  
  opcode 和 oparg 各占一个字节，cpython 虚拟机使用小端方式保存字节码。 ([View Highlight](https://read.readwise.io/read/01hq7amgfq93g5h3682ma792fb)) #Highlight #[[2024-02-22]]
- 当你使用Python编写代码时，可以使用`compile()`函数将Python代码编译成字节代码对象。这个字节码对象可以被传递给Python的解释器或虚拟机，以执行代码。 ([View Highlight](https://read.readwise.io/read/01hq7b5m576e3cmtdgnk37cbp4)) #Highlight #[[2024-02-22]]