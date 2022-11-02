title:: Readwise/Highlights/数据中心的电力超售・osdi '20
author:: [[draveness.me]]
full-title:: 数据中心的电力超售・osdi '20
category:: #articles
url:: https://draveness.me/papers-thunderbolt/

- 现代的计算集群都会同时运行延时敏感型的在线服务和面向吞吐量的批处理工作负载，在运行期间一旦发生突发事件，我们会通过 Linux 内核的 CPU 限制等机制优先保证前者的延时，并在没有突发情况的机器上使用后者提高集群的资源利用率 ([View Highlight](https://read.readwise.io/read/01g8srawwvm5y0bn06f026d171)) #Highlight #[[2022-07-25]]
- 延迟敏感型的在线服务往往可以容忍宕机，但是它们需要保证程序执行期间有稳定的性能和资源，这些服务在遇到性能问题时更倾向于调度到其他资源充足的机器上；而面向吞吐量的批处理任务其实可以容忍资源的不稳定，但是一旦调度到其他机器上，可能需要重新计算，这就浪费了大量的计算和网络资源 ([View Highlight](https://read.readwise.io/read/01g8srbhwgahpkrtg4p52ybq64)) #Highlight #[[2022-07-25]]