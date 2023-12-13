title:: Readwise/Highlights/Golang 简洁架构实战
author:: [[luozhiyun]]
full-title:: Golang 简洁架构实战
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MjM5ODYwMjI2MA==&mid=2649768313&idx=1&sn=110c893e73378e5ba88b079dd89fd210&chksm=beccd20289bb5b149f1a34f3f51f44371c6e293b397723556ba4703ef73602d3016cfc446788#rd
tags:: #[[golang]] #[[inoreader]] #[[star]] #[[微信公众号]]

- 对于简洁架构来说分为了四层：
  
  •   Entities：实体
    
  •   Usecase：表达应用业务规则，对应的是应用层，它封装和实现系统的所有用例；
    
  •   Interface Adapters：这一层的软件基本都是一些适配器，主要用于将用例和实体中的数据转换为外部系统如数据库或 Web 使用的数据；
    
  •   Framework & Driver：最外面一圈通常是由一些框架和工具组成，如数据库 Database, Web 框架等； ([View Highlight](https://read.readwise.io/read/01hdjerc6zfc83xfhjz0wrtgkt)) #Highlight #[[2023-10-25]]
- repo
  
  这里存放的是数据库操作类，数据库 CRUD 都在这里。需要注意的是，这里不包含任何的业务逻辑代码，很多同学喜欢将业务逻辑也放到这里。
  
  如果使用 ORM，那么这里放入的 ORM 操作相关的代码；如果使用微服务，那么这里放的是其他服务请求的代码； ([View Highlight](https://read.readwise.io/read/01hdjert60739t76bwmfqgs94h)) #Highlight #[[2023-10-25]]
- 除了 models 层，层与层之间应该通过接口交互，而不是实现 ([View Highlight](https://read.readwise.io/read/01hdjes3mb6txjw1bkdrhr9ndm)) #Highlight #[[2023-10-25]]