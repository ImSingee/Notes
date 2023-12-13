title:: Readwise/Highlights/技术分享 | MySQL:一文弄懂时区&time_zone
author:: [[作者：胡呈清]]
full-title:: 技术分享 | MySQL:一文弄懂时区&time_zone
category:: #articles
url:: https://opensource.actionsky.com/20211214-time_zone/
- **NOW() 和 CURTIME() 系统函数的返回值受当前 session 的时区影响**
  
  不仅是select now()，包括insert .. values(now())、以及字段的 DEFAULT CURRENT_TIMESTAMP 属性也受此影响 ([View Highlight](https://read.readwise.io/read/01hc6ntmgq7j81zn8v3rdbd52r)) #Highlight #[[2023-10-08]]
- timestamp 数据类型会存储当时session的时区信息，读取时会根据当前 session 的时区进行转换；而 datetime 数据类型插入的是什么值，再读取就是什么值，不受时区影响。也可以理解为已经存储的数据是不会变的，只是 timestamp 类型数据在读取时会根据时区转换 ([View Highlight](https://read.readwise.io/read/01hc6nvc2cw7n6qkwdb9rxkd74)) #Highlight #[[2023-10-08]]
- 前面我们提到 CST 在 RedHat 上是 +08:00 时区，但其实它一共能代表4个时区：
  
  •   Central Standard Time (USA) UT-6:00 美国标准时间
    
  •   Central Standard Time (Australia) UT+9:30 澳大利亚标准时间
    
  •   China Standard Time UT+8:00 中国标准时间
    
  •   Cuba Standard Time UT-4:00 古巴标准时间 ([View Highlight](https://read.readwise.io/read/01hc6nx20grn64258fjr1kk1hw)) #Highlight #[[2023-10-08]]
- 使用 mysqldump 导出 csv 格式的数据，默认这种导出方式会使用 UTC 时区读取 timestamp 类型数据，这意味导入时必须手工设置 session.time_zone=’+00:00’才能保证时间准确 ([View Highlight](https://read.readwise.io/read/01hc6nyshpfwznma5fd9ewbm1z)) #Highlight #[[2023-10-08]]
- mysqldump 导出 sql 文件时默认也是使用 UTC 时区，并且会在导出的 sql 文件头部带有 session time_zone 信息，这样可以保证导 SQL 文件导入和导出时使用相同的时区，从而保证数据的时区正确（而导出的 csv 文件显然不可以携带此信息）。需要注意的是 `--compact` 参数会去掉 sql 文件的所有头信息，所以一定要记得：`--compact` 参数得和 `--skip-tz-utc` 一起使用 ([View Highlight](https://read.readwise.io/read/01hc6nzb79abkkqgcz7pgyqqte)) #Highlight #[[2023-10-08]]