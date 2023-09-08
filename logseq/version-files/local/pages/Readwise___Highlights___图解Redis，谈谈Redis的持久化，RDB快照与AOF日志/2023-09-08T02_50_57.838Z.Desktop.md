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
- 哪些情况会触发 RDB 持久化？
  
  （1）redis.conf 中的定时配置；
  
  （2）手动执行 save、bgsave 命令；
  
  （3）执行 flushall、flushdb 命令，产生的.rdb 文件是空的；
  
  （4）执行 shutdown 命令，且没有设置 AOF 持久化；
  
  （5）主动复制时，主节点自动触发； ([View Highlight](https://read.readwise.io/read/01gvcgt41f05xy5ds5cvqvp1yv)) #Highlight #[[2023-03-13]]
- save 和 bgsave 不能同时执行，如果 bgsave 命令正在执行，那么客户端发送的 save 命令会被拒绝执行，服务器禁止 save 和 bgsave 同时执行是为了避免父进程和子进程同时执行两个 rdbSave 调用，防止产生竞争条件 ([View Highlight](https://read.readwise.io/read/01gvcgsvkt3585amy6whhb23a0)) #Highlight #[[2023-03-13]]
- **AOF**，Append Only File，以日志的方式记录每一个操作命令，只追加不修改，Redis 启动时会读取该文件，重新执行一遍之前的写操作命令，达到恢复数据的效果。 ([View Highlight](https://read.readwise.io/read/01gvcgtx8e527n1a0b7yr5a875)) #Highlight #[[2023-03-13]]
- 在执行 Redis 命令时，Redis 会将这些命令放入 **AOF 缓存**中，AOF 缓存是位于内存中的一个区域，AOF 缓存中的命令达到一定数量后，批量写入磁盘，**避免频繁的磁盘 IO 操作** ([View Highlight](https://read.readwise.io/read/01gvcgwt8jwk450bc587ekmb52)) #Highlight #[[2023-03-13]]
- 系统提供了 fsync 和 fdatasync 两个同步函数，他们可以强制操作系统立即将缓存区中的数据写入到磁盘里，确保写入数据的完整性。 ([View Highlight](https://read.readwise.io/read/01gvcgzxtba5fzkn8f0s8ykqs0)) #Highlight #[[2023-03-13]]
- 当同时开启 AOF 和 RDB 的时候，会优先加载 AOF 文件来恢复数据，因为通常情况下 AOF 文件比 RDB 文件备份的数据要完整。 ([View Highlight](https://read.readwise.io/read/01gvch0qys69g1w9tgwvvwrrsy)) #Highlight #[[2023-03-13]]
- Redis 事务是什么？
  
  可以一次性顺序执行多个命令，不可被其它命令插队，但是，Redis 的事务不能回滚。 ([View Highlight](https://read.readwise.io/read/01gvch1awn5t124tyzetsc9tt4)) #Highlight #[[2023-03-13]]
- pipeline 缓存的指令只会依此执行，不保证原子性，如果执行中发生异常，也会继续执行后面的指令 ([View Highlight](https://read.readwise.io/read/01gvch412qwqy6x3jmpvxqxjrr)) #Highlight #[[2023-03-13]]