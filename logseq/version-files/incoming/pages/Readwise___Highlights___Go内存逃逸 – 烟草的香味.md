title:: Readwise/Highlights/Go内存逃逸 – 烟草的香味
author:: [[hujingnb.com]]
full-title:: Go内存逃逸 – 烟草的香味
category:: #articles
url:: https://hujingnb.com/archives/884
tags:: #[[inoreader]] #[[博客]] #[[烟草的香味]]
- 有没有办法在一个`Go`程序中检查哪里会发生内存逃逸呢? (逃逸是发生在编译期的呦). 就是`build`命令:
  
  `go build -gcflags '-m -l' main.go`
  
  •   `-m`: 打印逃逸分析内容. 最多的添加4个`-m`, 获取更详细的信息
    •   `all=-m`: 若编译时不止一个文件, 对所有文件应用`-m`
  •   `-l`: 禁用函数内联. 可以更准确的定位逃逸位置.
    •   `all=-l`: 同理 ([View Highlight](https://read.readwise.io/read/01heh93g4h8qqdn7zy1wksttym)) #Highlight #[[2023-11-06]]