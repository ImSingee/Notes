title:: Readwise/Highlights/一文了解MySQL数据页
author:: [[juejin.cn]]
full-title:: 一文了解MySQL数据页
category:: #articles
url:: https://juejin.cn/post/7168822175427330062
tags:: #[[database]] #[[favorite]] #[[inoreader]] #[[mysql]] #[[read]] #[[star]]
- 为了避免一条一条读取磁盘数据，InnoDB采取**页**的方式，作为**磁盘**和**内存**之间**交互**的**基本单位**。一个页的大小一般是**16KB**。
  
  InnoDB为了不同的目的而设计了多种**不同类型的页**。
  
  > 【比如】存放**表空间头部信息**的页、存放**undo日志信息**的页等等。我们把存放表中**数据记录**的页，称为**索引页**or**数据页**。 ([View Highlight](https://read.readwise.io/read/01hf8dmh93cqjkbps4d1yx0jhq)) #Highlight #[[2023-11-15]]
- 在一开始生成页的时候，**没有UserRecords部分**。
  
  当插入一条记录时，就会**从Free Space中申请**一个记录大小的空间，并将这个空间**划分到User Records部分**。
  
  当Free Space部分的空间全部都被User Records部分替代掉后，则这个页使用完了，如果再有新的记录插入，则需要去**申请新的页**了。 ([View Highlight](https://read.readwise.io/read/01hf8dnda34pwgfkpy1j5945hs)) #Highlight #[[2023-11-15]]
- 这些被删除的记录之所以没有从磁盘上删除，是因为如果移除了，还需要在磁盘上**重新排列**剩余的记录，这会带来一定的**性能消耗**，所以只是打了一个删除的标记就可以避免重排。然后所有的被删除掉的记录会组成一个**垃圾链表**，记录在这个链表中占用的空间被称为**可重用空间**。之后若是有新的记录插入到表中，它们就可以**覆盖**掉被删除的这些记录占用的存储空间了 ([View Highlight](https://read.readwise.io/read/01hf8dpbc97yz7h3c0x8spardw)) #Highlight #[[2023-11-15]]
- 我们向表中插入的记录都会放到User Record部分，这些记录一条条的`连续排列`着，InnoDB将此连续排列的结构称之为堆（heap）。为了方便管理，他们`把一条记录在堆中的相对位置称之为heap_no`。堆中记录的heap_no值在分配之后就**不会发生改动**了，即使删除了堆中的某条记录，这条被删除记录的heap_no值页仍然保持不变。 ([View Highlight](https://read.readwise.io/read/01hf8dpqtd9p51ss7c6eb56w0w)) #Highlight #[[2023-11-15]]
- 创建页时，每个页会自动添加两条记录，且**都没有主键值**：  
  第一条代表页面中的**最小记录**（即：比任何用户记录都小）——`Infimum`记录，**heap_no=0**  
  第二条代表页面中的**最大记录**（即：比任何用户记录都大）——`Supremum`记录，**heap_no=1**  
  为了**区分**这两条默认记录和用户自己插入的记录，将着两条记录放到一个称为**Infimum+Supremum**的部分 ([View Highlight](https://read.readwise.io/read/01hf8dq99qqfkhkze4rfb2yc0m)) #Highlight #[[2023-11-15]]
- 记录在页中是按照**主键值从小到大**的顺序串联成为一个**单向链表**。那么如果我们要查询`id=4`的数据，用笨方法就是从记录的链表头开始，一直往下查找。但是如果数据量很大，那么性能就无法保证了。针对这个问题，InnoDB采取了图书目录的解决方案，即：`Page Directory`。 ([View Highlight](https://read.readwise.io/read/01hf8dt6yyrfttkssc7b183t5w)) #Highlight #[[2023-11-15]]