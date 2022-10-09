title:: Readwise/Highlights/一次事故，我对 MySQL 时间戳存 Char(10) 还是 Int(10) 有了全新的认识 (29)
author:: [[华为云开发者社区]]
full-title:: 一次事故，我对 MySQL 时间戳存 Char(10) 还是 Int(10) 有了全新的认识
category:: #articles
url:: https://www.inoreader.com/article/3a9c6e7b036530ff-mysql-char10-int10

- char 类型字段想走索引的话，必须用引号括起来。如果是时间戳等类型的纯数字，建议还是存为 int 型吧 #Highlight #[[2021-05-29]]