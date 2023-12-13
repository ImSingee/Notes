title:: Readwise/Highlights/Ylang: 适用于 eBPF、Stap+、GDB 等框架的通用语言（第一集，全四集） -...
author:: [[blog.openresty.com.cn]]
full-title:: Ylang: 适用于 eBPF、Stap+、GDB 等框架的通用语言（第一集，全四集） - OpenResty 官方博客
category:: #articles
url:: https://blog.openresty.com.cn/cn/ylang-intro-part1/
- 动态追踪是一组技术的统称。它可以对运行中的软件系统进行分析并帮助软件排除故障。这个过程是以安全、实时、事后、高效和非侵入的方式进行的。 #Highlight #[[2023-10-19]]
- [GDB](https://www.gnu.org/software/gdb/) 是唯一可以分析 core dump 文件（来自崩溃的进程）的后端。但是，它仍然可以使用断点来模拟函数探测和[动态追踪](https://blog.openresty.com.cn/cn/dynamic-tracing/)，只是速度很慢，成本很高。 #Highlight #[[2023-10-19]]
- 其他开源框架，如 [DTrace](https://en.wikipedia.org/wiki/DTrace)、[SystemTap](https://sourceware.org/systemtap/) 和 [Bpftrace](https://github.com/iovisor/bpftrace)（目标是 [eBPF](https://ebpf.io/)）都引入了自己的脚本语言。不幸的是，这些语言只是看起来像 C 语言，而从来没有想过要与 C 语言真正地兼容。所以简单地复制&粘贴目标应用程序中的 C 代码是行不通的。 #Highlight #[[2023-10-19]]