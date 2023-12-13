title:: Readwise/Highlights/关于用户态栈回溯（Unwind）的一些杂记和想法
author:: [[Manjusaka]]
full-title:: 关于用户态栈回溯（Unwind）的一些杂记和想法
category:: #articles
url:: https://www.manjusaka.blog/posts/2023/08/22/a-little-bit-idea-about-unwind/

- .so 相比 executable 有几个优势：
  
  1.  它一定有动态符号表
  2.  它一定有 .eh_frame ([View Highlight](https://read.readwise.io/read/01hdza2bhwtzyt7mnhamdh67hm)) #Highlight #[[2023-10-30]]
- 用户态栈回溯核心的一个要解决的点就是增强程序的可追踪性。
  
  在传统 X86 模式下，我们有这样的栈帧结构
  
  [![X86 栈帧](https://github.com/Zheaoli/zheaoli.github.io/assets/7054676/a1015149-4160-4f3c-b2da-dab8ff4ad2a4)](https://github.com/Zheaoli/zheaoli.github.io/assets/7054676/a1015149-4160-4f3c-b2da-dab8ff4ad2a4)
  
  X86 栈帧
  
  大体概括就是利用 ebp 寄存器保存栈帧地址，esp 保存栈顶指针，在调用过程里，将上一个栈帧地址入栈保存
  
  在这种情况下，我们不管是调试器还是其他的工具，都可以通过 ebp 和 esp 来进行栈回溯，这种方式优缺点都很明显
  
  优点就是足够的简单，缺点的话大概有这样一些方面
  
  1.  浪费一个固定的通用寄存器
  2.  保存回溯信息时有额外的指令跳转开销
  3.  回溯出来的信息上下文不够，通常只能恢复堆栈寄存器的内容
  
  所以在这种情况下，进入 64 位时代后，这种栈帧结构被放弃，gcc 在 64 位编译下默认不使用 rbp 寄存器来保存栈帧地址了（不过可以通过 -fno-omit-frame-pointer 选项打开）
  
  在栈帧结构变化后，我们现在要进行栈回溯，就需要依赖额外的一些调试信息了。
  
  说到调试信息，大家第一反应肯定是 DWARF (aka Debugging With Attributed Record Formats)，在这一套信息中，定义了一套 CFI (Call Frame Information) 的规范，用来描述栈帧的结构，这套规范在 GCC 和 LLVM 中都有实现。目前 CFI 相关信息存放在程序的 .debug_frame 和，.eh_frame 段中。我们可以用一下 readelf 来查看 ([View Highlight](https://read.readwise.io/read/01hdza53bj5qfa6rx0rzvw6m8n)) #Highlight #[[2023-10-30]]
	- **Note**: ,c1
- FDE (Frame Description Entry) 就是一条 CFI 信息，里面包含了一些寄存器的信息，比如 rsp, rbp, ra 等等，这些信息可以用来进行栈回溯。
  
  整个过程差不多如下
  
  1.  根据当前 PC 指针值，遍历 .eh_frame ，找到对应的 FDE，然后计算便宜
  2.  根据 CFA (Canonical Frame Address) 计算出当前栈帧的地址（比如 rsp+8），然后计算出通用寄存器地址和返回地址在栈中的位置
  3.  比如这里一个通用寄存器的地址是 rsp-16
  4.  返回地址 ra 的地址是 rsp-8
  5.  然后根据 ra 值重复以上部分，就可以进行栈回溯
  
  当然这里还有很多工程的部分要去做，比如你需要走 auxv 去拿到进程加载后的 ELF，你需要去遍历符号表之类的东西（XD
  
  现在有一些成套的基础设施可以用，列一下仅供参考
  
  1.  GCC 自带的宏， __buildin_return_address,
  2.  libunwind ([View Highlight](https://read.readwise.io/read/01hdza6e7hrp6prgwk7p45raaz)) #Highlight #[[2023-10-30]]
	- **Tags**: #[[c2]]
- unwind 下还有很多噩梦级别的 case 要去处理，比如 PIE，比如 strip 信息后的二进制。如果想用 eBPF 重写 libunwind 的话，我觉得跳楼可能更快一些 ([View Highlight](https://read.readwise.io/read/01hdza714nws3brmqra7b5cw0t)) #Highlight #[[2023-10-30]]
- 遇到问题的时候，可能优先考虑编译一些带着埋点的二进制文件。有可能你搞 print 大法都比 unwind 更好用（XD ([View Highlight](https://read.readwise.io/read/01hdza7c68k6kag4rj6xtj09ee)) #Highlight #[[2023-10-30]]