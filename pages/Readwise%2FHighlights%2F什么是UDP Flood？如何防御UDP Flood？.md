title:: Readwise/Highlights/什么是UDP Flood？如何防御UDP Flood？
author:: [[微信公众平台]]
full-title:: 什么是UDP Flood？如何防御UDP Flood？
category:: #articles
url:: http://mp.weixin.qq.com/s?__biz=MzIxMjQ5MDY1Mw==&mid=2247502283&idx=1&sn=808e3eefafed835f549eb468287ae42e&chksm=9747c939a030402fc5ac994bf788eced1f73c24374b52bf0eeed33b594080df4c877c4764053#rd

- UDP Flood是互联网上最经典的DDoS（Distributed Denial of Service）攻击之一。攻击者在短时间内向目标设备发送大量的UDP报文，导致链路拥塞甚至网络瘫痪。一般的UDP报文由攻击工具伪造，通常在数据段具备相同的特征，另一部分由真实网络设备发出的UDP报文，虽然数据段不相同，但固定的目的端口也可作为一种特征。 ([View Highlight](https://read.readwise.io/read/01g9rqenyccbpyvmzejra5gxyg)) #Highlight #[[2022-08-06]]
- 由攻击工具伪造的攻击报文通常都拥有相同的特征字段，比如都包含某一字符串或整个报文内容一致，而对于UDP反射放大攻击中那些由真实网络设备发出的报文，在数据段不具备相同特征，但其目的端口都是固定的，所以不难发现UDP Flood攻击报文都具有一定的特征。确定攻击报文的特征后即可进行过滤，特征过滤也就是常说的指纹过滤。指纹过滤包括静态指纹过滤和动态指纹学习两种方法。 ([View Highlight](https://read.readwise.io/read/01g9rqhj0yfmb16447bhsfc1f6)) #Highlight #[[2022-08-06]]