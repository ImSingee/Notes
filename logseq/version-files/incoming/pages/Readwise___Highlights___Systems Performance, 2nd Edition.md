title:: Readwise/Highlights/Systems Performance, 2nd Edition
author:: [[Brendan Gregg]]
full-title:: Systems Performance, 2nd Edition
category:: #books


![](https://res.weread.qq.com/wrepub/CB_6wt05b06b9zN6j36kg9yjGIJ_parsecover)
None
- There are known knowns; there are things we know we know. We also know there are known unknowns; that is to say we know there are some things we do not know. But there are also unknown unknowns—there are things we do not know we don’t know. #Highlight #[[2024-02-10]]
- performance issues can originate from anywhere, including areas of the system that you know nothing about and you are therefore not checking (the unknown unknowns). #Highlight #[[2024-02-10]]
- The typical goals of systems performance are to improve the end-user experience by reducing latency and to reduce computing cost. Reducing cost can be achieved by eliminating inefficiencies, improving system throughput,and general tuning. #Highlight #[[2024-02-10]]
- IOPS: Input/output operations per second is a measure of the rate of data transfer operations. For disk I/O, IOPS refers to reads and writes per second. #Highlight #[[2024-02-14]]
- Throughput: The rate of work performed. Especially in communications, the term is used to refer to the data rate (bytes per second or bits per second). In some contexts (e.g., databases) throughput can refer to the operation rate (operations per second or transactions per second). #Highlight #[[2024-02-14]]
- Saturation: The degree to which a resource has queued work it cannot service. #Highlight #[[2024-02-14]]
- 个网站的加载时间可能由从不同位置测量的三个不同时间组成：DNS延迟，TCP连接延迟，然后是TCP数据传输时间。DNS延迟指的是整个DNS操作。TCP连接延迟仅指初始化（TCP握手） #Highlight #[[2024-03-04]]
- Performance, on the other hand, is often subjective. With performance issues, it can be unclear whether there is an issue to begin with, and if so,when it has been fixed. What may be considered “bad” performance for one user, and therefore an issue, may be considered “good” performance for another. #Highlight #[[2024-02-10]]
- 由于“延迟”一词可能是模棱两可的，因此最好包括一些限定术语来解释它所测量的内容：请求延迟、TCP连接延迟等。 #Highlight #[[2024-03-04]]
- the real task isn’t finding an issue; it’s identifying which issue or issues matter the most. #Highlight #[[2024-02-10]]
- BPF is now a name and no longer an acronym (originally Berkeley Packet Filter) #Highlight #[[2024-02-10]]
- CPU周期的时间尺度很小。光传播0.5米所需的时间，也许是从你的眼睛到这一页的距离，大约是1.7纳秒。在同一时间内，一个现代CPU可能已经执行了五个CPU周期并处理了几条指令。 #Highlight #[[2024-03-04]]
- 在最接近执行工作的地方进行性能调优时，性能调优最有效。对于由应用程序驱动的工作负载，这意味着在应用程序本身内。 #Highlight #[[2024-03-04]]
- Static instrumentation describes hard-coded software instrumentation points added to the source code. There are hundreds of these points in the Linux kernel that instrument disk I/O, scheduler events, system calls, and more. #Highlight #[[2024-02-10]]
- As an example tool that uses static instrumentation, execsnoop(8) prints new processes created while it is tracing (running) by instrumenting a tracepoint for the execve(2) system call. #Highlight #[[2024-02-10]]
- Dynamic instrumentation creates instrumentation points after the software is running, by modifying in-memory instructions to insert instrumentation routines. This is similar to how debuggers can insert a breakpoint on any function in running software. Debuggers pass execution flow to an interactive debugger when the breakpoint is hit, whereas dynamic instrumentation runs a routine and then continues the target software. This capability allows custom performance statistics to be created from any running software. #Highlight #[[2024-02-10]]
- 更改可调参数时，将它们存储在具有详细历史记录的版本控制系统中会很有帮助。（在使用Puppet、Salt、Chef等配置管理工具时，您可能已经做了类似的事情。）这样，可调性更改的时间和原因可以在以后进行检查。 #Highlight #[[2024-03-04]]
- Apart from observability tools there are also experimentation tools, most of which are benchmarking tools. These perform an experiment by applying a synthetic workload to the system and measuring its performance. This must be done carefully, because experimental tools can perturb the performance of systems under test. #Highlight #[[2024-02-10]]