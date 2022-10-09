title:: Readwise/Highlights/MySQL-不能忽略的 COLLATION (29)
author:: [[juejin.cn]]
full-title:: MySQL-不能忽略的 COLLATION
category:: #articles
url:: https://juejin.cn/post/6959466033082007559

- CHAR(N) 用来保存固定长度的字符，N 的范围是 0 ~ 255，请牢记，N 表示的是字符，而不是字节。VARCHAR(N) 用来保存变长字符，N 的范围为 0 ~ 65536， N 同样表示字符。
  
  在超出 65536 个字节的情况下，可以考虑使用更大的字符类型 TEXT 或 BLOB，两者最大存储长度为 4G，其区别是 BLOB 没有字符集属性，纯属二进制存储。 ([View Highlight](https://instapaper.com/read/1410114232/16308502)) #Highlight #[[2021-05-08]]
- 从底层存储内核看，在多字节字符集下，CHAR 和 VARCHAR 底层的实现完全相同，都是变长存储！ ([View Highlight](https://instapaper.com/read/1410114232/16308511)) #Highlight #[[2021-05-08]]
- 鉴于目前默认字符集推荐设置为 UTF8MB4，所以在表结构设计时，可以把 CHAR 全部用 VARCHAR 替换，底层存储的本质实现一模一样。 ([View Highlight](https://instapaper.com/read/1410114232/16308515)) #Highlight #[[2021-05-08]]
- 排序规则以 _ci 结尾，表示不区分大小写（Case Insentive），_cs 表示大小写敏感，_bin 表示通过存储字符的二进制进行比较。需要注意的是，比较 MySQL 字符串，默认采用不区分大小的排序规则 ([View Highlight](https://instapaper.com/read/1410114232/16308523)) #Highlight #[[2021-05-08]]
- 牢记，绝大部分业务的表结构设计无须设置排序规则为大小写敏感！除非你能明白你的业务真正需要。 ([View Highlight](https://instapaper.com/read/1410114232/16308526)) #Highlight #[[2021-05-08]]