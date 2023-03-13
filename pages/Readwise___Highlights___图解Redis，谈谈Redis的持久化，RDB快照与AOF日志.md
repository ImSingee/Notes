title:: Readwise/Highlights/图解Redis，谈谈Redis的持久化，RDB快照与AOF日志
author:: [[juejin.cn]]
full-title:: 图解Redis，谈谈Redis的持久化，RDB快照与AOF日志
category:: #articles
url:: https://juejin.cn/post/7209625823580782648
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- RDB，英文全称 Redis DataBase，在指定的时间间隔，将内存中的数据写入磁盘，待恢复时再将磁盘中的数据写入内存。 ([View Highlight](https://read.readwise.io/read/01gvcg4y8bh36816h4tccs4bfm)) #Highlight #[[2023-03-13]]
- redis.conf 配置文件中，`save <seconds> <changes>`，比如 save 60 20，在 60 秒内修改 20 次就自动触发 RDB 备份。 ([View Highlight](https://read.readwise.io/read/01gvcg56cc7vfwx4ne20ecnqvk)) #Highlight #[[2023-03-13]]
- 通过 save 和 bgsave 手动触发 RDB 备份。
  
  （1）**save**，在主程序中执行会阻塞当前 Redis 服务器，直到 RDB 持久化完成，也就是说 save 持久化期间，Redis 就不能用了，禁止使用。
  
  （2）**bgsave**，不阻塞当前 Redis 服务器，Redis 会 fork 一个子进程，异步进行快照操作。 ([View Highlight](https://read.readwise.io/read/01gvcg5hfadfb0hjw1dedkaggf)) #Highlight #[[2023-03-13]]