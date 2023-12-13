title:: Readwise/Highlights/Linux命令拾遗-我的进程消失了
author:: [[juejin.cn]]
full-title:: Linux命令拾遗-我的进程消失了
category:: #articles
url:: https://juejin.cn/post/7045133348175347743
- ![jobs](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f8145a3f789b4e59b9df6f2e1b49d6b9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)
  
  1.  命令直接执行时，启动的是前台任务，而在命令后面添加`&`符号，可让进程启动为后台任务。
  2.  使用jobs可以查询当前shell下启动的所有后台任务。
  3.  如果进程是前台任务，按下`Ctrl+z`可让其变成后台任务，但任务同时会变成暂停状态。
  4.  使用`bg`可以使暂停状态的任务变成运行状态。
  5.  使用`fg`可以使后台任务变成前台任务，如果任务是暂停状态，会使其变为运行状态。 ([View Highlight](https://read.readwise.io/read/01he4tzr1xnydrpwy5f5wbd98y)) #Highlight #[[2023-11-01]]
- 在shell里面启动的进程，都是shell这个进程的子进程，ssh失去连接时，shell进程会给它的子进程发SIGHUP信号，这会杀死在shell中启动的子进程，包括后台进程也不例外。
  
  使用nohup命令可以解决这个问题，通过nohup命令启动的进程，会忽略SIGHUP信号，从而让进程能活下来 ([View Highlight](https://read.readwise.io/read/01he4v0kvwr4agzm3gb0en26pe)) #Highlight #[[2023-11-01]]
- 如果之前没有使用nohup启动进程，可以使用`disown`命令使得进程忽略SIGHUP信号，如下：
  
  1.  使用`Ctrl+z`使之到后台运行，同时进程会变成暂停状态。
  2.  使用`jobs -l`查询刚才转到后台任务的jobid，比如是1，使用`bg %1`使之变成运行状态。
  3.  使用`disown -h %1`使这个后台任务忽略`SIGHUP`信号。 ([View Highlight](https://read.readwise.io/read/01he4v0x01xnh6kf32fd53gzjr)) #Highlight #[[2023-11-01]]