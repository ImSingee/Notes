title:: Readwise/Highlights/如何解决Prometheus的存储容量问题？
author:: [[juejin.cn]]
full-title:: 如何解决Prometheus的存储容量问题？
category:: #articles
url:: https://juejin.cn/post/7193521581481132088
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)
Prometheus 也存在一些不足之处，其中一个广受诟病的问题就是单机存储不好扩展。 联邦机制可以理解为是 Prometheus 内置支持的一种集群方式，核心就是 Prometheus 数据的级联抓取。
- Prometheus 也存在一些不足之处，其中一个广受诟病的问题就是单机存储不好扩展。
  
  根据经验，每秒接收 80 万个数据点，算是一个比较健康的上限，如果使用 node-exporter，指标数量800 左右，大概能支持 1 万台机器的监控。 ([View Highlight](https://read.readwise.io/read/01hq7yhbq8m2ayt1pwa2asyea3)) #Highlight #[[2024-02-22]]