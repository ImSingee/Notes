title:: Readwise/Highlights/Redis分布式锁常见坑点分析
author:: [[juejin.cn]]
full-title:: Redis分布式锁常见坑点分析
category:: #articles
url:: https://juejin.cn/post/7206156458797662245
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- 我们可以给每个线程设置请求ID，加锁成功将请求ID设置为加锁 key 的对应 value，线程释放锁时需要判断当前线程的请求ID与 加锁 key 的对应 value 是否相同，相同则可以释放锁，不相同则不允许释放。 ([View Highlight](https://read.readwise.io/read/01he4jd34cck0ngcxvgxvz6ezt)) #Highlight #[[2023-11-01]]