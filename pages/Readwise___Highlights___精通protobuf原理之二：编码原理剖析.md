title:: Readwise/Highlights/精通protobuf原理之二：编码原理剖析
author:: [[juejin.cn]]
full-title:: 精通protobuf原理之二：编码原理剖析
category:: #articles
url:: https://juejin.cn/post/7175805030191071293
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- 使用一个字节来表示 Tag 信息，高`5` 位表示 `field-number`，低 `3` 位表示 `wire-type`。
  
  css
  
  复制代码
  
  `[7] [6] [5] [4] [3] [2]  [1]  [0] |<----- field ----->|<-- wire -->|         number           type` 
  
  > 注：这个使用一个字节并非编码后的一个字节，而是编码前的一个字节，编码后可能是两个字节。为什么呢？因为 计算好 `Tag` 之后，还要经过 Varint 编码才是最终的编码，即 `Tag = VarintEncode( field-number << 3 | wire_type)`。 ([View Highlight](https://read.readwise.io/read/01hdkfb3xcxtgt4daj1xshgsp1)) #Highlight #[[2023-10-25]]
- 我们希望其绝对值越小，编码之后使用越少的字节数表示，显然这里编码之后得到的结果和我们期望的结果相悖的，基于这样的原因，才引入了 ZigZag 编码，主要作用是对负数的压缩处理。 ([View Highlight](https://read.readwise.io/read/01hdkfcne04y59pxtn9bwmff9q)) #Highlight #[[2023-10-25]]
- zigzag32(n) = (n << 1) ^ (n >> 31) //对于 sint32 zigzag64(n) = (n << 1) ^ (n >> 63) //对于 sint64 ([View Highlight](https://read.readwise.io/read/01hdkfcs9y7z5kwmydm8jarv3n)) #Highlight #[[2023-10-25]]
- 从编码步骤来看：
  
  •   int32/uint32/int64/uint64：直接进行 Varint 编码；
  •   sint32/sint64：先进行 ZigZag 编号，然后再对前者结果进行 Varint 编码，多了一个步骤。 ([View Highlight](https://read.readwise.io/read/01hdkfc0dxx751h11np5zrwwn8)) #Highlight #[[2023-10-25]]