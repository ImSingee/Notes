title:: Readwise/Highlights/Go实现各类限流
author:: [[juejin.cn]]
full-title:: Go实现各类限流
category:: #articles
url:: https://juejin.cn/post/6959436201443426311
tags:: #[[favorite]] #[[ifttt]] #[[instapaper]]

- `限流`的目的是通过对并发访问请求进行限速，或者对一个时间窗口内的请求进行限速来保护系统，一旦达到限制速率则可以拒绝服务、排队或等待、降级等处理。通过对并发（或者一定时间窗口内）请求进行限速来保护系统，一旦达到限制速率则拒绝服务（定向到错误页或告知资源没有了）、排队等待（比如秒杀、评论、下单）、降级（返回兜底数据或默认数据）。 ([View Highlight](https://read.readwise.io/read/01hdeghggpdc17zsxdq3akedy2)) #Highlight #[[2023-10-23]]
- **一般来说，限流的常用处理手段有：**
  
  •   计数器
  •   滑动窗口
  •   漏桶
  •   令牌桶 ([View Highlight](https://read.readwise.io/read/01hdeght581ax2dba1tfhpngks)) #Highlight #[[2023-10-23]]