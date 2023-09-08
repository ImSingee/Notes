title:: Readwise/Highlights/Linux vDSO概述
author:: [[zhuanlan.zhihu.com]]
full-title:: Linux vDSO概述
category:: #articles
url:: https://zhuanlan.zhihu.com/p/436454953
- __kernel_vsyscall 是一个特殊的页，其位于内核地址空间，但也是唯一允许用户访问的区域，该区域的地址固定为 0xffffffffff600000（64 位系统），大小固定为 4K #Highlight #[[2023-05-06]]
- vsyscall 机制支持的系统调用有 3 个：gettimeofday()time()getcpu() #Highlight #[[2023-05-07]]
- 但由于一些原因，开发人员又抛弃了 vsyscall 机制：vsyscall 的映射地址是固定不变的（从 vsyscall.h 的定义就可以看出），因此很容易成为 ret2libc 攻击的跳板。vsyscall 能支持的系统调用数有限，无法很方便地进行扩展。 #Highlight #[[2023-05-07]]
- vDSO 本质上是一个 ELF 共享目标文件；而 vsyscall 只是一段内存代码和数据。 vsyscall 位于内核地址空间，采用静态地址映射方式；而 vDSO 借助共享目标文件天生具有的 PIC 特性，可以以进程为粒度动态映射到进程地址空间中。 #Highlight #[[2023-05-07]]
- vDSO mapping 的名称叫 linux-vdso.so.1，其映射的基地址每次都是不同的 #Highlight #[[2023-05-07]]
- 在内核加载 ELF binary 时，内核中的 ELF loader 会通过辅助向量来向用户态传递一些信息；而 getauxval () 就是用来通过辅助向量来获取这些信息的函数：#include <sys/auxv.h>
  
  void *vdso = (uintptr_t) getauxval(AT_SYSINFO_EHDR);辅助向量中的每个 entry 是一个键值对儿：key 称作类型，value 就是值。与 vDSO 相关的辅助向量类型是 AT_SYSINFO_EHDR，该向量值保存了 vDSO mapping 的基地址。 #Highlight #[[2023-05-07]]