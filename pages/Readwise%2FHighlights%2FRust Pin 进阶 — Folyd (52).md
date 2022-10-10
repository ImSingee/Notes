title:: Readwise/Highlights/Rust Pin 进阶 — Folyd (52)
author:: [[folyd.com]]
full-title:: Rust Pin 进阶 — Folyd
category:: #articles
url:: https://folyd.com/blog/rust-pin-advanced/

- Pin 包裹的内容只能是智能指针（实现了 Deref trait 的类型都可以称为智能指针），对其他普通类型是没有意义的 #Highlight #[[2022-02-05]]
- Pin 本质上解决的问题是在 safe Rust 下保证 Pin<P<T> 中的 T 的内存地址不会被改变（也就是不被 move），除非 T 满足 T: Unpin #Highlight #[[2022-02-05]]
- 保证 T 的内存地址不会被改变的本质是避免暴露T 或 &mut T（"万恶之源"）。暴露 T 的话，随随便便就能 move 掉它；暴露 &mut T 的话，开发者可以调用 std::mem::swap() 或 std::mem::replace() 这类方法来 move 掉 T #Highlight #[[2022-02-05]]
- 使用#[fundamental]属性标记的 trait 是不受孤儿规则约束 #Highlight #[[2022-02-05]]