title:: Readwise/Highlights/写更好的 Swift 代码：COW
author:: [[juejin.cn]]
full-title:: 写更好的 Swift 代码：COW
category:: #articles
url:: https://juejin.cn/post/7006123728635428871
tags:: #[[Swift]]
- 自定义的结构体并不能支持 Copy-on-Write ([View Highlight](https://read.readwise.io/read/01hakh7821v0pyn63p3txvmp0p)) #Highlight #[[2023-09-18]]
- •   Copy-on-Write 是一种用来优化占用内存大的值类型的拷贝操作的机制。
  •   对于Int，Double，String 等基本类型的值类型，它们在赋值的时候就会发生拷贝。
  •   对于 Array、Dictionary、Set 类型，当它们赋值的时候不会发生拷贝，只有在修改的之后才会发生拷贝。
  •   对于自定义的数据类型不会自动实现COW，可按需实现。 ([View Highlight](https://read.readwise.io/read/01hakh8a7p9sjkjek78hz2w08z)) #Highlight #[[2023-09-18]]