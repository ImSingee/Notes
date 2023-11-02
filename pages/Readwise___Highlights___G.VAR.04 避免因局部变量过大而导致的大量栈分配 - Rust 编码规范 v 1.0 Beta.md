title:: Readwise/Highlights/G.VAR.04 避免因局部变量过大而导致的大量栈分配 - Rust 编码规范 v 1.0 Beta
author:: [[rust-coding-guidelines.github.io]]
full-title:: G.VAR.04 避免因局部变量过大而导致的大量栈分配 - Rust 编码规范 v 1.0 Beta
category:: #articles
url:: https://rust-coding-guidelines.github.io/rust-coding-guidelines-zh/safe-guides/coding_practice/variables/G.VAR.04.html

- 采用Box<T>分配也可能出现栈溢出，参见issues #53827，因为目前 Box<T>的行为是先在栈上分配然后再复制到堆上。 #Highlight #[[2023-10-12]]
- Rust 默认栈分配空间为：
  
  主线程默认 8MiB 。
  运行中代码创建的子线程默认是 2MiB 。
  
  也可以自行配置栈分配内存大小。 #Highlight #[[2023-10-12]]
- 局部变量占用多少空间才算过大，这个需要开发者根据具体的场景根据栈大小配置情况做出合适的预判，一般以 512 KiB为宜。 #Highlight #[[2023-10-12]]