title:: Readwise/Highlights/Ulid 是什么？比 Uuid 更好用的全局唯一标识符？
author:: [[黄小斜编辑]]
full-title:: Ulid 是什么？比 Uuid 更好用的全局唯一标识符？
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MzU3MDc3OTI1NA==&mid=2247495414&idx=1&sn=1a52afa10b359dcf7d5be04d50ed2ada&chksm=fce89defcb9f14f967153fad80710fbca98550cc7d896cd0ddb4b6337891a619191bd2609945#rd
tags:: #[[inoreader]] #[[公众号「java技术江湖」]] #[[微信公众号]]
- UUID 目前有 5 个版本：
  
  版本1：在许多环境中是不切实际的，因为它需要访问唯一的，稳定的MAC地址，容易被攻击；
  
  版本2：将版本 1 的时间戳前四位换为 POSIX 的 UID 或 GID，问题同上；
  
  版本3：基于 MD5 哈希算法生成，生成随机分布的ID需要唯一的种子，这可能导致许多数据结构碎片化；
  
  版本4：基于随机数或伪随机数生成，除了随机性外没有提供其他信息；
  
  版本5：通过 SHA-1 哈希算法生成，生成随机分布的ID需要唯一的种子，这可能导致许多数据结构碎片化； ([View Highlight](https://read.readwise.io/read/01gjp5y34dncn3py8a24pp12yx)) #Highlight #[[2022-11-25]]
- 和 UUID 要么基于随机数，要么基于时间戳不同，ULID 是既基于时间戳又基于随机数，时间戳精确到毫秒，毫秒内有1.21e + 24个随机数，不存在冲突的风险，而且转换成字符串比 UUID 更加友好。 ([View Highlight](https://read.readwise.io/read/01gjp5ytpx64j9p7yhkykdz6zp)) #Highlight #[[2022-11-25]]