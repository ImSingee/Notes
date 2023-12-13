title:: Readwise/Highlights/为什么我推荐你使用 Systemd Timer 替代 Cronjob?
author:: [[juejin.cn]]
full-title:: 为什么我推荐你使用 Systemd Timer 替代 Cronjob?
category:: #articles
url:: https://juejin.cn/post/7218347355506491450
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- systemd timer 被有意设计成在指定时间内随机触发，以防止同时触发。它们在一个时间窗口内半随机地触发。根据`systemd.timer`手册，这个触发时间相对于所有其他定义的 timer 单位来说，保持在一个稳定的位置。 ([View Highlight](https://read.readwise.io/read/01hf390w6f8m8qnx8zkva88rhg)) #Highlight #[[2023-11-13]]