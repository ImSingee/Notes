title:: Readwise/Highlights/500行代码手写docker-实现硬件资源限制cgroups
author:: [[juejin.cn]]
full-title:: 500行代码手写docker-实现硬件资源限制cgroups
category:: #articles
url:: https://juejin.cn/post/7236287881323741239
tags:: #[[go inbox]] #[[inoreader]] #[[博客]] #[[掘金专栏-蓝胖子的编程梦]]

- cgroup.procs文件用于向cgroup中添加或删除进程，只需要将进程的task id写入该文件即可。
  
  tasks文件则是用于将整个进程组添加到cgroup中。如果将一个进程组的pid写入tasks文件，则该进程组中的所有进程都会被添加到cgroup中。 ([View Highlight](https://read.readwise.io/read/01hanknxy3anj8jseq28qxebfy)) #Highlight #[[2023-09-19]]