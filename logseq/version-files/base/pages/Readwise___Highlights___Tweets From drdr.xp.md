title:: Readwise/Highlights/Tweets From drdr.xp
author:: [[@drmingdrmer on Twitter]]
full-title:: Tweets From drdr.xp
category:: #tweets
url:: https://twitter.com/drmingdrmer

- 不是经 @OnlyXuanwo 提点, 我都不知道ssh协议这么多零碎: https://t.co/BHBRq7JbUh 
  
  ![](https://pbs.twimg.com/media/FjTU5QwaAAA5LF1.jpg) ([View Tweet](https://twitter.com/drmingdrmer/status/1600138206028402689)) #Highlight #[[2022-12-07]]
- 为啥leveldb 的 memtable不用btree而用skiplist:
  
  1 是SkipList 比 BTree要简单，代码量: 100行 vs 300行
  
  2 以前内存和CPU之间的速度差异小，基于指针的结构更有优势。(但近年CPU的速度提升，Btree这种数据集中, cache友好的结构更有优势)
  
  3 SkipList容易实现无锁的并发访问(insert+range)。 ([View Tweet](https://twitter.com/drmingdrmer/status/1717400386120904949)) #Highlight #[[2023-10-26]]