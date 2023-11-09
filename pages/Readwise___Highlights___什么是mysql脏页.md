title:: Readwise/Highlights/什么是mysql脏页
author:: [[juejin.cn]]
full-title:: 什么是mysql脏页
category:: #articles
url:: https://juejin.cn/post/6966778167994351653
tags:: #[[ifttt]] #[[instapaper]] #[[mysql]]

- 缓冲区中包含这三大类列表。分别为：`LRUList`、`FreeList`、`FlushList`。
  
  在数据库刚启动时，LRUlist中`没有数据页`。FreeList存放空闲页。
  
  •   当需要读取某个页时，会从FreeList中获取一个空闲页，读入数据后，放入LRUlist中
  •   如果FreeList中没有空闲页了，那么根据LRU算法淘汰Lru列表中末位的页
  •   当LRUlist中的页被修改后，页就变成了脏页，这个页也会被加入FlushList中 ([View Highlight](https://read.readwise.io/read/01hes0nw0ze68epqd03hr9sh50)) #Highlight #[[2023-11-09]]
- LRUList（管理已经被读取的页）和FreeList（管理空闲的页）用来管理页的可用性；FlushList（管理脏页）用来管理脏页的刷新 ([View Highlight](https://read.readwise.io/read/01hes0p0q3g4za4zdca960r3mm)) #Highlight #[[2023-11-09]]
- 如果数据修改和读取只依赖内存的缓冲区，那么一旦数据库宕机，内存中的数据都会丢失。所以MySQL使用之前讲过的redo log来实现异常重启的数据恢复，redolog相关介绍可以看篇文章：[MySQL-redo log 和 binlog](https://link.juejin.cn?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2Fe441d398d14d)
  
  简单来说，就是在更新缓冲区之前，先写入redo log，保证异常重启之后可以正常恢复缓冲区中的数据。 ([View Highlight](https://read.readwise.io/read/01hes0p9knv8bhraqzdyrj10nt)) #Highlight #[[2023-11-09]]