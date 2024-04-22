title:: Readwise/Highlights/为什么我建议需要定期重建数据量大但是性能关键的表 : 掘金
author:: [[juejin.cn]]
full-title:: 为什么我建议需要定期重建数据量大但是性能关键的表 : 掘金
category:: #articles
url:: https://juejin.cn/post/7092945411635642405
tags:: #[[inoreader]] #[[read]] #[[star]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)
一般现在对于业务要查询的数据量以及要保持的并发量高于一定配置的单实例 MySQL 的极限的情况，都会采取分库分表的方案解决。当然，现在也有很多 new SQL 的分布式数据库的解决方案，如果你用的是
- 某些分片表大于一定界限，**导致 MySQL 对于索引的随机采样越来越不准**，由于统计数据不是实时更新，而是更新的行数超过一定比例才会开始更新。并且统计数据不是全量统计，是抽样统计。所以在表的数据量很大的时候，这个统计数据很难非常准确。依靠表本身自动刷新数据机制，参数比较难以调整 ([View Highlight](https://read.readwise.io/read/01hncczvrd7k83fhm7na0ex158)) #Highlight #[[2024-01-30]]