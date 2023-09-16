title:: Readwise/Highlights/故障分析 | 大量短时进程导致 Cpu 负载过高案例一则 - 爱可生开源社区
author:: [[作者：任坤]]
full-title:: 故障分析 | 大量短时进程导致 Cpu 负载过高案例一则 - 爱可生开源社区
category:: #articles
url:: https://opensource.actionsky.com/20220525-cpu/

- sar -w 1 查看每秒生成的进程数 ([View Highlight](https://read.readwise.io/read/01hafc4t84nr0pzw2ycj5d25k9)) #Highlight #[[2023-09-17]]
- 要抓出频繁建立短时进程的应用，可以采用execsnoop，该工具通过 ftrace 实时监控进程的 exec() 行为，并输出短时进程的基本信息， 包括进程 PID/PPID、命令行参数 ([View Highlight](https://read.readwise.io/read/01hafc5rj9awg5xv9mg22qctbg)) #Highlight #[[2023-09-17]]
- 当机器cpu负载持续高涨却抓取不到top进程时，可以采用execsnoop抓取短时进程，类似工具还有iosnoop、opensnoop ([View Highlight](https://read.readwise.io/read/01hafc76d0x4vn79whdwehz6kt)) #Highlight #[[2023-09-17]]
- top进程的cpu利用率加起来远远小于cpu总体负载，大概率是有频繁短时进程偷走了这部分CPU资源，导致top命令来不及捕获统计 ([View Highlight](https://read.readwise.io/read/01hafc0kmyaqdmtzf19d3m8f4b)) #Highlight #[[2023-09-17]]