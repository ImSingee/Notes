title:: Readwise/Highlights/我现在项目都是用pg 对于mysql比pg流行的...
author:: [[@changwei1006 on Twitter]]
full-title:: 我现在项目都是用pg 对于mysql比pg流行的...
category:: #tweets
url:: https://twitter.com/changwei1006/status/1680887161359568896
- 我现在项目都是用pg
  对于mysql比pg流行的原因 我个人粗浅理解:很多互联网产品都是只用单表查询然后代码业务层再做连表 字段的域完整性检查也都是做在业务层 所以pg的外键约束 unique和exclude约束 rule表达式约束等特性根本用不上
  其次是json mongodb已经很流行并且原生分片用起来很方便 所以pg在nosql https://t.co/v8ljykmyzO ([View Tweet](https://twitter.com/changwei1006/status/1680887161359568896)) #Highlight #[[2023-07-17]]
- 的优势也不大
  最后就是物化视图 enum 在线改ddl 组合类型 窗口函数 CTE 表达式索引和倒序索引 这些东西要么就是mysql5.7之后性能已经做的很优秀 要么就是可以通过业务代码来维护 要么就是有一些奇技淫巧来实现(例如表达式索引可以用mysql8新出的虚拟列来模拟
  综上所述 pg这种学院派产品就是打不过mysql ([View Tweet](https://twitter.com/changwei1006/status/1680887163553193985)) #Highlight #[[2023-07-17]]
- 还有一个原因可能是是中国人力成本太便宜了 所以特定数据结构的存储解决方案可以通过投入n个专有领域数据库和对应的DBA来解决问题
  所以pg所号称的一个数据库+n个社区插件代替neo4j+redis+mongodb+timescale+kafka在中国没有市场
  但是国外人力成本太贵 所以一个pg顶n个专用数据库会更有市场 ([View Tweet](https://twitter.com/changwei1006/status/1680888101819002880)) #Highlight #[[2023-07-17]]
- 包括国内为什么对数据一致性不太重视 也是因为客服人力成本低 相对来说请客服的成本以及性能比维护外键约束的成本更低
  像我之前注册腾讯云因为中途取消注册流程 导致我的账号无法登陆 (只要登录就一直提示系统错误) 过了大半年也还是这样
  最后解决方案就是打客服电话 几天后客服帮我解决后即可顺利登录 ([View Tweet](https://twitter.com/changwei1006/status/1680892285851176961)) #Highlight #[[2023-07-17]]