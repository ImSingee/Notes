title:: Readwise/Highlights/Git - 底层命令与上层命令 (7)
author:: [[git-scm.com]]
full-title:: Git - 底层命令与上层命令
category:: #articles
url:: https://git-scm.com/book/zh/v2/Git-%E5%86%85%E9%83%A8%E5%8E%9F%E7%90%86-%E5%BA%95%E5%B1%82%E5%91%BD%E4%BB%A4%E4%B8%8E%E4%B8%8A%E5%B1%82%E5%91%BD%E4%BB%A4

- 四个条目很重要：HEAD 文件、（尚待创建的）index 文件，和 objects 目录、refs 目录。
  它们都是 Git 的核心组成部分。
  objects 目录存储所有数据内容；refs 目录存储指向数据（分支、远程仓库和标签等）的提交对象的指针；
  HEAD 文件指向目前被检出的分支；index 文件保存暂存区信息。 #Highlight #[[2021-05-28]]