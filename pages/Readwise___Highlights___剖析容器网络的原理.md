title:: Readwise/Highlights/剖析容器网络的原理
author:: [[juejin.cn]]
full-title:: 剖析容器网络的原理
category:: #articles
url:: https://juejin.cn/post/7176478145841725499
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- 理解 iptables 的主要工作流程有一张比较经典的图：
  
  ![img/tables_traverse.jpg](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e1b06285f5974b938b35bd8b51a72408~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp) ([View Highlight](https://read.readwise.io/read/01hepe2hd71ccrxyq8w33fmy47)) #Highlight #[[2023-11-08]]
- 以上规则是在 filter 表中生效的：
  
  •   第一条是 `-A FORWARD -j DOCKER-USER` 这表示流量进入 FORWARD 链后，直接进入到 DOCKER-USER 链；
  •   最后一条 `-A DOCKER-USER -j RETURN` 这表示流量进入 DOCKER-USER 链处理后，（如果无其他处理）可以再 RETURN 回原先的链，进行后续规则的匹配。
  
  这其实是 Docker 预留的一个链，供用户来自行配置的一些额外的规则的。 ([View Highlight](https://read.readwise.io/read/01hepeaa5bx02zwg6gba472rwq)) #Highlight #[[2023-11-08]]
- Docker 默认的路由规则是允许所有客户端访问的 ([View Highlight](https://read.readwise.io/read/01hepeaw6j74rjk1rc9dk94z87)) #Highlight #[[2023-11-08]]
- Docker 在重启之类的操作时候，会进行 iptables 相关规则的清理和重建，但是 DOCKER-USER 链中的规则可以持久化，不受影响 ([View Highlight](https://read.readwise.io/read/01hepeb8vq8hn8eb1b4zkan78x)) #Highlight #[[2023-11-08]]