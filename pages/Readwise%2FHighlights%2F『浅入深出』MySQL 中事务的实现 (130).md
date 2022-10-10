title:: Readwise/Highlights/『浅入深出』MySQL 中事务的实现 (130)
author:: [[draveness.me]]
full-title:: 『浅入深出』MySQL 中事务的实现
category:: #articles
url:: https://draveness.me/draveness.me/mysql-innodb

- 在 InnoDB 存储引擎中，所有的数据都被逻辑地存放在表空间中，表空间（tablespace）是存储引擎中最高的存储逻辑单位，在表空间的下面又包括段（segment）、区（extent）、页（page） #Highlight #[[2022-07-23]]
- 同一个数据库实例的所有表空间都有相同的页大小；默认情况下，表空间中的页大小都为 16KB，当然也可以通过改变 innodb_page_size 选项对默认大小进行修改，需要注意的是不同的页大小最终也会导致区大小的不同 #Highlight #[[2022-07-23]]
- 在 InnoDB 存储引擎中，一个区的大小最小为 1MB，页的数量最少为 64 个 #Highlight #[[2022-07-23]]
- MySQL 使用 InnoDB 存储表时，会将表的定义和数据索引等信息分开存储，其中前者存储在 .frm 文件中，后者存储在 .ibd 文件中 #Highlight #[[2022-07-23]]
- InnoDB 使用页作为磁盘管理的最小单位；数据在 InnoDB 存储引擎中都是按行存储的，每个 16KB 大小的页中可以存放 2-200 行的记录 #Highlight #[[2022-07-23]]
- Antelope 是 InnoDB 最开始支持的文件格式，它包含两种行格式 Compact 和 Redundant，它最开始并没有名字；Antelope 的名字是在新的文件格式 Barracuda 出现后才起的，Barracuda 的出现引入了两种新的行格式 Compressed 和 Dynamic；InnoDB 对于文件格式都会向前兼容，而官方文档中也对之后会出现的新文件格式预先定义好了名字：Cheetah、Dragon、Elk 等等 #Highlight #[[2022-07-23]]