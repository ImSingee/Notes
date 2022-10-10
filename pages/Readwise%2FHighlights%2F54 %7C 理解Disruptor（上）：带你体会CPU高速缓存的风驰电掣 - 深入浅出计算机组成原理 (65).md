title:: Readwise/Highlights/54 | 理解Disruptor（上）：带你体会CPU高速缓存的风驰电掣 - 深入浅出计算机组成原理 (65)
author:: [[徐文浩]]
full-title:: 54 | 理解Disruptor（上）：带你体会CPU高速缓存的风驰电掣 - 深入浅出计算机组成原理
category:: #articles
url:: https://time.geekbang.org/column/article/132477

- Disruptor #Highlight #[[2022-06-15]]
- 我们现在的 64 位 Intel CPU 的计算机，缓存行通常是 64 个字节（Bytes）。一个 long 类型的数据需要 8 个字节，所以我们一下子会加载 8 个 long 类型的数据。也就是说，一次加载数组里面连续的 8 个数值。 #Highlight #[[2022-06-15]]