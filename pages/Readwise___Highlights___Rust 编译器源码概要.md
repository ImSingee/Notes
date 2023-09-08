title:: Readwise/Highlights/Rust 编译器源码概要
author:: [[程序员的喵]]
full-title:: Rust 编译器源码概要
category:: #articles
url:: http://catcoding.me/p/rustc-source/
tags:: #[[inoreader]] #[[博客]] #[[程序员的喵]]
- **HIR lowering**: 将 AST 转换为高级中间表示 HIR（High-level IR），这是一种对编译器更友好的 AST 表示，其中也涉及很多诸如循环和 `async fn` 之类的脱糖。然后我们使用 HIR 进行类型推断（type inference）、特征求解（trait solving）和类型检查（type checking）。 ([View Highlight](https://read.readwise.io/read/01gvc9bbr78veq1649cn6x7aqe)) #Highlight #[[2023-03-13]]
- **MIR lowering**: 将 HIR 转换到 MIR（Middle-level IR），用于借用检查和其他重要的基于数据流的检查，例如检查未初始化的值。在此过程中还构建了更加脱糖的 THIR（Typed HIR），THIR 主要用于 pattern checking 检查。 ([View Highlight](https://read.readwise.io/read/01gvc9bkdez999kq1daevys486)) #Highlight #[[2023-03-13]]