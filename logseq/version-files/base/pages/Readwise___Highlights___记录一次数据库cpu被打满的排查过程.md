title:: Readwise/Highlights/记录一次数据库cpu被打满的排查过程
author:: [[juejin.cn]]
full-title:: 记录一次数据库cpu被打满的排查过程
category:: #articles
url:: https://juejin.cn/post/7169027973352914975
tags:: #[[favorite]] #[[inoreader]] #[[mysql]] #[[read]] #[[掘金 - 后端]]

- 通过Explain查看执行计划时发现，possible_keys中包含上面的联合索引，而Key却选择了Primary主键索引 ([View Highlight](https://read.readwise.io/read/01he6y0a33wpms5whfx5p6yw73)) #Highlight #[[2023-11-02]]
- 强制指定索引方式 force index (idx_test) ([View Highlight](https://read.readwise.io/read/01he6y1d7azyv7hmd1th2gvx4g)) #Highlight #[[2023-11-02]]
- order by 导致查询分析器选择了主键索引，我们在Order by中增加排序字段，将Sql调整如下，同样可以命中我们之前的联合索引，查询时长为0.034s，由于先按照主键排序，结果是一致的。相比第四种方法多了一份filesort ([View Highlight](https://read.readwise.io/read/01he6y391g2veekmgc4mtt7nwb)) #Highlight #[[2023-11-02]]
- 经过多次实验Limit 大于695时就会命中联合索引，查询条件下的数据量是79963，696/79963大概占比是0.0087，猜测当获取数据比超过0.0087时，会选择联合索引，未找到源代码验证此结论 ([View Highlight](https://read.readwise.io/read/01he6y3y3ramjhm53db1yw1p35)) #Highlight #[[2023-11-02]]
- 优化器决定如何执行查询的方式是基于一种称为基于代价的优化的方法。5.7在代价类型上分为IO、CPU、Memory。内存的代价收集了，但是并没有参与最终的代价计算。Mysql中引入了两个系统表，mysql.server_cost和mysql.engine_cost，server_cost对应CPU的代价，engine_cost代表IO的代价。 ([View Highlight](https://read.readwise.io/read/01he6y4y5ays8dk8g9zk1n544h)) #Highlight #[[2023-11-02]]
- server_cost（CPU代价）
  
  •   row_evaluate_cost (default 0.2) 计算符合条件的行的代价，行数越多，此项代价越大
  •   memory_temptable_create_cost (default 2.0) 内存临时表的创建代价
  •   memory_temptable_row_cost (default 0.2) 内存临时表的行代价
  •   key_compare_cost (default 0.1) 键比较的代价，例如排序
  •   disk_temptable_create_cost (default 40.0) 内部myisam或innodb临时表的创建代价
  •   disk_temptable_row_cost (default 1.0) 内部myisam或innodb临时表的行代价
  
  由上可以看出创建临时表的代价是很高的，尤其是内部的myisam或innodb临时表。 ([View Highlight](https://read.readwise.io/read/01he6y5dtbwvee0j67d48tq3fz)) #Highlight #[[2023-11-02]]
- engine_cost（IO代价）
  
  •   io_block_read_cost (default 1.0) 从磁盘读数据的代价，对innodb来说，表示从磁盘读一个page的代价
  •   memory_block_read_cost (default 1.0) 从内存读数据的代价，对innodb来说，表示从buffer pool读一个page的代价 ([View Highlight](https://read.readwise.io/read/01he6y5k7rx9k7dge47sv34s1z)) #Highlight #[[2023-11-02]]
- 通过查看optimizer_trace，可以了解查询优化器是如何选择的索引 ([View Highlight](https://read.readwise.io/read/01he6y6v73jfr9nj7h9azv5nbg)) #Highlight #[[2023-11-02]]
- 主要原因是由于我们使用了order by id asc这种基于 id 的排序写法，优化器认为排序是个昂贵的操作，所以为了避免排序，并且它认为 limit n 的 n 如果很小的话即使使用全表扫描也能很快执行完，所以它选择了全表扫描，也就避免了 id 的排序 ([View Highlight](https://read.readwise.io/read/01he6yadvnaxz4r4d6s70gd75c)) #Highlight #[[2023-11-02]]
- 查询优化器会基于代价来选择最优的执行计划，但由于order by id limit n的存在，MySql可能会重新选择一个错误的索引，忽略原有的基于代价选择出来的索引，转而选择全表扫描的主键索引 ([View Highlight](https://read.readwise.io/read/01he6yawgazn04efm8pats466v)) #Highlight #[[2023-11-02]]