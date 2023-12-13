title:: Readwise/Highlights/「Linux 奏章 10」定时任务调度 : 掘金
author:: [[首页]]
full-title:: 「Linux 奏章 10」定时任务调度 : 掘金
category:: #articles
url:: https://juejin.cn/post/7032060435461324836
tags:: #[[coding]] #[[inoreader]] #[[read]]

- at 命令是**一次性定时计划任务**——执行任务队列（执行完某个任务后，不会再执行此任务了），at 的**守护进程 atd** 会以后台模式运行，检查作业队列来运行。  
  默认模式下 **atd** 守护进程每 60s 检查作业队列，有作业时，会检查作业运行时间，如果时间与当前时间匹配，则运行此作业。  
  在使用 at 命令时，一定要保证 atd 进程的启动 ([View Highlight](https://read.readwise.io/read/01hf8f1ks7qer9g0ty4rtkwxda)) #Highlight #[[2023-11-15]]