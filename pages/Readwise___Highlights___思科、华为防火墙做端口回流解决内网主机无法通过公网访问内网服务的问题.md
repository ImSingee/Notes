title:: Readwise/Highlights/思科、华为防火墙做端口回流解决内网主机无法通过公网访问内网服务的问题
author:: [[Cnblogs.com]]
full-title:: 思科、华为防火墙做端口回流解决内网主机无法通过公网访问内网服务的问题
category:: #articles
url:: https://www.cnblogs.com/wangpanda/p/7552608.html

- R1 路由器发现响应数据包的目的 ip 地址是内网一个可直接路由的地址，就会直接在内网进行路由转发，而不是将数据包交给防火墙进行路由转发 ([View Highlight](https://read.readwise.io/read/01h1jsp3z037kwrqsqt34rs20r)) #Highlight #[[2023-05-29]]
- 你要高度可定制性和扩展性，那就要牺牲人性化的设计，需要专业人员去帮你做业务上的定制；你要人性化，自己点点鼠标就能把问题解决，那它就不可能在可定制性和扩展性上给你太多，这个世界上的事情也是如此，没有十全十美。 ([View Highlight](https://read.readwise.io/read/01h1jsq0f0zn6jqca6a2phds8p)) #Highlight #[[2023-05-29]]
- 内网主机对通过公网对内网服务器访问的时候，流量在经过防火墙时，将内网主机的 ip 地址修改为一个外网 ip 地址（源 NAT 转换），并做好及维护相应的 NAT 会话的记录，这样服务器在接收到数据包之后，发现源 ip 地址是一个外网 ip 地址，这样数据流量会回流到防火墙，防火墙检查相应的源 NAT 转换策略，发现可以匹配，则进行源 NAT 的还原，并经数据包路由到内网的主机中 ([View Highlight](https://read.readwise.io/read/01h1jsqyr50r0qqx77ftbqpt9h)) #Highlight #[[2023-05-29]]