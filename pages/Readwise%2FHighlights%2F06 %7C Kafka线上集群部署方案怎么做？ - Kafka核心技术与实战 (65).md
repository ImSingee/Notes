title:: Readwise/Highlights/06 | Kafka线上集群部署方案怎么做？ - Kafka核心技术与实战 (65)
author:: [[胡夕]]
full-title:: 06 | Kafka线上集群部署方案怎么做？ - Kafka核心技术与实战
category:: #articles
url:: https://time.geekbang.org/column/article/101107

- 在规划磁盘容量时你需要考虑下面这几个元素：
  新增消息数
  消息留存时间
  平均消息大小
  备份数
  是否启用压缩 #Highlight #[[2022-08-04]]
- Kafka 需要将消息保存在底层的磁盘上，这些消息默认会被保存一段时间然后自动被删除。 #Highlight #[[2022-08-04]]