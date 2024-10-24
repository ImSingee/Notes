title:: Readwise/Highlights/Google 怎么解决长尾延迟问题
author:: [[segmentfault.com]]
full-title:: Google 怎么解决长尾延迟问题
category:: #articles
url:: https://segmentfault.com/a/1190000039978117

![](https://static.segmentfault.com/main_site_next/8a27b2a3/touch-icon.png)
谷歌在2013年发表的一篇论文中介绍了如何解决大规模在线服务的长尾延迟问题。长尾延迟是指在一个系统中，少数请求的响应时间较长，而大部分请求的响应时间较短。谷歌提出了一些解决方案，包括服务分级、优先级队列、减少队头阻塞、管理后台活动和同步中断、对冲请求、捆绑式请求、微分区和选择性复制等。这些方法可以帮助降低长尾延迟，提高服务的整体性能。
- 现在互联网的系统规模比较大，一个服务依赖几十上百个服务的情况都是有可能的。单一模块的长尾延迟会在有大量依赖的情况下，在服务粒度被放大， ([View Highlight](https://read.readwise.io/read/01hn9zyctc14ey17xksg3mmyph)) #Highlight #[[2024-01-29]]
- 在根服务器上测量的单个随机请求完成的 99 分位延迟是 10ms。然而，所有请求完成的 99 分位数延迟是 140ms，95% 的请求 99 分位数延迟是 70ms，这意味着等待最慢的 5% 的慢请求要对总的 99 百分位数延迟的一半负责。 ([View Highlight](https://read.readwise.io/read/01hn9zzj1wscz9mw7k1qr0k5s3)) #Highlight #[[2024-01-29]]
- 单个服务组件的长尾高延迟可能由于许多原因产生，包括：
  
  **共享资源(Shared resources，Xargin: 混部现在越来越多了)**。机器可能被争夺共享资源(如 CPU 核心、处理器缓存、内存带宽和网络带宽)的不同应用所共享，而在同一应用中，不同的请求可能争夺资源。  
  **守护程序(Daemons)**。后台守护程序可能平均只使用有限的资源，但在运行时可能会产生几毫秒的峰值抖动。  
  **全局资源共享(Global resource sharing)**。在不同机器上运行的应用程序可能会争抢全局资源(如网络交换机和共享文件系统)。  
  **维护活动(Maintenance activities)**。后台活动(如分布式文件系统中的数据重建，BigTable等存储系统中的定期日志压缩，以及垃圾收集语言中的定期垃圾收集)会导致周期性的延迟高峰。  
  **排队(Queueing)**。中间服务器和网络交换机中的多层队列放大了这种可能性。
  
  同时也是因为当前硬件的趋势：
  
  **功率限制(Power limits.)**。现代 CPU 被设计成可以暂时运行在其平均功率之上(英特尔睿频加速技术)，如果这种活动持续很长时间，之后又会通过节流(throttling)限制发热；  
  **垃圾收集(Garbage collection)**。固态存储设备提供了非常快的随机读取访问，但是需要定期对大量的数据块进行垃圾收集，即使是适度的写入活动，也会使读取延迟增加 100 倍；  
  **能源管理(Energy management)**。许多类型的设备的省电模式可以节省相当多的能量，但在从非活动模式转为活动模式时，会增加额外的延迟。 ([View Highlight](https://read.readwise.io/read/01hna007x8r4h0k4g5j21asaxe)) #Highlight #[[2024-01-29]]
- **捆绑式请求(Tied requests)**。不像对冲一样等待一段时间发送，而是同时发给多个副本，但告诉副本还有其它的服务也在执行这个请求，副本任务处理完之后，会主动请求其它副本取消其正在处理的同一个请求。需要额外的网络同步。 ([View Highlight](https://read.readwise.io/read/01hna0a1cx27e5ekghe619r2yp)) #Highlight #[[2024-01-29]]