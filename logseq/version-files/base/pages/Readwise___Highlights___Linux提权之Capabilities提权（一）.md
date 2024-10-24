title:: Readwise/Highlights/Linux提权之Capabilities提权（一）
author:: [[wanxia]]
full-title:: Linux提权之Capabilities提权（一）
category:: #articles
url:: https://www.freebuf.com/articles/system/358115.html
tags:: #[[freebuf.com | 关注黑客与极客]] #[[inoreader]] #[[read]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)
什么是Capabilities Linux的Root用户拥有最高的权限，可以对几乎系统中的任何文件进行操作。然而普通用户如何操作一些高权限的文件？ 在Linux中存在两种方法： 第一种是在执行的命令前加上sudo，这样就会以Root的身份进行操作。
- Capabilites 作为线程（Linux 并不真正区分进程和线程）的属性存在，每个功能组都可以独立启用和禁用。其本质上就是将内核调用分门别类，具有相似功能的内核调用被分到同一组中。  
  这样一来，权限检查的过程就变成了：在执行特权操作时，如果线程的有效身份不是 root，就去检查其是否具有该特权操作所对应的 capabilities，并以此为依据，决定是否可以执行特权操作。 ([View Highlight](https://read.readwise.io/read/01ht1kd9cs4vmrhfb7h3bshypa)) #Highlight #[[2024-03-28]]