title:: Readwise/Highlights/Tweets From Viking
author:: [[@vikingmute on Twitter]]
full-title:: Tweets From Viking
category:: #tweets
url:: https://twitter.com/vikingmute

- 前端很卷的一个轮子应该是和时间处理的工具库：
  
  这几天刚接触到 date-fns，有点孤陋寡闻了。
  
  https://t.co/wQP56vMvS3
  
  它和 day.js 是两个思路， 最不一样的主打时间处理的一系列可以单独导入的功能各异的函数，需要哪个就导入哪个，有点像时间处理的 lodash。两个库我都很喜欢。date-fns 的 Stars 也达到了惊人的 32K～
  
  推荐给大家，如果有和时间处理相关的功能可以使用一下。
  
  从 moment.js 到 day.js 再到 date-fns，应该是前端发展的缩影，现在越来越多的库追求化繁为简了。 ([View Tweet](https://twitter.com/vikingmute/status/1691714622301307239)) #Highlight #[[2023-08-16]]
- 昨天看到一个简单问题的交流很有意思，讨论非常多，也是工作中非常实际的问题：
  
  将本地开发的 localhost:3000 映射到一个具体网址有什么办法(还要带 https)：https://dev.easycv.local 
  
  我之前都用的是 nginx，后来看到讨论中用的 Caddy：
  https://t.co/hzgmCV8fSd
  太舒服了，自带 https，配置非常简单（比 nginx 简单多了），强烈推荐给大家。
  Stars ：48.8K，这么好的工具我咋才发现
  
  其他的高赞一些方案：
  
  * Docker + Docker Compose + Traefik + Mkcert,这里面的这个 mkcert，本地生成证书的， 可以收藏了
  * Localcan https://t.co/EV1DqtEfas，居然还有一个专门的 App，太神奇了
  * localtest, https://t.co/0VKNkQricU, 一个简单的小教程
  
  不知道大家一般还用啥方法？
  
  原帖：https://t.co/NQl2d5Cs7w
  
  我就感叹好多国外的应用都是特别小的，就是解决一个最简单的问题，这也算是给各位创造者的经验，你不需要做那么大的一个应用。 ([View Tweet](https://twitter.com/vikingmute/status/1694539022125949393)) #Highlight #[[2023-08-25]]
- 今天给大家推荐一个非常有趣的动画库：AutoAnimate，
  https://t.co/1UQ02fZT01
  
  之前库的思路都是要在哪里加动画，都要自己决定或者配置，AutoAnimate 可以帮你自动在整个应用添加合适的动画。
  
  它的原理其实监控给定 DOM 节点所有 children 的特殊操作：
  * 节点插入
  * 节点删除
  * 节点移动
  
  然后在这些过程中插入相应的动画，大家看在官网看 Demo 感受一下。
  
  是一个非常有趣的实现，可以无脑的提升你的用户体验，而且它支持现在所有主流的框架：
  React,Vue,Angluar,Preact,Svelte 等等。
  
  Stars：8.8K ([View Tweet](https://twitter.com/vikingmute/status/1695248357885870363)) #Highlight #[[2023-08-26]]
- 今天继续推荐超棒的计算机科普文章，是 HackerNews 当日最佳文章：
  
  **The Absolute Minimum Every Software Developer Must Know About Unicode in 2023**
  
  2023年程序员的 Unicode 简明指南
  https://t.co/iBqofzC9dz
  
  从 Unicode 的历史娓娓道来，到 Unicode 的大小，不同版本的差异，一些和 emoji 相关的趣闻，配上非常生动的图表，是一篇超棒的科普文章，值得每位程序员读一下。
  
  PS：这篇文章的背景有各种鼠标箭头飘来飘去，彰显了作者的恶趣味 😄 ([View Tweet](https://twitter.com/vikingmute/status/1709018871817273751)) #Highlight #[[2023-10-03]]
- 今天HackerNews 上讨论最火的一个帖子：
  **《Ask HN: Best UI design courses for hackers?》 程序员学 UI design 最好的课程是啥？**
  https://t.co/YEcUUrS3D5
  
  回复很多，值得各位想学UI设计的程序员看看，在我看来，一个好看的 UI 对于你的产品是非常重要的，它能在一定程度上提升产品的竞争力，就像简单简历 https://t.co/xMu5JFIGnr 中《隆重推出》这个模版 https://t.co/PBccA30Isv，有一部分付费用户都是为了这个模版。
  
  归纳一下其中提到的课程：
  
  **Refactoring UI**
  https://t.co/L95Vl66APf 来自 Tailwind.css 的作者，收费 99 - 149刀
  
  Refactoring UI 免费配套的youtube 视频列表（很多人推荐）：
  https://t.co/5hDC6ITPbk
  
  **Apple Human Interface Guideline：**
  https://t.co/MMMe1Ws2w1 免费，网页文字
  
  **Designing Interfaces, 3rd Edition：**
  https://t.co/LkZEwisgEw 图书
  中文版：https://t.co/rXrtb4SdN6
  80元
  
  **ParticalUI**
  https://t.co/cZssDIDILE
  79刀
  
  **EveryLayout**
  https://t.co/BAIuVuolpq 专注于程序员怎样提升 css 水平 69刀
  
  还有更多，大家可以自己探索这个帖子，我在想好像国内没有类似的课程，假如有的话，应该还是很多人愿意买的。<img src='https://pbs.twimg.com/media/GBCBgKtbQAAyPov.jpg'/><img src='https://pbs.twimg.com/media/GBCBgKrbkAA7Rux.jpg'/> ([View Tweet](https://twitter.com/vikingmute/status/1734028358076535279)) #Highlight #[[2023-12-11]]