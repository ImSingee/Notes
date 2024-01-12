title:: Readwise/Highlights/Go究竟是否为空切片分配了底层数组
author:: [[tonybai.com]]
full-title:: Go究竟是否为空切片分配了底层数组
category:: #articles
url:: https://tonybai.com/2022/02/15/whether-go-allocate-underlying-array-for-empty-slice/
tags:: #[[inoreader]] #[[star]] #[[博客]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

- **空切片到底分没分配底层数组**？
  
  答案是肯定的：**没有分配**！ ([View Highlight](https://read.readwise.io/read/01hjfe4z7pv1gsks99108qa1c6)) #Highlight #[[2023-12-25]]
- Go使用plan9的汇编语法，目前市面上关于这种汇编的资料比较少，比较权威是[Go官方的asm资料](https://go.dev/doc/asm)和Rob Pike编写的[A Manual for the Plan 9 assembler](https://9p.io/sys/doc/asm.html)。此外IBM工程师的 [Dropping down Go functions in assembly language](https://github.com/golang/go/files/447163/GoFunctionsInAssembly.pdf)这份资料也十分不错。国内[《Go语言高级编程》](https://book.douban.com/subject/34442131/)一书以及曹春辉的[plan9 assembly 完全解析](https://go.xargin.com/docs/assembly/assembly/)讲解的十分全面，值得大家参考。 ([View Highlight](https://read.readwise.io/read/01hjfe3nqhcr1wmdzyty61avnk)) #Highlight #[[2023-12-25]]
- 生成go源码对应汇编代码的主要方法有：go tool compile -S xxx.go和针对编译后的二进制文件使用go tool objdump -S exe_file。 ([View Highlight](https://read.readwise.io/read/01hjfe3z8xh5r62wjzga6kegm4)) #Highlight #[[2023-12-25]]