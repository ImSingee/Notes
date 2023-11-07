title:: Readwise/Highlights/一文了解golang结构体的内存对齐
author:: [[juejin.cn]]
full-title:: 一文了解golang结构体的内存对齐
category:: #articles
url:: https://juejin.cn/post/7176625697966784568
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- CPU获取内存数据：CPU通过地址总线（Address Bus）发送地址信号到内存，并将控制总线（Control Bus）信号设置为Enable信号，之后内存会将数据通过数据总线（Data Bus）返回给CPU。
  
  CPU写入内存数据：CPU通过地址总线（Address Bus）发送地址信号到内存，并将控制总线（Control Bus）信号设置为Set信号，最后将数据通过数据总线（data bus）发送到内存并进行写入。
  
  ![image](http://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/099ff17d20ce46bcb9827e42c3255449~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?) ([View Highlight](https://read.readwise.io/read/01hekssv9mgpsyfaajf6wxxw7q)) #Highlight #[[2023-11-07]]
- 实际上内存并不是程序员想象中的一条长长的不间断的存储空间。
  
  ![image](http://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f73faef06b54b71875b083f66b1c278~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)
  
  实际上它长这样：
  
  ![image](http://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f21e6c9d59aa47daae684691820adc1c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?) ([View Highlight](https://read.readwise.io/read/01hekst7q1ymve00t9b2ew0ez4)) #Highlight #[[2023-11-07]]
- 内存架构在设计时为了最大化带宽，使用了许多并行的memory chip，并基于offset将内存划分为一个个存取的最小单元。CPU通过Address Bus告知memory chip对应的偏移量来获取数据，每次都只能取一个偏移量对应的数据，并通过Data Bus送回CPU ([View Highlight](https://read.readwise.io/read/01hekstpn2zmqyywny84814kcy)) #Highlight #[[2023-11-07]]