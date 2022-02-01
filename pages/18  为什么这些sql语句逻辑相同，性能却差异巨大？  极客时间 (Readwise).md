retrieved:: [[2022-02-01]], 2:40:29 PM
              author:: [[time.geekbang.org]]
              category:: [[articles]]
              source:: [[hypothesis]]

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
	- MySQL 的行锁是在引擎层由各个引擎自己实现的。但并不是所有的引擎都支持行锁，比如 MyISAM 引擎就不支持行锁。
	                link:: [null](null)
	                on:: [[2022-01-26]]
	                tags::
	- 根据加锁的范围，MySQL 里面的锁大致可以分成全局锁、表级锁和行锁三类
	                link:: [null](null)
	                on:: [[2022-01-26]]
	                tags::
	- 在 InnoDB 事务中，行锁是在需要的时候才加上的，但并不是不需要了就立刻释放，而是要等到事务结束时才释放。这个就是两阶段锁协议。
	                link:: [null](null)
	                on:: [[2022-01-26]]
	                tags::
	- begin/start transaction 命令并不是一个事务的起点，在执行到它们之后的第一个操作 InnoDB 表的语句，事务才真正启动。如果你想要马上启动一个事务，可以使用 start transaction with consistent snapshot 这个命令。
	                link:: [null](null)
	                on:: [[2022-01-26]]
	                tags::
	- 如果你的事务中需要锁多个行，要把最可能造成锁冲突、最可能影响并发度的锁尽量往后放。
	                link:: [null](null)
	                on:: [[2022-01-26]]
	                tags::
	- InnoDB 里面每个事务有一个唯一的事务 ID，叫作 transaction id。它是在事务开始的时候向 InnoDB 的事务系统申请的，是按申请顺序严格递增的。
	                link:: [null](null)
	                on:: [[2022-01-26]]
	                tags::
	- MySQL 里面表级别的锁有两种：一种是表锁，一种是元数据锁（meta data lock，MDL)。
	                link:: [null](null)
	                on:: [[2022-01-26]]
	                tags::
	- lock tables 语法除了会限制别的线程的读写外，也限定了本线程接下来的操作对象。
	                link:: [null](null)
	                on:: [[2022-01-26]]
	                tags::
	- 在还没有出现更细粒度的锁的时候，表锁是最常用的处理并发的方式。而对于 InnoDB 这种支持行锁的引擎，一般不使用 lock tables 命令来控制并发，毕竟锁住整个表的影响面还是太大。
	                link:: [null](null)
	                on:: [[2022-01-26]]
	                tags::
	- 当对一个表做增删改查操作的时候，加 MDL 读锁；当要对表做结构变更操作的时候，加 MDL 写锁。
	                link:: [null](null)
	                on:: [[2022-01-26]]
	                tags::
	- 事务中的 MDL 锁，在语句执行开始时申请，但是语句结束后并不会马上释放，而会等到整个事务提交后再释放。
	                link:: [null](null)
	                on:: [[2022-01-26]]
	                tags::
	- 更新数据都是先读后写的，而这个读，只能读当前的值，称为“当前读”（current read）。
	                link:: [null](null)
	                on:: [[2022-01-26]]
	                tags::
	- 而事务更新数据的时候，只能用当前读。如果当前的记录的行锁被其他事务占用的话，就需要进入锁等待。
	                link:: [null](null)
	                on:: [[2022-01-26]]
	                tags::
	- 全库只读  readonly = true 还有个情况在 slave 上 如果用户有超级权限的话  readonly 是失效的
	                link:: [null](null)
	                on:: [[2022-01-26]]
	                tags::