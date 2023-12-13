title:: Readwise/Highlights/MySQL性能优化浅析及线上案例
author:: [[juejin.cn]]
full-title:: MySQL性能优化浅析及线上案例
category:: #articles
url:: https://juejin.cn/post/7189808861388210235
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]
- 当数据量变多的时候，那么这一页就装不下这么多数据，就要分裂页，而每页之间都会双向链接，最终形成一个双向链表 ([View Highlight](https://read.readwise.io/read/01he6yqzw892p6msqa8e1crgd0)) #Highlight #[[2023-11-02]]
- 最下边的一层叫做叶子节点，上边的叫做内节点，而叶子节点中存储的是全量数据，这样的树就是**聚簇索引**。一直有同学的理解是说索引是单独一份而数据是一份，其实MySQL中有一个原则就是**数据即索引、索引即数据**，真实的数据本身就是存储在聚簇索引中的，所谓的**回表就是回的聚簇索引**。 ([View Highlight](https://read.readwise.io/read/01he6yrg0gybs9p6cffq5q38kb)) #Highlight #[[2023-11-02]]
- 当列中不重复值的个数在总记录条数中的占比很大时，才为列建立索引 ([View Highlight](https://read.readwise.io/read/01he6ys1gcwey68za1tz6npszg)) #Highlight #[[2023-11-02]]
- 尽量使用覆盖索引进行查询，以避免回表操作带来的性能损耗 ([View Highlight](https://read.readwise.io/read/01he6yswsvqf1m9y98q7pce5km)) #Highlight #[[2023-11-02]]
- 为了尽可能的少的让聚簇索引发生页面分裂的情况，建议让主键自增 ([View Highlight](https://read.readwise.io/read/01he6yt15xfe49eh2wca2nkb7m)) #Highlight #[[2023-11-02]]