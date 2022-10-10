title:: Readwise/Highlights/01 | Java代码是怎么运行的？ - 深入拆解Java虚拟机 (65)
author:: [[郑雨迪]]
full-title:: 01 | Java代码是怎么运行的？ - 深入拆解Java虚拟机
category:: #articles
url:: https://time.geekbang.org/column/article/11289

- HotSpot 默认采用分层编译的方式：热点方法首先会被 C1 编译，而后热点方法中的热点会进一步被 C2 编译。 #Highlight #[[2021-07-08]]
- 为了满足不同用户场景的需要，HotSpot 内置了多个即时编译器：C1、C2 和 Graal。Graal 是 Java 10 正式引入的实验性即时编译器，在专栏的第四部分我会详细介绍，这里暂不做讨论。 #Highlight #[[2021-07-08]]