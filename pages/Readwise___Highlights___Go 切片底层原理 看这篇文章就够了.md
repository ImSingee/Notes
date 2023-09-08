title:: Readwise/Highlights/Go 切片底层原理 看这篇文章就够了
author:: [[kert]]
full-title:: Go 切片底层原理 看这篇文章就够了
category:: #articles
url:: https://mp.weixin.qq.com/s/GXxjNjNIyvEbAAGrD_gJGw
- 要弄明白 Go 中的切片是如何实现扩容的，这就需要关注一下 Go 的版本。
  
  **在 Go 的 1.18 版本以前，是按照如下的规则来进行扩容：**
  
  1、如果原有切片的长度小于 1024，那么新的切片容量会直接扩展为原来的 2 倍。
  
  2、如果原有切片的长度大于等于 1024，那么新的切片容量会扩展为原来的 1.25 倍，这一过程可能需要执行多次才能达到期望的容量。
  
  3、如果切片属于第一种情况（长度小于 1024）并且需要扩容的容量小于 1024 字节，那么新的切片容量会直接增加到原来的长度加上需要扩容的容量 (新容量 = 原容量 + 扩容容量)。
  
  **从 Go 的 1.18 版本开始，是按照如下的规则进行扩容：**
  
  1、当原 slice 容量 (oldcap) 小于 256 的时候，新 slice (newcap) 容量为原来的 2 倍。
  
  2、原 slice 容量超过 256，新 slice 容量 `newcap = oldcap + (oldcap+3*256) / 4`。 ([View Highlight](https://read.readwise.io/read/01h6x8b2p20a5mqwpp44mxgx2d)) #Highlight #[[2023-08-03]]