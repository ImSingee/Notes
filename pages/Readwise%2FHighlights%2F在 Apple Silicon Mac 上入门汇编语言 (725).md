title:: Readwise/Highlights/在 Apple Silicon Mac 上入门汇编语言 (725)
author:: [[evian-zhang.github.io]]
full-title:: 在 Apple Silicon Mac 上入门汇编语言
category:: #articles
url:: https://evian-zhang.github.io/learn-assembly-on-Apple-Silicon-Mac/6-%E6%B1%87%E7%BC%96%E8%AF%AD%E8%A8%80%E5%88%9D%E8%AF%86.html

- "Directive" 是汇编语言中一个重要的组成部分，然而它的中文译名似乎还不固定，这里暂且叫它汇编器指令。在汇编语言中，以`.` 开头的都是汇编器指令，如例程中的`.section`, `.globl` 等。由汇编器指令开头的语句，一般不会被直接翻译成机器码。汇编器指令并不是告诉汇编器**做什么** , 而是告诉汇编器**如何做**。 ([View Highlight](https://read.readwise.io/read/01geqepmxfcz9xm9w94z3zkpgp)) #Highlight #[[2022-10-07]]
- macOS 中，C 语言程序执行的起点在汇编层面是`_main` 函数 ([View Highlight](https://read.readwise.io/read/01geqet2d32fmwdw5p1t4a9wg4)) #Highlight #[[2022-10-07]]
- 在 GNU 语法下，一条指令可以粗略地看作是助记符 + 目的 + 源，也就是说，它后面紧跟的是目的操作数，然后是源操作数。 ([View Highlight](https://read.readwise.io/read/01geqetgh89kj3j1sb3cmhjf3e)) #Highlight #[[2022-10-07]]
- 在 AArch64 架构下，CPU 中一共有 31 个 64 位通用寄存器 ([View Highlight](https://read.readwise.io/read/01geqetv6na8x7vddcxz8vvm80)) #Highlight #[[2022-10-07]]
- 在汇编语言中的常数都会在前加`#`符号，让读者看得更清楚。当然，不加这个`#`一样可以正常进行汇编 ([View Highlight](https://read.readwise.io/read/01geqev35x4rx45n4e1dgk9qe0)) #Highlight #[[2022-10-07]]