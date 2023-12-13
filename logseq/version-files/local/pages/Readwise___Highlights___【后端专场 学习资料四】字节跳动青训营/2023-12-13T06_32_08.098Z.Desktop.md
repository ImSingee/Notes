title:: Readwise/Highlights/【后端专场 学习资料四】字节跳动青训营
author:: [[juejin.cn]]
full-title:: 【后端专场 学习资料四】字节跳动青训营
category:: #articles
url:: https://juejin.cn/post/7194381054797905981

- 核心服务治理功能
  
  •   服务发布
    
    •   蓝绿部署
    •   灰度发布（金丝雀发布）
  
  •   流量治理
  
  •   负载均衡
    
    •   Round Robin
    •   Ring Hash
    •   Random
  
  •   稳定性治理
    
    •   限流
    •   熔断
    •   过载保护
    •   降级 ([View Highlight](https://read.readwise.io/read/01hdg29d8wsps0d6x01qsp25nv)) #Highlight #[[2023-10-24]]
- 系统架构的演进历史
  
  •   单体架构
    
    •   All in one process
  
  •   垂直应用架构
    
    •   按照业务线垂直划分
  
  •   分布式架构
    
    •   抽出与业务无关的公共模块
  
  •   SOA架构
    
    •   面向服务
  
  •   微服务架构
    
    •   彻底的服务化 ([View Highlight](https://read.readwise.io/read/01hdg29j2zjaspkg02cc023v6v)) #Highlight #[[2023-10-24]]
- 微服务架构的三大要素
  
  •   服务治理（本课程内容）
    
    •   服务注册
    •   服务发现
    •   负载均衡
    •   扩缩容
    •   流量治理
    •   稳定性治理
  
  •   可观测性
    
    •   日志采集
    •   日志分析
    •   监控打点
    •   监控大盘
    •   异常报警
    •   链路追踪
  
  •   安全
    
    •   身份验证
    •   认证授权
    •   访问令牌
    •   审计
    •   传输加密
    •   黑产攻击 ([View Highlight](https://read.readwise.io/read/01hdg29r5avhdadj3rj2kmhxcq)) #Highlight #[[2023-10-24]]
- 服务注册及服务发现
  
  •   基本问题
    
    •   服务间调用中，如何指定下游服务实例的地址？
  
  •   简单方案
    
    •   直接指定 ip:port？
        
        •   没有任何动态能力
        •   有多个实例下游实例怎么办？
    •   使用 DNS？
        
        •   本地 DNS 存在缓存，导致延迟
        •   DNS 没有负载均衡
        •   不支持服务探活检查
        •   DNS 不能指定端口
  
  •   服务注册发现
    
    •   新增一个统一的服务注册中心，用于存储服务名到服务实例之间的映射关系
    •   旧服务实例下线前，从服务注册中心删除该实例，下线流量
    •   新服务实例上线后，在服务注册中心注册该实例，上线流量
  
  •   微服务流量特征
    
    •   统一网关入口
    •   外网通信多数采用 HTTP，内网通信多数采用 RPC（Thrift, gRPC） ([View Highlight](https://read.readwise.io/read/01hdg2agzbamhqg7h7jbkpare5)) #Highlight #[[2023-10-24]]
- •   为什么要做系统设计
    
    •   个人？
    •   工作？
  •   系统设计的概念是什么
    
  •   如何做系统设计
    
    •   4S分析法
  •   如何分析系统瓶颈和优化
    
    •   火焰图分析
    •   链路分析
    •   全链路压测
  •   如何验证系统的可用性和稳定性
    
    •   链路梳理
    •   可观测性
    •   全链路测试
    •   稳定性控制
    •   容灾演练 ([View Highlight](https://read.readwise.io/read/01hdg2bh07vhd298zej25pt334)) #Highlight #[[2023-10-24]]
- 秒杀的挑战
  
  •   资源有限性
  •   反欺诈
  •   高性能
  •   防止超卖
  •   流量管控
  •   扩展性
  •   鲁棒性 ([View Highlight](https://read.readwise.io/read/01hdg2bqq4ybjtjwdm89w3v2tn)) #Highlight #[[2023-10-24]]
- 4S分析
  
  •   场景
  •   存储
  •   功能
  •   扩展 ([View Highlight](https://read.readwise.io/read/01hdg2bvyz5c943fsfqada2103)) #Highlight #[[2023-10-24]]