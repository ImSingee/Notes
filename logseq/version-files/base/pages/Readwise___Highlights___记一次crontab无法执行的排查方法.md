title:: Readwise/Highlights/记一次crontab无法执行的排查方法
author:: [[juejin.cn]]
full-title:: 记一次crontab无法执行的排查方法
category:: #articles
url:: https://juejin.cn/post/7209826725366267961
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]
- 没有任何日志，需要知道这个cronjob是否正确执行了才行。去把cron的日志打开。 修改文件`/etc/rsyslog.d/50-default.conf`文件，把其中的cron前面的注释符 # 给去掉，并执行 `sudo service rsyslog restart` 即可生效。去观察cron的日志`/var/log/cron.log`文件即可。 ([View Highlight](https://read.readwise.io/read/01hdfyc96pkpxcx0zyqdfkcgyc)) #Highlight #[[2023-10-24]]