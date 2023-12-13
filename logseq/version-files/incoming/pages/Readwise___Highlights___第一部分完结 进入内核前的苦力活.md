title:: Readwise/Highlights/第一部分完结 进入内核前的苦力活
author:: [[闪客]]
full-title:: 第一部分完结 进入内核前的苦力活
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=Mzk0MjE3NDE0Ng==&mid=2247499882&idx=1&sn=68fd16c5aeae15084be58afb1e5bd9e8&chksm=c2c5bac7f5b233d1c486fa57e9e3a2bc907a92ab69ff0344babab4d50bdaf76e7766b4b42914#rd
tags:: #[[inoreader]] #[[star]] #[[微信公众号]]
- ![Image](https://mmbiz.qpic.cn/mmbiz_png/GLeh42uInXSsqVrEibE9LXat88ha3emc5lAsIibL0uiaBjemPeeEpabrRuZmZQeTicWkQlr5OXDUPuticchZ6XMUmww/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1) ([View Highlight](https://read.readwise.io/read/01hf1wc5pkpnk6b5aqr1nb7myh)) #Highlight #[[2023-11-12]]
- 当你按下开机键的那一刻，在主板上提前写死的固件程序 BIOS 会将硬盘中启动区的 512 字节的数据，原封不动复制到内存中的 0x7c00 这个位置，并跳转到那个位置进行执行，  
  
  
  
  ![Image](https://mmbiz.qpic.cn/mmbiz_png/GLeh42uInXSsqVrEibE9LXat88ha3emc5Jicib9Ou8Gn4aDBdv0LQZ4flibcPkZVtYiaCHE4zBgcbBqufFY4C6zJgoQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1) ([View Highlight](https://read.readwise.io/read/01hf1wcew0s1y7sv0cztpv4fh6)) #Highlight #[[2023-11-12]]
- idtr 寄存器指向了 idt，这个就是中断的设置；gdtr 寄存器指向了 gdt，这个就是全局描述符表的设置，可以简单理解为分段机制的设置；cr3 寄存器指向了页目录表的位置，这个就是分页机制的设置 ([View Highlight](https://read.readwise.io/read/01hf1wd0vymxf5gy8rf79n56xv)) #Highlight #[[2023-11-12]]
- **分段**和**分页**，就是 Intel 管理内存的两大利器，也是内存管理最最最最底层的支撑。
  
  
  
  而 Intel 本身对于访问内存就分成三类：
  
  **代码**
  
  **数据**
  
  **栈**
  
  
  
  而 Intel 也提供了三个段寄存器来分别对应着三类内存：
  
  
  
  **代码段寄存器（cs）**
  
  **数据段寄存器（ds）**
  
  **栈段寄存器（ss）**
  
  
  
  具体来说：
  
  
  
  **cs:eip** 表示了我们要执行哪里的代码。
  
  **ds:xxx** 表示了我们要访问哪里的数据。
  
  **ss:esp** 表示了我们的栈顶地址在哪里。
  
  
  
  而第一部分的代码，也做了如下工作：
  
  
  
  将 **ds** 设置为了 0x10，表示指向了索引值为 2 的全局描述符，即数据段描述符。
  
  将 **cs** 通过一次长跳转指令设置为了 8，表示指向了索引值为 1 的全局描述符，即代码段描述符。
  
  将 **ss:esp** 这个栈顶地址设置为 user_stack 数组的末端。 ([View Highlight](https://read.readwise.io/read/01hf1wdt2fbcka337t87yha96r)) #Highlight #[[2023-11-12]]