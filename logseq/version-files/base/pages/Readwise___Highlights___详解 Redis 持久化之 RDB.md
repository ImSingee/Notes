title:: Readwise/Highlights/详解 Redis 持久化之 RDB
author:: [[juejin.cn]]
full-title:: 详解 Redis 持久化之 RDB
category:: #articles
url:: https://juejin.cn/post/7173930415558754341
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)
开启掘金成长之旅！这是我参与「掘金日新计划 · 12 月更文挑战」的第3天，点击查看活动详情
- 一个 `RDB` 文件是主要由三部分组成的。
  
  •   **文件头：** 这部分内容保存了`Redis` 的魔数、`RDB` 版本、`Redis` 版本、`RDB` ⽂件创建时间、键值对占⽤的内存大小等信息。
  •   **文件数据：** 这部分保存了 `Redis` 数据库实际的所有键值对。
  •   **文件尾：** 这部分保存了 `RDB` ⽂件的结束标识符，以及整个⽂件的校验值。用于校验文件是否被篡改。 ([View Highlight](https://read.readwise.io/read/01hn9x8dagz16kbw5ar4zkh963)) #Highlight #[[2024-01-29]]