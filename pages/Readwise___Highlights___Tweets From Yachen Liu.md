title:: Readwise/Highlights/Tweets From Yachen Liu
author:: [[@Blankwonder on Twitter]]
full-title:: Tweets From Yachen Liu
category:: #tweets
url:: https://twitter.com/Blankwonder

- 这套 PC 配置还有啥改进建议吗？ https://t.co/a470ogWItn
  
  ![](https://pbs.twimg.com/media/Fu9QuGhaAAE5Y9p.jpg) ([View Tweet](https://twitter.com/Blankwonder/status/1652628349204963330)) #Highlight #[[2023-05-04]]
- 彻底回到了 UniFi 全家桶 https://t.co/At6kdmNsI6
  
  ![](https://pbs.twimg.com/media/FpDkbKYaQAATOhw.jpg) ([View Tweet](https://twitter.com/Blankwonder/status/1626050629667020805)) #Highlight #[[2023-05-04]]
- 戴森球计划太寓教于乐了，可以充分地帮助理解 buffer 的作用，延迟和带宽的关系，map-reduce，单点故障，解耦等等计算机概念…… ([View Tweet](https://twitter.com/Blankwonder/status/1654391082002812929)) #Highlight #[[2023-05-05]]
- 最近研究 USB4 网桥，也就顺便研究了一下 USB-C 线缆，水实在太深，全网也没有几篇能说对说全的文章，USB-IF 的官方规范又十分冗长。正巧新 iPhone 15 Pro 发布后不少人都会有购买高速线的需求，我总结了一下各种信息写了份总结：
  
  *** USB 2.0 C-C 无 E-Marker 芯片**
  这类线只连接了 USB 2.0 需要的 4 根线芯，因为成本最低廉，是最常见的 CC 线缆，各种数码产品通常给的都是这样的线用于充电。
  
  *** USB 2.0 C-C 带 E-Marker 芯片**
  E-Marker 芯片用于存储关于线的制造信息，如最高支持的电流，因为当在过细的线缆中使用高电流时会过热产生安全隐患。标准要求对于超过 5A 或 100W 的供电，一定需要使用带 E-Marker 芯片的线缆。这类线只需要 5 根线芯，也可以做的很细。
  Apple 设备所附赠的几乎都是这类 CC 线。需要注意，对于一些简陋的电子产品，带有 E-Marker 芯片的线缆可能反而会启动保护机制导致其无法正常充电。
  
  *** 无 E-Marker 芯片的高速线**
  通常为 USB 外置硬盘附赠，这类线需要 12 根线芯，线缆一般都比较粗。
  大部分人知道 E-Marker 芯片和充电功率有关，其实 E-Marker 芯片也和线的速率有关。USB 标准现已强制要求所有的高速线都必须具备 E-Marker 芯片声明速率，所以这类不带芯片的线已经被淘汰，属于非标准线。
  当使用这类线进行高速通信时，速度最高不会超过 10Gbps。TB3 与 USB4 直接不支持使用这种线缆。
  
  *** 带 E-Marker 芯片的高速线**
  这类线的 E-Marker 芯片中会声明自己所能支持的通讯速率。只有使用此类线缆方可进行高于 10Gbps 以上速率的通讯。
  这类线在目前市面上存在 Thunderbolt3/USB 10Gbps/USB 20Gbps/USB 40Gbps 的版本，本质上，他们的线芯数量和针脚连接都是一致的，区别只在于其电气参数和 E-Marker 芯片中的声明。一般越快越粗。
  还有主动线和被动线的区别，一般不会接触到，这里不再展开了。
  
  两个常见问题：
  **1. Thunderbolt4 与 USB4 到底什么关系**
  USB4 包含了一系列可选功能，Thunderbolt4 则是在 USB4 的基础上，将一些可选功能变为了强制要求并加以认证（如 PCIe 和 2x4K@60）。逻辑上说，Thunderbolt4 是 USB4 的一个子集，但是 Thunderbolt4 代表了一个更高标准。
  对于消费者来说，当做一回事就行，仔细看自己需要的细分功能是否支持就好了。
  
  **2. TB3 线缆是否和 USB4 40Gbps 线缆是一样的？**
  答案是也不是：
  1. 两者的电气性能均可达到 40Gbps 的要求。
  2. 两者在 E-Marker 的类型声明是不一样的，一个是 Thunderbolt3，一个是 USB4 Gen3。
  3. 但是，TB3 和 USB4 控制器会自动兼容两种声明，所以实际用起来没区别。有 Thunderbolt3 线缆的话完全没有必要购买新的 USB4 线缆。 ([View Tweet](https://twitter.com/Blankwonder/status/1703046503286378930)) #Highlight #[[2023-09-17]]
- 有推友想要之前组的 ITX HomeLab 的配置单，这里简单贴一下。
  1. 我是执着于想组一台 ITX 机器，如果可以接受 ATX/mATX，那么选项可以灵活很多。
  2. 单 PCIe x16 槽插 4 块 M.2 SSD，需要主板和 CPU 支持 PCIe Bifurcation，华硕做的比较好，有一份详细的说明文档。13 代 Intel 均不支持，所以我 AMD Yes。
  3. 选 R5 7600 是看中了低功率。选 X670E-I 是因为有 USB4 支持，可扩展性多了许多，不需要的话可以选 B650E-I，便宜一千。
  4. 选择标准 PC 而非服务器是因为服务器太吵、太重，开机过于缓慢，硬盘仓在全 SSD 下完全没有必要。另外这个 CPU 是可以使用 ECC 内存的（不是 On-Die ECC），但是比较难买。
  5. ITX 组装需要特别注意内存马甲、主板马甲和散热器间的高度问题，最好提前咨询客服。
  6. M2 转 PCIe 的邪道对 PCIe 卡会有兼容性问题，推测只能接不支持 SR-IOV 的设备。
  7. 整机待机功耗 50W 左右，4 块 SSD 温度均为 40 上下，风扇声音低到贴上去都不太听得见。
  8. 4T 长江颗粒的 SSD 有很多厂商贴牌，价格基本一致，选保修容易的即可，最好可以京东送修。
  9. ESXi 对 PC 的驱动兼容性不好，PVE 好得多。
  10. 拆分卡还有个品牌更便宜，但是我看图觉得绿联做工更好且自带散热。延长线价格差距也挺大，我选择这个比较贵是因为用了镀银线，硅胶线太硬了。
  11. 简单看了下，发现部分组件最近价格小幅上涨，可以等下双 11。 ([View Tweet](https://twitter.com/Blankwonder/status/1707614226326679844)) #Highlight #[[2023-09-29]]