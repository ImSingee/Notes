title:: Readwise/Highlights/10｜生命周期：你创建的值究竟能活多久？ - 陈天 · Rust 编程第一课
author:: [[陈天]]
full-title:: 10｜生命周期：你创建的值究竟能活多久？ - 陈天 · Rust 编程第一课
category:: #articles
url:: https://time.geekbang.org/column/article/417384
- 在 Rust 中，除非显式地做 Box::leak() / Box::into_raw() / ManualDrop 等动作，一般来说，堆内存的生命周期，会默认和其栈内存的生命周期绑定在一起 #Highlight #[[2023-10-13]]
- 如果一个值的生命周期贯穿整个进程的生命周期，那么我们就称这种生命周期为静态生命周期。
  当值拥有静态生命周期，其引用也具有静态生命周期。我们在表述这种引用的时候，可以用 'static 来表示。比如： &'static str  代表这是一个具有静态生命周期的字符串引用。
  一般来说，全局变量、静态变量、字符串字面量（string literal）等，都拥有静态生命周期。我们上文中提到的堆内存，如果使用了 Box::leak 后，也具有静态生命周期。 #Highlight #[[2023-10-13]]
- 生命周期参数，描述的是参数和参数之间、参数和返回值之间的关系，并不改变原有的生命周期 #Highlight #[[2023-10-13]]