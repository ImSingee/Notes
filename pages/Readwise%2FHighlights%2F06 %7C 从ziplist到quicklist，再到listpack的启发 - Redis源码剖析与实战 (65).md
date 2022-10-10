title:: Readwise/Highlights/06 | 从ziplist到quicklist，再到listpack的启发 - Redis源码剖析与实战 (65)
author:: [[蒋德钧]]
full-title:: 06 | 从ziplist到quicklist，再到listpack的启发 - Redis源码剖析与实战
category:: #articles
url:: https://time.geekbang.org/column/article/405387

- 在 listpack 中，因为每个列表项只记录自己的长度，而不会像 ziplist 中的列表项那样，会记录前一项的长度。所以，当我们在 listpack 中新增或修改元素时，实际上只会涉及每个列表项自己的操作，而不会影响后续列表项的长度变化，这就避免了连锁更新。 #Highlight #[[2021-08-16]]