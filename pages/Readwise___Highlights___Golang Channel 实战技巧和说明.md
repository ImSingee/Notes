title:: Readwise/Highlights/Golang Channel 实战技巧和说明
author:: [[juejin.cn]]
full-title:: Golang Channel 实战技巧和说明
category:: #articles
url:: https://juejin.cn/post/7169542486221094943
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- channel 不需要通过 close 来释放资源，这个是它与 socket、file 等不一样的地方，对于 channel 而言，唯一需要 close 的就是我们想通过 close 触发 channel 读事件 ([View Highlight](https://read.readwise.io/read/01gjp9mtm5wzasrkze26gfjkwv)) #Highlight #[[2022-11-25]]
- 每次 select 语句的执行，是会扫描完所有的 case 后才确定如何执行，而不是说遇到合适的 case 就直接执行了 ([View Highlight](https://read.readwise.io/read/01gjp9rkg0fff35r1xbtpvwjpm)) #Highlight #[[2022-11-25]]