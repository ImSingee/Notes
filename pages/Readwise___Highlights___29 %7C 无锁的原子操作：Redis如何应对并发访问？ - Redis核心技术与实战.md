title:: Readwise/Highlights/29 | 无锁的原子操作：Redis如何应对并发访问？ - Redis核心技术与实战
author:: [[蒋德钧]]
full-title:: 29 | 无锁的原子操作：Redis如何应对并发访问？ - Redis核心技术与实战
category:: #articles
url:: https://time.geekbang.org/column/article/299806
- Redis 会把整个 Lua 脚本作为一个整体执行，在执行的过程中不会被其他命令打断，从而保证了 Lua 脚本中操作的原子性。 #Highlight #[[2022-08-11]]
- 为了实现并发控制要求的临界区代码互斥执行，Redis 的原子操作采用了两种方法：
  把多个操作在 Redis 中实现成一个操作，也就是单命令操作；
  把多个操作写到一个 Lua 脚本中，以原子性方式执行单个 Lua 脚本。 #Highlight #[[2022-08-11]]
- 当有多个客户端对同一份数据执行 RMW 操作的话，我们就需要让 RMW 操作涉及的代码以原子性方式执行。访问同一份数据的 RMW 操作代码，就叫做临界区代码。 #Highlight #[[2022-08-11]]
- 并发访问控制对应的操作主要是数据修改操作。当客户端需要修改数据时，基本流程分成两步：
  客户端先把数据读取到本地，在本地进行修改；
  客户端修改完数据后，再写回 Redis。
  我们把这个流程叫做“读取 - 修改 - 写回”操作（Read-Modify-Write，简称为 RMW 操作）。 #Highlight #[[2022-08-11]]
- 为了保证并发访问的正确性，Redis 提供了两种方法，分别是加锁和原子操作。 #Highlight #[[2022-08-11]]