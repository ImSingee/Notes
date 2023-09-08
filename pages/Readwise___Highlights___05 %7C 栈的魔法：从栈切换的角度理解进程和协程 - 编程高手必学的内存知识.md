title:: Readwise/Highlights/05 | 栈的魔法：从栈切换的角度理解进程和协程 - 编程高手必学的内存知识
author:: [[海纳]]
full-title:: 05 | 栈的魔法：从栈切换的角度理解进程和协程 - 编程高手必学的内存知识
category:: #articles
url:: https://time.geekbang.org/column/article/435493
- 常见的执行单元有进程，线程和协程三种 #Highlight #[[2023-01-20]]
- 执行单元是指 CPU 调度和分派的基本单位，它是一个 CPU 能正常运行的基本单元。执行单元是可以停下来的，只要能把 CPU 状态（其实就是寄存器的值）全部保存起来，等到这个执行单元再被调度的时候，就把状态恢复过来就行了。我们把这种保存状态，挂起，恢复执行，恢复状态的完整过程，称为执行单元的调度 (Scheduling)。 #Highlight #[[2023-01-20]]