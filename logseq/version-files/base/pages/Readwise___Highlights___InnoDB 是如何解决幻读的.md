title:: Readwise/Highlights/InnoDB 是如何解决幻读的
author:: [[juejin.cn]]
full-title:: InnoDB 是如何解决幻读的
category:: #articles
url:: https://juejin.cn/post/7218438764100255781
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- 为了解决上述的幻读问题，InnoDB 引入了两种锁，分别是「间隙锁」和「next-key 锁」 ([View Highlight](https://read.readwise.io/read/01hdkek9qypfjmeb24cb5z4xx3)) #Highlight #[[2023-10-25]]
- 在 InnoDB 中，每个数据行上的**非唯一索引**列上都会存在一把 next-key 锁，当某个事务持有该数据行的 next-key 锁时，会锁住一段**左开右闭区间**的数据。因此，当通过 `id > 9530` 这样一种范围查询加锁时，会加 next-key 锁，锁定区间是范围是：
  
  > (9530，9535] (9535，9540] (9540，+∞] ([View Highlight](https://read.readwise.io/read/01hdkemq4ak7fybk2qt9bgprnh)) #Highlight #[[2023-10-25]]
- 间隙锁（也叫 Gap 锁）和 next-key 锁的区别在于**加锁的范围**，间隙锁只锁定两个索引之间的引用间隙，而 next-key 锁会锁定多个索引区间，它包含「记录锁」和「间隙锁」。所以，当我们使用了范围查询，不仅仅命中了已存在的 Record 记录，还包含了 Gap 间隙。 ([View Highlight](https://read.readwise.io/read/01hdken61xd8dzf0a69wm17qbv)) #Highlight #[[2023-10-25]]