title:: Readwise/Highlights/Go 内存管理
author:: [[微信公众平台]]
full-title:: Go 内存管理
category:: #articles
url:: http://mp.weixin.qq.com/s?__biz=MzAwNjMxMTgwNw==&mid=2247490210&idx=1&sn=ca984ce8c1466a3cb9c5ddd48be20be5&chksm=9b0e00b2ac7989a4a370fec0a4fcdbbe369b9529f6c97999b0148d04f5350bbcb512775e7878#rd
tags:: #[[inoreader]] #[[star]] #[[微信公众号]]  
![](http://mmbiz.qpic.cn/mmbiz_jpg/IgylNib7ZE2LmNZGkqGCEAVwCmiaRMUYtCJHbT3GeLrzOWB3eKoXktZX32suUH1SQoWgqLrPJy8XMSeiadUrokZWA/0?wx_fmt=jpeg)
微信号 goprogrammer 功能介绍 点击获取6万star的Go开源库。[ Go开发大全 ] 日常分享 Go, 云原生、k8s、Docker和微服务方面的技术文章和行业动态。 【导读】go 语言实际内存、虚拟内存怎么分配，延迟归还是什么机制？本文结合监控对
- 对于RAM内存的使用，实际是os kernel来控制的。
  
  •   RSS(Resident Set Size)表示该进程分配的占用RAM的内存大小，不包括交互分区内存，包括共享库占用的内存，栈内存，堆内存
    
  •   VSZ(Virtual Memory Size)表示该进程分配的虚拟内存大小，包括进程可以访问的所有内存，包括交换分区，共享内存 ([View Highlight](https://read.readwise.io/read/01hq2awvypp6a1me0jgwrn7edj)) #Highlight #[[2024-02-20]]