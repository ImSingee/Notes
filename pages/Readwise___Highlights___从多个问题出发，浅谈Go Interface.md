title:: Readwise/Highlights/从多个问题出发，浅谈Go Interface
author:: [[juejin.cn]]
full-title:: 从多个问题出发，浅谈Go Interface
category:: #articles
url:: https://juejin.cn/post/7170675527429128199
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- iface和eface都为Go中接口的底层结构体，它们的区别是iface表示的接口类型变量包含方法，而eface表示的接口是不包含任何方法的空接口。 ([View Highlight](https://read.readwise.io/read/01gjygtzhjp49zh221etwww151)) #Highlight #[[2022-11-28]]
- iface包含两个指针`tab`以及`data`。
  
  tab用来存储接口本身的信息（如接口类型等），还存储赋给这个接口的具体类型。
  
  data则指向当前被赋给接口类型变量的具体的值。 ([View Highlight](https://read.readwise.io/read/01gjygz2bts8ps50hkvg1axp5y)) #Highlight #[[2022-11-28]]
- 一个接口可以定义多个方法，此处存储的时第一个方法的函数指针，若有其他方法，会放在其后的内存空间之中，因为函数指针的大小是固定的，因此通过增加地址值即可找到接口的下一个函数指针位置。 ([View Highlight](https://read.readwise.io/read/01gjyh2n5sfefy9808g03a0n3d)) #Highlight #[[2022-11-28]]