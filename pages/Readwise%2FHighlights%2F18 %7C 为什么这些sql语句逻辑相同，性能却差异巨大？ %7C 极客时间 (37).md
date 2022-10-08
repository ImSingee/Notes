title:: Readwise/Highlights/18 | 为什么这些sql语句逻辑相同，性能却差异巨大？ | 极客时间 (37)
author:: [[time.geekbang.org]]
full-title:: 18 | 为什么这些sql语句逻辑相同，性能却差异巨大？ | 极客时间
category:: #articles
url:: https://time.geekbang.org/column/article/70848

- 在 autocommit 为 1 的情况下，用 begin 显式启动的事务，如果执行 commit 则提交事务。如果执行 commit work and chain，则是提交事务并自动启动下一个事务，这样也省去了再次执行 begin 语句的开销。同时带来的好处是从程序开发的角度明确地知道每个语句是否处于事务中。 #Highlight #[[2022-01-24]]
- 你可以在 information_schema 库的 innodb_trx 这个表中查询长事务，比如下面这个语句，用于查找持续时间超过 60s 的事务 #Highlight #[[2022-01-24]]