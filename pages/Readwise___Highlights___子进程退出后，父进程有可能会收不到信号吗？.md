title:: Readwise/Highlights/子进程退出后，父进程有可能会收不到信号吗？
author:: [[Manjusaka]]
full-title:: 子进程退出后，父进程有可能会收不到信号吗？
category:: #articles
url:: https://www.manjusaka.blog/posts/2023/08/10/is-it-possible-to-lose-the-signal-in-linux/#%E5%85%88%E6%9D%A5%E7%9C%8B%E4%B8%80%E6%AE%B5%E4%BB%A3%E7%A0%81
tags:: #[[favorite]] #[[linux]] #[[OS]]

- 进程退出后，内核核心的一个函数调用是 do_exit, 位于 `/kernel/exit.c` ([View Highlight](https://read.readwise.io/read/01hdzae281x8zythpz6ayd9b7q)) #Highlight #[[2023-10-30]]
- 我们在进程回收的时候，调用 `send_signal_locked` 发送信号 ([View Highlight](https://read.readwise.io/read/01hdzaeyd16hg0f28smgtttwre)) #Highlight #[[2023-10-30]]
- 在 Linux 中，Linux 将进程分为了 real-time 和 standard 信号。后者通常又有一个别名叫作不可靠信号。通常来讲，信号值小于 SIGTMIN 的为不可靠信号，信号值大于 SIGTMIN 的为 RT 信号 ([View Highlight](https://read.readwise.io/read/01hdzaf6an532hnm4r0pq8rgdk)) #Highlight #[[2023-10-30]]
- 系统中 RLIMIT_SIGPENDING 的配置决定了我们 pending 队列的长度。各个发行版不同 ([View Highlight](https://read.readwise.io/read/01hdzagbkfbrhde44bvrkb4mar)) #Highlight #[[2023-10-30]]
- 在我们的回调函数中存在 block 行为，导致后续进程在 SIGCHLD 信号发送后，在 `legacy_queue` 处判断当前队列有同样的非可靠信号未被处理完，于是没有完成后续的信号处理流程 ([View Highlight](https://read.readwise.io/read/01hdzagp1sfbsshth5wwvryq5s)) #Highlight #[[2023-10-30]]