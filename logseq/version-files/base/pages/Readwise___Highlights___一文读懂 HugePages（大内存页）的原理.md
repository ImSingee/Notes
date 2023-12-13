title:: Readwise/Highlights/一文读懂 HugePages（大内存页）的原理
author:: [[songsong001]]
full-title:: 一文读懂 HugePages（大内存页）的原理
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MzA3NzYzODg1OA==&mid=2648464691&idx=2&sn=5a55c7171e591f0041779925957cdfda&scene=21#wechat_redirect
tags:: #[[linux]]  
![](http://mmbiz.qpic.cn/mmbiz_jpg/ciab8jTiab9J7oekjJw3Mz19GT4ResL06DwtMALLOIByB6OoCB2c0icWtuIM9qPg07YUhtYLRB1UYmmicyCUQvdf7Q/0?wx_fmt=jpeg)

- 上面介绍了以 4KB 的内存页作为内存映射的单位，但有些场景我们希望使用更大的内存页作为映射单位（如 2MB）。使用更大的内存页作为映射单位有如下好处：
  
  •   减少 `TLB（Translation Lookaside Buffer）` 的失效情况。
    
  •   减少 `页表` 的内存消耗。
    
  •   减少 PageFault（缺页中断）的次数。 ([View Highlight](https://read.readwise.io/read/01hhchzm9hdrjtehhsy7x3fak6)) #Highlight #[[2023-12-11]]
- 使用大于 4KB 的内存页作为内存映射单位的机制叫 `HugePages`，目前 Linux 常用的 HugePages 大小为 2MB 和 1GB，我们以 2MB 大小的内存页作为例子。 ([View Highlight](https://read.readwise.io/read/01hgfe3ba7k3kmx19smp4jwd0b)) #Highlight #[[2023-11-30]]