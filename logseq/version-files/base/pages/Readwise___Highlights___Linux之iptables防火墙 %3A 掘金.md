title:: Readwise/Highlights/Linux之iptables防火墙 : 掘金
author:: [[juejin.cn]]
full-title:: Linux之iptables防火墙 : 掘金
category:: #articles
url:: https://juejin.cn/post/7090181016135925796
tags:: #[[favorite]] #[[inoreader]] #[[iptables]] #[[read]] #[[star]]

- •   **netfilter**:属于“内核态”(Kernel Space， 又称为内核空间)的防火墙功能体系。 是内核的一部分，由一些数据包过滤表组成，这些表包含内核用来控制数据包过滤处理的规则集。(负责干活的)
    
  •   **iptables**:属于“用户态”(User Space，又称为(用户空间)的防火墙管理体系。 是一种用来管理Linux防火墙的命令程序，它使插入，修改和删除数据包过滤表中的规则变得容易，**通常位于/sbin/iptables目录下**。(负责指挥的)
    
  •   **netfilter/iptables**后期简称为**iptables。iptables**是基于内核的防火墙，其中内置了**raw、mangle、 nat和filter**四个规则表。
    
  •   表中所有规则配置后，立即生效，**不需要重启服务**。 ([View Highlight](https://read.readwise.io/read/01hdjdzcs1bsc2pxnrhpjc5qxh)) #Highlight #[[2023-10-25]]
- > 按照顺序进行
  
  •   **raw表**：确定是否对该数据包进行状态跟踪。包含两个规则链，OUTPUT、PREROUTING。
    
  •   **mangle表**：修改数据包内容，用来做流量整形的，**给数据包设置标记。**包含五个规则链，INPUT、OUTPUT、FORWARD、PREROUTING、POSTROUTING。
    
  •   **nat表**：负责网络地址转换，用来修改数据包中的**源、目标IP地址或端口**。包含三个规则链，OUTPUT、PREROUTING、POSTROUTING。
    
  •   **filter表**：负责过滤数据包，确定是否放行该数据包（过滤）。包含三个规则链，INPUT、FORWARD、OUTPUT。
    
  
  > 注：在 iptables 的四个规则表中，mangle 表和 raw 表的应用相对较少。**filter表则是iptables的默认表** ([View Highlight](https://read.readwise.io/read/01hdje05rbac2ksyhvjtfr9g48)) #Highlight #[[2023-10-25]]
- > 按照顺序进行
  
  •   **INPUT**：处理入站数据包，匹配目标IP为本机的数据包。
    
  •   **OUTPUT**：处理出站数据包，一般不在此链上做配置。
    
  •   **FORWARD**：处理**转发数据包**，匹配流经本机的数据包。
    
  •   **PREROUTING链：**在进行路由选择前处理数据包，用来修改目的地址，用来做DNAT。相当于把内网中的80端口映射到路由器外网端口上。
    
  •   **POSTROUTING链：**在进行路由选择后处理数据包，用来修改源地址，用来做SNAT。相当于内网通过路由器NAT转换功能实现内网主机通过一个公网IP地址上网。 ([View Highlight](https://read.readwise.io/read/01hdje1bqpxrptnkrv4hvynbk3)) #Highlight #[[2023-10-25]]
- 自上向下按顺序依次进行检查，找到相匹配的规则即停止（LOG策略例外，表示记录相关日志） **若在该链内找不到相匹配的规则，则按该链的默认策略处理（未修改的状况下，默认策略为允许）** ([View Highlight](https://read.readwise.io/read/01hdje204m90p2a3ew4bh3svc8)) #Highlight #[[2023-10-25]]
- •   入站数据(来自外界的数据包，且目标地址是防火墙本机) : PREROUTING --> INPUT --> 本机的应用程序
    
  •   出站数据(从防火墙本机向外部地址发送的数据包) :本机的应用程序–> OUTPUT --> POSTROUTING ([View Highlight](https://read.readwise.io/read/01hdje2d8qarv71d1e1jmhnf92)) #Highlight #[[2023-10-25]]
- 转发数据(需要经过防火墙转发的数据包) : PREROUTING --> FORWARD --> POSTROUTING ([View Highlight](https://read.readwise.io/read/01hdje2k1q0ne7m967pepk2np8)) #Highlight #[[2023-10-25]]
- ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/91b30928a2a94576b9af7632a6cc327c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?) ([View Highlight](https://read.readwise.io/read/01hdje2z08c7cx387be82w4yr6)) #Highlight #[[2023-10-25]]
- ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f3422ace7e13469e8f1545c70ff94b79~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?) ([View Highlight](https://read.readwise.io/read/01hdje368gb2e1b2yaffb9zn3j)) #Highlight #[[2023-10-25]]