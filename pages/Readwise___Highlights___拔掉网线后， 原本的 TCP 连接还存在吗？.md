title:: Readwise/Highlights/拔掉网线后， 原本的 TCP 连接还存在吗？
author:: [[小林coding]]
full-title:: 拔掉网线后， 原本的 TCP 连接还存在吗？
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MzUxODAzNDg4NQ==&mid=2247504270&idx=1&sn=bce7d1e81a33c214ed210d12ee3a6b68&chksm=f98d9524cefa1c32014afe6f015bc38dd8abb483c04e9421e25592cba6f604678e6e5373fc63#rd
tags:: #[[inoreader]] #[[star]] #[[微信公众号]]  
![](http://mmbiz.qpic.cn/mmbiz_jpg/J0g14CUwaZc3UYHJymGo2kyQosPib4nsygnoc19FpM4DVhB1W0U26CicTnqVvU5BbxcgPIo9nricILEteSiaia3HH0w/0?wx_fmt=jpeg)
微信号 CodingLin 功能介绍 图解得了技术，谈吐得了烟火。 大家好，我是小林。今天，聊一个有趣的问题：拔掉网线几秒，再插回去，原本的 TCP 连接还存在吗？可能有的同学会说，网线都被拔掉了，那说明物理层被断开了，那在
- TCP 连接在 Linux 内核中是一个名为 `struct socket` 的结构体，该结构体的内容包含 TCP 连接的状态等信息。当拔掉网线的时候，操作系统并不会变更该结构体的任何内容，所以 TCP 连接的状态也不会发生改变。 ([View Highlight](https://read.readwise.io/read/01hpzkkzq8f6rcq9r8d192qv1s)) #Highlight #[[2024-02-19]]