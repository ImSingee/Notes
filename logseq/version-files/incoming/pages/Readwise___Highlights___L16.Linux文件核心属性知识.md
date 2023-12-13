title:: Readwise/Highlights/L16.Linux文件核心属性知识
author:: [[juejin.cn]]
full-title:: L16.Linux文件核心属性知识
category:: #articles
url:: https://juejin.cn/post/7170097783620239391
tags:: #[[coding]] #[[inoreader]] #[[read]]
- Inode本质上是一小块具备唯一数字编号的存储空间，主要用来存放文件（目录）属性（例如ls -l的结果）的数据信息，注意，Inode里面唯独不包含文件名本身（文件名不算文件的属性）。
  
  Block称为磁盘块，是用来存放实际数据的实体单元（ext文件系统一般最大为4KB），即用来存放真正的数据，例如，照片、视频等普通文件数据，单个的大文件需要 ([View Highlight](https://read.readwise.io/read/01hdefp4wns6994kf5e3vhnayq)) #Highlight #[[2023-10-23]]
- 通过dumpe2fs /dev/sda1命令可以查看分区的Inode和Block的单位大小及各种相关信息 ([View Highlight](https://read.readwise.io/read/01hdefqzbxwj8r33mm9r6cce0c)) #Highlight #[[2023-10-23]]
- 磁盘满了分两种情况：一种是Inode数量耗尽了，另一种则是Block满了 ([View Highlight](https://read.readwise.io/read/01hdefrj8s7ha5etjmsmzhmvp1)) #Highlight #[[2023-10-23]]