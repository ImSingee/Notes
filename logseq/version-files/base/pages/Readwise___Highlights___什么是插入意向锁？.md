title:: Readwise/Highlights/什么是插入意向锁？
author:: [[江南一点雨]]
full-title:: 什么是插入意向锁？
category:: #articles
url:: http://www.javaboy.org/2022/1128/mysql-insert-intention-lock.html
tags:: #[[inoreader]] #[[博客]] #[[江南一点雨]]

- 插入意向锁是一种在 INSERT 操作之前设置的一种间隙锁，插入意向锁表示了一种插入意图，即当多个不同的事务，同时往同一个索引的同一个间隙中插入数据的时候，它们互相之间无需等待，即不会阻塞（要是单纯按照之前间隙锁的理论，必须要等一个间隙锁释放了，下一个事务才可以往相同的间隙处插入数据）。假设有值为 4 和 7 的索引记录，现在有两个事务，分别尝试插入值为 5 和 6 的记录，在获得插入行的排他锁之前，每个事务使用插入意向锁锁定 4 和 7 之间的间隙，但是这两个事务不会相互阻塞，因为行是不冲突的。 ([View Highlight](https://read.readwise.io/read/01hfm7tpq14n8kxsp6a42vqhrg)) #Highlight #[[2023-11-20]]
- Gap Lock，说过这个是可重复读（REPEATABLE READ）这个隔离级别下特有的产物，那么现在 Insert Intention Lock 是一种特殊的 Gap Lock，当然也是在可重复读这个隔离级别下生效。 ([View Highlight](https://read.readwise.io/read/01hfm7vjja4mf4d2634m41rsqs)) #Highlight #[[2023-11-20]]