title:: Readwise/Highlights/海外多区下的流量分发
author:: [[微信公众号]]
full-title:: 海外多区下的流量分发
category:: #articles
url:: https://www.chenshaowen.com/blog/traffic-distribution-cross-multi-region.html
tags:: #[[inoreader]] #[[star]] #[[博客]]
- 接入层能承载的流量通常很大，如果需要扩展，可以根据业务进行水平拆分，比如 a.chenshaowen.com 一个 LB、b.chenshaowen.com 一个 LB ([View Highlight](https://read.readwise.io/read/01gxkgzfhsd5e6c355dd9bzztx)) #Highlight #[[2023-04-10]]
- 服务层无状态，通过增加副本数即可实现扩展，无论是加 VM，还是增加 Kubernetes Pod 数量都能较快实现。 ([View Highlight](https://read.readwise.io/read/01gxkgzmmaxsjyhspatztqdpzz)) #Highlight #[[2023-04-10]]
- DB 层通常最容易遇到瓶颈，也是较难扩展的部分 ([View Highlight](https://read.readwise.io/read/01gxkh08t6tzhhmsgectbpqg7q)) #Highlight #[[2023-04-10]]
- 在进行多机房部署之前，建议先做单元化。单元化的过程是有意义的，会帮助我们梳理服务的全部依赖，打包到一个 Unit。无论是单机房多 Unit，还是多机房多 Unit，都可以通过部署新的 Unit 增加可用的副本、实现无缝滚动更新、支持流量灰度等功能。 ([View Highlight](https://read.readwise.io/read/01gxkhbpj5nxcpawxq2xrs94ys)) #Highlight #[[2023-04-10]]
- 在多机房下，用户流量通过接入层 LB，按照比例分配到不同的 Unit 中，再经过 Unit 中的业务网关分发到具体服务。 ([View Highlight](https://read.readwise.io/read/01gxkhbv50y9wp5c0vbgywkpmz)) #Highlight #[[2023-04-10]]
- 异地多活的关键在于，需要搭建一个互通的低延时专线连通各个机房 ([View Highlight](https://read.readwise.io/read/01gxkh2746p1tk57h2qtter6h4)) #Highlight #[[2023-04-10]]
- 我们可以在 cookies 中，设置 region 字段表示用户所在区域。
  
  在登录之前，我们需要在各区之间同步用户所在区域的信息。在登录时，通过 DNS 就近解析，或者 LB 任意选择一个区域进行登录。登录之后，在 Cookies 中设置 region 字段。
  
  登录完成之后，LB 通过 cookies 中的 region 将用户访问请求分发到数据所在区域。 ([View Highlight](https://read.readwise.io/read/01gxkhafr3y7d0b098kej1cxb1)) #Highlight #[[2023-04-10]]