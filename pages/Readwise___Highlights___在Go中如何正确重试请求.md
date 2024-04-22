title:: Readwise/Highlights/在Go中如何正确重试请求
author:: [[luozhiyun]]
full-title:: 在Go中如何正确重试请求
category:: #articles
url:: https://www.luozhiyun.com/archives/677

![](https://img.luozhiyun.com/20220528153628.png)
我们平时在开发中肯定避不开的一个问题是如何在不可靠的网络服务中实现可靠的网络通信，其中 http 请求重试是经...
- 对于重试算法，一般是在重试之间加一个 gap 时间，感兴趣的朋友也可以去看看[这篇文章](https://aws.amazon.com/cn/blogs/architecture/exponential-backoff-and-jitter/)。结合我们自己平时的实践加上这篇文章的算法一般可以总结出以下几条规则：
  
  •   线性间隔（Linear Backoff）：每次重试间隔时间是固定的进行重试，如每1s重试一次；
  •   线性间隔+随机时间（Linear Jitter Backoff）：有时候每次重试间隔时间一致可能会导致多个请求在同一时间请求，那么我们可以加入一个随机时间，在线性间隔时间的基础上波动一个百分比的时间；
  •   指数间隔（Exponential Backoff）：每次间隔时间是2指数型的递增，如等 3s 9s 27s后重试；
  •   指数间隔+随机时间（Exponential Jitter Backoff）：这个就和第二个类似了，在指数递增的基础上添加一个波动时间；
  
  上面有两种策略都加入了**扰动（jitter）**，目的是防止**惊群问题 （Thundering Herd Problem）**的发生。 ([View Highlight](https://read.readwise.io/read/01hn9x4bhgda6x4jh0vk6ybwj9)) #Highlight #[[2024-01-29]]
- **对冲是指在不等待响应的情况主动发送单次调用的多个请求**，然后取首个返回的回包。对冲和重试的区别点主要在：对冲在超过指定时间没有响应就会直接发起请求，而重试则必须要服务端响应后才会发起请求。所以对冲更像是比较激进的重试策略。
  
  使用对冲的时候需要注意一点是，因为下游服务可能会做负载均衡策略，所以要求请求的下游服务一般是要求幂等的，能够在多次并发请求中是安全的，并且是符合预期的。 ([View Highlight](https://read.readwise.io/read/01hn9x3vzsycw7b95ek44pph2w)) #Highlight #[[2024-01-29]]
- 对冲请求一般是用来处理“长尾”请求的 ([View Highlight](https://read.readwise.io/read/01hn9x3zyajae44eq299vcy5qj)) #Highlight #[[2024-01-29]]
- 熔断降级的概念总体上来说，实现都差不多。核心思想就是通过全局的计数器，用来统计调用次数、成功/失败次数。通过统计的计数器来判断熔断器的开关，熔断器的状态由三种状态表示：closed、open、half open，下面借用了 sentinel 的图来表示三者的关系：
  
  ![sentinel](https://img.luozhiyun.com/20220528153628.png) ([View Highlight](https://read.readwise.io/read/01hn9x6rqbd4zrdsfhr04rt0vs)) #Highlight #[[2024-01-29]]
- 一般而言会支持两种熔断策略：
  
  •   **错误比率**：熔断时间窗口内的请求数阈值错误率大于错误率阈值，从而触发熔断。
  •   **平均 RT（响应时间）**：熔断时间窗口内的请求数阈值大于平均 RT 阈值，从而触发熔断。 ([View Highlight](https://read.readwise.io/read/01hn9x7g8w3k8g2zectap0rxbt)) #Highlight #[[2024-01-29]]