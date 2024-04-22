title:: Readwise/Highlights/一亿数据，为什么nutsdb扛不住，而badgerdb可以？
author:: [[juejin.cn]]
full-title:: 一亿数据，为什么nutsdb扛不住，而badgerdb可以？
category:: #articles
url:: https://juejin.cn/post/7178508243722780732
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)
之前在知乎上看到一个问题：作为一个KV数据库，levelDB为什么使用LSM树实现，而不是hash索引？ 当时就想作答一番。不过看到问题下方已经有大佬作答了，而我也说不出什么新东西来。于是选择作罢。
- nutsdb每新增一条数据，都要在内存中构建一个索引对象去标识数据的位置，以方便我们可以根据这个位置读取出来。所以当数据量很大的时候，索引对象会持续增多，内存迟早是会扛不住的。当然我们可以使用一些压缩算法，比如在论文《Optimistically Compressed Hash Tables & Strings in the USSR》中提到的对hash的压缩，将内存中的索引数据进行一定程度的压缩。不过这样是治标不治本的，只能延缓内存爆满的发生，随着数据的增长内存该炸还是会炸的。 ([View Highlight](https://read.readwise.io/read/01hpf6rsaaxt3qss279ckdmxt9)) #Highlight #[[2024-02-13]]