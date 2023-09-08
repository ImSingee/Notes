title:: Readwise/Highlights/06丨数据库原理：为什么PrepareStatement性能更好更安全？ - 后端技术面试 38 讲
author:: [[李智慧]]
full-title:: 06丨数据库原理：为什么PrepareStatement性能更好更安全？ - 后端技术面试 38 讲
category:: #articles
url:: https://time.geekbang.org/column/article/172000
- 通过非聚簇索引找到主键索引，再通过主键索引找到行记录的过程也被称作回表。 #Highlight #[[2023-01-03]]
- 非聚簇索引在叶子节点记录的就不是数据行记录，而是聚簇索引，也就是主键 #Highlight #[[2023-01-03]]
- 数据库索引有两种，一种是聚簇索引，聚簇索引的数据库记录和索引存储在一起，上面这张图就是聚簇索引的示意图，在叶子节点，索引 1 和记录行 r1 存储在一起，查找到索引就是查找到数据库记录。像 MySQL 数据库的主键就是聚簇索引，主键 ID 和所在的记录行存储在一起。MySQL 的数据库文件实际上是以主键作为中间节点，行记录作为叶子节点的一颗 B+ 树。 #Highlight #[[2023-01-03]]
- PrepareStatement 会预先提交带占位符的 SQL 到数据库进行预处理，提前生成执行计划，当给定占位符参数，真正执行 SQL 的时候，执行引擎可以直接执行，效率更好一点。 #Highlight #[[2023-01-03]]