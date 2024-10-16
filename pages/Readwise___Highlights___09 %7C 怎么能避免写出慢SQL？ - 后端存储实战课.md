title:: Readwise/Highlights/09 | 怎么能避免写出慢SQL？ - 后端存储实战课
author:: [[李玥]]
full-title:: 09 | 怎么能避免写出慢SQL？ - 后端存储实战课
category:: #articles
url:: https://time.geekbang.org/column/article/211555
- 索引可以显著减少查询遍历数据的数量，所以提升 SQL 查询性能最有效的方式就是，让查询尽可能多的命中索引，但索引也是一把双刃剑，它在提升查询性能的同时，也会降低数据更新的性能。 #Highlight #[[2022-08-06]]
- 在开发阶段，衡量一个 SQL 查询语句查询性能的手段是，估计执行 SQL 时需要遍历的数据行数。遍历行数在百万以内，可以认为是安全的 SQL，百万到千万这个量级则需要仔细评估和优化，千万级别以上则是非常危险的。 #Highlight #[[2022-08-06]]
- type 这一列，这一列表示这个查询的访问类型。ALL 代表全表扫描，这是最差的情况。range 代表使用了索引，在索引中进行范围查找，因为第二个 SQL 语句的 WHERE 中有一个 LIKE 的查询条件。如果直接命中索引，type 这一列显示的是 index。如果使用了索引，可以在 key 这一列中看到，实际上使用了哪个索引。 #Highlight #[[2022-08-06]]
- 增加索引付出的代价是，会降低数据插入、删除和更新的性能。这个也很好理解，增加了索引，在数据变化的时候，不仅要变更数据表里的数据，还要去变更每个索引。所以，对于更新频繁并且对更新性能要求较高的表，可以尽量少建索引。而对于查询较多更新较少的表，可以根据查询的业务逻辑，适当多建一些索引。 #Highlight #[[2022-08-06]]
- 遍历行数在千万左右，是 MySQL 查询的一个坎儿。MySQL 中单个表数据量，也要尽量控制在一千万条以下，最多不要超过二三千万这个量级。原因也很好理解，对一个千万级别的表执行查询，加上几个 WHERE 条件过滤一下，符合条件的数据最多可能在几十万或者百万量级，这还可以接受。但如果再和其他的表做一个联合查询，遍历的数据量很可能就超过千万级别了。所以，每个表的数据量最好小于千万级别。 #Highlight #[[2022-08-06]]
- 你在编写一条查询语句的时候，可以依据你要查询数据表的数据总量，估算一下这条查询大致需要遍历多少行数据。如果遍历行数在百万以内的，只要不是每秒钟都要执行几十上百次的频繁查询，可以认为是安全的。遍历数据行数在几百万的，查询时间最少也要几秒钟，你就要仔细考虑有没有优化的办法。遍历行数达到千万量级和以上的，我只能告诉你，这种查询就不应该出现在你的系统中。当然我们这里说的都是在线交易系统，离线分析类系统另说。 #Highlight #[[2022-08-06]]
- 因为查询的执行时长基本上是和遍历的数据行数正相关的。 #Highlight #[[2022-08-06]]
- 一般一台 MySQL 服务器，平均每秒钟执行的 SQL 数量在几百左右，就已经是非常繁忙了，即使看起来 CPU 利用率和磁盘繁忙程度没那么高，你也需要考虑给数据库“减负”了。 #Highlight #[[2022-08-06]]
- 一台 MySQL 数据库，大致处理能力的极限是，每秒一万条左右的简单 SQL，这里的“简单 SQL”，指的是类似于主键查询这种不需要遍历很多条记录的 SQL。根据服务器的配置高低，可能低端的服务器只能达到每秒几千条，高端的服务器可以达到每秒钟几万条，所以这里给出的一万 TPS 是中位数的经验值。考虑到正常的系统不可能只有简单 SQL，所以实际的 TPS 还要打很多折扣。 #Highlight #[[2022-08-06]]
- 慢 SQL 对数据库的影响，是一个量变到质变的过程，对“量”的把握，就很重要。作为一个合格的程序员，你需要对数据库的能力，有一个定量的认识。 #Highlight #[[2022-08-06]]
- 在大多数实际的系统中，慢 SQL 消耗掉的数据库资源，往往是正常 SQL 的几倍、几十倍甚至几百倍 #Highlight #[[2022-08-06]]