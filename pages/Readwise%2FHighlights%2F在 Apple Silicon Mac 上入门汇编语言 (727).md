title:: Readwise/Highlights/在 Apple Silicon Mac 上入门汇编语言 (727)
author:: [[evian-zhang.github.io]]
full-title:: 在 Apple Silicon Mac 上入门汇编语言
category:: #articles
url:: https://evian-zhang.github.io/learn-assembly-on-Apple-Silicon-Mac/8-%E8%B5%8B%E5%80%BC%E6%8C%87%E4%BB%A4.html

- 在指令都是定长 32 位的情况下，必然不可能完整编码 32 位整数的赋值。因此，我们需要跳脱开来。`ldr` 伪指令采取的策略就是，如果我们想要赋值的整数不能通过 `mov` 指令进行编码，那么就将这个整数存储在二进制镜像的数据区，然后产生一个内存读取指令，读取相应内存的数据即可（更严谨地来说，是一个 PC-relative 的地址，从而不用担心内存地址本身也是超过 32 位的数值这件事了） ([View Highlight](https://read.readwise.io/read/01gerfg5r9ny3pwc8bxan2850w)) #Highlight #[[2022-10-07]]