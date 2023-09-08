title:: Readwise/Highlights/分享一篇不错的讲解字节对齐的文章： 《Struc...
author:: [[@hemashushu on Twitter]]
full-title:: 分享一篇不错的讲解字节对齐的文章： 《Struc...
category:: #tweets
url:: https://twitter.com/hemashushu/status/1692403194150928630
- 分享一篇不错的讲解字节对齐的文章：
  《Structure Member Alignment, Padding and Data Packing》
  https://t.co/tDwzBTxreo
  
  因为计算机从内存读取数据时是一次同时读取多个字节的（比如8字节），而内存地址是以“字节”为单位，于是产生了“字节对齐”的问题，比如一个32bits的int整数如果不对齐（续 ([View Tweet](https://twitter.com/hemashushu/status/1692403194150928630)) #Highlight #[[2023-08-18]]
- 则可能会被分成两段，cpu需要发起两次内存fetch指令然后通过移位等位操作合并，造成性能损耗。这篇文章讲解了基本数字的对齐方式，结构体（struct）字段间填充以及它本身的对齐方式，讲得简单易懂所以分享出来。
  
  至于为什么需要了解数据在内存的布局/储存方式，当然是因为它是学习C/Rust的关键（续 ([View Tweet](https://twitter.com/hemashushu/status/1692403196336189945)) #Highlight #[[2023-08-18]]
- 学习 #C / #Rust 一类语言一般会碰到“指针”这个难点，其实只要简单从系统的内存管理/进程的内存布局/函数调用规范以及一丁点组成原理就轻松跃过，很多“高级的”概念其实是“障眼法”，本身是很简单的。Rust 的数据布局可以参考
  https://t.co/nxyVN9tNiA
  
  然后（续 ([View Tweet](https://twitter.com/hemashushu/status/1692403198517195110)) #Highlight #[[2023-08-18]]
- 然后再看看它关于指针的玩法：
  https://t.co/6FX48sAvHi
  https://t.co/ogpoE00b1I
  
  还有对“数组”的玩法：
  https://t.co/Vz5eQIWLjF
  
  基本上就毫无障碍了。#rustlang ([View Tweet](https://twitter.com/hemashushu/status/1692403200685752606)) #Highlight #[[2023-08-18]]