title:: Readwise/Highlights/为什么 Numa 会影响程序的延迟 - 面向信仰编程
author:: [[draveness.me]]
full-title:: 为什么 Numa 会影响程序的延迟 - 面向信仰编程
category:: #articles
url:: https://draveness.me/draveness.me/whys-the-design-numa-performance

- 单核或者多核计算机上的 CPU 最早会通过前端总线（Front-side bus）、北桥（Northbridge）和内存总线（Memory bus）访问内存槽中的内存，所有的 CPU 会通过相同的总线访问相同的内存以及 I/O 设备，计算机中的所有资源都是共享的，这种架构被称作对称多处理器架构（Symmetric Multi-Processor、SMP），也被称为一致存储器访问结构（Uniform Memory Access、UMA） #Highlight #[[2022-07-18]]