title:: Readwise/Highlights/使用 eBPF 技术实现更快的网络数据包传输
author:: [[juejin.cn]]
full-title:: 使用 eBPF 技术实现更快的网络数据包传输
category:: #articles
url:: https://juejin.cn/post/7212986537777381434
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)
在 上篇文章 用了整篇的内容来描述网络数据包在 Kubernetes 网络中的轨迹，文章末尾，我们提出了一种假设：同一个内核空间中的两个 socket 可以直接传输数据，是不是就可以省掉内核网络协议栈处理带来的延迟？
- eBPF 程序不能调用任意内核函数。如果这样做会将 eBPF 程序绑定到特定的内核版本，并会使程序的兼容性复杂化。相反，eBPF 程序可以对辅助函数进行函数调用，辅助函数是内核提供的众所周知且稳定的 API。 ([View Highlight](https://read.readwise.io/read/01hpf8xafhb0f01157v3cv5dd3)) #Highlight #[[2024-02-13]]