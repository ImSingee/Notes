title:: Readwise/Highlights/与 JOSE 战斗的日子 - 写给 iOS 开发者的密码学入门手册
author:: [[王巍 (onevcat)]]
full-title:: 与 JOSE 战斗的日子 - 写给 iOS 开发者的密码学入门手册
category:: #articles
url:: https://onevcat.com/2018/12/jose-1/

- JWT 有两种实现，分别是 JWS (JSON Web Signature) 和 JWE (JSON Web Encryption)。由于 JWS 的应用更为广泛，所以一般说起 JWT 大家默认会认为是 JWS。JWS 的 Payload 是 Base64Url 的明文，而 JWE 的数据则是经过加密的。相对地，相比于 JWS 的三个部分，JWE 有五个部分组成 ([View Highlight](https://read.readwise.io/read/01he1vwf36g2bh0syz2781y6xn)) #Highlight #[[2023-10-31]]
- JWT 其实是 JOSE 这个更大的概念中的一个组成部分。JOSE (Javascript Object Signing and Encryption) 定义了一系列标准，用来规范在网络传输中使用 JSON 的方式。我们在上面介绍过了JWS 和 JWE，在这一系列概念中还有两个比较重要，而且相互关联的概念：JWK 和 JWA。它们一起组成了整个 JOSE 体系。
  
  ![](https://onevcat.com/assets/images/2018/jose.png) ([View Highlight](https://read.readwise.io/read/01he1vx5khja5y0dvhjrndv6ey)) #Highlight #[[2023-10-31]]
- JWK (JSON Web Key) 解决的是如何使用 JSON 来表示一个密钥这件事。
  
  RSA 的公钥由模数 (modulus) 和指数 (exponent) 组成，一个典型的代表 RSA 公钥的 JWK 如下：
  
  `1 2 3 4 5 6 7 8  {   "alg": "RS256",   "n": "ryQICCl6NZ5gDKrnSztO3Hy8PEUcuyvg_ikC-VcIo2SFFSf18a3IMYldIugqqqZCs4_4uVW3sbdLs_6PfgdX7O9D22ZiFWHPYA2k2N744MNiCD1UE-tJyllUhSblK48bn-v1oZHCM0nYQ2NqUkvSj-hwUU3RiWl7x3D2s9wSdNt7XUtW05a_FXehsPSiJfKvHJJnGOX0BgTvkLnkAOTdOrUZ_wK69Dzu4IvrN4vs9Nes8vbwPa_ddZEzGR0cQMt0JBkhk9kU_qwqUseP1QRJ5I1jR4g8aYPL_ke9K35PxZWuDp3U0UPAZ3PjFAh-5T-fc7gzCs9dPzSHloruU-glFQ",   "use": "sig",   "kid": "b863b534069bfc0207197bcf831320d1cdc2cee2",   "e": "AQAB",   "kty": "RSA" }`
  
  模数 `n` 和指数 `e` 构成了密钥最关键的数据部分，这两部分都是 Base64Url 编码的大数字。 ([View Highlight](https://read.readwise.io/read/01he1vxxa06b0kqrhqwk46yf3k)) #Highlight #[[2023-10-31]]
- 如果你接触过几个 RSA 密钥，可能会发现 “e” 的值基本都是 “AQAB”。这并不是巧合，这是数字 65537 (0x 01 00 01) 的 Base64Url 表示。选择 AQAB 作为指数已经是业界标准，它同时兼顾了运算效率和安全性能 ([View Highlight](https://read.readwise.io/read/01he1vyqb1wzp9e61sh11bv6bz)) #Highlight #[[2023-10-31]]