title:: Readwise/Highlights/02 | 基础篇：到底应该怎么理解“平均负载”？ - Linux性能优化实战 (65)
author:: [[倪朋飞]]
full-title:: 02 | 基础篇：到底应该怎么理解“平均负载”？ - Linux性能优化实战
category:: #articles
url:: https://time.geekbang.org/column/article/69618

- 不可中断状态的进程则是正处于内核态关键流程中的进程，并且这些流程是不可打断的，比如最常见的是等待硬件设备的 I/O 响应，也就是我们在 ps 命令中看到的 D 状态（Uninterruptible Sleep，也称为 Disk Sleep）的进程。 #Highlight #[[2020-03-21]]
- 所谓可运行状态的进程，是指正在使用 CPU 或者正在等待 CPU 的进程，也就是我们常用 ps 命令看到的，处于 R 状态（Running 或 Runnable）的进程。 #Highlight #[[2020-03-21]]
- 简单来说，平均负载是指单位时间内，系统处于可运行状态和不可中断状态的平均进程数，也就是平均活跃进程数，它和 CPU 使用率并没有直接关系。 #Highlight #[[2020-03-21]]