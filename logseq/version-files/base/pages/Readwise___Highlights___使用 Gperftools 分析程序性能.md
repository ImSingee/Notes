title:: Readwise/Highlights/使用 Gperftools 分析程序性能
author:: [[luyuhuang.tech]]
full-title:: 使用 Gperftools 分析程序性能
category:: #articles
url:: https://luyuhuang.tech/2022/04/10/gperftools.html
tags:: #[[inoreader]] #[[star]] #[[博客]]

- [gperftools](https://github.com/gperftools/gperftools) 是谷歌推出的一套非常强大的性能分析工具集. 它主要有这三个功能:
  
  •   分析 CPU 性能, 能够统计出一段时间内各个函数的执行时间, 帮助我们找出耗时的代码;
  •   分析内存占用情况, 能够统计出某一时刻各个函数分配的内存大小, 帮助我们找出内存占用高的代码, 也能帮助我们定位内存泄露;
  •   自动检查内存泄露. ([View Highlight](https://read.readwise.io/read/01hf394efd62wn27see2egw003)) #Highlight #[[2023-11-13]]