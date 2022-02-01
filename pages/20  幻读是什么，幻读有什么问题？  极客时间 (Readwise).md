retrieved:: [[2022-02-01]], 2:40:22 PM
              author:: [[time.geekbang.org]]
              category:: [[articles]]
              source:: [[hypothesis]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)
- ## [[Readwise Highlights]]
	- 在 autocommit 为 1 的情况下，用 begin 显式启动的事务，如果执行 commit 则提交事务。如果执行 commit work and chain，则是提交事务并自动启动下一个事务，这样也省去了再次执行 begin 语句的开销。同时带来的好处是从程序开发的角度明确地知道每个语句是否处于事务中。
	                link:: [null](null)
	                on:: [[2022-01-24]]
	                tags::
	- 你可以在 information_schema 库的 innodb_trx 这个表中查询长事务，比如下面这个语句，用于查找持续时间超过 60s 的事务
	                link:: [null](null)
	                on:: [[2022-01-24]]
	                tags::