title:: Readwise/Highlights/零成本异步io (129)
author:: [[gteng.org]]
full-title:: 零成本异步io
category:: #articles
url:: https://gteng.org/2021/01/30/zero-cost-async-io/

- 零成本抽象有两个方面：
  
  该功能不会给不使用该功能的用户增加成本，因此我们不能为了增加新的特性而增加那些会减慢所有程序运行的全局性开销。
  当你确实要使用该功能时，它的速度不会比不使用它的速度慢。如果你觉得，我想使用这个非常好用的功能把开发工作变得轻松，但是它会使我的程序变慢，所以我打算自己造一个，那么这实际上是带来了更大的痛苦。 #Highlight #[[2022-07-18]]
- 不是由 Future 来调度回调函数，而是由我们去轮询 Future，所以还有另一个被称为执行器（executor）的组件，它负责实际运行 Future ；执行器的工作就是轮询 Future ，而 Future 可能返回“尚未准备就绪（Pending）”，也可能被解决就返回“已就绪（Ready）”。 #Highlight #[[2022-07-18]]
- 当你编写的 Future 代码被编译成实际的本地（native）代码时，它就像一个状态机；在该状态机中，每次 I/O 的暂停点都有一个变体（variant），而每个变体都保存了恢复执行所需的状态。这表示为一个枚举（enum）结构，即一个包含变体判别式及所有可能状态的联合体（union）。 #Highlight #[[2022-07-18]]