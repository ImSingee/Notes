title:: Readwise/Highlights/面试官：Redis 的各项功能解决了哪些问题？
author:: [[吴师兄学算法]]
full-title:: 面试官：Redis 的各项功能解决了哪些问题？
category:: #articles
url:: https://www.cxyxiaowu.com/20485.html
tags:: #[[coding]] #[[database]] #[[inoreader]] #[[博客]]
- Redis 服务器毫无征兆的罢工是个麻烦事。那么怎办办？答曰：备份一台，你挂了它上。
  
  那么如何得知某一台 redis 服务器挂了，如何切换，如何保证备份的机器是原始服务器的完整备份呢？这时候就需要 Sentinel 和 Replication 出场了。
  
  Sentinel 可以管理多个 Redis 服务器，它提供了监控，提醒以及自动的故障转移的功能；Replication 则是负责让一个 Redis 服务器可以配备多个备份的服务器。
  
  Redis 也是利用这两个功能来保证 Redis 的高可用的。此外，Sentinel 功能则是对 Redis 的发布和订阅功能的一个利用。 ([View Highlight](https://read.readwise.io/read/01hf8efdak9n6m8vjmppy0desg)) #Highlight #[[2023-11-15]]