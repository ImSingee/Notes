title:: Readwise/Highlights/Apple 官方异步编程框架：Swift Combine 简介
author:: [[xiaozhuanlan.com]]
full-title:: Apple 官方异步编程框架：Swift Combine 简介
category:: #articles
url:: https://xiaozhuanlan.com/topic/9683417052
- Combine 作用是将异步事件通过组合**事件处理操作符**进行自定义处理。
  
  关注如何处理变化的值，正是响应式编程所考虑的。也可以说，Combine 是一个苹果官方的 Swift **响应式**框架。 ([View Highlight](https://read.readwise.io/read/01h6tmbayytw4104e8re110r84)) #Highlight #[[2023-08-02]]
- 响应式编程（Reactive Programming）：面向异步数据流的编程思想。业界比较知名的响应式框架是 ReactiveX 系列。Rx 也有 Swift 版本的 RxSwift。 ([View Highlight](https://read.readwise.io/read/01h6tmbfh4v897wqe5f2vmacq3)) #Highlight #[[2023-08-02]]
- > 请求驱动 (Request Driven)：基于请求和响应的设计思想，消费者向生产者请求某个事务的变化，当变化时生产者给消费者对应的响应。
  > 
  > 事件驱动 (Event Driven)：基于事件通知的设计思想。在事务发生变化时，生产者将通知提交给事件管道进行分发，而不关心谁去消费事件。消费者需要到事件管道中订阅关心的通知。
  
  Combine 是基于请求和响应的设计思想的 ([View Highlight](https://read.readwise.io/read/01h6tmchymgeb2ewhbdt1s4vs0)) #Highlight #[[2023-08-02]]