title:: Readwise/Highlights/HTTP-2 Rapid Reset：解构这场破纪录的攻击
author:: [[Lucas Pardue]]
full-title:: HTTP/2 Rapid Reset：解构这场破纪录的攻击
category:: #articles
url:: https://blog.cloudflare.com/zh-cn/technical-breakdown-http2-rapid-reset-ddos-attack-zh-cn/
tags:: #[[cloudflare]] #[[go inbox]] #[[inoreader]] #[[博客]]

- 客户端半关闭状态意味着它不能再发送HEADERS或DATA，只能发送 [WINDOW_UPDATE](https://www.rfc-editor.org/rfc/rfc9113.html#section-6.9)、[PRIORITY](https://www.rfc-editor.org/rfc/rfc9113.html#section-6.3) 或 RST_STREAM 帧。然而，它可以接收任何帧。 ([View Highlight](https://read.readwise.io/read/01hdc04qaf3rw47p1ggqvk79dj)) #Highlight #[[2023-10-22]]
- 服务器半关闭状态意味着它可以发送任何帧，但只能接收 WINDOW_UPDATE、PRIORITY 或 RST_STREAM 帧。 ([View Highlight](https://read.readwise.io/read/01hdc076q73h7kw72mevm68qkr)) #Highlight #[[2023-10-22]]
- [HTTP/2](https://www.rfc-editor.org/rfc/rfc9113) 解决了 HTTP/1.1 的许多问题。每个 HTTP 消息都被序列化为一组 **HTTP/2 帧**，这些帧具有类型、长度、标志、流标识符 (ID) 和有效负载。流 ID 清楚地表明线路上的哪些字节适用于哪个消息，从而允许安全的多路复用和并发。流是双向的。客户端发送帧，服务器使用相同的 ID 回复帧。 ([View Highlight](https://read.readwise.io/read/01hdd4k59nh75m9vseaj5zc2qv)) #Highlight #[[2023-10-23]]
- 客户端发送一个 [HEADERS](https://www.rfc-editor.org/rfc/rfc9113#name-headers) 帧，服务器使用一个 HEADERS 帧进行响应 ([View Highlight](https://read.readwise.io/read/01hdd51nnve0rby409zq742k0k)) #Highlight #[[2023-10-23]]
- HTTP/2 优化了资源获取，尤其是在与[优先排序](https://blog.cloudflare.com/better-http-2-prioritization-for-a-faster-web/)相结合时。另一方面，与 HTTP/1.1 相比，让客户端更容易启动大量并行工作会增加对服务器资源的峰值需求 ([View Highlight](https://read.readwise.io/read/01hdd524a5m0rcx8f6wde99ke4)) #Highlight #[[2023-10-23]]
- HTTP/2 提供了最大活动[并发流](https://www.rfc-editor.org/rfc/rfc9113#section-5.1.2)的概念。[SETTINGS_MAX_CONCURRENT_STREAMS](https://www.rfc-editor.org/rfc/rfc9113#SETTINGS_MAX_FRAME_SIZE) 参数允许服务器公布其并发限制。例如，如果服务器声明限制为 100，那么任何时候都最多只能有 100 个请求处于活动状态。如果客户端试图打开超过此限制的流，服务器一定会使用 [RST_STREAM](https://www.rfc-editor.org/rfc/rfc9113#section-6.4) 帧拒绝它。流拒绝不会影响连接上的其他正在进行中的流 ([View Highlight](https://read.readwise.io/read/01hdd52najjvp4nx10qf3fqqx2)) #Highlight #[[2023-10-23]]
- 客户端和服务器管理各自的流状态视图。当发送或接收 HEADERS、DATA 和 RST_STREAM 帧时，它们会触发转换。虽然流状态的视图是独立的，但它们是同步的 ([View Highlight](https://read.readwise.io/read/01hdd54vm3mgpme825jfv149k6)) #Highlight #[[2023-10-23]]
- 让我们通过一个没有消息内容的 GET 请求示例来解决这个问题。客户端以 HEADERS 帧的形式发送请求，并将 END_STREAM 标志设置为 1。客户端首先将流从**空闲状态**转换为**打开状态**，然后立即转换为**半关闭**状态 ([View Highlight](https://read.readwise.io/read/01hdd55ngedz44d9e66vzm3s9x)) #Highlight #[[2023-10-23]]
- *处于“打开”状态或任一种“半关闭”状态的流计入允许端点打开的最大流数量。处于这三种状态中任何一种状态的流都将计入在* [*SETTINGS_MAX_CONCURRENT_STREAMS*](https://www.rfc-editor.org/rfc/rfc9113#SETTINGS_MAX_CONCURRENT_STREAMS) 设置中公布的限制。 ([View Highlight](https://read.readwise.io/read/01hdd57t188ba94ksz8t0y8hwz)) #Highlight #[[2023-10-23]]
- 客户端取消正在进行的请求的问题。与 HTTP/1.1 相比，HTTP/2 支持这种方式的效率要高得多。客户端无需中断整个连接，只需针对单个流发送一个 RST_STREAM 帧。这将指示服务器停止处理该请求并中止响应，从而释放服务器资源并避免浪费带宽。 ([View Highlight](https://read.readwise.io/read/01hdd585pjns281s02xzspsqr4)) #Highlight #[[2023-10-23]]
- 取消请求是一个非常有用的功能。例如，当滚动包含多个图像的网页时，网络浏览器可以取消落在视口之外的图像，这意味着进入视口的图像可以更快地加载。与 HTTP/1.1 相比，HTTP/2 使这种行为更加高效。 ([View Highlight](https://read.readwise.io/read/01hdd58xkp2hhcjqmd7135k1j6)) #Highlight #[[2023-10-23]]
- 被取消的请求流会快速过渡整个流生命周期。 END_STREAM 标志设置为 1 的客户端 HEADERS 状态从**空闲状态**转换为**打开**状态再到**半关闭**状态，然后 RST_STREAM 立即导致从**半关闭**状态转换为**关闭**状态。 ([View Highlight](https://read.readwise.io/read/01hdd59bxdgfkmnkj2xn8rsvqy)) #Highlight #[[2023-10-23]]
- 只有处于打开或半关闭状态的流才会影响流并发限制。当客户端取消流时，它立即能够在其位置打开另一个流，并可以立即发送另一个请求。 ([View Highlight](https://read.readwise.io/read/01hdd5a0drvfz83e4tgz120bf9)) #Highlight #[[2023-10-23]]
- HTTP/2 请求取消可能被滥用来快速重置无限数量的流。当 HTTP/2 服务器能够足够快地处理客户端发送的 RST_STREAM 帧并拆除状态时，这种快速重置不会导致问题。当整理工作出现任何延误或滞后时，问题就会开始出现。客户端可能会处理大量请求，从而导致工作积压，从而导致服务器上资源的过度消耗。
  
  常见的 HTTP 部署架构会在其他组件前面运行 HTTP/2 代理或负载平衡器。当客户端请求到达时，它会被快速分派，而实际工作则作为异步活动在其他地方完成。这样，代理就能非常高效地处理客户端流量。然而，这种关注点的分离会使代理难以整理正在处理的作业。因此，这些部署更有可能遇到快速重置造成的问题。 ([View Highlight](https://read.readwise.io/read/01hdd5bk877jyqkd2xfxr1batz)) #Highlight #[[2023-10-23]]
- HTTP/2 设置在连接开始时使用 SETTINGS 帧进行交换。如果没有收到明确的参数，则会使用默认值。客户端建立 HTTP/2 连接后，可以等待服务器的 SETTINGS（慢），也可以使用默认值开始发出请求（快）。对于 SETTINGS_MAX_CONCURRENT_STREAMS，默认值实际上是无限的（流 ID 使用 31 位数字空间，请求使用奇数，因此实际限制是 1073741824）。规范建议服务器提供不少于 100 个数据流。客户端通常偏向于速度，因此不会等待服务器设置，这就造成了一些竞争情况。客户端会赌服务器可能选择的限制；如果客户端赌错了，请求将被拒绝，并且客户端必须重试。在 1073741824 个流上赌有点傻。取而代之，许多客户端决定将自己限制在发布 100 个并发流，希望服务器遵循规范建议。如果服务器选择低于 100 的数值，则客户端赌错了，流将被重置。 ([View Highlight](https://read.readwise.io/read/01hdd5th559a17wxdmbkx5x80c)) #Highlight #[[2023-10-23]]