title:: Readwise/Highlights/Posit浮点数格式：IEEE 754的绝妙替代 - 长天高远，星月粲然
author:: [[vitalyr]]
full-title:: Posit浮点数格式：IEEE 754的绝妙替代 - 长天高远，星月粲然
category:: #articles
url:: https://vitalyr.com/post/posit%E6%B5%AE%E7%82%B9%E6%95%B0%E6%A0%BC%E5%BC%8Fieee-754%E7%9A%84%E7%BB%9D%E5%A6%99%E6%9B%BF%E4%BB%A3/
tags:: #[[favorite]]

- EEE 754 把浮点数分成三个部分：符号位(sign)、指数位(exponent)和尾数位(mantissa)。
  
  符号位用来表示正负，指数位用来表示指数，尾数位用来表示尾数。IEEE 754 标准定义了四种浮点数格式：单精度（32 位）、双精度（64 位）、扩展精度（80 位）和四倍精度（128 位）。这四种格式的区别在于指数位和尾数位的位数不同. ([View Highlight](https://read.readwise.io/read/01hanvfz79pebtebkzvsfsprgn)) #Highlight #[[2023-09-19]]
- 计算过程中，浮点格式可能会破坏代数规则。例如，浮点加法并不总是满足结合律的。表达式 `(x+y)+z` 的结果是 `1` ，其中浮点值为 `x=1e30，y=-1e30，z=1`,使用相同的值， `x+(y+z)` 的结果是0。 ([View Highlight](https://read.readwise.io/read/01hanvvd43f3g3tyy5veegxscc)) #Highlight #[[2023-09-19]]