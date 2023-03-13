title:: Readwise/Highlights/Quick Passages
author:: [[]]
full-title:: Quick Passages
category:: #books

- 一个人独居的最大好处就是，我想做什么就做什么，可以把自己最丑陋的一面展示给自己，可以无理由的哭，可以无理由的笑。自己一个人，无论是哭泣还是微笑，难过还是开心，都不会有人知道，也不会有人在乎。当然，如果孤独死的话，也不会有人知道呀。多美好呀，孤独是生而为人的宿命啊。
  
  誰も知らない。 #Highlight #[[2021-04-06]]
- 一个人的强烈的初始改变意愿和行动力，将提供源源不绝的燃料，帮助一个人更容易完成练
  习，并推动个人长期坚持下去。 #Highlight #[[2022-01-05]]
- rich 是你花钱买了昂贵的东西，别人知道你有钱。而 wealthy 是隐形的，财富是你没有花出去，所以留下来的财富 #Highlight #[[2022-07-09]]
- 财富应该是无形的，没有人可以从你身上夺去的。财富应该是能力和思维方式 #Highlight #[[2022-07-09]]
- SBI 是 RISC-V Supervisor Binary Interface 规范的缩写，OpenSBI 是RISC-V官方用C语言开发的SBI参考实现；RustSBI 是用Rust语言实现的SBI。
  
  BIOS 是 Basic Input/Output System，作用是引导计算机系统的启动以及硬件测试，并向OS提供硬件抽象层。 #Highlight #[[2023-03-13]]
- 机器上电之后，会从ROM中读取引导代码，引导整个计算机软硬件系统的启动。而整个启动过程是分为多个阶段的，现行通用的多阶段引导模型为：
  
  ROM -> LOADER -> RUNTIME -> BOOTLOADER -> OS
  
  Loader 要干的事情，就是内存初始化，以及加载 Runtime 和 BootLoader 程序。而Loader自己也是一段程序，常见的Loader就包括 BIOS 和 UEFI，后者是前者的继任者。
  
  Runtime 固件程序是为了提供运行时服务（runtime services），它是对硬件最基础的抽象，对OS提供服务，当我们要在同一套硬件系统中运行不同的操作系统，或者做硬件级别的虚拟化时，就离不开Runtime服务的支持。SBI就是RISC-V架构的Runtime规范。
  
  BootLoader 要干的事情包括文件系统引导、网卡引导、操作系统启动配置项设置、操作系统加载等等。常见的 BootLoader 包括GRUB，U-Boot，LinuxBoot等。
  
  而 BIOS/UEFI 的大多数实现，都是 Loader、Runtime、BootLoader 三合一的，所以不能粗暴的认为 SBI 跟 BIOS/UEFI 有直接的可比性。
  
  如果把BIOS当做一个泛化的术语使用，而不是指某个具体实现的话，那么可以认为 SBI 是 BIOS 的组成部分之一。
  
  也可参考这份文稿《An Introduction to RISC-V Boot Flow》的P5, P7, P9-11。 #Highlight #[[2023-03-13]]