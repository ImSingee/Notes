title:: Readwise/Highlights/【后端专场 学习资料三】字节跳动青训营
author:: [[juejin.cn]]
full-title:: 【后端专场 学习资料三】字节跳动青训营
category:: #articles
url:: https://juejin.cn/post/7193363381804335161
tags:: #[[favorite]] #[[编译原理]]
- 规则引擎是一种嵌入在应用服务中的组件，可以将灵活多变的业务决策从服务代码中分离出来。通过使用预定义的语义模块来编写业务逻辑规则。在执行时接受数据输入、解释业务规则，并做出决策。规则引擎能大大提高系统的灵活性和扩展性。 ([View Highlight](https://read.readwise.io/read/01hdg2djjn9bht34v7h08jfr2f)) #Highlight #[[2023-10-24]]
- 规则引擎是一种嵌入在应用服务中的组件，可以将灵活多变的业务决策从服务代码中分离出来。通过使用预定义的语义模块来编写业务逻辑规则。在执行时接受数据输入、解释业务规则，并做出决策。规则引擎能大大提高系统的灵活性和扩展性。 ([View Highlight](https://read.readwise.io/read/01hdg2dmsbgy8znzn7v8f2bga7)) #Highlight #[[2023-10-24]]
- 编译原理被誉为"程序员的三大浪漫"之一 ([View Highlight](https://read.readwise.io/read/01hdg2en6efhvk9sp2rf3b3kpc)) #Highlight #[[2023-10-24]]
- 规则引擎的本质呢就是我们自己定义一套语法，然后去解析用这套语法写的表达式，然后根据解析的内容执行表达式。这个过程其实就是编译和执行的过程。 ([View Highlight](https://read.readwise.io/read/01hdg2et577w2d7rr13zrgnx5c)) #Highlight #[[2023-10-24]]
- **确定的有限自动机 DFA |** **Deterministic Finite Automaton**
  
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7fb1507b67fb41d6860254c2266ab00e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)
  
  确定的有限自动机就是一个状态机，它的状态数量是有限的。该状态机在任何一个状态，基于输入的字符，都能做一个确定的状态转换。 ([View Highlight](https://read.readwise.io/read/01hdg2g84fk7kxjvqdwhy3sxaf)) #Highlight #[[2023-10-24]]
- **上下文无关语法 Context-Free Grammar**
  
  语言句子无需考虑上下文，就可以判断正确性 ([View Highlight](https://read.readwise.io/read/01hdg2gv3t2rv8dghxj0dxymtm)) #Highlight #[[2023-10-24]]
- 企业级后端架构的挑战
  
  •   离线任务
  •   在线任务
  •   IO 密集型
  •   CPU 密集型
  •   服务治理
  •   IPC (Inter-Process Communication)
  •   RPC (Remote Procedure Call) ([View Highlight](https://read.readwise.io/read/01hdg2kyhq9dkvwkztgpkvf6ep)) #Highlight #[[2023-10-24]]
- SOA (面向服务架构)
  
  SOA 架构中，服务为一等公民，将进程按照不同的功能单元进行抽象，拆分为『服务』。有了服务之后，SOA 还为服务之间的通信定义了标准，保证各个服务之间通讯体验的一致性。
  
  优点：
  
  •   各服务的职责更清晰
  •   运维粒度减小到服务，爆炸半径可控
  
  缺点：
  
  •   ESB (企业服务总线) 往往需要一整套解决方案 ([View Highlight](https://read.readwise.io/read/01hdg2mepa9nc3te0fcemzqhke)) #Highlight #[[2023-10-24]]
- 微服务
  
  在 SOA 架构中，ESB 起到了至关重要的作用。但从架构拓扑来看，它更像是一个集中式的模块。有一个 SOA 分布式演进的分支，最终的形态便是微服务。
  
  优点：
  
  •   兼具 SOA 解决的问题
  •   服务间的通信更敏捷、灵活
  
  缺点：
  
  •   运维成本 ([View Highlight](https://read.readwise.io/read/01hdg2mpbdcqfrtmj9nmw0wma5)) #Highlight #[[2023-10-24]]
- 云计算基础：
  
  •   虚拟化技术
    
    •   硬件层面（VM 虚拟机）- KVM/Xen/VMware
    •   操作系统层面（Container 容器）- LCX/Docker/Kata Container
    •   网络层面 - Linux Bridge/Open v Switch
  •   编排方案
    
    •   VM - OpenStack/VMWare Workstation
    •   Container - Kubernetes/Docker Swarm ([View Highlight](https://read.readwise.io/read/01hdg2myxwj0hxkj8c3jqzxm4z)) #Highlight #[[2023-10-24]]
- •   IaaS - 云基础设施，对底层硬件资源池的抽象
  •   PaaS - 基于资源池抽象，对上层提供的弹性资源平台
  •   SaaS - 基于弹性资源平台构建的云服务
  •   FaaS - 更轻量级的函数服务。好比 LeetCode 等 OJ，刷题时只需要实现函数，不需要关注输入输出流 ([View Highlight](https://read.readwise.io/read/01hdg2n28gv4bqtr7bxvzmqtfw)) #Highlight #[[2023-10-24]]
- 云原生
  
  云原生，实际是云原生（计算）的简称，它是云计算发展到现在的一种形态。
  
  云原生技术为组织（公司）在公有云、自由云、混合云等新型的动态环境中，构建和运行可弹性拓展的应用提供了可能。 它的代表技术：
  
  •   弹性资源
  •   微服务架构
  •   DevOps
  •   服务网格 ([View Highlight](https://read.readwise.io/read/01hdg2n92ccc3dz65zn7y5cye7)) #Highlight #[[2023-10-24]]
- 什么是服务网格？
  
  •   微服务之间通讯的中间层
    
  •   一个高性能的 4 层网络代理
    
  •   将流量层面的逻辑与业务进程解耦
    
  
  没有什么是加一层代理解决不了的问题，服务网格相比较于 RPC/HTTP 框架：
  
  •   实现了异构系统治理体验的统一化
  •   服务网格的数据平面代理与业务进程采取进程间通信的模式，使得流量相关的逻辑（包含治理）与业务进程解耦，生命周期也更容易管理 ([View Highlight](https://read.readwise.io/read/01hdg2ny4d0gt7zq7cgpe4xcbr)) #Highlight #[[2023-10-24]]
- 微服务之间的通信成本较高，是否可以：
  
  •   形态上是微服务架构
    
  •   通信上是单体架构
    
  
  亲合性部署，通过将微服务调用形态与资源调度系统结合，将一些调用关系紧密、通信量大的服务部署在同一个机器上，并且使用 IPC 代替 RPC 的方式，降低网络通信带来的开销 ([View Highlight](https://read.readwise.io/read/01hdg2q0a52as98rfxaag5rhem)) #Highlight #[[2023-10-24]]
- 系统模型
  
  •   故障模型
  •   拜占庭将军问题
  •   共识和一致性
  •   时间和事件顺序
  
  理论基础
  
  •   CAP理论
  •   ACID理论
  •   BASE理论
  
  分布式事务
  
  •   两阶段提交
  •   三阶段提交
  •   MVCC
  
  共识协议
  
  •   Quorum NWR模型
  •   RAFT协议
  •   Paxos协议
  
  分布式实践
  
  •   MapReduce
  •   分布式KV ([View Highlight](https://read.readwise.io/read/01hdg2qwage680zr4nc067t50p)) #Highlight #[[2023-10-24]]
- Quorum NWR模型
  
  •   三要素：
    
    •   N：在分布式存储系统中，有多少份备份数据
    •   W：代表一次成功的更新操作要求至少有w份数据写入成功
    •   R： 代表一次成功的读数据操作要求至少有R份数据成功读取
    •   为了保证强一致性，需要保证 W+R>N
  •   Quorum NWR模型将CAP的选择交给用户，是一种简化版的一致性模型
    
  •   引起的并发更新问题
    
    •   如果允许数据被覆盖，则并发更新容易引起一致性问题 ([View Highlight](https://read.readwise.io/read/01hdg2r8kayvjy718arebx4xj9)) #Highlight #[[2023-10-24]]