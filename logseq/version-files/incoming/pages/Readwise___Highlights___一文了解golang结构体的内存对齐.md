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
- 在32位系统中用64位的原子操作，必须要保证64位对齐，也就是8字节对齐，否则可能会发生panic ([View Highlight](https://read.readwise.io/read/01hekt3dyw30cfaj9890f3xv6t)) #Highlight #[[2023-11-07]]
- 64位的原子操作需要64位对齐，但是在32位的系统上，只能保证字段32位对齐。所以WaitGroup将成员state1和state2当成了一个整体进行空间划分，如果state1是64位对齐的，就将state1作为原子操作的字段，将state2作为信号量字段；如果state1是32位对齐的，就将state1的后32位和state2连在一起作为原子操作的字段，将state1的前32位作为信号量字段。 ([View Highlight](https://read.readwise.io/read/01hekt3wvaqzvyg9skm63ec3xy)) #Highlight #[[2023-11-07]]
- 计算机的存储器是分层次的，离CPU越近的存储器，速度越快，每字节的成本也越高，容量也越小。按离CPU远近程度，可以分为register、cache（包括L1、L2等）、memory、disk。 ([View Highlight](https://read.readwise.io/read/01hekt483znvxmfaqcemg0ty56)) #Highlight #[[2023-11-07]]
- cache分成多个组，每个组分成多个缓存行(cache line)，缓存行的大小为2的整数幂个连续字节，一般为32-256个字节。最常见的缓存行大小是64个字节。当不同的线程同时读写同一个cache line上不同数据时就可能发生**false sharing**，导致多核处理器上严重的系统性能下降。 ([View Highlight](https://read.readwise.io/read/01hekt4gzbys913gra55nvam4c)) #Highlight #[[2023-11-07]]
- 为了避免变量出现在同一个缓存行而导致false sharing的情况，可以使用填充的方式。只要将对象的大小填充到64B，或者64B的整数倍，就能保证不会出现两个变量在同一缓存行的情况。 ([View Highlight](https://read.readwise.io/read/01hekt4jx2n8qt4x7wq80sk814)) #Highlight #[[2023-11-07]]