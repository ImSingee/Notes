title:: Readwise/Highlights/增强 Go 服务的可观测性 [翻译]
author:: [[liqianglau@outlook.com]]
full-title:: 增强 Go 服务的可观测性 [翻译]
category:: #articles
url:: https://liqiang.io/post/improving-observability-of-golang-services
tags:: #[[favorite]] #[[golang]] #[[inoreader]] #[[博客]] #[[格物致知]]
- 如果你没有使用一个零分配的日志库，那么日志可能会成为一个瓶颈 ([View Highlight](https://read.readwise.io/read/01hdjdcwgp2f4wtmr09yq8qqhm)) #Highlight #[[2023-10-25]]
- 结构化日志对于从日志中提取数据至关重要。采用json或logfmt格式可以简化临时性的故障排除，并允许快速和肮脏的图表/警报，同时你要研究适当的指标。大多数日志库也有现成的钩子用于gRPC/HTTP客户端和服务器，以及常见的数据库客户端，这大大简化了它们在现有代码库中的引入。 ([View Highlight](https://read.readwise.io/read/01hdjddv5dsgw36f1ebd68merg)) #Highlight #[[2023-10-25]]
- 在某些情况下，日志本身会成为性能瓶颈。你不希望你的服务因为 Docker 在启用 DEBUG 日志时无法快速从 stderr 管道中提取事件而被卡住 ([View Highlight](https://read.readwise.io/read/01hdjde4grgmakbhdhxvdp0bw2)) #Highlight #[[2023-10-25]]
- 许多剖析功能需要一个新的 Go 运行时来进行快速准确的操作。如果你打算在生产中依赖剖析数据，特别是如果你打算使用连续剖析，请升级到 Go 1.19 ([View Highlight](https://read.readwise.io/read/01hdjdg5xzjw7akks5w7gdkgjn)) #Highlight #[[2023-10-25]]
- 如果你想对 Go 使用与uprobe / uretprobe 用于 C/C++ 代码相同的 eBPF pprof 方法，请注意，由于 Go 的堆栈增长和复制，你可能遇到 SIGBUS ([View Highlight](https://read.readwise.io/read/01hdjdjbcx9fs555ykvvnkd912)) #Highlight #[[2023-10-25]]
- goroutines 是动态映射到线程的，因此不可能使用 tid 来识别代码流（同样的情况也可能发生在使用 coroutines 的 C++ 中）。幸运的是，在相应的 [bcc](https://github.com/iovisor/bcc/issues/1320) 和 [bpftrace](https://github.com/iovisor/bpftrace/issues/970) 问题中，有一些解决方法 ([View Highlight](https://read.readwise.io/read/01hdjdjwsz41qzq7k3mnwsvvvj)) #Highlight #[[2023-10-25]]