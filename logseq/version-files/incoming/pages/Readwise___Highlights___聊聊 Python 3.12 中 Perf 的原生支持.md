title:: Readwise/Highlights/聊聊 Python 3.12 中 Perf 的原生支持
author:: [[Manjusaka]]
full-title:: 聊聊 Python 3.12 中 Perf 的原生支持
category:: #articles
url:: https://www.manjusaka.blog/posts/2023/10/05/the-perf-feature-python-312/index.html
tags:: #[[go inbox]] #[[inoreader]] #[[manjusaka]] #[[博客]]
- [![Python 栈帧](https://github.com/Zheaoli/zheaoli.github.io/assets/7054676/06bda75b-0505-40b5-a0d8-4c815b21402b)](https://github.com/Zheaoli/zheaoli.github.io/assets/7054676/06bda75b-0505-40b5-a0d8-4c815b21402b)
  
  Python 栈帧 ([View Highlight](https://read.readwise.io/read/01hdz9rea5zt4jnpx1yef17eqc)) #Highlight #[[2023-10-30]]
- Python 目前对于 Trace 的尝试最早可以追溯到 2014 年，在 3.6 发布前夕，Python 提供了 DTrace 的支持，参见 Systemtap and DTrace support[1](https://www.manjusaka.blog/posts/2023/10/05/the-perf-feature-python-312/index.html#refer-anchor-1)
  
  DTrace 是在 Unix/Linux 下提供的一种用户预置一些埋点的基础设施。在对应的函数预置埋点后，对应位置的调用可以触发外部的注册程序（包含 SystemTap/eBPF 等），从而实现对于一些调用时的动态 trace。 ([View Highlight](https://read.readwise.io/read/01hdz9s38z77n5f20an8nb4jnc)) #Highlight #[[2023-10-30]]