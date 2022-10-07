title:: Readwise/Highlights/02  | 日志系统：一条sql更新语句是如何执行的？-极客时间 (7)
author:: [[time.geekbang.org]]
full-title:: 02  | 日志系统：一条sql更新语句是如何执行的？-极客时间
category:: #articles
url:: https://time.geekbang.org/column/article/68633

- 一条查询语句的执行过程一般是经过连接器、分析器、优化器、执行器等功能模块，最后到达存储引擎 #Highlight #[[2022-01-23]]
- MySQL 可以恢复到半个月内任意一秒的状态 #Highlight #[[2022-01-23]]
- InnoDB 引擎就会先把记录写到 redo log（粉板）里面，并更新内存，这个时候更新就算完成了。同时，InnoDB 引擎会在适当的时候，将这个操作记录更新到磁盘里面，而这个更新往往是在系统比较空闲的时候做，这就像打烊以后掌柜做的事。 #Highlight #[[2022-01-23]]
- InnoDB 的 redo log 是固定大小的，比如可以配置为一组 4 个文件，每个文件的大小是 1GB，那么这块“粉板”总共就可以记录 4GB 的操作。从头开始写，写到末尾就又回到开头循环写 #Highlight #[[2022-01-23]]
- MySQL 整体来看，其实就有两块：一块是 Server 层，它主要做的是 MySQL 功能层面的事情；还有一块是引擎层，负责存储相关的具体事宜。上面我们聊到的粉板 redo log 是 InnoDB 引擎特有的日志，而 Server 层也有自己的日志，称为 binlog（归档日志）。 #Highlight #[[2022-01-23]]