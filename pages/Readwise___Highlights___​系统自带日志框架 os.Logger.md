title:: Readwise/Highlights/​系统自带日志框架 os.Logger
author:: [[Vong]]
full-title:: ​系统自带日志框架 os.Logger
category:: #articles
url:: https://mp.weixin.qq.com/s/On3vVRu_gQwT9eT7Do62BQ
tags:: #[[Swift]]

- 一系列日志接口函数都接收 `OSLogMessage` 类型的参数，但是我们不要直接构造它的实例传入到方法中，而是直接使用字符串插值的方式，因为系统会自动帮我们把它转换成 `OSLogMessage` ([View Highlight](https://read.readwise.io/read/01h79se9jw9579y7ps5f08cf1a)) #Highlight #[[2023-08-08]]
- 由于日志任何人都可能可以拿到，为了避免隐私泄漏，我们不能在日志中记录用户敏感信息。尽量使用静态字符串和数值，如果一定要使用动态数据，我们需要将用户隐私数据隐藏起来。对于整数、浮点数、布尔值系统统一日志系统默认会原封不动记录在日志中，而对于一些动态字符串（例如上述示例代码中的 `user.name`）及复杂对象的信息则在日志中会默认被隐藏（显示为 <private>)。 ([View Highlight](https://read.readwise.io/read/01h79sgkttxd6tzjx7mygcf6an)) #Highlight #[[2023-08-08]]
- •   明确知道不是隐私数据，则可以指定其隐私策略为 `public`
    
  •   我们明确知道某个数据是隐私数据，那就显式指定它的隐私策略为 `private`
    
  •   依赖隐私数据做一些问题定位的时候，我们可以指定 `mask` 来保证不记录用户隐私的情况下，也能拿到这条数据的一个唯一标识 ([View Highlight](https://read.readwise.io/read/01h79shca7gv8rd45txxj1n6dm)) #Highlight #[[2023-08-08]]