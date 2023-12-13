title:: Readwise/Highlights/架构师进阶，微服务设计与治理的16条常用原则 : 掘金
author:: [[juejin.cn]]
full-title:: 架构师进阶，微服务设计与治理的16条常用原则 : 掘金
category:: #articles
url:: https://juejin.cn/post/7120474443746377765
tags:: #[[favorite]] #[[inoreader]] #[[read]] #[[star]]

- 原则1: 按照业务能力（business capabilities）来规划或拆微服务 ([View Highlight](https://read.readwise.io/read/01hfkydzwh0wnmc93dcb5mbc06)) #Highlight #[[2023-11-19]]
- 原则2: 按照领域驱动设计（Domain-Driven Design，DDD）来规划或拆解微服务 ([View Highlight](https://read.readwise.io/read/01hfkye2t6vmxwzbv396asgyw1)) #Highlight #[[2023-11-19]]
- 过度追求「单一职责」，或者拆分微服务过细，往往会带来不良后果。微服务的设计并不是越细越好，过度拆分会导致调用性能变差、数据一致性难以保障、系统可用性降低等问题。
  
  因此，「高内聚」原则要求：
  
  •   完全独立。微服务粒度的下界是它至少应满足独立，能够独立发布、独立部署、独立运行与独立测试
  •   足够内聚。强相关的功能与数据在同一个服务中处理
  •   足够完备。一个服务包含至少一项业务实体与对应的完整操作 ([View Highlight](https://read.readwise.io/read/01hfkyesq7wer6knt3aqwnhh02)) #Highlight #[[2023-11-19]]
- 微服务的设计应该遵循「低耦合」原则
  
  •   避免数据过度暴露
  •   避免数据库共享
  •   最小化同步调用，如有必要，引入事件驱动进行异步调用 ([View Highlight](https://read.readwise.io/read/01hfkyex5tswkf1s23k2wp9wks)) #Highlight #[[2023-11-19]]