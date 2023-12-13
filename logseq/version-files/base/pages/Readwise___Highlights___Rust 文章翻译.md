title:: Readwise/Highlights/Rust 文章翻译
author:: [[zjp-cn.github.io]]
full-title:: Rust 文章翻译
category:: #articles
url:: https://zjp-cn.github.io/translation/dyn-async-traits/2021-10-01-dyn-async-traits-part-2.html
- •   在静态分发中，有一条"硬编码"指令说"在这个地址调用代码"[1](https://zjp-cn.github.io/translation/dyn-async-traits/2021-10-01-dyn-async-traits-part-2.html#link)。
  •   在动态分发中，有一条指令说"调用地址在这个变量中的代码"。后者可能会慢一点，但在实践中几乎无关紧要，特别是在预测成功的情况下。 ([View Highlight](https://read.readwise.io/read/01hdg6kgpd71ehmd5c3w6wxmv4)) #Highlight #[[2023-10-24]]
- 当你使用一个 `dyn` trait 时，你实际拥有的是一个虚表 (vtable)。你可以将 vtable 看作是一种结构体，它包含一组函数指针，每个指针对应于 trait 中的每个方法 ([View Highlight](https://read.readwise.io/read/01hdg6kzs74rftqtcste7nxhap)) #Highlight #[[2023-10-24]]