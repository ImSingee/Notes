title:: Readwise/Highlights/Spring Boot 中的 AOP，到底是 JDK 动态代理还是 Cglib 动态代理？
author:: [[江南一点雨]]
full-title:: Spring Boot 中的 AOP，到底是 JDK 动态代理还是 Cglib 动态代理？
category:: #articles
url:: http://mp.weixin.qq.com/s?__biz=MzI1NDY0MTkzNQ==&mid=2247495520&idx=1&sn=57a608fcba723c1e64903b3816aa0d85&chksm=e9c0bd00deb73416eeaacd1dbc1fb70eec78ecb4340e1bc0b47d21effa5f799cce4906c48ed4#rd
tags:: #[[inoreader]] #[[star]] #[[微信公众号]]
- AOP 底层是动态代理，而 Java 中的动态代理有两种实现方式：
  
  •   基于 JDK 的动态代理
    
  •   基于 Cglib 的动态代理
    
  
  这两者最大的区别在于基于 JDK 的动态代理需要被代理的对象有接口，而基于 Cglib 的动态代理并不需要被代理对象有接口。 ([View Highlight](https://read.readwise.io/read/01hfm80mjy0ec7ta4hte3prhmt)) #Highlight #[[2023-11-20]]
- Spring 中的动态代理，具体用哪种，分情况：
  
  •   如果代理对象有接口，就用 JDK 动态代理，否则就是 Cglib 动态代理。
    
  •   如果代理对象没有接口，那么就直接是 Cglib 动态代理。 ([View Highlight](https://read.readwise.io/read/01hfm80w7n1vxpvkmn2yga8cnx)) #Highlight #[[2023-11-20]]