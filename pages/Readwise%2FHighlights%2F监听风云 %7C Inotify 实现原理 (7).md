title:: Readwise/Highlights/监听风云 | Inotify 实现原理 (7)
author:: [[juejin.cn]]
full-title:: 监听风云 | Inotify 实现原理
category:: #articles
url:: https://juejin.cn/post/6966910863101919269?cmdid=DJ0R2NSLES06QS

- 当用户调用 read 或者 write 等系统调用对文件进行读写操作时，内核会把事件保存到 inotify_device 对象的事件队列中，然后唤醒等待 inotify 事件的进程 #Highlight #[[2021-05-29]]