title:: Readwise/Highlights/eBPF 核心技术与实战_K8s_Kubernetes_云计算_倪朋飞_Linux_运维_内核_性能优化_网络观测_安全控制-极客时间 (40)
author:: [[time.geekbang.org]]
full-title:: eBPF 核心技术与实战_K8s_Kubernetes_云计算_倪朋飞_Linux_运维_内核_性能优化_网络观测_安全控制-极客时间
category:: #articles
url:: https://time.geekbang.org/column/intro/100104501

- BPF 提供了一种在内核事件和用户程序事件发生时安全注入代码的机制，这就让非内核开发人员也可以对内核进行控制 #Highlight #[[2022-02-09]]
- 随着内核的发展，BPF 逐步从最初的数据包过滤扩展到了网络、内核、安全、跟踪等，而且它的功能特性还在快速发展中，这种扩展后的 BPF 被简称为 eBPF（相应的，早期的 BPF 被称为经典 BPF，简称 cBPF） #Highlight #[[2022-02-09]]
- eBPF 则借助即时编译器（JIT），在内核中运行了一个虚拟机，保证只有被验证安全的 eBPF 指令才会被内核执行 #Highlight #[[2022-02-09]]