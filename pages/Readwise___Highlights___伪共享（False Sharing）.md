title:: Readwise/Highlights/伪共享（False Sharing）
author:: [[lotabout.me]]
full-title:: 伪共享（False Sharing）
category:: #articles
url:: https://lotabout.me/2022/False-Sharing-Introduction/
- 首先需要知道一个概念：cache line（缓存行）。缓存从内存加载数据时，并不是只加载我们请求的那部分，而是会多加载一些，例如我们想访问一个 int，只有 4 字节，但缓存会一次性加载 64 字段（不同机器不同）。缓存每次处理的这一 “块” 数据，就叫 cache line。 ([View Highlight](https://read.readwise.io/read/01h2fdbtq3gj5grvbd555fmy4c)) #Highlight #[[2023-06-09]]
- 现代 CPU 体系中，一般每个核都单独配备了自己的（L1）缓存，为了保证多个 CPU 在读写缓存时保证整体数据的一致性，通常需要使用缓存一致性协议，MESI 就是其中一种 ([View Highlight](https://read.readwise.io/read/01h2fdc3h9qetgbdmk4ejpnavk)) #Highlight #[[2023-06-09]]
- 缓存的加载写入以 cache line 为单位，典型的大小为 64B。为了保证多 CPU 下缓存数据的一致性，需要使用一些缓存一致性协议，MESI 是其中的一个经典协议，写入缓存行时会 “踢掉” 其它 CPU 上的缓存。如果两个变量在同一个 cache line 中，且多线程频繁读写这两个变量，会导致多 CPU “互踢” 对方的 cache line，导致性能下降。 ([View Highlight](https://read.readwise.io/read/01h2fdd2vxkgxn363hts0tjbc1)) #Highlight #[[2023-06-09]]