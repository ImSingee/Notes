title:: Readwise/Highlights/02 | Java的基本类型 - 深入拆解Java虚拟机 (65)
author:: [[郑雨迪]]
full-title:: 02 | Java的基本类型 - 深入拆解Java虚拟机
category:: #articles
url:: https://time.geekbang.org/column/article/11503

- Java 虚拟机的算数运算几乎全部依赖于操作数栈。也就是说，我们需要将堆中的 boolean、byte、char 以及 short 加载到操作数栈上，而后将栈上的值当成 int 类型来运算。 #Highlight #[[2021-07-08]]
- 在 Java 虚拟机规范中，局部变量区等价于一个数组，并且可以用正整数来索引。除了 long、double 值需要用两个数组单元来存储之外，其他基本类型以及引用类型的值均占用一个数组单元。 #Highlight #[[2021-07-08]]
- 前者在 Java 里是 0，后者是符号位为 1、其他位均为 0 的浮点数，在内存中等同于十六进制整数 0x8000000（即 -0.0F 可通过 Float.intBitsToFloat(0x8000000) 求得）。尽管它们的内存数值不同，但是在 Java 中 +0.0F == -0.0F 会返回真。 #Highlight #[[2021-07-08]]
	- **Note**: 写错了0的数量，这里只有7位16进制数，float是32位的，所以是0x80000000，注意看0的数量
- 前者在 Java 里是 0，后者是符号位为 1、其他位均为 0 的浮点数，在内存中等同于十六进制整数 0x8000000（即 -0.0F 可通过 Float.intBitsToFloat(0x8000000) 求得）。尽管它们的内存数值不同，但是在 Java 中 +0.0F == -0.0F 会返回真。 #Highlight #[[2021-07-08]]