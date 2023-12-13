title:: Readwise/Highlights/深入浅出带你学习宽字节注入
author:: [[juejin.cn]]
full-title:: 深入浅出带你学习宽字节注入
category:: #articles
url:: https://juejin.cn/post/7167647367246643208
tags:: #[[inoreader]] #[[read]] #[[star]]

- 什么是宽字节，相对于单字节，我们引入一个字符数大小为两个字节的为宽字节，比如GBK编码，我们汉字通常使用的就是GBK编码，也就是说一次性会读取两个字节 ([View Highlight](https://read.readwise.io/read/01hf5zf0tz1da59xf03q94seks)) #Highlight #[[2023-11-14]]
- 产生宽字节注入的原因涉及了编码转换的问题，当我们的mysql使用GBK编码后，同时两个字符的前一个字符ASCII码大于128时，会将两个字符认成一个汉字 ([View Highlight](https://read.readwise.io/read/01hf5zf8rgj8tmy9e5xmq0f6j7)) #Highlight #[[2023-11-14]]