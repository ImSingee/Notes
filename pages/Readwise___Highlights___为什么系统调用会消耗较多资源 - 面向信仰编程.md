title:: Readwise/Highlights/为什么系统调用会消耗较多资源 - 面向信仰编程
author:: [[draveness.me]]
full-title:: 为什么系统调用会消耗较多资源 - 面向信仰编程
category:: #articles
url:: https://draveness.me/draveness.me/whys-the-design-syscall-overhead
- 使用 SYSCALL 指定执行系统调用消耗的时间是 C 函数调用的几十倍 #Highlight #[[2022-07-02]]
- vDSO 全称是虚拟动态链接对象（Virtual Dynamically Shared Object、vDSO），它可以减少系统调用的消耗的时间 #Highlight #[[2022-07-02]]
- 不使用 vSDO 加速的系统调用需要的时间是普通函数调用的几十倍 #Highlight #[[2022-07-02]]
- 如果操作系统接收了中断，那么处理器会暂停当前的任务、存储上下文状态、并执行中断处理器处理发生的事件，在中断处理器结束后，当前处理器会恢复上下文继续完成之前的工作 #Highlight #[[2022-07-02]]
- 根据事件发出者的不同，我们可以将中断分成硬件和软件中断两种，硬件中断是由处理器外部的设备触发的电子信号；而软件中断是由处理器在执行特定指令时触发的，某些特殊的指令也可以故意触发软件中断 #Highlight #[[2022-07-02]]
- 使用 INT 0x80 来触发系统调用早就是过去时了，大多数的程序都会尽量避免这种触发方式。然而这一规则也不是通用的，因为 Go 语言团队在做基准测试时发现 INT 0x80 触发系统调用在部分操作系统上与其他方式有着几乎相同的性能，所以在 Android/386 和 Linux/386 等架构上仍然会使用中断来执行系统调用 #Highlight #[[2022-07-02]]
- 因为使用软件中断实现的系统调用在 Pentium 4 的处理器上表现非常差13。Linux 为了解决这个问题，在较新的版本使用了新的汇编指令 SYSENTER / SYSCALL，它们是 Intel 和 AMD 上用于实现快速系统调用的指令，我们会在 32 位的操作系统上使用 SYSENTER / SYSEXIT，在 64 位的操作系统上使用 SYSCALL / SYSRET #Highlight #[[2022-07-02]]
- 上述的几个汇编指令是低延迟的系统调用和返回指令，它们会认为操作系统实现了线性内存模型（Linear-memory Model），极大地简化了操作系统系统调用和返回的过程，其中包括不必要的检查、预加载参数等，与软件中断驱动的系统调用相比，使用快速系统调用指令可以减少 25% 的时钟周期13。 #Highlight #[[2022-07-02]]
- 线性内存模型是一种内存寻址的常见范式，在这种模式中，线性内存与应用程序存储在单一连续的空间地址中，CPU 可以不借助内存碎片或者分页技术使用地址直接访问可用的内存地址。 #Highlight #[[2022-07-02]]
- MSR 寄存器是 x86 指令集中用于调试、追踪以及性能监控的控制寄存器 #Highlight #[[2022-07-02]]
- 与 INT 0x80 通过触发软件中断实现系统调用不同，SYSENTER 和 SYSCALL 是专门为系统调用设计的汇编指令，它们不需要在中断描述表（Interrupt Descriptor Table、IDT）中查找系统调用对应的执行过程，也不需要保存堆栈和返回地址等信息，所以能够减少所需要的额外开销。 #Highlight #[[2022-07-02]]
- 虚拟动态共享对象（virtual dynamic shared object、vDSO）是 Linux 内核对用户空间暴露内核空间部分函数的一种机制 #Highlight #[[2022-07-02]]