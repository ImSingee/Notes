title:: Readwise/Highlights/Minio架构简介
author:: [[juejin.cn]]
full-title:: Minio架构简介
category:: #articles
url:: https://juejin.cn/post/7210944553276801083
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]
- Minio采用去中心化的无共享架构，对象数据被打散存放在不同节点的多块硬盘，对外提供统一命名空间访问，并通过负载均衡或者DNS轮询在各个服务器之间实现负载均衡 ([View Highlight](https://read.readwise.io/read/01hedae9g9ydewqf2azsegeajb)) #Highlight #[[2023-11-04]]
- Minio使用纠删码erasure code和checksum来保护数据免受硬件故障和无声数据损坏。即使丢失一半数量(N/2)的硬盘，仍然可以恢复数据。 ([View Highlight](https://read.readwise.io/read/01hedaf4gkbsj2m3m9yaewpg7b)) #Highlight #[[2023-11-04]]
- 纠删码是一种恢复丢失和损坏数据的数学算法，目前纠删码技术在分布式存储系统中的应用分为三类，阵列纠删码(Array code:RAID5、RAID6等)、RS(Reed-solomon)里德-所罗门类纠删码和LDPC(LowDensity Parity Check Code)低密度奇偶检验纠删码。ErasureCode是一种编码技术，它可以将份原始数据，增加M份数据，并能通过N+M份中的任意N分数据，还原原始数据。即如果有任意小于等于M份的数据丢失，仍然能通过剩下的数据还原。
  
  Minio采用Reed-solomon code将对象拆分成N/2数据和N/2奇偶检验快，这就意味着如果是12块盘，一个对象将会被分成6个数据块、6个奇偶检验快，可以丢失任意6块盘(不管存放的数据快还是奇偶检验快)，让然可以从剩下的盘中的数据恢复。
  
  在一个N节点的分布式Minio中，只要有N/2个节点在线，你的数据就是安全的。不过至少需要N/2+1个节点才能进行写操作。 ([View Highlight](https://read.readwise.io/read/01hedafkc4bxrqe8a2affgdjwr)) #Highlight #[[2023-11-04]]