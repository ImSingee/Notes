title:: Readwise/Highlights/在 Apple Silicon Mac 上入门汇编语言 (729)
author:: [[evian-zhang.github.io]]
full-title:: 在 Apple Silicon Mac 上入门汇编语言
category:: #articles
url:: https://evian-zhang.github.io/learn-assembly-on-Apple-Silicon-Mac/11-%E8%B7%B3%E8%BD%AC.html

- PSTATE 存储了当前进程的状态，例如当前的异常级别、安全级别等等。此外，PSTATE 还存储了一些条件位（Conditional Flags），被称为 ALU 标志位 ([View Highlight](https://read.readwise.io/read/01gev8hgghq8wxqf8c5vqt3cd7)) #Highlight #[[2022-10-08]]
- 数据处理指令一般是默认不影响 PSTATE 的。这事因为大部分的数据处理指令的执行，并不会作为后续条件跳转的条件，从而可以节约计算成本。而如果我们需要使用可以影响 PSTATE 的指令，则需要在后面加上一个 `s` ([View Highlight](https://read.readwise.io/read/01gev8n2k1f918qm3aasx4a4s8)) #Highlight #[[2022-10-08]]
- `cmp a, b` 指令是 `subs wzr, a, b` 的别名。也就是说，`cmp` 指令将两数直接相减，并且不存储其相减的结果，同时设置 PSTATE 的 ALU 位。这就是最常见的比较指令。 ([View Highlight](https://read.readwise.io/read/01gev8x306btbv6948aq08f32y)) #Highlight #[[2022-10-08]]
- `tst a, b` 指令是 `ands wzr, a, b` 的别名。也就是说，`tst` 指令将两数逐位相与，并设置 PSTATE 的 ALU 位。设计这个指令的目的是因为，在高级语言中，有非常非常多判断一个值是否为 0 的操作。与使用 `cmp`，也就是减去 0 相比，更巧妙的方法是将这个值与自身相与，也就是 `tst a, a`。那么，这个值为 0，当且仅当与自身相与的结果为 0。 ([View Highlight](https://read.readwise.io/read/01gev8yvtyq0ma17fzhfytrttq)) #Highlight #[[2022-10-08]]
- `switch` 语句在底层，会生成一个**跳转表**。我们可以通过一个算术运算，加上间接跳转，实现真正的跳转。这种方案与级联 `if`-`else` 语句相比，效率高出了许多（因为后者会每一个 case 都进行一个比较和跳转） ([View Highlight](https://read.readwise.io/read/01gevaz8bdb6c2r4b78ny1bfnp)) #Highlight #[[2022-10-08]]