title:: Readwise/Highlights/【后端专场 学习资料六】字节跳动青训营
author:: [[juejin.cn]]
full-title:: 【后端专场 学习资料六】字节跳动青训营
category:: #articles
url:: https://juejin.cn/post/7197699689135210552
- 2.  The Linux Programming Interface（第13章 FILE I/O BUFFERING）
  
  本书介绍了很多Linux内核子系统的实现，其中第13章着重讲了单机的文件IO。学习完Linux中的文件IO栈，对单机存储系统会有更深的认识。 ([View Highlight](https://read.readwise.io/read/01hdg1qx87v9k16yc03m6f9mkr)) #Highlight #[[2023-10-24]]
- SQL引擎包括了：
  
  •   Paser：经过词法分析、语法分析生成语法树，然后对语法树进行合法性校验。
    
  •   Optimizer：根据Parser产生的语法树，根据规则或者代价产生执行计划树。
    
  •   Executor：根据计划树进行执行，常见的执行方式是火山模型。 ([View Highlight](https://read.readwise.io/read/01hdg1ywwz8nt9g01vebmqt9x9)) #Highlight #[[2023-10-24]]
- 存储引擎负责了数据的底层存储、管理和访问工作。各大RDBMS存储引擎的设计都有不少的差异，这里选择MySQL的InnoDB存储引擎来向大家做一个介绍：
  
  •   Buffer Pool：存储引擎位于内存中的重要结构，用于缓存数据，减少磁盘IO的开销。
    
  •   Page：数据存储的最基本单位，一般为16KB。
    
  •   B+u Tree：InnoDB中最常用的索引结构。 ([View Highlight](https://read.readwise.io/read/01hdg1yzsm8b236c8yq5t5548j)) #Highlight #[[2023-10-24]]
- 事务引擎实现了数据库的ACID能力，这里还是以MySQL的InnoDB为例来介绍数据库内部是通过哪些技术来实现ACID：
  
  •   Atomicity：InnoDB中通过undo日志实现了数据库的原子性，通过Undo Log，数据库可以回滚到事务开始的状态；
    
  •   Isolation：通过Undo Log实现MVCC（多版本并发控制），降低读写冲突。
    
  •   Durability：通过Redo Log（一种WAL实现方式）来保证事务在提交后一定能持久化到磁盘中。
    
  •   Consistency：一致性本质上是一种业务层的限制。 ([View Highlight](https://read.readwise.io/read/01hdg1z4h46xkgaya2vrbnd7kp)) #Highlight #[[2023-10-24]]