title:: Readwise/Highlights/网络存储协议
author:: [[juejin.cn]]
full-title:: 网络存储协议
category:: #articles
url:: https://juejin.cn/post/7206871218032853029
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)
主要内容 一.网络存储是什么? 二.iSCSI是什么? 三.RDMA是什么? 四.NVME-oF是什么? 一.网络存储是什么? 网络存储是一种将存储资源连接到网络上，以便多台计算机可以共享和访问这些存
- iSCSI（Internet Small Computer System Interface）是一种基于网络的存储协议，它可以将远程存储设备映射为本地磁盘，使得计算机可以像访问本地磁盘一样访问远程存储设备。iSCSI协议可以在以太网、光纤通道等网络上运行，它可以在计算机和存储设备之间建立虚拟的SCSI总线，从而实现数据的传输和管理。iSCSI协议可以简化存储系统的管理和部署，提高存储系统的可靠性和性能。 ([View Highlight](https://read.readwise.io/read/01hpkbfme4jqx9cx4wj5ceyptg)) #Highlight #[[2024-02-14]]
- RDMA（Remote Direct Memory Access）是一种高性能、低延迟的网络传输技术，它可以让计算机之间直接访问彼此的内存，从而避免了数据在传输过程中的不必要的拷贝和上下文切换。RDMA 技术主要包括两种协议：InfiniBand 和 RoCE（RDMA over Converged Ethernet）。
  
  在 RDMA 技术中，计算机之间的数据传输不再需要 CPU 的介入，而是直接通过网络适配器和内存控制器之间的 DMA 传输实现。这种方式可以大大减少 CPU 的负载和数据传输的延迟，从而提高传输的效率和性能。 ([View Highlight](https://read.readwise.io/read/01hpkbgnmnwn19tre9x19tw5jb)) #Highlight #[[2024-02-14]]