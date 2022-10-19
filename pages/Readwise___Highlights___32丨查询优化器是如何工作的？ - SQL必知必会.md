title:: Readwise/Highlights/32丨查询优化器是如何工作的？ - SQL必知必会
author:: [[陈旸]]
full-title:: 32丨查询优化器是如何工作的？ - SQL必知必会
category:: #articles
url:: https://time.geekbang.org/column/article/125429

- 首先，我们先来了解下 MySQL 中的COST Model，COST Model就是优化器用来统计各种步骤的代价模型，在 5.7.10 版本之后，MySQL 会引入两张数据表，里面规定了各种步骤预估的代价（Cost Value） ，我们可以从mysql.server_cost和mysql.engine_cost这两张表中获得这些步骤的代价： #Highlight #[[2022-05-04]]
- 查询优化器的目标是找到执行 SQL 查询的最佳执行计划，执行计划就是查询树，它由一系列物理操作符组成，这些操作符按照一定的运算关系组成查询的执行计划。在查询优化器中，可以分为逻辑查询优化阶段和物理查询优化阶段。 #Highlight #[[2022-05-04]]