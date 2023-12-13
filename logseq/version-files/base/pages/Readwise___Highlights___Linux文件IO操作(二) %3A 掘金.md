title:: Readwise/Highlights/Linux文件IO操作(二) : 掘金
author:: [[juejin.cn]]
full-title:: Linux文件IO操作(二) : 掘金
category:: #articles
url:: https://juejin.cn/post/7031846767289499685
tags:: #[[archive]] #[[coding]] #[[inoreader]]

- 可以用 fcntl函数改变一个已打开的文件的属性，可以重新设置读、写、追加、非阻塞等标志(这 些标志称为File Status Flag)，而不必重新open文件 ([View Highlight](https://read.readwise.io/read/01hf8ehsb85t2a9aha6vsdpdg8)) #Highlight #[[2023-11-15]]
- ioctl用于向设备发控制和配置命令，有些命令也需要读写一些数据，但这些数据是 不能用read/write读写的，称为Out-of-band数据。也就是说，read/write读写的数据是 in-band数据，是I/O操作的主体，而ioctl命令传送的是控制信息，其中的数据是辅助的数 据。例如，在串口线上收发数据通过read/write操作，而串口的波特率、校验位、停止位通 过ioctl设置，A/D转换的结果通过read读取，而A/D转换的精度和工作频率通过ioctl设置。 ([View Highlight](https://read.readwise.io/read/01hf8ejcnf6qfv4dp4a9eydt4s)) #Highlight #[[2023-11-15]]