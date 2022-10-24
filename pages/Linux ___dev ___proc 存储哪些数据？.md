- #CruelFundamental #2022-10-21 [讨论](https://github.com/CYZH1307/CruelFundamental/tree/main/homework/202210/21)
-
- ## `/dev` 存储物理设备信息
	- | 目录 | 描述 |
	  | ---- | ---- | ---- |
	  | /proc/meminfo | 查看内存信息 |
	  | /proc/loadavg | 还记得 top 以及 uptime 吧？没错！上头的三个平均数值就是记录在此！ |
	  | /proc/uptime | 就是用 uptime 的时候，会出现的资讯啦！ |
	  | /proc/cpuinfo | 关于处理器的信息，如类型、厂家、型号和性能等。 |
	  | /proc/cmdline | 加载 kernel 时所下达的相关参数！查阅此文件，可了解系统是如何启动的！ |
	  | /proc/filesystems | 目前系统已经加载的文件系统罗！ |
	  | /proc/interrupts | 目前系统上面的 IRQ 分配状态。 |
	  | /proc/ioports | 目前系统上面各个装置所配置的 I/O 位址。 |
	  | /proc/kcore | 这个就是内存的大小啦！好大对吧！但是不要读他啦！ |
	  | /proc/modules | 目前我们的 Linux 已经加载的模块列表，也可以想成是驱动程序啦！ |
	  | /proc/mounts | 系统已经挂载的数据，就是用 mount 这个命令呼叫出来的数据啦！ |
	  | /proc/swaps | 到底系统挂加载的内存在哪里？呵呵！使用掉的 partition 就记录在此啦！ |
	  | /proc/partitions | 使用 fdisk -l 会出现目前所有的 partition 吧？在这个文件当中也有纪录喔！ |
	  | /proc/pci | 在 PCI 汇流排上面，每个装置的详细情况！可用 lspci 来查阅！ |
	  | /proc/version | 核心的版本，就是用 uname -a 显示的内容啦！ |
	  | /proc/bus/* | 一些汇流排的装置，还有 U 盘的装置也记录在此喔！ |
- ## `/proc` 存储内核中的相关信息
-
- Ref: [linux 重要的目录之 proc 和 dev 目录](https://rumenz.com/rumenbiji/linux-proc-dev.html)