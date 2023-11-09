title:: Readwise/Highlights/Linux进程间通信 : 掘金
author:: [[首页]]
full-title:: Linux进程间通信 : 掘金
category:: #articles
url:: https://juejin.cn/post/7031740212648607775
tags:: #[[coding]] #[[inoreader]] #[[newspaper]]

- 进程间通信的目的
  
  •   数据传输： 一个进程需要将它的数据发送给另一个进程。
  •   资源共享： 多个进程之间共享同样的资源。
  •   通知事件： 一个进程需要向另一个或一组进程发送消息，通知它（它们）发生了某种事件，比如进程终止时需要通知其父进程。
  •   进程控制： 有些进程希望完全控制另一个进程的执行（如Debug进程），此时控制进程希望能够拦截另一个进程的所有陷入和异常，并能够及时知道它的状态改变。 ([View Highlight](https://read.readwise.io/read/01hetkckrvjyj4jn59csrrwptj)) #Highlight #[[2023-11-10]]
- 进程间通信的分类
  
  管道
  
  •   匿名管道
  •   命名管道
  
  System V IPC
  
  •   System V 消息队列
  •   System V 共享内存
  •   System V 信号量
  
  POSIX IPC
  
  •   消息队列
  •   共享内存
  •   信号量
  •   互斥量
  •   条件变量
  •   读写锁 ([View Highlight](https://read.readwise.io/read/01hetkczq2fwsrdem877vxgfka)) #Highlight #[[2023-11-10]]