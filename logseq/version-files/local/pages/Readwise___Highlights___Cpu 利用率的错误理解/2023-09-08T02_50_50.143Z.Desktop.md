title:: Readwise/Highlights/Cpu 利用率的错误理解
author:: [[juejin.cn]]
full-title:: Cpu 利用率的错误理解
category:: #articles
url:: https://juejin.cn/post/7243724596863221820
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- 停滞 "stalled" 意味着处理器没有在指令上取得进展，通常是因为它正在等待内存输入 / 输出 ([View Highlight](https://read.readwise.io/read/01h2smw33faca3e16ewsmtypry)) #Highlight #[[2023-06-13]]
- CPU 利用率的指标实际上是 “非空闲时间”：CPU 没有运行空闲线程的时间 ([View Highlight](https://read.readwise.io/read/01h2smxsf9c5c14478kyp14n03)) #Highlight #[[2023-06-13]]
- 如今，CPU 已经变得比内存（ main memory）快得多，等待内存仍然主导着所谓的 “CPU 利用率” ([View Highlight](https://read.readwise.io/read/01h2smxxd1096x1zfkcjtgbsz8)) #Highlight #[[2023-06-13]]
- 当你看到 top 首行中的高 CPU 时，你可能会认为处理器是瓶颈，而实际上是 DRAM 的逻辑 Bank (when it's really those banks of DRAM) ([View Highlight](https://read.readwise.io/read/01h2smy694tyyz0dspdsazb1a1)) #Highlight #[[2023-06-13]]
- 这里的关键指标是每个周期的指令数（insns per cycle: IPC），它显示了平均每个 CPU 时钟周期我们完成了多少条指令。越高越好。上面 0.78 的例子听起来不错（78% 繁忙？）直到你意识到这个处理器的最高速度是 4.0 的 IPC。这也被称为 4-wide (可以在一个时钟周期内 "射" 出四个 "内部指令" 到执行机构)，指的是指令获取 / 解码路径。这意味着，CPU 可以在每个时钟周期停用（完成）四条指令。因此，在 4-wide 系统上 0.78 的 IPC 意味着 CPU 以其最高速度的 19.5% 运行。较新的 Intel 处理器可能会转向 5 宽。 ([View Highlight](https://read.readwise.io/read/01h2snpdy3n1vr4dpf78hvb2k0)) #Highlight #[[2023-06-13]]
- 如果您在虚拟环境中，您可能无法访问 PMC，这取决于虚拟机管理程序是否支持你使用它们 ([View Highlight](https://read.readwise.io/read/01h2snmwaz7fq0x15m35jv7h9v)) #Highlight #[[2023-06-13]]
- 如果您的 IPC<1.0，您可能会出现内存停滞 (memory stalled)，软件调整策略包括减少内存 I/O，改善 CPU 缓存和内存局部性 (memory locality)，尤其是在 NUMA 系统上。硬件调整包括使用具有更大 CPU 缓存和更快内存、总线和互连的处理器。 ([View Highlight](https://read.readwise.io/read/01h2snqq0nmdhtq83yhbvp7386)) #Highlight #[[2023-06-13]]
- 不仅仅是内存停滞周期使 CPU 利用率具有误导性。其他因素包括：
  
  •   •   温度过载使处理器停止。
    •   涡轮增压改变时钟速率。
    •   内核随速度步长改变时钟速率。
    •   平均值的问题：80% 在 1 分钟内利用率，隐藏 100% 的爆发。
    •   旋转锁：CPU 已利用，并且具有高 IPC，但应用没有进行逻辑向前推进。 ([View Highlight](https://read.readwise.io/read/01h2sns19anq9bp0p6bp43pekf)) #Highlight #[[2023-06-13]]