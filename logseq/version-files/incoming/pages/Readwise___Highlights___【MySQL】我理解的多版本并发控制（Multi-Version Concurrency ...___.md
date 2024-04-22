title:: Readwise/Highlights/【MySQL】我理解的多版本并发控制（Multi-Version Concurrency ...
author:: [[首页]]
full-title:: 【MySQL】我理解的多版本并发控制（Multi-Version Concurrency Control，MVCC）
category:: #articles
url:: https://juejin.cn/post/6959461061024022558
tags:: #[[ifttt]] #[[instapaper]]  
![](https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png)
首先对于数据的并发读写，需要承认的基本事实是：读-读不会冲突，写-写和读-写会冲突。读-读不冲突，因此无需做任何互斥处理；写-写冲突会引起丢失更新问题，读-写冲突可能会造成事务的隔离性问题，可能遇到脏读、幻读
- MySQL 存储引擎 InnoDB 会在每行数据记录后面增加三个隐藏字段：
  
  •   **DB_TRX_ID**：插入或修改该记录的事务ID，删除可以等同于修改处理。区别在于 undo log 中会通过标识位来表明是删除还是修改，删除时会给行记录的 info_bits 打上删除标识，由专门的 purge 线程来执行真正的删除操作。
    
  •   **DB_ROLL_PTR**：回滚指针，指向 undo log 记录，undo log 中保存每条记录每次的改动记录。undo log 中的每个数据记录版本又指向上一个数据记录版本，通过 DB_ROLL_PTR 链接形成数据记录的多版本链。
    
  •   **DB_ROW_ID**：随着插入记录而递增，没有定义主键时，该列充当隐藏的主键。（该字段实际上与 MVCC 关系并不大） ([View Highlight](https://read.readwise.io/read/01hpkcspexrpm5vjtpy9d0vfe5)) #Highlight #[[2024-02-14]]