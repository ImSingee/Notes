title:: Readwise/Highlights/23 | 异步架构：如何避免互相依赖的系统间耦合？ - 后端技术面试 38 讲
author:: [[李智慧]]
full-title:: 23 | 异步架构：如何避免互相依赖的系统间耦合？ - 后端技术面试 38 讲
category:: #articles
url:: https://time.geekbang.org/column/article/189041
- 隔离失败
  使用消息队列，生产者发送消息到消息队列后就继续自己后面的计算，消费者如果在处理消息的过程中失败，不会传递给生产者，应用程序具有更高的可用性。 #Highlight #[[2022-08-04]]
- 发布订阅模式下，一个主题可以被重复订阅，所以如果需要扩展功能，可以在对当前的生产者和消费者都没有影响的前提下，增加新的消费者订阅同一个主题即可。 #Highlight #[[2022-08-04]]
- 在发布订阅模式中，开发者可以在消息队列中设置主题，消息生产者的消息按照主题进行发送，多个消息消费者可以订阅同一个主题，每个消费者都可以收到这个主题的消息拷贝，然后按照自己的业务逻辑分别进行处理计算。 #Highlight #[[2022-08-04]]
- 在点对点模式中，多个消息生产者向消息队列发送消息，多个消息消费者消费消息，每个消息只会被一个消息消费者消费。 #Highlight #[[2022-08-04]]
- 消息队列的职责就是缓冲消息，等待消费者消费。根据消息消费方式又分为点对点模式和发布订阅模式两种。 #Highlight #[[2022-08-04]]