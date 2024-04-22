title:: Readwise/Highlights/Postgresql数据库--角色
author:: [[juejin.cn]]
full-title:: Postgresql数据库--角色
category:: #articles
url:: https://juejin.cn/post/7202174760000045115
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)
PG中使用角色（role）机制来解决用户身份认证。拥有登陆数据库权限的角色称之为可登录角色（login role)。一个角色可以继承其他角色的权限从而成为其成员角色；拥有成员角色的角色称为组角色。（一个组角色可以是另一个组
- 关键词INHERIT的用法。他表示组角色zujuese的任何一个成员角色都将自动继承其除“超级用户权限”外的所有权限。如果不写
  
  INHERIT，默认也会有INHERIT的效果。
  
  如果希望禁止组角色将其权限授予成员角色，加上NOINHERIT关键字。 ([View Highlight](https://read.readwise.io/read/01hpgzqgypgjhac20y667ar31d)) #Highlight #[[2024-02-13]]