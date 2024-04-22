title:: Readwise/Highlights/一文说清linux System Load
author:: [[juejin.cn]]
full-title:: 一文说清linux System Load
category:: #articles
url:: https://juejin.cn/post/7043691931431338020
tags:: #[[favorite]] #[[linux]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)
简介：双十一压测过程中，常见的问题之一就是load 飙高，通常这个时候业务上都有受影响，比如服务rt飙高，比如机器无法登录，比如机器上执行命令hang住等等。本文就来说说，什么是load，load是怎
- 我们平时所讲的load，其全称是Linux system load averages ，即linux系统负载平均值。注意两个关键词：一个是“负载”，它衡量的是task（linux 内核中用于描述一个进程或者线程）对系统的需求（CPU、内存、IO等等），第二个关键词是“平均”，它计算的是一段时间内的平均值，分别为 1、5 和 15 分钟值。system load average由内核负载计算并记录在/proc/loadavg 文件中， 用户态的工具（比如uptime，top等等）读的都是这个文件。 ([View Highlight](https://read.readwise.io/read/01hq2b2qwxg4kzxde8anfmnwzf)) #Highlight #[[2024-02-20]]