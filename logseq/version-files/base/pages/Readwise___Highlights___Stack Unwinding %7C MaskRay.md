title:: Readwise/Highlights/Stack Unwinding | MaskRay
author:: [[MaskRay]]
full-title:: Stack Unwinding | MaskRay
category:: #articles
url:: https://maskray.me/blog/2020-11-08-stack-unwinding
tags:: #[[binary]] #[[favorite]] #[[linux]] #[[os]] #[[OS]]

- Stack unwinding主要有以下作用：
  
  •   获取stack trace，用于debugger、crash reporter、profiler、garbage collector等
  •   加上personality routine和language specific data area后实现C++ exceptions(Itanium C++ ABI)。 ([View Highlight](https://read.readwise.io/read/01hdza8hsngf6x0xfwjs4dpt2p)) #Highlight #[[2023-10-30]]
- Stack unwinding可以分成两类：
  
  •   synchronous: 程序自身触发的，C++ throw、获取自身stack trace等。这类stack unwinding只发生在函数调用处(在function body内，不会出现在prologue/epilogue)
  •   asynchronous: 由signal或外部程序触发，这类stack unwinding可以发生在函数prologue/epilogue ([View Highlight](https://read.readwise.io/read/01hdza8ndpwh22msxwacj2kh6c)) #Highlight #[[2023-10-30]]
- 最经典、最简单的stack unwinding基于frame pointer：固定一个寄存器为frame pointer(在x86-64上为RBP)，函数prologue处把frame pointer放入栈帧，并更新frame pointer为保存的frame pointer的地址。 frame pointer值和栈上保存的值形成了一个单链表。获取初始frame pointer值(`__builtin_frame_address`)后，不停解引用frame pointer即可得到所有栈帧的frame pointer值。 这种方法不适用于prologue/epilogue的部分指令。 ([View Highlight](https://read.readwise.io/read/01hdza913mkn30kc09dpnc5mss)) #Highlight #[[2023-10-30]]
- 践中，有时候不能保证所有库都包含frame pointer。unwind一个线程时，为了增强健壮性需要检测一个`next_fp`是否像栈地址。检测的一种方法是解析`/proc/*/maps`判断地址是否可读 ([View Highlight](https://read.readwise.io/read/01hdza9fqcmsrh4gtezvyt7vc3)) #Highlight #[[2023-10-30]]
- 预留一个寄存器用于frame pointer会增大text size、有性能开销(prologue、epilogue额外的指令开销和少一个寄存器带来的寄存器压力)，在寄存器贫乏的x86-32可能相当显著，在寄存器较为充足的x86-64可能也有1%以上的性能损失 ([View Highlight](https://read.readwise.io/read/01hdzaahjhac605a73e2fn6f0k)) #Highlight #[[2023-10-30]]
- 编译器行为
  
  •   -O0: 预设`-fno-omit-frame-pointer`，所有函数都有frame pointer
  •   -O1或以上: 预设`-fomit-frame-pointer`，只有必要情况才设置frame pointer。指定`-fno-omit-leaf-frame-pointer`则可得到类似-O0效果。可以额外指定`-momit-leaf-frame-pointer`去除leaf functions的frame pointer ([View Highlight](https://read.readwise.io/read/01hdzaastkqnkmscf0tzxx89q1)) #Highlight #[[2023-10-30]]
- C++ exception、profiler/crash reporter的stack unwinding通常用libunwind API和DWARF Call Frame Information。上个世纪90年代Hewlett-Packard定义了一套libunwind API，分为两类：
  
  •   `unw_*`: 入口是`unw_init_local`(local unwinding，当前进程)和`unw_init_remote`(remote unwinding，其他进程)。通常使用libunwind的应用使用这套API。比如Linux perf会调用`unw_init_remote`
  •   `_Unwind_*`: 这部分标准化为[Itanium C++ ABI: Exception Handling](https://itanium-cxx-abi.github.io/cxx-abi/abi-eh.html)的Level 1: Base ABI。Level 2 C++ ABI调用这些`_Unwind_*` API。其中的`_Unwind_Resume`是唯一被C++编译后的代码直接调用的API，其中的`_Unwind_Backtrace`被少数应用用于获取backtrace，其他函数则会被libsupc++/libc++abi调用。 ([View Highlight](https://read.readwise.io/read/01hdzab4x2wq347t1cfsnsxnkb)) #Highlight #[[2023-10-30]]
- 程序不同区域需要的unwind指令由DWARF Call Frame Information (CFI)描述，在ELF平台上由`.eh_frame`存储。Compiler/assembler/linker/libunwind提供相应支持。
  
  `.eh_frame`由Common Information Entry (CIE)和Frame Description Entry (FDE)组成 ([View Highlight](https://read.readwise.io/read/01hdzac6rsytz8mbsqy21vwem7)) #Highlight #[[2023-10-30]]