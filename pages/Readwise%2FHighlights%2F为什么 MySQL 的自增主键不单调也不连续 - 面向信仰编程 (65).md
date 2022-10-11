title:: Readwise/Highlights/为什么 MySQL 的自增主键不单调也不连续 - 面向信仰编程 (65)
author:: [[draveness.me]]
full-title:: 为什么 MySQL 的自增主键不单调也不连续 - 面向信仰编程
category:: #articles
url:: https://draveness.me/draveness.me/whys-the-design-mysql-auto-increment

- MySQL 中默认的 AUTO_INCREMENT 属性在多数情况下可以保证主键的连续性，我们通过 show create table 命令可以在表的定义中能够看到 AUTO_INCREMENT 属性的当前值，当我们向当前表中插入数据时，它会使用该属性的值作为插入记录的主键，而每次获取该值也都会将它加一 #Highlight #[[2022-07-23]]
- 较早版本的 MySQL 将 AUTO_INCREMENT 存储在内存中，实例重启后会根据表中的数据重新设置该值；获取 AUTO_INCREMENT 时不会使用事务锁，并发的插入事务可能出现部分字段冲突导致插入失败； #Highlight #[[2022-07-23]]
- 在 MySQL 8.0 中，AUTO_INCREMENT 计数器的初始化行为发生了改变，每次计数器的变化都会写入到系统的重做日志（Redo log）并在每个检查点存储在引擎私有的系统表中 #Highlight #[[2022-07-23]]
- 当 MySQL 服务被重启或者处于崩溃恢复时，它可以从持久化的检查点和重做日志中恢复出最新的 AUTO_INCREMENT 计数器，避免出现不单调的主键 #Highlight #[[2022-07-23]]
- 为了提高事务的吞吐量，MySQL 可以处理并发执行的多个事务，但是如果并发执行多个插入新记录的 SQL 语句，可能会导致主键的不连续 #Highlight #[[2022-07-23]]
- 虽然在获取 AUTO_INCREMENT 时会加锁，但是该锁是语句锁，它的目的是保证 AUTO_INCREMENT 的获取不会导致线程竞争，而不是保证 MySQL 中主键的连续 #Highlight #[[2022-07-23]]
- MySQL 中不连续的主键又是一个工程设计向性能低头的例子，牺牲主键的连续性来支持数据的并发插入，最终提高了 MySQL 服务的吞吐量 #Highlight #[[2022-07-23]]