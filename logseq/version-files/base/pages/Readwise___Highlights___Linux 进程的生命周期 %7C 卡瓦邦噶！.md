title:: Readwise/Highlights/Linux 进程的生命周期 | 卡瓦邦噶！
author:: [[kawabangga.com]]
full-title:: Linux 进程的生命周期 | 卡瓦邦噶！
category:: #articles
url:: https://www.kawabangga.com/posts/3636

![](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)
None
- Pid 在系统的同一时间不会重复，当分配 pid 的时候，kernel 会取当前系统中最大的 pid + 1，直到这个值超过 `/proc/sys/kernel/pid_max` ，所以 kernel 不保证 pid 在不同时间不会复用。 #Highlight #[[2024-04-07]]
	- **Note**: 复用：相同的 pid 可能被多个进程使用，但不会同时被多个进程所使用
- Linux 中有一些进程是[跑在 Kernel](https://www.kawabangga.com/posts/3521) 中的，但是为了统一调度，这些进程也同用户进程一样放在一起管理。[kthreadd 就是这些 kernel 进程的父进程](https://unix.stackexchange.com/questions/13290/init-process-ancestor-of-all-processes)，等同于 init 进程（或者 systemd 进程）之于我们的用户进程。 #Highlight #[[2024-04-07]]
- Pid 0可以认为就是 kernel 本身。这个进程也是 idel process，当没有可以运行的进程的时候，kernel 就运行进程 0. #Highlight #[[2024-04-07]]