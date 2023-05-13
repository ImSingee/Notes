title:: Readwise/Highlights/SQL基础教程（第2版）
author:: [[MICK]]
full-title:: SQL基础教程（第2版）
category:: #books

- 从SQL的角度来看，视图和表是相同的，两者的区别在于表中保存的是实际的数据，而视图中保存的是SELECT语句（视图本身并不存储数据）。 #Highlight #[[2021-05-01]]
- 事务是需要在同一个处理单元中执行的一系列更新处理的集合。通过使用事务，可以对数据库中的数据更新处理的提交和取消进行管理。 #Highlight #[[2021-05-01]]
- 查询就是一次性视图（SELECT语句）。与视图不同，子查询在SELECT语句执行完毕之后就会消失 #Highlight #[[2021-05-01]]
- DBMS的事务具有原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）和持久性（Durability）四种特性。通常将这四种特性的首字母结合起来，统称为ACID特性。 #Highlight #[[2021-05-01]]
- 视图包含“不能使用ORDER BY”和“可对其进行有限制的更新”两项限制。 #Highlight #[[2021-05-01]]
- 子查询就是将用来定义视图的SELECT语句直接用于FROM子句当中 #Highlight #[[2021-05-01]]
- 在RDBMS中，事务是对表中数据进行更新的单位。简单来讲，事务就是需要在同一个处理单元中执行的一系列更新处理的集合。 #Highlight #[[2021-05-01]]
- 聚合函数基本上只包含COUNT、SUM、AVG、MAX、MIN这5种 #Highlight #[[2021-05-01]]
- 遇到这种需要在同一个处理单元中执行一系列更新操作的情况，一定要使用事务来进行处理。 #Highlight #[[2021-05-01]]
- 可以将频繁使用的SELECT语句保存成视图，这样就不用每次都重新书写了 #Highlight #[[2021-05-01]]
- 标准SQL中并没有定义事务的开始语句，而是由各个DBMS自己来定义的。 #Highlight #[[2021-05-01]]
- ▲子句的书写顺序
  1. SELECT子句→2. FROM子句→3. WHERE子句→4. GROUP BY子句→5. HAVING子句→6. ORDER BY子句 #Highlight #[[2021-05-01]]
- 集合运算符会除去重复的记录。 #Highlight #[[2021-05-08]]
- 对于COUNT函数来说，参数列不同计算的结果也会发生变化 #Highlight #[[2021-05-01]]
- 与SELECT语句不同的是，DELETE语句中不能使用GROUP BY、HAVING和ORDER BY三类子句，而只能使用WHERE子句。 #Highlight #[[2021-05-01]]
- 随着子查询嵌套层数的增加，SQL语句会变得越来越难读懂，性能也会越来越差。因此，请大家尽量避免使用多层嵌套的子查询。 #Highlight #[[2021-05-01]]
- 标准SQL中用来从表中删除数据的只有DELETE语句。但是，很多数据库产品中还存在另外一种被称为TRUNCATE的语句。 #Highlight #[[2021-05-01]]
- 原则上子查询必须设定名称，因此请大家尽量从处理内容的角度出发为子查询设定恰当的名称。 #Highlight #[[2021-05-01]]
- 与DELETE不同的是，TRUNCATE只能删除表中的全部数据，而不能通过WHERE子句指定条件来删除部分数据。也正是因为它不能具体地控制删除对象，所以其处理速度比DELETE要快得多。 #Highlight #[[2021-05-01]]
- 原则上，执行一次INSERT语句会插入一行数据。 #Highlight #[[2021-05-01]]
- 标量子查询就是返回单一值的子查询。 #Highlight #[[2021-05-01]]
- 使用含有NULL的列作为排序键时，NULL会在结果的开头或末尾汇总显示 #Highlight #[[2021-05-01]]
- 大部分情况下，事务在数据库连接建立时就已经悄悄开始了，并不需要用户再明确发出开始指令。 #Highlight #[[2021-05-01]]
- 在集合运算符中使用ALL选项，可以保留重复行。 #Highlight #[[2021-05-08]]
- 虽然语法上没有错误，但是我们还是应该尽量避免在视图的基础上创建视图。这是因为对多数DBMS来说，多重视图会降低SQL的性能。因此，希望大家（特别是刚刚接触视图的读者）能够使用单一视图。 #Highlight #[[2021-05-01]]
- ▲使用HAVING子句时SELECT语句的顺序
  FROM→WHERE→GROUP BY→HAVING→SELECT→ORDER BY #Highlight #[[2021-05-01]]
- WHERE子句=指定行所对应的条件
  HAVING子句=指定组所对应的条件 #Highlight #[[2021-05-01]]
- 这只是一个粗略的总结，虽然具体的执行顺序根据DBMS的不同而不同，但是大家有这样一个大致的印象就可以了。一定要记住SELECT子句的执行顺序在GROUP BY子句之后，ORDER BY子句之前。因此，在执行GROUP BY子句时，SELECT语句中定义的别名无法被识别￼。对于在SELECT子句之后执行的ORDER BY子句来说，就没有这样的问题了。 #Highlight #[[2021-05-01]]
- 某些时候也可以对视图进行更新。标准SQL中有这样的规定：如果定义视图的SELECT语句能够满足某些条件，那么这个视图就可以被更新。下面就给大家列举一些比较具有代表性的条件。
  
  ①SELECT子句中未使用DISTINCT
  ②FROM子句中只有一张表
  ③ 未使用GROUP BY子句
  ④ 未使用HAVING子句 #Highlight #[[2021-05-01]]
- 能够使用常数或者列名的地方，无论是SELECT子句、GROUP BY子句、HAVING子句，还是ORDER BY子句，几乎所有的地方都可以使用。 #Highlight #[[2021-05-01]]
- 视图和表需要同时进行更新，因此通过汇总得到的视图无法进行更新。 #Highlight #[[2021-05-01]]
- DISTINCT关键字只能用在第一个列名之前。 #Highlight #[[2021-05-01]]
- 在GROUP BY子句中不能使用SELECT子句中定义的别名。 #Highlight #[[2021-05-01]]
- PostgreSQL中的视图会被初始设定为只读 #Highlight #[[2021-05-01]]
- 在使用IN和NOT IN时是无法选取出NULL数据的 #Highlight #[[2021-05-02]]
- 在ORDER BY子句中不要使用列编号。 #Highlight #[[2021-05-01]]
- 只有SELECT子句和HAVING子句（以及之后将要学到的ORDER BY子句）中能够使用COUNT等聚合函数。 #Highlight #[[2021-05-01]]
- INSERT语句的SELECT语句中，可以使用WHERE子句或者GROUP BY子句等任何SQL语法（但使用ORDER BY子句并不会产生任何效果）。 #Highlight #[[2021-05-01]]
	- **Note**: 对于使用自增主键的表效果还是有的
- INSERT语句的SELECT语句中，可以使用WHERE子句或者GROUP BY子句等任何SQL语法（但使用ORDER BY子句并不会产生任何效果）。 #Highlight #[[2021-05-01]]
- 作为EXIST参数的子查询中经常会使用SELECT ＊。 #Highlight #[[2021-05-02]]
- COALESCE是SQL特有的函数。该函数会返回可变参数￼中左侧开始第1个不是NULL的值。参数个数是可变的，因此可以根据需要无限增加。 #Highlight #[[2021-05-02]]