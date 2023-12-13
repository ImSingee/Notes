title:: Readwise/Highlights/容器网络｜深入理解Cilium
author:: [[微信公众平台]]
full-title:: 容器网络｜深入理解Cilium
category:: #articles
url:: http://mp.weixin.qq.com/s?__biz=MzA3NzYzODg1OA==&mid=2648466538&idx=2&sn=4ad71a2e1b03b9cce6070b9fc81d12b3&chksm=876639cfb011b0d9ac61cf20a60cac2f328cbaf77f6c911aea399f1fa81b24b016b5a0db3497#rd
tags:: #[[ebpf]] #[[favorite]]
- eBPF 几乎总是比 iptables 快，这是有技术原因的。
  
  •   eBPF 程序本身并不比 iptables 快，但 eBPF 程序更短。
    
  •   iptables 基于一个非常庞大的内核框架（Netfilter），这个框架出现在内核 datapath 的多个地方，有很大冗余。
    
  
  因此，同样是实现 ARP drop 这样的功能，基于 iptables 做冗余就会非常大，导致性能很低。 ([View Highlight](https://read.readwise.io/read/01hfkxsa1dsa9yp0sd3cjxbbqy)) #Highlight #[[2023-11-19]]
- Cilium 是一个很好的 eBPF 之上的通用抽象，覆盖了分布式系统的绝大多数场景。Cilium 封装了 eBPF，提供一个更上层的 API ([View Highlight](https://read.readwise.io/read/01hfkxt91bhprfp6f0d0zpmw9b)) #Highlight #[[2023-11-19]]
- Cilium 提供了 CNI 和 kube-proxy replacement 功能，相比 iptables 性能要好很多 ([View Highlight](https://read.readwise.io/read/01hfkxtd0r9qp3nfswg1wqnhwm)) #Highlight #[[2023-11-19]]
- 网卡收包简要流程：
  
  1.  网卡驱动初始化。
    
  
  1.  网卡获得一块物理内存，作用收发包的缓冲区（ring-buffer）。这种方式称为 DMA（直接内存访问）。
    
  2.  驱动向内核 NAPI（New API）注册一个轮询（poll ）方法。
    
  
  3.  网卡从云上收到一个包，将包放到 ring-buffer。
    
  4.  如果此时 NAPI 没有在执行，网卡就会触发一个硬件中断（HW IRQ），告诉处理器 DMA 区域中有包等待处理。
    
  5.  收到硬中断信号后，处理器开始执行 NAPI。
    
  6.  NAPI 执行网卡注册的 poll 方法开始收包。 ([View Highlight](https://read.readwise.io/read/01hfkxtwbynnt2v5a8zxtge7m0)) #Highlight #[[2023-11-19]]
- NAPI poll 机制：
  
  •   这是 Linux 内核中的一种通用抽象，任何等待**不可抢占状态**发生（wait for a preemptible state to occur）的模块，都可以使用这种注册回调函数的方式。
    
  •   驱动注册的这个 poll 是一个**主动式 poll**（active poll），一旦执行就会持续处理 ，直到没有数据可供处理，然后进入 idle 状态。
    
  •   在这里，执行 poll 方法的是运行在某个或者所有 CPU 上的**内核线程**（kernel thread）。 虽然这个线程没有数据可处理时会进入 idle 状态，但如前面讨论的，在当前大部分分布 式系统中，这个线程大部分时间内都是在运行的，不断从驱动的 DMA 区域内接收数据包。
    
  •   poll 会告诉网卡不要再触发硬件中断，使用**软件中断**（softirq）就行了。此后这些 内核线程会轮询网卡的 DMA 区域来收包。之所以会有这种机制，是因为硬件中断代价太 高了，因为它们比系统上几乎所有东西的优先级都要高。 ([View Highlight](https://read.readwise.io/read/01hfkxv3a0rw4x70ns7wscnat7)) #Highlight #[[2023-11-19]]