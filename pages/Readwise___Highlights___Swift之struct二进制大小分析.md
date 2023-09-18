title:: Readwise/Highlights/Swift之struct二进制大小分析
author:: [[juejin.cn]]
full-title:: Swift之struct二进制大小分析
category:: #articles
url:: https://juejin.cn/post/7216130963277332535
tags:: #[[favorite]] #[[inoreader]] #[[read]] #[[Swift]] #[[掘金 - 工具资源]]
- 在`C语言`中`static stuct`占用的二进制体积的确会大些，主要是因为`static stuct`是`zero-initialized or uninitialized`, 也就是说它在初始化不是空的。它们会进入数据段，也就是说，即使在初始化`struct`的一个字段，二进制文件也包含了整个结构的完整`image` ([View Highlight](https://read.readwise.io/read/01hakgq1gjwvyvq8vrc45anpga)) #Highlight #[[2023-09-18]]