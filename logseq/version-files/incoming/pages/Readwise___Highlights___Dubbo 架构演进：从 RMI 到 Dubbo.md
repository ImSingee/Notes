title:: Readwise/Highlights/Dubbo 架构演进：从 RMI 到 Dubbo
author:: [[juejin.cn]]
full-title:: Dubbo 架构演进：从 RMI 到 Dubbo
category:: #articles
url:: https://juejin.cn/post/7193525150187257915
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]
- Dubbo 是从 RPC 起家，到现在则已经发展成为一个微服务的治理框架 ([View Highlight](https://read.readwise.io/read/01hdg03cvf4pa6dp3bqkds2t8r)) #Highlight #[[2023-10-24]]
- 在 Dubbo 的核心领域模型中，可以看到 Protocol 和 Invocation 实际上也是围绕 Invoker 展开的：
  
  •   **Protocol** 是服务域，它是 Invoker 暴露和引用的主功能入口，它负责 Invoker 的生命周期管理。
  •   **Invoker** 是实体域，它是 Dubbo 的核心模型，其它模型都向它靠拢，或转换成它，它代表一个可执行体，可向它发起 invoke 调用，它有可能是一个本地的实现，也可能是一个远程的实现，也可能一个集群实现。
  •   **Invocation** 是会话域，它持有调用过程中的变量，比如方法名，参数等。 ([View Highlight](https://read.readwise.io/read/01hdg04cvgbj72cbebwh31fnxa)) #Highlight #[[2023-10-24]]
- •   最简单的 RPC 通信。我们需要发送类名(serviceName)、方法名(methodName)、方法参数类型(parameterTypes)、以及具体的参数(args)这个参数，这些信息在网络通信中一个统一的名称 Invocation。此时，只有应用层和网络层。
    
  •   Java RMI。主要做了两点改进：一是增加代理类 proxy，用于屏蔽网络通信；二是增加服务注册与发现的功能。此时架构分为三层：应用层、代理层、网络层。
    
  •   Dubbo。为了支持服务的注册与发现，Dubbo 将代理层 proxy 抽取出执行体 Invoker，后续的整个服务治理与发现都是围绕 invoker 展开。此时架构分为五层：应用层、代理层、服务治理层(Invoker)、协议层、网络层 ([View Highlight](https://read.readwise.io/read/01hdg0517v5gzxb2n26x7qqdqw)) #Highlight #[[2023-10-24]]