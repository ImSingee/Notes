title:: Readwise/Highlights/Akka 实战：分布式 App 构建与测试
author:: [[首页]]
full-title:: Akka 实战：分布式 App 构建与测试
category:: #articles
url:: https://juejin.cn/post/7095977527176331300

- 论文《 A Node on Distributed Computing 》概括了从单机编程迁移到分布式编程时，不可忽略的四个方面：
  
  0.  延迟：使用网络意味着对消息的处理需要更多的时间。
  1.  部分故障：当系统的某些重要组件不总是可见，消失，或重新出现时，确定分布式系统是否工作正常，是一件困难的事。
  2.  内存访问：在本地系统获取内存对象的引用不会发生间歇性失败，但此问题在分布式编程经常出现。
  3.  并发：没有一个全局的 ”监管者"，再考虑到之前的因素，多个节点的交织操作有可能会失败。 ([View Highlight](https://read.readwise.io/read/01hetm7jedt7wy0c8qre1rk1gm)) #Highlight #[[2023-11-10]]