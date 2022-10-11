title:: Readwise/Highlights/在 Apple Silicon Mac 上入门汇编语言 (723)
author:: [[evian-zhang.github.io]]
full-title:: 在 Apple Silicon Mac 上入门汇编语言
category:: #articles
url:: https://evian-zhang.github.io/learn-assembly-on-Apple-Silicon-Mac/4-%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.html

- XNU 是一个混合型内核，其最重要的三个部分为 Mach, BSD 以及 IOKit ([View Highlight](https://read.readwise.io/read/01geqcx7tesz0ksz0fmad33zdw)) #Highlight #[[2022-10-07]]
- 在 ARM 中，特权级被称作异常级别（Exception Level）。一般来说，存在一个寄存器存储当前的异常级别。当 CPU 进行指令执行、内存访问等操作时，会检查当前的异常级别，如果相应的指令、内存允许当前的异常级别，则继续正常执行。内核的异常级别比用户态高，从而也就实现了内核相对用户态的特权。 ([View Highlight](https://read.readwise.io/read/01geqcy4fr9ffnqej2c14zafay)) #Highlight #[[2022-10-07]]
- 在 AArch64 架构下，只能由低异常级别发起一个异常，希望切换到高异常级别；异常返回后，从高异常级别切换回低异常级别 ([View Highlight](https://read.readwise.io/read/01geqcznrsd94m5jjv1h5y2xq6)) #Highlight #[[2022-10-07]]
- 当用户通过 `svc` 等特殊的机器指令，在用户态发起系统调用后，CPU 会切换成 EL1 级别，从而进入内核态。XNU 内核会根据 svc 号判断用户希望进行的是 Mach 系统调用还是 Unix 系统调用（由于 XNU 是由 BSD 和 Mach 两种内核组成，所以才会分为两种系统调用。这也是使用「活动监视器」App 查看进程统计数据时有「Mach 系统调用」和「Unix 系统调用」的原因） ([View Highlight](https://read.readwise.io/read/01geqd55mx6bhm38tpvcbe36vf)) #Highlight #[[2022-10-07]]
- 在系统调用过程中，「系统调用表」是很关键的一环。对于大部分面向内核的恶意软件 Rootkit，一般都是修改内核内存中的这张系统调用表，从而能够劫持用户的系统调用，使其执行自己想要执行的恶意逻辑 ([View Highlight](https://read.readwise.io/read/01geqdaxpzsyqqjay52y49qexw)) #Highlight #[[2022-10-07]]
- 在一个进程启动时，操作系统会为每个进程分配 64 位逻辑地址空间，并在 MMU (Memory Management Unit, 内存管理单元) 中维护一个逻辑地址向物理地址的映射 ([View Highlight](https://read.readwise.io/read/01geqdbr0p2s2eewcpp3dw0qqg)) #Highlight #[[2022-10-07]]
- 操作系统将地址分为 4KiB, 也就是 4096B 大小的页 (Page), 将逻辑地址的页与物理地址的页进行映射。在一个页内相邻的逻辑地址对应的物理地址是相邻的，但是页之间的物理地址的关系是不确定的 ([View Highlight](https://read.readwise.io/read/01geqdc57359cesxzhfq6rfmra)) #Highlight #[[2022-10-07]]
- 操作系统在操作内存时，一般最小的单元都是一个内存页。无论是页的换入换出，还是内存访问权限的控制，都是以内存页为单位的 ([View Highlight](https://read.readwise.io/read/01geqde117fg8pzc0f17362ar8)) #Highlight #[[2022-10-07]]
- 内核所在的物理页，会在每个进程启动时，映射到该进程的高地址空间中。 ([View Highlight](https://read.readwise.io/read/01geqdhmn26vs7sb24bpgc67xe)) #Highlight #[[2022-10-07]]
- 操作系统会在内存中开辟两块区域：栈和堆。栈位于较高的地址空间中，**由上向下增长**，一般用于存储局部变量。堆区域一般用于存储运行时动态分配的变量。 ([View Highlight](https://read.readwise.io/read/01geqdj971xcz44jkk674xgsbq)) #Highlight #[[2022-10-07]]
- 从 Mac OS X 10.5 开始，Apple 引入了地址空间配置随机加载 (ASLR) 机制。在每次程序执行的过程中，程序在内存中的开始地址，堆、栈、库的基地址都会随机化，这样可以更好地保护不受攻击者攻击 ([View Highlight](https://read.readwise.io/read/01geqdpvynajb2g801yrw1szzg)) #Highlight #[[2022-10-07]]