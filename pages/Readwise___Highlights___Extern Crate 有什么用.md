title:: Readwise/Highlights/Extern Crate 有什么用
author:: [[rustcc.cn]]
full-title:: Extern Crate 有什么用
category:: #articles
url:: https://rustcc.cn/article?id=71892109-426e-4cb8-a9bd-94882231fc00
tags:: #[[inoreader]] #[[read]] #[[rust.cc]]

- 少数情况下必须使用 extern crate 比如（假设在 root 模块声明）：
  
  •   引入非 Cargo 引入的依赖，比如 std, alloc, core, proc_macro, rustc 等库
  •   `extern crate a as b` 给引入的依赖一个全局别名
  •   `extern crate self as name` 给当前项目一个全局别名
  •   `#[macro_use] extern crate a` 全局引入依赖中所有宏 ([View Highlight](https://read.readwise.io/read/01gwhftzfmd49qq19bdqxrs0z2)) #Highlight #[[2023-03-27]]