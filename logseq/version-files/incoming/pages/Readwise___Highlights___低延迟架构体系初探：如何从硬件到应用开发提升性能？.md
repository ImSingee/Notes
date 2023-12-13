title:: Readwise/Highlights/低延迟架构体系初探：如何从硬件到应用开发提升性能？
author:: [[Phodal]]
full-title:: 低延迟架构体系初探：如何从硬件到应用开发提升性能？
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MjM5Mjg4NDMwMA==&mid=2652978321&idx=1&sn=d3d028b97bd657261214d0ce94fe28e2&chksm=bd4aefb28a3d66a4d7610fe51309fceb4dd971c18dbaacffe55bfdf7a9e69757a757790addbd#rd
tags:: #[[inoreader]] #[[star]] #[[微信公众号]]
- 低延迟（low latency）(https://www.phodal.com/blog/explore-low-latency-architecture/）顾名思议是计算系统或网络以最小延迟提供响应的能力。从数据的角度来考虑，如果我们想最大程度降低延迟，那么就需要关注到每一个层次的数据处理。所以，它会涉及到一系列方方面面的领域，诸如于：
  
  •   网络传输与硬件
    
  
  •   数据传输。如微波、光纤、网线等
    
  •   路由机制。
    
  •   网络与硬件侧。网络协议、网卡等，专用处理器等，如 FPGA，
    
  
  •   系统编程策略
    
  
  •   操作系统。（从通用型操作系统到专用型操作系统） CPU 缓存、内核调度等。
    
  •   语言侧。平衡高性能的语言与规模化。
    
  •   其它。如内存管理策略等。
    
  
  •   应用软件
    
  
  •   架构侧。事件驱动型架构，如 LMAX
    
  •   应用开发侧。高性能的数据结构（如集合）、通过设计模式提升性能等。
    
  •   可视化侧。密集计算下沉 WASM 等。
    
  •   设计模式。采用无锁和无阻塞设计模式，降低、消除操作系统信号延迟 ([View Highlight](https://read.readwise.io/read/01hf37wn7stb3w1nwbh2ppg61h)) #Highlight #[[2023-11-13]]
- 由于 Linux 的网络性能不好，所以内核旁路技术的目的是：不再让内核（TCP/IP 协议栈）处理数据包。用自己实现的相同功能的代码来处理，从用户空间直接访问和控制设备内存，避免数据从设备拷贝到内核，再从内核拷贝到用户空间 ([View Highlight](https://read.readwise.io/read/01hf37xdza124r3j08gk01enr8)) #Highlight #[[2023-11-13]]