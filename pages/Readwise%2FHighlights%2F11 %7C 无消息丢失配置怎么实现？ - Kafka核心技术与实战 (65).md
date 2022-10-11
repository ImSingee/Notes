title:: Readwise/Highlights/11 | 无消息丢失配置怎么实现？ - Kafka核心技术与实战 (65)
author:: [[胡夕]]
full-title:: 11 | 无消息丢失配置怎么实现？ - Kafka核心技术与实战
category:: #articles
url:: https://time.geekbang.org/column/article/102931

- 如果是多线程异步处理消费消息，Consumer 程序不要开启自动提交位移，而是要应用程序手动提交位移。在这里我要提醒你一下，单个 Consumer 程序使用多线程来消费消息说起来容易，写成代码却异常困难，因为你很难正确地处理位移的更新，也就是说避免无消费消息丢失很简单，但极易出现消息被消费了多次的情况。 #Highlight #[[2022-08-04]]
- Kafka 不丢消息是有前提条件的。假如你的消息保存在 N 个 Kafka Broker 上，那么这个前提条件就是这 N 个 Broker 中至少有 1 个存活。只要这个条件成立，Kafka 就能保证你的这条消息永远不会丢失。 #Highlight #[[2022-08-04]]
- 当 Kafka 的若干个 Broker 成功地接收到一条消息并写入到日志文件后，它们会告诉生产者程序这条消息已成功提交。此时，这条消息在 Kafka 看来就正式变为“已提交”消息了。 #Highlight #[[2022-08-04]]
- Kafka 只对“已提交”的消息（committed message）做有限度的持久化保证。 #Highlight #[[2022-08-04]]