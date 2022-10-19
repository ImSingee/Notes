title:: Readwise/Highlights/为什么流媒体直播的延迟很高 - 面向信仰编程
author:: [[draveness.me]]
full-title:: 为什么流媒体直播的延迟很高 - 面向信仰编程
category:: #articles
url:: https://draveness.me/draveness.me/whys-the-design-live-streaming-latency

- 目前主流的音频和视频编码方式是高级音频编码（Advanced Audio Coding，AAC）1 和高级视频编码（Advanced Video Coding，AVC）2，AVC 常被称作 H.264 #Highlight #[[2022-07-17]]
- H.264 是用于视频压缩的业界标准，因为视频是由一帧一帧的图片组成的，而不同的图片之间有较强的连续性，H.264 使用关键帧（Intra-coded picture，I 帧）作为视频的全量数据，不断使用向前参考帧（Predicted picture，P 帧）和双向参考帧（
        
          Bidirectional
          (双向)
        
         predicted picture，B 帧）对全量的数据进行增量式的修改以达到压缩的目的。 #Highlight #[[2022-07-17]]
- H.264 会使用 I 帧、P 帧和 B 帧将视频数据压缩成如上图所示的图片序列，这三种不同的视频帧分别起到不同的作用3：视频帧作用I 帧类似 JPG 或者 BMP 格式的完整的图片P 帧可以使用前一个视频帧的数据压缩数据B 帧可以使用前一个和后一个视频帧压缩数据 #Highlight #[[2022-07-17]]
- 图像组（Group of pictures，GOP）指定了视频帧的组织方式，编码的视频流就由连续的 GOP 组成，因为每个 GOP 都会以关键帧开头，所以 GOP 的大小会影响播放端的延迟。视频占用的网络带宽也与 GOP 息息相关，在通常情况下，移动端直播的 GOP 都会被设置成 1 ~ 4 秒，当然我们也可以使用更长的 GOP 降低占用的带宽4。 #Highlight #[[2022-07-17]]
- 视频编码中的 GOP 决定了关键帧的间隔，也决定了客户端在找到第一个可以播放的关键帧的时间，进而影响流媒体直播的延迟，这种秒级别的延迟对于视频直播业务来说影响还是比较明显的，GOP 的设置是对视频质量、带宽和延迟权衡的结果。 #Highlight #[[2022-07-17]]
- 音视频数据传输可以选择使用不同的应用层协议，最常见的两种网络协议是实时消息传输协议（Real Time Messaging Protocol，RTMP）和 HTTP 实时流式传输协议（HTTP Live Streaming，HLS），这两种网络协议分别使用不同的方式传输音视频流，我们可以认为 RTMP 协议基于音视频流分发数据，而 HLS 协议基于文件分发音视频数据 #Highlight #[[2022-07-17]]
- RTMP 协议是基于 TCP 的应用层协议，它将音视频流切分成片段进行传输，在默认情况下音频数据段的大小为 64 字节，视频数据段的大小是 128 字节5。使用 RTMP 协议时，所有的数据都会块（Chunk）的形式传输： #Highlight #[[2022-07-17]]
- 每个 RTMP 的数据块都包含 1 ~ 18 字节的协议头，协议头由基本协议头（Basic Header）、消息头（Message Header）和扩展时间戳（Extended Timestamp）三个部分组成，除了包含块 ID 和类型的基本协议头之外，其他的两个部分都是可以省略的，进入传输阶段的 RTMP 协议只需要 1 字节的协议头，这也意味着极低的额外开销 #Highlight #[[2022-07-17]]
- TMP 以及 HTTP-FLV 等基于流分发的协议切片粒度很小，延迟在 3s 以下，可以看做实时的传输协议；而 HLS 协议是基于文件分发的协议，它的切片粒度很大，在实际使用中可能会带来 20 ~ 30s 的延迟 #Highlight #[[2022-07-17]]
- 需要注意的是基于文件分发不等价于高延迟，分片的大小才是决定延迟的关键因素，在保证分片小的同时降低额外开销是实时流媒体传输协议需要考虑的问题 #Highlight #[[2022-07-17]]