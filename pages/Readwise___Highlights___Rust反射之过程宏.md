title:: Readwise/Highlights/Rust反射之过程宏
author:: [[JasonkayZK]]
full-title:: Rust反射之过程宏
category:: #articles
url:: https://rustcc.cn/article?id=b2f101ad-fef9-4ffc-842c-8ec936b4d585
tags:: #[[favorite]] #[[inoreader]] #[[read]] #[[Rust]] #[[rust.cc]]

- **目前，当创建过程宏时，它的定义必须要放入一个独立的包中，且包的类型也是特殊的；**
  
  > **事实上，根据[这个说法](https://www.reddit.com/r/rust/comments/t1oa1e/what_are_the_complex_technical_reasons_why/)，过程宏放入独立包的原因在于它必须先被编译后才能使用，如果过程宏和使用它的代码在一个包，就必须先单独对过程宏的代码进行编译，然后再对我们的代码进行编译，但悲剧的是 Rust 的编译单元是包，因此你无法做到这一点；** ([View Highlight](https://read.readwise.io/read/01hdqj30s805ag91232csg3nj6)) #Highlight #[[2023-10-27]]