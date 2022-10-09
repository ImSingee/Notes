title:: Readwise/Highlights/各个raid对比：性能和运行速度和读写方面（RAID 1 读和单个磁盘无区别）_haiross的专栏-CSDN博客_raid1读取速度 (42)
author:: [[blog.csdn.net]]
full-title:: 各个raid对比：性能和运行速度和读写方面（RAID 1 读和单个磁盘无区别）_haiross的专栏-CSDN博客_raid1读取速度
category:: #articles
url:: https://blog.csdn.net/haiross/article/details/38557373

- RAID5的随机读取性能：非常好（当使用大数据块时） RAID5的随机写入性能：一般，但是优于RAID3或都RAID4 RAID5的持续读取性能：好（当使用小数据块时） RAID5的持续写入性能：一般  RAID5的优点：不需要专门的校验码磁盘，读取速度快，而且解决了写入速度相对较慢的问题。  RAID5的缺点：写入性能依然不尽如人意。 #Highlight #[[2021-04-01]]
	- **Note**: RAID5 相比于 RAID6 ，可靠性更差，并且有较大概率在恢复时再弄挂一块硬盘
- RAID6的随机读取性能：很好（当使用大数据块时） RAID6的随机写入性能：差，因为不但要在每硬盘上写入校验数据而且要在专门的校验硬盘上写入数据 RAID6的持续读取性能：好（当使用小数据块时） RAID6的持续写入性能：一般  RAID6的优点：快速的读取性能，更高的容错能力。  RAID6的缺点：很慢的写入速度，RAID控制器在设计上更加复杂，成本更高。 #Highlight #[[2021-04-01]]