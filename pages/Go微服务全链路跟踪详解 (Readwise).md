retrieved:: [[2022-02-01]], 2:45:47 PM
              author:: [[mp.weixin.qq.com]]
              category:: [[articles]]
              source:: [[instapaper]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)
- ## [[Readwise Highlights]]
	- 现在有许多开源的分布式跟踪库可供选择，其中最受欢迎的库可能是Zipkin和Jaeger。
	                link:: [https://instapaper.com/read/1415372690/16509877](https://instapaper.com/read/1415372690/16509877)
	                on:: [[2021-05-27]]
	                tags::
	- OpenTracing
	  可以帮你解决这个问题。它建立了一套跟踪库的通用接口，这样你的程序只需要调用这些接口而不被具体的跟踪库绑定，将来可以切换到不同的跟踪库而无需更改代码。Zipkin和Jaeger都支持OpenTracing。
	                link:: [https://instapaper.com/read/1415372690/16509881](https://instapaper.com/read/1415372690/16509881)
	                on:: [[2021-05-27]]
	                tags::
	- 一个好的全链路跟踪系统不需要用户编写很多跟踪代码。最理想的情况是你不需要任何代码，让框架或库负责处理它，当然这比较困难。全链路跟踪分成三个跟踪级别：
	  
	  跨进程跟踪 (cross-process)(调用另一个微服务)
	  数据库跟踪
	  进程内部的跟踪 (in-process)(在一个函数内部的跟踪)
	                link:: [https://instapaper.com/read/1415372690/16509897](https://instapaper.com/read/1415372690/16509897)
	                on:: [[2021-05-27]]
	                tags::
	- 跟踪最好由基础架构（infrastructure）实现，而不是将业务逻辑代码与跟踪代码混在一起
	                link:: [https://instapaper.com/read/1415372690/16509905](https://instapaper.com/read/1415372690/16509905)
	                on:: [[2021-05-27]]
	                tags::