title:: Readwise/Highlights/深入理解Linux中的nohup命令
author:: [[juejin.cn]]
full-title:: 深入理解Linux中的nohup命令
category:: #articles
url:: https://juejin.cn/post/7215855138811150395
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- nohup命令的执行过程分为以下几个步骤：
  
  1.  nohup命令将当前shell的标准输入、标准输出和标准错误输出全部重定向到`/dev/null`设备中，避免被关闭终端的信号所中断。
  2.  nohup命令将进程放到后台执行，并将进程的PID输出到终端。
  3.  进程开始执行，并将标准输出和标准错误输出重定向到指定的文件中。
  4.  用户可以退出终端或关闭终端窗口，进程仍然在后台运行。 ([View Highlight](https://read.readwise.io/read/01hfkz1mphghr045rm0eq4hr3h)) #Highlight #[[2023-11-19]]