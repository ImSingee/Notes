title:: Readwise/Highlights/06 | 全局锁和表锁 ：给表加个字段怎么有这么多阻碍？ - MySQL实战45讲 (65)
author:: [[林晓斌]]
full-title:: 06 | 全局锁和表锁 ：给表加个字段怎么有这么多阻碍？ - MySQL实战45讲
category:: #articles
url:: https://time.geekbang.org/column/article/69862

- 在还没有出现更细粒度的锁的时候，表锁是最常用的处理并发的方式。而对于 InnoDB 这种支持行锁的引擎，一般不使用 lock tables 命令来控制并发，毕竟锁住整个表的影响面还是太大。 #Highlight #[[2022-01-26]]