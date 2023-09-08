title:: Readwise/Highlights/42｜性能调优：性能调优工具eBPF和调优方法 - 计算机基础实战课
author:: [[彭东]]
full-title:: 42｜性能调优：性能调优工具eBPF和调优方法 - 计算机基础实战课
category:: #articles
url:: https://time.geekbang.org/column/article/600912
- BPF 程序的类型包括：kprobes、uprobes、tracepoint、perf_events 几种，具体含义如下：
  kprobes：是一种在内核中实现动态追踪的机制，可以跟踪 Linux 内核中的函数入口或返回点，但这套 ABI 接口并不稳定。不同的内核版本的变化带来的 ABI 差异，有可能会导致跟踪失败。
  uprobes：用来实现用户态程序动态追踪的机制。与 kprobes 类似，区别在于跟踪的函数是用户程序中的函数而已。
  tracepoints：内核中的静态跟踪。Tracepoints 是内核开发者维护的 tracepoint，可以提供稳定的 ABI 接口，但是由于开发者维护，数量和场景可能会受到限制。
  perf_events：定时采样处理器中的性能监控计数寄存器（Performance Monitor Counter）。 #Highlight #[[2023-06-05]]
- eBPF 虚拟机则是相当于一个在内核中的、安全的“后门”，而在虚拟机上运行的 BPF 字节码程序可以使用 BPF map 数据结构和 perf-event 这两种机制，将测量数据“偷偷”传递到用户空间。 #Highlight #[[2023-06-05]]
- Cilium 的基础当然也是 eBPF 啦，它能够将安全逻辑、可见性逻辑和网络控制等逻辑动态插入 Linux 内核，十分强大。基于这些扩展出的内核能力，Cilium 可以提供像高性能网络、多集群和多云能力、高级负载平衡、透明加密、网络安全能力、透明可观察性等很多能力。 #Highlight #[[2023-06-05]]
- Cilium 使用了 eBPF 机制，在 Linux 内核中直接扩展出了对容器中的各种网络协议的观测能力。这样既实现了高性能对系统进行观测，又扩展更多字节码程序，进而支持更多种类的协议 #Highlight #[[2023-06-05]]
- Falco 的核心思想是，把自己定位成一个嵌入到 Linux 内核中的监控摄像头，实时监控各种 Linux 系统调用的行为，并根据其不同的调用、参数及调用进程的属性来触发警告 #Highlight #[[2023-06-05]]