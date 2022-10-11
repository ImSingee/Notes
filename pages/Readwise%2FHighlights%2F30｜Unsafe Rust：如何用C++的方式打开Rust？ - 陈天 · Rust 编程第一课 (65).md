title:: Readwise/Highlights/30｜Unsafe Rust：如何用C++的方式打开Rust？ - 陈天 · Rust 编程第一课 (65)
author:: [[陈天]]
full-title:: 30｜Unsafe Rust：如何用C++的方式打开Rust？ - 陈天 · Rust 编程第一课
category:: #articles
url:: https://time.geekbang.org/column/article/435484

- 裸指针在生成的时候无需 unsafe，因为它并没有内存不安全的操作，但裸指针的解引用操作是不安全的，潜在有风险，它也需要使用 unsafe 来明确告诉编译器，以及代码的阅读者，也就是说要使用 unsafe block 包裹起来。 #Highlight #[[2022-03-12]]
- unsafe trait 是对 trait 的实现者的约束，它告诉 trait 的实现者：实现我的时候要小心，要保证内存安全，所以实现的时候需要加 unsafe 关键字。
  但 unsafe trait 对于调用者来说，可以正常调用，不需要任何 unsafe block，因为这里的 safety 已经被实现者保证了， #Highlight #[[2022-03-12]]
- 如果你可以保证它能在线程中安全地移动，那可以实现 Send；如果可以保证它能在线程中安全地共享，也可以去实现 Sync。 #Highlight #[[2022-03-12]]
- 我们先看可以使用、也推荐使用 unsafe 的场景，根据重要 / 常用程度，会依次介绍：实现 unsafe trait，主要是 Send / Sync 这两个 trait、调用已有的 unsafe 接口、对裸指针做解引用，以及使用 FFI。 #Highlight #[[2022-03-12]]