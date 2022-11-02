title:: Readwise/Highlights/系统调用 - 在 Apple Silicon Mac 上入门汇编语言
author:: [[引言]]
full-title:: 系统调用 - 在 Apple Silicon Mac 上入门汇编语言
category:: #articles
url:: https://evian-zhang.github.io/learn-assembly-on-Apple-Silicon-Mac/13-%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8.html

- 我们在用户态的程序不能直接通过 `bl` 来调用内核的函数。我们在[操作系统](https://evian-zhang.github.io/learn-assembly-on-Apple-Silicon-Mac/13-%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8.html/./4-%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.html)中提到，AArch64 有不同的异常级别。一般来说，用户态程序的异常级别是 EL0，内核处于 EL1。低异常级别的程序是不能调用高异常级别的函数的。 ([View Highlight](https://read.readwise.io/read/01gevcc3yk70dzw7d205335bnh)) #Highlight #[[2022-10-08]]