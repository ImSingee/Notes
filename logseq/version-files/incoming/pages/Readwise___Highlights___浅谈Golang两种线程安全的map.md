title:: Readwise/Highlights/浅谈Golang两种线程安全的map
author:: [[首页]]
full-title:: 浅谈Golang两种线程安全的map
category:: #articles
url:: https://juejin.cn/post/7045206023933526046
tags:: #[[favorite]] #[[golang]]
- sync.map是用读写分离实现的，其思想是空间换时间。和map+RWLock的实现方式相比，它做了一些优化：可以无锁访问read map，而且会优先操作read map，倘若只操作read map就可以满足要求(增删改查遍历)，那就不用去操作write map(它的读写都要加锁)，所以在某些特定场景中它发生锁竞争的频率会远远小于map+RWLock的实现方式 ([View Highlight](https://read.readwise.io/read/01heryxsqrxt3t3gcyxyrqcbjv)) #Highlight #[[2023-11-09]]
- sync.Map**更适合读多更新多而插入新值少的场景**（appendOnly模式，尤其是key存一次，多次读而且不删除的情况），因为在key存在的情况下读写删操作可以不用加锁直接访问readOnly**不适合反复插入与读取新值的场景**，因为这种场景会频繁操作dirty，需要频繁加锁和更新read【此场景github开源库orcaman/concurrent-map更合适】 ([View Highlight](https://read.readwise.io/read/01heryybvwxemz585t20kyvtjn)) #Highlight #[[2023-11-09]]