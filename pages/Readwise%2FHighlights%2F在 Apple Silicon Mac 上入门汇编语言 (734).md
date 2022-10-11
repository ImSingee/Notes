title:: Readwise/Highlights/在 Apple Silicon Mac 上入门汇编语言 (734)
author:: [[evian-zhang.github.io]]
full-title:: 在 Apple Silicon Mac 上入门汇编语言
category:: #articles
url:: https://evian-zhang.github.io/learn-assembly-on-Apple-Silicon-Mac/16-%E6%B5%AE%E7%82%B9%E6%95%B0%E4%B8%8ESIMD.html

- AArch64 架构中，我们不能只使用一条语句实现从一个内存写入另一个内存中，而是需要使用 `ldr` 将源地址的值读入寄存器，再通过 `str` 将寄存器的值写入目的地址 ([View Highlight](https://read.readwise.io/read/01geve60rqh39wv850zq3607m9)) #Highlight #[[2022-10-08]]
- 在我们日常编程的过程中，其实会遇到大量可以向量化并行化的模式。例如，对数组中的每个元素都进行同样的操作，或者图形学引擎、机器学习引擎中的大量矩阵运算。这种可以向量化的模式，一般而言，就是我们需要对多组数据进行同样的操作，而每组数据之间互不干扰。为了优化这种模式，许多的 CPU 架构都推出了 SIMD 指令。所谓的 SIMD，就是指 *Single Instruction Multiple data*，也就是说，执行一条指令，可以操作多个数据（但速度快的同时，功耗也会显著上升）。 ([View Highlight](https://read.readwise.io/read/01geve7t1ghz963c74cgg76zmt)) #Highlight #[[2022-10-08]]