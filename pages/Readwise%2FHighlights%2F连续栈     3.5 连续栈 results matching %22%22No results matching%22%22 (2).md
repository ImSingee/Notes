title:: Readwise/Highlights/连续栈     3.5 连续栈 results matching ""No results matching"" (2)
author:: [[简悦]]
full-title:: 连续栈     3.5 连续栈 results matching ""No results matching""
category:: #articles
url:: https://tiancaiamao.gitbooks.io/go-internals/content/zh/03.5.html

- goroutine 可以初始时只给栈分配很小的空间，然后随着使用过程中的需要自动地增长 #Highlight #[[2021-06-01]]
- 每次执行函数调用时 Go 的 runtime 都会进行检测，若当前栈的大小不够用，则会触发 “中断”，从当前函数进入到 Go 的运行时库，Go 的运行时库会保存此时的函数上下文环境，然后分配一个新的足够大的栈空间，将旧栈的内容拷贝到新栈中，并做一些设置，使得当函数恢复运行时，函数会在新分配的栈中继续执行，仿佛整个过程都没发生过一样，这个函数会觉得自己使用的是一块大小“无限” 的栈空间 #Highlight #[[2021-06-01]]
- Go 语言和 C 不同，不是使用栈指针寄存器和栈基址寄存器确定函数的栈的 #Highlight #[[2021-06-01]]
- 每个 goroutine 对应一个结构体 G，大致相当于进程控制块的概念 #Highlight #[[2021-06-01]]