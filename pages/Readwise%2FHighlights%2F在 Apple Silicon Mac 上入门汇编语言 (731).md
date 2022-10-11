title:: Readwise/Highlights/在 Apple Silicon Mac 上入门汇编语言 (731)
author:: [[evian-zhang.github.io]]
full-title:: 在 Apple Silicon Mac 上入门汇编语言
category:: #articles
url:: https://evian-zhang.github.io/learn-assembly-on-Apple-Silicon-Mac/13-%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8.html

- macOS 的 xnu 内核规定，系统调用号传入 `r16` 寄存器（位于 xnu 源码的 `osfmk/arm64/proc_reg.h` 的 `ARM64_SYSCALL_CODE_REG_NUM` 宏）。而参数传递则和普通函数的类似，传入对应的 `r0` 到 `r7` 的寄存器 ([View Highlight](https://read.readwise.io/read/01gevce56270qf16dr98p5m5eh)) #Highlight #[[2022-10-08]]
- 系统调用的 ABI 并不稳定。并且，系统调用号事实上也没有保证是不变的。因此，我们如果像上面一样，写出的代码就不具有可移植性。事实上，libc 会对绝大多数常用的系统调用做一个封装，我们也可以直接调用 libc 对应的函数。也就是说，上面的 `mov w16, #4` 和 `svc #0x80` 两行，可以换成 `bl _write`，其中`_write` 是 libc 提供的函数。 ([View Highlight](https://read.readwise.io/read/01gevchggx10bdzag62x6mkhy2)) #Highlight #[[2022-10-08]]