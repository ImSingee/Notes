title:: Readwise/Highlights/【后端专场 学习资料七】字节跳动青训营
author:: [[juejin.cn]]
full-title:: 【后端专场 学习资料七】字节跳动青训营
category:: #articles
url:: https://juejin.cn/post/7198982002304942138
- •   大Key：Value大于10KB就是大Key，使用大Key将导致Redis系统不稳定
  •   热Key：一个Key的QPS特别高，将导致Redis实例出现负载突增，负责均衡流量不均的情况。导致单实例故障
  •   慢查询：大Key、热Kye的读写；一次操作过多的Key（mset/hmset/sadd/zadd） ([View Highlight](https://read.readwise.io/read/01hdg1de7jr4yfvpqwabvfn0nq)) #Highlight #[[2023-10-24]]
- 【LZ4】
  
  scss
  
  复制代码
  
  `输入：abcde_bcdefgh_abcdefghxxxxxxx 输出：abcde_(5,4)fgh_(14,5)fghxxxxxxx`
  
  > (5,4) 代表向前5个byte，匹配到的内容长度有4，即"bcde"是一个重复
  > 
  > 重复项越多或者越长，压缩率就会越高
  
  【Run-length encoding】
  
  复制代码
  
  `输入：WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW 输出：12W1B12W3B24W1B14W`
  
  > 压缩重复的数据
  
  【Delta encoding】
  
  csharp
  
  复制代码
  
  `输入：105, 135, 112, 135, 143, 147 输出：105(base),30, -23, 23, 8, 4`
  
  > 将数据存储为连续数据之间的差异，而不是直接存储数据本身 ([View Highlight](https://read.readwise.io/read/01hdg1fpwpv73yztk5eqpt9vnh)) #Highlight #[[2023-10-24]]
- 物化：将列数据转换为可以被计算或者输出的行数据或者内存数据结果的过程，物化后的数据通常可以用来做数据过滤，聚合计算，Join ([View Highlight](https://read.readwise.io/read/01hdg1gdwadc1kmcr691v5k48m)) #Highlight #[[2023-10-24]]
- ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1cdd14b5fe7147b8a57dc7e8be722c02~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?) ([View Highlight](https://read.readwise.io/read/01hdg1hgd6fbdm03xw52yz9x1s)) #Highlight #[[2023-10-24]]
- ClickHouse的架构
  
  1.  架构图
  
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5146f2ff91cc44009f77d3d7032d6a2e~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp)
  
  2.  表定义和结构
  
  ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f1a7d82804c411cbd94c1f7ef56d8a6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp) ([View Highlight](https://read.readwise.io/read/01hdg1j76x1yybw44rrztnt4y6)) #Highlight #[[2023-10-24]]