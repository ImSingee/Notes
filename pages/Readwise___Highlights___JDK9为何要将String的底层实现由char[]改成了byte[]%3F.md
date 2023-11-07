title:: Readwise/Highlights/JDK9为何要将String的底层实现由char[]改成了byte[]?
author:: [[黄小斜编辑]]
full-title:: JDK9为何要将String的底层实现由char[]改成了byte[]?
category:: #articles
url:: http://mp.weixin.qq.com/s?__biz=MzU3MDc3OTI1NA==&mid=2247494139&idx=1&sn=546fd94ee10dace6fb1b018666d3bb74&chksm=fce89ae2cb9f13f4a99640309259289e5fbb2ca822af5f1ff5a2a4dfc3459a78b25bc7ebfb82#rd
tags:: #[[inoreader]] #[[star]] #[[微信公众号]]

- 如果你不是 Java8 的钉子户，你应该早就发现了：String 类的源码已经由 `char[]` 优化为了 `byte[]` 来存储字符串内容，为什么要这样做呢？
  
  开门见山地说，从 `char[]` 到 `byte[]`，最主要的目的是**为了节省字符串占用的内存** 。内存占用减少带来的另外一个好处，就是 GC 次数也会减少。 ([View Highlight](https://read.readwise.io/read/01hekrsqmqwa62tpa08x0487f8)) #Highlight #[[2023-11-07]]
- Java 会根据字符串的内容自动设置为相应的编码，要么 Latin-1 要么 UTF16。
  
  也就是说，从 `char[]` 到 `byte[]`，**中文是两个字节，纯英文是一个字节，在此之前呢，中文是两个字节，英文也是两个字节** 。 ([View Highlight](https://read.readwise.io/read/01hekrv073b85t3ex26yr9dftp)) #Highlight #[[2023-11-07]]
- UTF-8 是变长的，那对于 String 这种有随机访问方法的类来说， ... 那有小伙伴可能会问，UTF-16也是变长的呢？一个字符还可能占用 4 个字节呢？
  
  的确，UTF-16 使用 2 个或者 4 个字节来存储字符。 ... 但是在 Java 中，一个字符（char）就是 2 个字节，占 4 个字节的字符，在 Java 里也是用两个 char 来存储的，而String的各种操作，都是以Java的字符（char）为单位的，charAt是取得第几个char，subString取的也是第几个到第几个char组成的子串，甚至length返回的都是char的个数。
  
  所以UTF-16在Java的世界里，就可以视为一个定长的编码。 #Highlight #[[2023-11-07]]