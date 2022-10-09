title:: Readwise/Highlights/1.4 Plan 9 汇编语言 (37)
author:: [[golang.design]]
full-title:: 1.4 Plan 9 汇编语言
category:: #articles
url:: https://golang.design/under-the-hood/zh-cn/part1basic/ch01basic/asm/

- 被标记为 NOPTR 标志的数据符号会视为不包含指向运行时分配数据的指针 #Highlight #[[2021-12-08]]
- 带有 R0DATA 标志的数据符号在只读存储器中分配，因此被隐式标记为 NOPTR #Highlight #[[2021-12-08]]
- 总大小小于指针的数据符号也被视为隐式标记 NOPTR #Highlight #[[2021-12-08]]