title:: Readwise/Highlights/深入理解iOS Jetsam机制，助力提升Flotsam召回率
author:: [[快手大前端技术]]
full-title:: 深入理解iOS Jetsam机制，助力提升Flotsam召回率
category:: #articles
url:: https://mp.weixin.qq.com/s/vUMmQvZ1I91fhf8kFXY_mA
tags:: #[[favorite]] #[[swift]] #[[Swift]]
- Jetsam 机制负责在内存不足时终止进程以释放内存资源，了解 Jetsam 的工作原理和相关策略，可以帮助开发者优化应用程序的内存使用，提高 Flotsam 召回率。
  
  Flotsam 是快手定义的指标，是指 iOS 上未被监控捕获到的前台异常退出，包括但不限于由于内存溢出引起的退出。与 Jetsam 不同，Flotsam 更多地关注那些零碎、尚未明确归因的异常退出。了解 Jetsam 的工作原理和相关策略，对开发者来说，不仅有助于优化应用内存使用，还能显著提高 Flotsam 召回率，进一步提升应用的稳定性和用户体验。 ([View Highlight](https://read.readwise.io/read/01hcvpxhmg9twke6vgstkc55p0)) #Highlight #[[2023-10-16]]
- Jetsam 机制终止进程的时候最终是通过发送 SIGKILL 异常信号来完成的，SIGKILL 信号不可以在当前进程被忽略或者被捕获，因此只能通过排除法监控 OOM 崩溃。 ([View Highlight](https://read.readwise.io/read/01hcvpy1p7ahvn4tt2zpks9gyp)) #Highlight #[[2023-10-16]]
- 在iOS设备中，系统实现了一种内存管理机制，被称为 Jetsam 或者 Memorystatus，它是根据特定的内存压力情况来选择性地终止或冻结应用程序。Jetsam 是 iOS 内核中的一部分，负责监控和管理应用程序的内存使用情况。Jetsam 根据一些因素来决定终止或暂停应用程序，包括应用程序的内存占用、应用程序的状态（活动、后台、挂起等）、应用程序的优先级、系统的内存压力等。当系统内存不足时，Jetsam 将根据预定义的策略选择终止哪些应用程序以释放内存。Jetsam 机制的目的是确保系统的稳定性和性能，以在不影响用户体验的情况下管理设备内存的分配和释放。 ([View Highlight](https://read.readwise.io/read/01hcvpz4rhwk20y1xvsxh3dw52)) #Highlight #[[2023-10-16]]
- 在没有定义 Flotsam 指标之前，异常退出类型包括 Crash、Watchdog、OOM三种。定义 Flotsam 指标之后我们把 OOM 拆分成 OOM 和 Flotsam 两个指标，OOM 表示真正由于内存不足导致的系统强杀，Flotsam 表示不是由于内存导致的异常退出，但是由于 OOM 是排除法而上报为 OOM 类型的数据 ([View Highlight](https://read.readwise.io/read/01hcvq0wfjg1p71ctwsyfthhjn)) #Highlight #[[2023-10-16]]
- XNU 的 Memorystatus 子系统负责在某些资源极度短缺时恢复系统。目前，它监控以下资源：
  
  •   memory
    
  •   vnodes
    
  •   compressor space
    
  •   swap space
    
  •   zone map VA
    
  
  根据资源类型的不同，Memorystatus 子系统可能会采取多种行动。最常见的行动之一是杀死一个或多个进程以尝试恢复系统。除了监控系统级别的资源外，Memorystatus 代码还负责杀死超出其每个进程内存限制的进程。
  
  Memorystatus 子系统包含代码以响应资源短缺并执行四种操作：
  
  •   Kill Processes
    
  •   Freeze Processes
    
  •   Send warning notifications
    
  •   Swap memory from apps ([View Highlight](https://read.readwise.io/read/01hcvq24mkdhsr81kh9g0ze438)) #Highlight #[[2023-10-16]]
- Jetsam 系统日志可以从手机 设置 -> 隐私与安全性 -> 分析与改进 -> 分析数据 中导出，文件名格式为 JetsamEvent-日期.ips 。Jetsam 系统日志和崩溃系统日志不同，不包含应用程序中任何线程的堆栈回溯，采用 JSON 格式，包含设备上所有应用程序和系统进程的总体内存使用情况。 ([View Highlight](https://read.readwise.io/read/01hcvq4pbwh4a09rxnhw40b915)) #Highlight #[[2023-10-16]]
- 正常情况下，iOS 应用程序进程主要有5种常见的状态。
  
  （1）Not running。非运行状态，指应用程序 还没有被启动，或者已被系统终止。
  
  （2）Inactive。前台非活动状态，指应用程序 即将进入前台状态，但当前未接收到任何事件 （可能正在执行其他代码）。应用程序通常只在 转换到其他状态时才会短暂地进入该状态。
  
  （3）Active。前台活跃状态，指应用程序正 在前台运行，可接收事件并进行处理。这也是一 个iOS应用程序处于前台的正常模式。
  
  （4）Background。进入后台状态，指应用程 序进入后台并可执行代码。大多数应用程序在被 挂起前都会短暂地进入该状态。
  
  （5）Suspended。挂起状态，指应用程序进 入后台但没有执行任何代码，系统会自动地将应 用程序转移到该状态，并且在执行该操作前不会 通知应用程序。挂起时，应用程序会保留在内存 中，但不执行任何代码。当系统出现内存不足情 况时，系统可能会在未通知应用程序的情况下清 除被挂起的应用程序，为前台应用程序尽可能腾出更多的运行资源。
  
  实际上，应用程序进程还有其他状态，比如冻结。冻结是指如果进程的内存占用非常小，当进程挂起（Suspended）时，系统会将进程脏页写入磁盘，而不是将它们留在内存中。在系统内，这个进程状态的术语就是“冻结”。这也说明了iOS 系统是存在磁盘交换（Swap）机制的，只是系统对这套机制的限制非常严格（严格限制生效的进程、严格控制进程冻结的预算等） ([View Highlight](https://read.readwise.io/read/01hcvq763t0f95mbpt413pjszj)) #Highlight #[[2023-10-16]]