title:: Readwise/Highlights/在 Apple Silicon Mac 上入门汇编语言 (730)
author:: [[evian-zhang.github.io]]
full-title:: 在 Apple Silicon Mac 上入门汇编语言
category:: #articles
url:: https://evian-zhang.github.io/learn-assembly-on-Apple-Silicon-Mac/12-%E5%87%BD%E6%95%B0.html

- 一般来说，操作系统的库函数有统一的 ABI。除了操作系统、C 语言的 ABI 以外，其他语言的 ABI 往往都是不稳定的（也有很少的 ABI 稳定的语言，例如 Swift（[ABI Stability and More](https://www.swift.org/blog/abi-stability-and-more/)）） ([View Highlight](https://read.readwise.io/read/01gevb3vfk5htn5641695n8a5m)) #Highlight #[[2022-10-08]]
- ABI 包含很多二进制层面的「对接」问题，而其中最重要的，就是函数之间的「对接」问题。解决这个问题的部分，被称为「调用约定」（Calling Convention） ([View Highlight](https://read.readwise.io/read/01gevb47qv28r5daqxhanw5cj8)) #Highlight #[[2022-10-08]]
- 调用约定与架构标准不同。AArch64 架构标准规定，我们在执行 `bl` 指令后，PC 一定会被置于目标函数的地址。而调用约定则**不是和硬件平台绑定的**。我们自己编写的汇编程序，在内部调用我们自己的函数，不一定遵守调用约定。只有在调用外部提供的函数的时候，才需要遵守相对应的调用约定 ([View Highlight](https://read.readwise.io/read/01gevb604k88qh3b51qjjr0ezg)) #Highlight #[[2022-10-08]]
- 在函数之前，我们会声明`.p2align 2`，也就是函数开头应按 4 字节对齐。这是 AArch64 的架构要求 ([View Highlight](https://read.readwise.io/read/01gevb804z8fy80g7763x25k1p)) #Highlight #[[2022-10-08]]
- `x30` 也被称作 LR 寄存器，即 Link Register。当我们使用 `bl` 调用函数的时候，LR 寄存器会被写入该函数的返回地址。因此，当我们在被调用函数内部使用 `ret` 指令时，实际上就是将 PC 设置为 LR 寄存器的值而已。 ([View Highlight](https://read.readwise.io/read/01gevba8y54mmg5hhvqwapkv8x)) #Highlight #[[2022-10-08]]
- 在函数开始的时候，所有函数都会默认，`sp` 存储的地址，往上是别的函数已经用过的地址，往下是自己可以用的地址。在调用下一个函数之前，会更新自己的 `sp`，将 `sp` 减小，也就是留出自己的栈空间，防止子函数覆盖自己的栈空间。在函数返回之前，会将 `sp` 恢复成刚进入函数的模样 ([View Highlight](https://read.readwise.io/read/01gevbdbw9mw76t0597drr4ffw)) #Highlight #[[2022-10-08]]
- 栈按 16 字节对齐
  
  AArch64 架构规范从硬件上要求在每一个函数开始的时候，`sp` 的值必须是 16 的倍数。因此，我们将 `sp` 减小的值，也必须是 16 的倍数。 ([View Highlight](https://read.readwise.io/read/01gevbfjhmnzzswm0kgf73j77e)) #Highlight #[[2022-10-08]]
- 栈中有 16 字节的预留位置
  
  除了局部变量以外，还有 16 个字节的位置是预留的，分别是存储进入函数时 LR 寄存器的值和 FP 寄存器的值。 ([View Highlight](https://read.readwise.io/read/01gevbgqsc7abhf87z87c968fg)) #Highlight #[[2022-10-08]]
- LR 和 FP 组成的预留位置，在 AArch64 的 ABI 中并没有明确规定其在函数栈空间的位置。在 Apple Silicon 中，它位于栈的底部（也就是高地址区域） ([View Highlight](https://read.readwise.io/read/01gevbjnbktmhqt2h1trbydtaf)) #Highlight #[[2022-10-08]]
- FP 寄存器，实际上就是 `r29` 寄存器 ([View Highlight](https://read.readwise.io/read/01gevbp7g0kqrdn4rhqwy6nr80)) #Highlight #[[2022-10-08]]
- FP 寄存器的值，指向的就是之前 FP 寄存器值存储在栈上的地址 ([View Highlight](https://read.readwise.io/read/01gevbpecdc3rwhsmghb6ggr6z)) #Highlight #[[2022-10-08]]
- 存储在栈上的 FP 的值可以看作指向前一个函数栈帧的指针，从而函数的栈帧成了一个链表。我们可以通过这个链表，回溯函数的调用栈。 ([View Highlight](https://read.readwise.io/read/01gevbnyg0ftsnb36xwt2wqtkb)) #Highlight #[[2022-10-08]]
- 在函数调用的过程中，总会涉及到将 LR、FP 寄存器存到栈上等等操作。这些操作是固定的，在函数开头执行的操作被称为 Prologue，在函数返回前执行的操作被称为 Epilogue ([View Highlight](https://read.readwise.io/read/01gevbpy2t0c249hdz49x80e8d)) #Highlight #[[2022-10-08]]
- ASLR、PIC 等方案，就是通过随机化地址的方式，让攻击者难以算出真正的地址，从而只能导致程序崩溃，而不是让程序执行自己想要的指令。 ([View Highlight](https://read.readwise.io/read/01gevbvq3b4kajjcxrjejsyzdd)) #Highlight #[[2022-10-08]]
- 参数和返回值的传递并不在机器指令层面实现，而是在汇编语言中，一种约定，也就是属于之前介绍的「调用约定」 ([View Highlight](https://read.readwise.io/read/01gevbxd5g4yye6n27jyh7j378)) #Highlight #[[2022-10-08]]
- 对于 Apple Silicon 来说，有一些区别。对于可变参数函数来说，其参数可以分为不可变参数和可变参数。例如，对于 `printf` 来说，第一个参数 `format` 属于不可变参数，其余的属于可变参数。那么，即使不可变参数个数少于 8 个，可变参数仍然总会通过栈来传递。 ([View Highlight](https://read.readwise.io/read/01gevc3m87nxr9ew6qpjep1vtd)) #Highlight #[[2022-10-08]]
- Apple Silicon 的 ABI 也要求我们，在传递参数时，要保证即使通过栈传递，在子函数开始时栈仍然是 16 字节对齐。 ([View Highlight](https://read.readwise.io/read/01gevc4rbge0qq0dqaceqv2tm8)) #Highlight #[[2022-10-08]]
- 返回值的传递和参数传递类似，第一个返回值放在 `r0` 寄存器里，第二个返回值放在 `r1` 寄存器里。
  
  在 libc 中，有一个函数是 `lldiv`，其接收两个参数，将这两个参数相除，返回商和余数。使用这个函数的时候，我们就可以注意到，商会放在 `x0` 里，余数会放在 `x1` 里（在 C 语言中被表现成了返回一个结构体）。 ([View Highlight](https://read.readwise.io/read/01gevc62nsy30ykbw2abw32nmz)) #Highlight #[[2022-10-08]]
- 在 AAPCS 的 ABI 下，`r0` 到 `r7` 被用作传递参数和返回值，`r29` 和 `r30` 分别是 FP 和 LR ([View Highlight](https://read.readwise.io/read/01gevc6pz3fn84kdbs4deb0sme)) #Highlight #[[2022-10-08]]
- 在任何一个函数返回时，`r19` 到 `r28` 寄存器的值必须和这个函数刚开始的时候相同。也就是说，这个函数应该保留这些寄存器。对于调用这个函数的调用者来说，应该放心地使用这些寄存器，而不用担心值被子函数篡改。因此，我们在存储中间值的时候，应该尽量避免使用 `r19` 到 `r28` 的值，同时也不应假定被调用函数不会修改其它寄存器的值。 ([View Highlight](https://read.readwise.io/read/01gevc84rpzcvfxcq9av7ksxqw)) #Highlight #[[2022-10-08]]
- Apple Silicon 还规定了，`r18` 寄存器为「平台保留的寄存器」（Platform-reserved Register），我们不应使用这个寄存器。 ([View Highlight](https://read.readwise.io/read/01gevc89gbvbr6pxpysg6g27s1)) #Highlight #[[2022-10-08]]