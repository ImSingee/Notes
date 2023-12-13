title:: Readwise/Highlights/MySQL 怎么用索引实现 Group By？
author:: [[操盛春]]
full-title:: MySQL 怎么用索引实现 Group By？
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MzUxODAzNDg4NQ==&mid=2247508383&idx=2&sn=de9c5eeac094b6e78304f2ff059a0a5c&chksm=f98de535cefa6c23faa6d74bb7d7a74afbc9cd9da498b1cc0322c01279acfb518f4eeb8c50ec#rd
tags:: #[[favorite]] #[[inoreader]] #[[mysql]] #[[star]] #[[微信公众号]]
- 使用索引实现 group by，最简单的方式，大概就是这样了：
  
  •   存储引擎按顺序一条一条读取记录，返回给 server 层。
    
  •   server 层判断记录是否符合 where 条件。
    
  •   server 层对符合条件的记录进行聚合函数逻辑处理。
    
  
  这种实现方式被称为`紧凑索引扫描`。
  
  紧凑索引扫描会对满足 where 条件的所有记录进行聚合函数处理，而对于 min()、max() 来说，实际需要的只有每个分组中聚合函数字段值最小或最大的那条记录。
  
  如果 server 层能直接从存储引擎读取到每个分组中聚合函数需要的那条记录，而不必读取每个分组中的所有记录进行聚合函数处理，是不是就可以节省很多时间了？
  
  是的，这种只读取分组中部分记录实现 group by 的方式，被称为`松散索引扫描`。 ([View Highlight](https://read.readwise.io/read/01heh94wps0035q80fm5ctbrw4)) #Highlight #[[2023-11-06]]
- 紧凑索引扫描中的`紧凑`，表示 server 层从存储引擎读取记录时，以索引范围扫描或全索引扫描方式，按顺序一条一条读取记录，不会跳过中间的某条记录 ([View Highlight](https://read.readwise.io/read/01heh95fj8jybcet4c6zrb9rh2)) #Highlight #[[2023-11-06]]
- **条件 1**，select 语句只能是单表查询，不能是连接查询。
  
  **条件 2**，group by 字段必须满足索引的最左匹配原则。例如：表中有一个索引包含 c1, c2, c3 三个字段，group by c1, c2 满足最左匹配原则。
  
  **条件 3**，如果 select 字段列表中包含聚合函数，聚合函数必须满足这些条件：
  
  •   所有聚合函数的参数都必须是同一个字段。
    
  •   聚合函数字段必须是索引中的字段，并且 `group by 字段 + 聚合函数字段`也必须满足索引最左匹配原则。
    
  •   聚合函数要么是 min()、max() 中的 1 ~ 2 个；要么是 count(distinct)、sum(distinct)、avg(distinct) 中的 1 ~ 3个。  
    
    > 松散索引扫描中，两类聚合函数不能同时存在，因为它们对于`分组前缀`处理逻辑不一样。在读取数据时，min()、max() 用 `group by 字段值`作为分组前缀；count(distinct)、sum(distinct)、avg(distinct) 用 `group by 字段值 + 聚合函数中的字段值`作为分组前缀。
    
  
  **条件 4**，索引中所有字段必须是全字段索引，不能是前缀索引。  
  例如：有个字段 `c1 varchar(20)`，索引中该字段为 `index(c1(10))`，这样的索引就不能用于松散索引扫描。
  
  满足以上条件，还只是站在了使用松散索引扫描的门外，想要登堂入室，还必须进行成本评估。
  
  如果松散索引扫描的成本比紧凑索引扫描的成本低，自然就要用`松散索引扫描`来提升 select 语句的执行效率了。 ([View Highlight](https://read.readwise.io/read/01heh9cv4smdekw8sser9c0mex)) #Highlight #[[2023-11-06]]
- MySQL 祭出了一个大招，既要和紧凑索引扫描一样顺序读取数据，又要用松散索引扫描自带的去重能力。如果用了这个大招，在 explain 输出结果的 Extra 列可以看到 `Using index for group-by (scanning)`。
  
  MySQL 把紧凑索引扫描中使用的`顺序读取记录`嵌入到松散索引扫描的逻辑里，当评估紧凑索引扫描成本比松散索引扫描低时，对于包含 distinct 关键字的聚合函数，就会用顺序读取记录代替跳着读取记录，并且在顺序读取记录的过程中完成记录去重。 ([View Highlight](https://read.readwise.io/read/01heh9drbksdx810zhhtqc7zmh)) #Highlight #[[2023-11-06]]
- `紧凑索引扫描`，存储引擎按顺序一条一条读取记录，返回给 server 层，server 层判断记录是否符合 where 条件，然后对符合条件的记录进行聚合函数逻辑处理。
  
  `松散索引扫描`，对于每个分组，都会从存储引擎读取两次数据，第一次是读取分组的第一条记录，得到`分组前缀`；第二次是根据`分组前缀`读取分组中索引扫描范围的第一条或最后一条记录。
  
  如果分组中的记录数量多，第二次读取记录时，能`跳过`的记录就多，节省的成本就多，松散索引扫描就会比紧凑索引扫描更快。
  
  如果分组中的记录数量少，第二次读取记录时，能跳过的记录就少，每个分组读取两次记录增加的成本`超过了`跳过记录节省的成本，松散索引扫描就会比紧凑索引扫描更慢。 ([View Highlight](https://read.readwise.io/read/01heh9e8fbxxdg3y8865gsxb8b)) #Highlight #[[2023-11-06]]