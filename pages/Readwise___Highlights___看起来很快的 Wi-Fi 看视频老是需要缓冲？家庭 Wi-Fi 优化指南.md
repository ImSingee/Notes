title:: Readwise/Highlights/看起来很快的 Wi-Fi 看视频老是需要缓冲？家庭 Wi-Fi 优化指南
author:: [[EstrellaXD]]
full-title:: 看起来很快的 Wi-Fi 看视频老是需要缓冲？家庭 Wi-Fi 优化指南
category:: #articles
url:: https://sspai.com/post/72111
tags:: #[[favorite]] #[[inoreader]] #[[read]] #[[star]]
- 可以简单的把频宽想象成高速公路的车道数量，车道数量越多，单位时间可以行驶的流量也就越大 ([View Highlight](https://read.readwise.io/read/01he4sv3gybzhxgjy7vdxt926z)) #Highlight #[[2023-11-01]]
- 国内划分给 2.4GHz 的信道划分了一共 13个信道，并依次标记为 1-13 ，每个信道之间相差 5Mhz，通过下图可以看到临近的频段是相互重叠的，也就是互相之间会产生干扰。因此在 2.4GHz 下最多可以容纳三个互不干扰的 20Mhz 频宽或者一个 40Mhz 频宽的的Wi-Fi 信号 ([View Highlight](https://read.readwise.io/read/01he4svcr9bn7azkq4ttc4nsrg)) #Highlight #[[2023-11-01]]
- 而 5GHz Wi-Fi 下，5.2GHz 的可用信道为 36-64 ，5.8GHz 是 149-161 ([View Highlight](https://read.readwise.io/read/01he4svkvv33pq76s6492a81gg)) #Highlight #[[2023-11-01]]
- UNII-2-Extended 在国内是无法使用的，因此 5GHz 上最多可以容纳 3 个互不干扰的 80Mhz 或者 1 个 160Mhz频段的信号。信号可以调整其通道编号来减少重叠进而避免干扰，2.4GHz 下以单个信道为单位，而 5GHz 下以 4 个信道为单位 ([View Highlight](https://read.readwise.io/read/01he4svvy5df47mqc94d94xkzm)) #Highlight #[[2023-11-01]]
- 噪声是影响 Wi-Fi 信号的一个重要指标，噪声可能来源于其他邻居家的 Wi-Fi 信号，也会来自其他同频无线电信号，比如 2.4GHz 下的蓝牙和 Zigbee 信号，甚至是**微波炉**和**荧光灯**的射频泄漏也会影响到 2.4GHz 频段的 Wi-Fi 信号。如果噪音水平过高，可能会导致无线信号强度的强度和性能下降。噪音和信号强度一样，也使用 dBm 作为单位，一般来说噪声强度在 -90dBm 以下的噪声对正常使用 Wi-Fi 没有干扰。 ([View Highlight](https://read.readwise.io/read/01he4sw5dxk1cdyc4p97tpxhwr)) #Highlight #[[2023-11-01]]
- 信噪比（SNR）是信强和噪声水平之间的功率比。信噪比的单位是 dB，是一个绝对值，计算方法为：
  
  **SNR (dB)** = **RSSI (dBm)** - **噪声** **(dBM)**
  
  一般来说，30dB 以上的信噪比是一个较好的环境，SNR 低于 30dB 的情况下无线上网体验会受到比较严重的影响。一般家庭无线网络使用环境的噪声在 -90 - -95 dBm 左右，优质信号需要在 -65 dBm 以上。 ([View Highlight](https://read.readwise.io/read/01he4sxbe1bx231wytgbqy0ass)) #Highlight #[[2023-11-01]]
- 首先找一个功能较为完整的 Wi-Fi 分析软件，笔者使用的是 Mac 上的 [Wi-Fi Explorer](https://sspai.com/link?target=https%3A%2F%2Fwww.intuitibits.com%2Fproducts%2Fwifiexplorer%2F)，这款软件包含在 Setapp 中；如果你手中有安卓移动设备，也可以选用 UBNT 开发的 [Wifiman](https://sspai.com/link?target=https%3A%2F%2Fwifiman.com%2F) 进行检测；Windows 用户可以考虑使用 [inSSIDer](https://sspai.com/link?target=https%3A%2F%2Fwww.metageek.com%2Fproducts%2Finssider%2F) 分析 Wi-Fi ([View Highlight](https://read.readwise.io/read/01he4sy8370575g243rqb32hc5)) #Highlight #[[2023-11-01]]
- 更低的信号噪比意味着，每一次传输有效的数据量也更少，反应到实际使用情况中比如使用 AirPlay 等无线传输协议时，就是经常出现断流等现象，体验极差 ([View Highlight](https://read.readwise.io/read/01he4sz4bb7h88fdzc6g8ha0wy)) #Highlight #[[2023-11-01]]
- 如果你和笔者一样在无线环境较为复杂的宿舍亦或者是出租屋中，那么建议选用 40MHz/80MHz 获得更高的连接稳定性。5GHz 下，如果选用 80 MHz，推荐使用 36，64，149，165信道，如果选用 40MHz，则选择更多一些。
  
  2.4 GHz 网络则建议使用最小的 20Mhz 频段，以及 1，6 ，11/13 信道。但即使是这样优化体验也未必会很好，会干扰 2.4G Wi-Fi 的东西实在是太多了，所以目前的无线环境笔者极其不推荐使用 2.4GHz 作为家庭主干网络使用。 ([View Highlight](https://read.readwise.io/read/01he4t0e3dd3k1vezn38rkrkph)) #Highlight #[[2023-11-01]]
- 虽然 Wi-Fi 6 技术引入了 BSS Coloring 这样的技术，但在实际环境中没有足够的证据证实 BSS Coloring 有明显的效果增益。所以我们能做的最直接优化就是：错开不同 AP 之间的**频段**或是让 AP 之间产生的信号无法互相干扰。 ([View Highlight](https://read.readwise.io/read/01he4t1eyvbqq6eax39zedwq5z)) #Highlight #[[2023-11-01]]