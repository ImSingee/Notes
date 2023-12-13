title:: Readwise/Highlights/从 GFW 原理到翻墙原理和协议
author:: [[EdNovas]]
full-title:: 从 GFW 原理到翻墙原理和协议
category:: #articles
url:: https://ednovas.xyz/2022/06/25/gfw/
- FW 是一个分布式的入侵检测系统，并不是一个严格意义上的防火墙。不是说每个出入国境的 IP 包都需要先经过 GFW 的首可。做为一个入侵检测系统，GFW 把你每一次访问 facebook 都看做一次入侵，然后在检测到入侵之后采取应对措施，也就是常见的连接重置。 ([View Highlight](https://read.readwise.io/read/01hf3874n2f7qrb591p8h5ppgs)) #Highlight #[[2023-11-13]]
- 据猜测，GFW 是部署在国家的出口路由器的旁路上，用 “分光” 的方式把 IP 包复制一份到另外一根光纤上，从而拿到所有进出国境的 IP 包 ([View Highlight](https://read.readwise.io/read/01hf387p9nntpj9tq39aesdy76)) #Highlight #[[2023-11-13]]
- 使用中国的 IP 去连接一个美国的 TOR 网桥，会被 GFW 发现。然后 GFW 回头（15 分钟之后）会亲自假装成客户端，用 TOR 的协议去连接那个网桥。如果确认是 TOR 的网桥，则会封当时的那个端口 ([View Highlight](https://read.readwise.io/read/01hf38c15vmsmwp7dw163yx7x0)) #Highlight #[[2023-11-13]]