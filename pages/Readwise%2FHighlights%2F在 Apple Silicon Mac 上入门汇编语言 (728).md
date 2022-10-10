title:: Readwise/Highlights/在 Apple Silicon Mac 上入门汇编语言 (728)
author:: [[evian-zhang.github.io]]
full-title:: 在 Apple Silicon Mac 上入门汇编语言
category:: #articles
url:: https://evian-zhang.github.io/learn-assembly-on-Apple-Silicon-Mac/10-%E5%86%85%E5%AD%98%E4%BA%A4%E4%BA%92.html

- 在 A64 指令集中真正的 `ldr` 和 `str`，其只能接受满足特定条件的常数偏移：非负、是 4 或 8 的倍数等。还有其他 A64 指令集中的指令，如 `ldur` 和 `stur`，可以实现负数偏移等。但是，在我们手写汇编的过程中，考虑这个实在是太麻烦了。因此，现在大部分的汇编器，都支持 `str` 和 `ldr` 的偏移不满足那些特定条件。在汇编的过程中根据偏移生成不同指令即可。 ([View Highlight](https://read.readwise.io/read/01gev76kvccrtbvz0s4txhnrqx)) #Highlight #[[2022-10-08]]
- 我们常见的已初始化的全局变量往往处于`__DATA` 段的`__data` 节，未初始化的全局变量往往处于`__DATA` 段的`__comm` 节。同`__text` 节类似，我们既可以使用`.section __DATA, __data` 来标注这个节，也可以用`.data` 来标注这个节 ([View Highlight](https://read.readwise.io/read/01gev7d4yf9eacnsmb0jc8hkjr)) #Highlight #[[2022-10-08]]
- 现代的操作系统要求我们编写 PIC，也就是说我们在编码指令的时候，不能真的把一个绝对地址放到寄存器里，因为这个地址在每次加载模块的时候是变化的。 ([View Highlight](https://read.readwise.io/read/01gev7ywq26t9cw0gxz33e4bbv)) #Highlight #[[2022-10-08]]
- `adr x1, a` 在二进制编码层面，实际上就是存的 `a` 与当前指令的差值。这里 `a` 紧挨着当前指令，所以没有什么问题。但是我们之前提到，AArch64 指令集的指令都是 32 位定长指令。这 32 位里还要编码指令本身、目的寄存器等等。所以对于 `adr` 指令而言，它仅仅能提供 21 位来编码 `a` 与 PC 的差值。考虑正负号来说，也就是说只能编码当前 PC 的 +/-1MB 范围内的标签。但是，如果把 `a` 放到了另一个段的另一个节，这之间究竟距离多少就难以控制了。 ([View Highlight](https://read.readwise.io/read/01gev83cvp5wgdeb3cstvvqfs1)) #Highlight #[[2022-10-08]]
- `@PAGE` 和 `@PAGEOFF` 并不是执行时的记号。`@PAGE` 意思是求 `a` 所在的页地址，`@PAGEOFF` 是指 `a` 与页地址的距离。事实上，这是一种重定位操作符，在 LLVM 中被称为 Variant Kind。 ([View Highlight](https://read.readwise.io/read/01gev8bxq8an45v6y41h08h0fh)) #Highlight #[[2022-10-08]]