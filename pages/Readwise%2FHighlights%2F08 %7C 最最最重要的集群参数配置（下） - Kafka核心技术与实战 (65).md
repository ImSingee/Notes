title:: Readwise/Highlights/08 | 最最最重要的集群参数配置（下） - Kafka核心技术与实战 (65)
author:: [[胡夕]]
full-title:: 08 | 最最最重要的集群参数配置（下） - Kafka核心技术与实战
category:: #articles
url:: https://time.geekbang.org/column/article/101763

- 实际上，文件描述符系统资源并不像我们想象的那样昂贵，你不用太担心调大此值会有什么不利的影响。通常情况下将它设置成一个超大的值是合理的做法，比如ulimit -n 1000000。 #Highlight #[[2022-08-04]]
- 如果你在使用 Java 8，那么可以手动设置使用 G1 收集器。在没有任何调优的情况下，G1 表现得要比 CMS 出色，主要体现在更少的 Full GC，需要调整的参数更少等，所以使用 G1 就好了。 #Highlight #[[2022-08-04]]