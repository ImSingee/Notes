title:: Readwise/Highlights/Go微服务全链路跟踪详解 (45)
author:: [[mp.weixin.qq.com]]
full-title:: Go微服务全链路跟踪详解
category:: #articles
url:: http://mp.weixin.qq.com/s?__biz=MzAwNjMxMTgwNw==&mid=2247488235&idx=1&sn=0a77652a2113a607a36d1310813f228a&chksm=9b0e08fbac7981ed770010a38059de76e88452931babafaf38181c4e44989e97f8ba53bb984d#rd

- 现在有许多开源的分布式跟踪库可供选择，其中最受欢迎的库可能是Zipkin和Jaeger。 ([View Highlight](https://instapaper.com/read/1415372690/16509877)) #Highlight #[[2021-05-27]]
- OpenTracing
  可以帮你解决这个问题。它建立了一套跟踪库的通用接口，这样你的程序只需要调用这些接口而不被具体的跟踪库绑定，将来可以切换到不同的跟踪库而无需更改代码。Zipkin和Jaeger都支持OpenTracing。 ([View Highlight](https://instapaper.com/read/1415372690/16509881)) #Highlight #[[2021-05-27]]
- 一个好的全链路跟踪系统不需要用户编写很多跟踪代码。最理想的情况是你不需要任何代码，让框架或库负责处理它，当然这比较困难。全链路跟踪分成三个跟踪级别：
  
  跨进程跟踪 (cross-process)(调用另一个微服务)
  数据库跟踪
  进程内部的跟踪 (in-process)(在一个函数内部的跟踪) ([View Highlight](https://instapaper.com/read/1415372690/16509897)) #Highlight #[[2021-05-27]]
- 跟踪最好由基础架构（infrastructure）实现，而不是将业务逻辑代码与跟踪代码混在一起 ([View Highlight](https://instapaper.com/read/1415372690/16509905)) #Highlight #[[2021-05-27]]