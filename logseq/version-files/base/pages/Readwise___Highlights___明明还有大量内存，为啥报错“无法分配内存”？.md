title:: Readwise/Highlights/明明还有大量内存，为啥报错“无法分配内存”？
author:: [[微信公众平台]]
full-title:: 明明还有大量内存，为啥报错“无法分配内存”？
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=Mzk0MjE3NDE0Ng==&mid=2247501841&idx=1&sn=1a9b06cb64f8b88349407edf44463c98&chksm=c2c5b2bcf5b23baa173ac9794445c0b1c7f29a4168fa59612f7c9dc0fdd818052ef7bc9c66f4#rd
tags:: #[[inoreader]] #[[star]] #[[微信公众号]]  
![](http://mmbiz.qpic.cn/mmbiz_jpg/BBjAFF4hcwr0GxUelJTdaJPJOj6HibEicKztu8ibCXa3ia692Y0hbxc92Sk6ArYzOvbiao7icGTsOcvriatmMd99fo8dQ/0?wx_fmt=jpeg)
微信号 dibingfa 功能介绍 战略上藐视技术，战术上重视技术 编者荐语： 最近系列文章在讲 fork，刚好刷到了飞哥的最新作品，与 fork 有关。从一个令人困惑的场景出发，经过抽丝剥茧地探索源码，最终找到答案，结尾还进行了扩
- 只要 alloc_pid 返回的不正确，都是将 ENOMEM 这个错误返回给上层。而不管 alloc_pid 内存究竟是因为什么原因产生的错误 ([View Highlight](https://read.readwise.io/read/01hq7a1sp35q2qqe6k88grm0rh)) #Highlight #[[2024-02-22]]
- 假如说当前创建的进程是一个容器中的进程，那么它至少得申请两个 PID 号才行。一个 PID 是在容器命名空间中的进程号，一个是根命名空间（宿主机）中的进程号。
  
  这也符合我们平时的经验。在容器中的每一个进程其实我们在宿主机中也都能看到。但是在容器中看到的进程号一般是和在宿主机上看到的是不一样的。 ([View Highlight](https://read.readwise.io/read/01hq7a36kyt0610s5p86zqzrdc)) #Highlight #[[2024-02-22]]