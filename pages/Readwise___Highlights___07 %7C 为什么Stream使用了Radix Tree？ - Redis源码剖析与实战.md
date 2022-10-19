title:: Readwise/Highlights/07 | 为什么Stream使用了Radix Tree？ - Redis源码剖析与实战
author:: [[蒋德钧]]
full-title:: 07 | 为什么Stream使用了Radix Tree？ - Redis源码剖析与实战
category:: #articles
url:: https://time.geekbang.org/column/article/406284

- 非压缩节点可以指向多个子节点 #Highlight #[[2021-08-17]]
- 了节省内存空间，在 Stream 数据类型的底层数据结构中，采用了 Radix Tree 和 listpack 两种数据结构来保存消息 #Highlight #[[2021-08-17]]