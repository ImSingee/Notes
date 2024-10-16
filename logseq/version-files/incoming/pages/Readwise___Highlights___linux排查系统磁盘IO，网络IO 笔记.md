title:: Readwise/Highlights/linux排查系统磁盘IO，网络IO 笔记
author:: [[dongyao.ren]]
full-title:: linux排查系统磁盘IO，网络IO 笔记
category:: #articles
url:: https://www.dongyao.ren/article/532.html
tags:: #[[clark\'s 尧望 blog]] #[[inoreader]] #[[博客]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)
5. pidstat 统计各个进程的磁盘 IO，也可以监控指定进程，还可以监控 cpu 和内存
- 1. **top**     监控整体服务器，cpu，内存，磁盘，网络等
  
  2. **dstat -d**  查看当前磁盘每秒的读取，写入量，单位 K
  
  3. **dstat -r**  查看当前磁盘随机的读 IOPS，写 IOPS
  
  4. **dstat -n**  查看网卡每秒接收，发送量，单位 K，不足 1K 时显示 Byte 数
  
  5. **pidstat**  统计各个进程的磁盘 IO，也可以监控指定进程，还可以监控 cpu 和内存
  
  6. **iotop**  类似 top 命令，不过 iotop 是只监控 io 相关的进程
  
  7. **vmstat**  监控 io 活跃的进程，还可以监控内存，cpu 相关 ([View Highlight](https://read.readwise.io/read/01hq4xgwsbg96zg47tgkfszzn6)) #Highlight #[[2024-02-21]]