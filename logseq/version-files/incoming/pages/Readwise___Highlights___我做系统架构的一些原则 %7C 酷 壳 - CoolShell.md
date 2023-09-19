title:: Readwise/Highlights/我做系统架构的一些原则 | 酷 壳 - CoolShell
author:: [[陈皓]]
full-title:: 我做系统架构的一些原则 | 酷 壳 - CoolShell
category:: #articles
url:: https://coolshell.cn/articles/21672.html
- 业内给你的标准是 200表示成功，3xx 跳转，4xx 表示调用端出错，5xx 表示服务端出错，我实在是不明白为什么无论成功和失败大家都喜欢返回 200，然后在 body 里指出是否error（前两年我在微信公众号里看到一个有一定名气的互联网老兵推荐使用无论正确还是出错都返回 200 的做法，我在后台再三确认后，我发现这样的架构师真是害人不浅）。这样做最大的问题是——监控系统将在一种低效的状态下工作。监控系统需要把所有的网络请求包打开后才知道是否是错误，而且完全不知道是调用端出错还是服务端出错，于是一些像重试或熔断这样的控制系统完全不知道怎么搞（如果是 4xx错，那么重试或熔断是没有意义的，只有 5xx 才有意义） ([View Highlight](https://read.readwise.io/read/01hanj336h7hanz4z53v5fe2c0)) #Highlight #[[2023-09-19]]
- **Restful API 的规范**。我觉得是非常重要的，这里给两个我觉得写得最好的参考：[Paypal](https://github.com/paypal/api-standards/blob/master/api-style-guide.md) 和 [Microsoft](https://github.com/microsoft/api-guidelines) 。Restful API 有一个标准和规范最大的好处就是监视可以很容易地做各种统计分析，控制系统可以很容易的做流量编排和调度。 ([View Highlight](https://read.readwise.io/read/01hanj3vcfsvrpf75rspjh4ec1)) #Highlight #[[2023-09-19]]
- **另一个是服务调用链追踪**。对于服务调用链追踪来说，基本上都是参考于 [Google Dapper](https://research.google/pubs/pub36356/) 这篇论文，目前有很多的实现，最严格的实现是 [Zipkin](https://zipkin.io/)，这也是 Spring Cloud Sleuth 的底层实现。Zipkin 贴近 Google Dapper 论文的好处在于——无状态，快速地把 Span 发出来，不消耗服务应用侧的内存和 CPU。这意味着，监控系统宁可自己死了也不能干扰实际应用。 ([View Highlight](https://read.readwise.io/read/01hanj4dpxc1tbw9sy90szq027)) #Highlight #[[2023-09-19]]
- 通过一个业务流程的专用服务，或是像 Workflow，Event Driven Architecture ， Broker，Gateway，Service Discovery 等这类的的中间件来降低服务间的依赖关系 ([View Highlight](https://read.readwise.io/read/01hanj5pjjbsf4sgsq5aadbf8b)) #Highlight #[[2023-09-19]]
- **监控数据收口**。包括：日志、指标、调用链……主要通过一些标准主流的探针，再加上后台的数据清洗和数据存储来完成，最好是使用无侵入式的技术。监控的数据必须统一在一个地方进行关联，这样才会产生信息。 ([View Highlight](https://read.readwise.io/read/01hanj694bz27qg2578dt3xnvg)) #Highlight #[[2023-09-19]]