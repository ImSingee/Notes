title:: Readwise/Highlights/「Go框架」go中的平滑关闭究竟是怎么关闭的
author:: [[juejin.cn]]
full-title:: 「Go框架」go中的平滑关闭究竟是怎么关闭的
category:: #articles
url:: https://juejin.cn/post/7207812167553564709
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- 直接关闭的特点就是：**先关闭 server 对象；再关闭监听对象 listener 不再接收新连接；最后关闭所欲已建立的连接，无论该连接是否正在处理请求都立即关闭**。 大家注意，这里关闭是有一个从大到小范围的顺序：先关闭范围大的（server 和 lisener），最后关闭具体的处理连接（conn）。 ([View Highlight](https://read.readwise.io/read/01gvcth3b6v151fpe0n2nyq5vm)) #Highlight #[[2023-03-13]]
- 直接关闭的缺点就是正在处理的请求也会被直接关闭。而且 server 依赖的外部资源（比如数据库连接等）也没有释放。 ([View Highlight](https://read.readwise.io/read/01gvcthan7z2s2cdy86ed3vk7w)) #Highlight #[[2023-03-13]]
- 首先也是给 server 对象设置关闭的标志位；然后关闭所有的 listener 资源，以停止接收新的连接；再接着执行外部的注册函数，以关闭 server 的外部依赖资源（如数据库等）。最后，循环关闭**空闲的 conn 资源**。 ([View Highlight](https://read.readwise.io/read/01gvctk9pzgps2hwwayqk0hz9v)) #Highlight #[[2023-03-13]]