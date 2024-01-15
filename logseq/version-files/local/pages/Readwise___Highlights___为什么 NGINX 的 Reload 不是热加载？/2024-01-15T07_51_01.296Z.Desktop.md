title:: Readwise/Highlights/为什么 NGINX 的 Reload 不是热加载？
author:: [[juejin.cn]]
full-title:: 为什么 NGINX 的 Reload 不是热加载？
category:: #articles
url:: https://juejin.cn/post/7169782675518488590
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)

- 执行 `nginx -s reload` 热加载命令，就等同于向 NGINX 的 master 进程发送 HUP 信号。在 master 进程收到 HUP 信号后，会依次打开新的监听端口，然后启动新的 worker 进程。
  
  此时会存在新旧两套 worker 进程，在新的 worker 进程起来后，master 会向老的 worker 进程发送 QUIT 信号进行优雅关闭。老的 worker 进程收到 QUIT 信号后，会首先关闭监听句柄，此时新的连接就只会流进到新的 worker 进程中，老的 worker 进程处理完当前连接后就会结束进程。 ([View Highlight](https://read.readwise.io/read/01hm5z8e4mxfh37wxars8csxfz)) #Highlight #[[2024-01-15]]