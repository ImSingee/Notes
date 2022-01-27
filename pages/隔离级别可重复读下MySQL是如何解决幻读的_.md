title:: 隔离级别可重复读下MySQL是如何解决幻读的?

- #CruelFundamental #[[2022-01-27]] #MySQL [讨论](https://github.com/Monsooooon/CruelFundamental/tree/main/homework/202201/27)
-
- [[幻读]]指的是一个[[事务]]在前后两次查询同一个范围的时候，后一次查询看到了前一次查询没有看到的行
-
- 在可重复读的隔离级别下，普通的查询是[[快照]]读，是不会看到别的事务插入的数据的。因此，幻读在“当前读”下才会出现。
	-
-