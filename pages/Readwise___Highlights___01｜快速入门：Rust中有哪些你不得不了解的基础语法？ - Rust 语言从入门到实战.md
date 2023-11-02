title:: Readwise/Highlights/01｜快速入门：Rust中有哪些你不得不了解的基础语法？ - Rust 语言从入门到实战
author:: [[唐刚]]
full-title:: 01｜快速入门：Rust中有哪些你不得不了解的基础语法？ - Rust 语言从入门到实战
category:: #articles
url:: https://time.geekbang.org/column/article/718865

- Rust 中的字符串类型是 String。虽然中文表述上，字符串只比前面的字符类型多了一个串字，但它们内部存储结构完全不同。String 内部存储的是 Unicode 字符串的 UTF8 编码，而 char 直接存的是 Unicode Scalar Value（二者的区别可查阅这里）。也就是说 String 不是 char 的数组 #Highlight #[[2023-10-24]]
- 很多时候，我们的字符串字面量中用不到 Unicode 字符，只需要 ASCII 字符集。对于这种情况，Rust 还有一种更紧凑的表示法：字节串。用 b 开头，双引号括起来，比如 b"this is a byte string"。这时候字符串的类型已不是字符串，而是字节的数组 [u8; N]，N 为字节数。 #Highlight #[[2023-10-24]]
- 学术上，通常把枚举叫作和类型（sum type），把结构体叫作积类型（product type） #Highlight #[[2023-10-24]]