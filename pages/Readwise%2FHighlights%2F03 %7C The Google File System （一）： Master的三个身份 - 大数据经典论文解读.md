title:: Readwise/Highlights/03 | The Google File System （一）： Master的三个身份 - 大数据经典论文解读
author:: [[徐文浩]]
full-title:: 03 | The Google File System （一）： Master的三个身份 - 大数据经典论文解读
category:: #articles
url:: https://time.geekbang.org/column/article/421579

- 在这个设计下，你会发现 GFS 里面的 master 节点压力很大。在一个 1000 台服务器的集群里面，chunkserver 有上千个，但 master 只有一个。几百个客户端并发读取的数据，虽然可以分摊到那 1000 个 chunkserver 的节点上，但是找到要读的文件的数据存放在哪里，都要去 master 节点里面去找。 #Highlight #[[2022-03-15]]