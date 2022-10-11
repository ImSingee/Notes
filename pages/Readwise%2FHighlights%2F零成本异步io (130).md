title:: Readwise/Highlights/零成本异步io (130)
author:: [[# Rust]]
full-title:: 零成本异步io
category:: #articles
url:: https://gteng.org/2021/01/30/zero-cost-async-io/index.html

- 零成本抽象意味着你不使用的东西，你不用为它付出任何代价，进一步讲，你使用的东西，你无法写出比这更好的代码。 ([View Highlight](https://read.readwise.io/read/01g9brrd01rnj9ewmawx42jt6j)) #Highlight #[[2022-08-02]]
- 零成本抽象有两个方面：
  
  1.  该功能不会给不使用该功能的用户增加成本，因此我们不能为了增加新的特性而增加那些会减慢所有程序运行的全局性开销。
  2.  当你确实要使用该功能时，它的速度不会比不使用它的速度慢。如果你觉得，我想使用这个非常好用的功能把开发工作变得轻松，但是它会使我的程序变慢，所以我打算自己造一个，那么这实际上是带来了更大的痛苦。 ([View Highlight](https://read.readwise.io/read/01g9brrngfbnvgzm48etex2hjk)) #Highlight #[[2022-08-02]]
- **绿色线程的优点** 在于，产生操作系统线程时的内存开销要高得多，因为每个操作系统线程会创建一个很大的堆栈，而绿色线程通常的工作方式是，你将产生一个以很小的堆栈，它只会随着时间的推移而增长，而产生一堆不使用大量内存的新线程并不便宜；并且使用类似操作系统原语的问题还在于你依赖于操作系统调度，这意味着你必须从程序的内存空间切换到内核空间，如果成千上万的线程都在快速切换，上下文切换就会增加很多开销。而将调度保持在同一程序中，你将避免使用这些上下文，进而减少开销。所以我相信绿色线程是一个非常好的模型，适用于许多语言，包括 Go 和 Java。 ([View Highlight](https://read.readwise.io/read/01g9brs9e1b4s23jvk944qe5f9)) #Highlight #[[2022-08-02]]