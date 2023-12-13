title:: Readwise/Highlights/关于 Linux 系统的 Swap 交换空间 : 掘金
author:: [[首页]]
full-title:: 关于 Linux 系统的 Swap 交换空间 : 掘金
category:: #articles
url:: https://juejin.cn/post/7031690421285683237
tags:: #[[coding]] #[[inoreader]] #[[read]]
- Linux 2.6 内核中增加一个新的内核参数'swappiness'，管理员可以通过该参数修改 Linux 交换方式。参数值从 0 到 100. 从本质上说，值越大，将引起越多内存页发生交换；值越小，就有越多的应用驻留在内存中，而交换空间是空闲的。内核维护者 Andrew Morton 说过，他在他的台式机中设置 swappiness 值是 100，说：“我的观点是，通过内核参数降低交换是错误的。你不需要几百兆的无用应用占用内存。把它放在磁盘上，把内存留给有用的东西。” Morton 的想法有一个漏洞，如果内存交换太快，应用响应就会下降，因为当应用窗口被点击时，应用正在从交换空间读入内存，就会感觉运行很慢。 ([View Highlight](https://read.readwise.io/read/01hf3ydra3k5ebx1te89khdss8)) #Highlight #[[2023-11-13]]