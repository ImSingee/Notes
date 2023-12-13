title:: Readwise/Highlights/Go Slice 扩容实现
author:: [[juejin.cn]]
full-title:: Go Slice 扩容实现
category:: #articles
url:: https://juejin.cn/post/7179578237872242749
tags:: #[[golang]] #[[inoreader]] #[[read]] #[[掘金 - 后端]]
- 其实最新的扩容规则在 1.18 版本中就已经发生改变了，具体可以参考一下这个 `commit`： [runtime: make slice growth formula a bit smoother](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fgolang%2Fgo%2Fcommit%2F2dda92ff6f9f07eeb110ecbf0fc2d7a0ddd27f9d)。
  
  大概意思是：
  
  在之前的版本中：对于 `<1024` 个元素，增加 `2` 倍，对于 `>=1024` 个元素，则增加 `1.25` 倍。 而现在，使用更平滑的增长因子公式。 在 256 个元素后开始降低增长因子，但要缓慢。
  
  它还给了个表格，写明了不同容量下的增长因子：
  
  starting cap
  
  growth factor
  
  256
  
  2.0
  
  512
  
  1.63
  
  1024
  
  1.44
  
  2048
  
  1.35
  
  4096
  
  1.30
  
  从这个表格中，我们可以看到，新版本的切片库容，并不是在容量小于 `1024` 的时候严格按照 `2` 倍扩容，大于 `1024` 的时候也不是严格地按照 `1.25` 倍来扩容。 ([View Highlight](https://read.readwise.io/read/01hdkfmc7nh0avfrnje5shc8n9)) #Highlight #[[2023-10-25]]