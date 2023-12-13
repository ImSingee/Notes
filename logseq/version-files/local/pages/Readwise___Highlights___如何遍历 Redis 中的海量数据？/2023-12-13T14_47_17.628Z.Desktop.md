title:: Readwise/Highlights/如何遍历 Redis 中的海量数据？
author:: [[作者：老顾聊技术]]
full-title:: 如何遍历 Redis 中的海量数据？
category:: #articles
url:: https://www.cxyxiaowu.com/21459.html
tags:: #[[favorite]] #[[inoreader]] #[[redis]] #[[star]] #[[博客]]  
![](https://cxyxiaowu-1257126549.cos.ap-guangzhou.myqcloud.com/2021/07/20210730161749946.jpg)

- 那我们如何去遍历大数据量呢？这个也是面试经常问的。我们可以采用redis的另一个命令scan。我们看一下scan的特点：
  
  1、复杂度虽然也是 O(n)，但是它是通过游标分步进行的，不会阻塞线程
  
  2、提供 count 参数，不是结果数量，是redis单次遍历字典槽位数量(约等于)
  
  3、同 keys 一样，它也提供模式匹配功能;
  
  4、服务器不需要为游标保存状态，游标的唯一状态就是 scan 返回给客户端的游标整数;
  
  5、返回的结果可能会有重复，需要客户端去重复，这点非常重要;
  
  6、单次返回的结果是空的并不意味着遍历结束，而要看返回的游标值是否为零 ([View Highlight](https://read.readwise.io/read/01hhfdfzf0wyxwdw5n4bfx7e3r)) #Highlight #[[2023-12-13]]