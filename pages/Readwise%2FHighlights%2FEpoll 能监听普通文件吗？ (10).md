title:: Readwise/Highlights/Epoll 能监听普通文件吗？ (10)
author:: [[mp.weixin.qq.com]]
full-title:: Epoll 能监听普通文件吗？
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MzA3NzYzODg1OA==&mid=2648464855&idx=2&sn=5de11d70ec101c072b7048b90577975e&chksm=87660072b01189646f9c7aeaaad34d2d4dea8389531279c41f21e8e59a753c48264c5cfcc515

- ext4 文件的文件操作函数集被设置为 ext4_file_operations（也说就是：file->f_op = ext4_file_operations），从上面代码可以看出，ext4_file_operations 并没有提供 poll 接口。所以，当调用 epoll_ctl 把文件添加到 epoll 中进行监听时，就会返回 Operation not permitted 的错误。 #Highlight #[[2021-05-27]]