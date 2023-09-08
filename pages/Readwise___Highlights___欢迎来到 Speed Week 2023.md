title:: Readwise/Highlights/欢迎来到 Speed Week 2023
author:: [[Sam Marsh]]
full-title:: 欢迎来到 Speed Week 2023
category:: #articles
url:: https://blog.cloudflare.com/zh-cn/welcome-to-speed-week-2023-zh-cn/
- 仅像素本身并不能保证更好的图像质量。影响相机性能的因素包括传感器尺寸、镜头质量、图像处理算法以及低光性能。 ([View Highlight](https://read.readwise.io/read/01h3bx5839m4n5f9zvczrkn376)) #Highlight #[[2023-06-20]]
- “使家庭互联网更快与速度几乎毫无关系”，结论是 “尽管带宽起到一定作用，但连接的延迟 —— 真正的互联网 “速度”—— 更为重要***”*** ([View Highlight](https://read.readwise.io/read/01h3bx5vb8m69b10k1gwg15f6y)) #Highlight #[[2023-06-20]]
- 当带宽达到 20 Mbps 左右时，增加带宽并不能大幅提高网页加载速度 ([View Highlight](https://read.readwise.io/read/01h3bx5zt3maczccffphqr93xt)) #Highlight #[[2023-06-20]]
- TTFB 常被用作衡量 Web 服务器响应请求速度的指标，常见的 Web 测试服务也会报告这个指标。理论上，TTFB 越快，Web 服务器性能越好。然而，[多年前](https://blog.cloudflare.com/ttfb-time-to-first-byte-considered-meaningles/)我们就已经知道，TTFB 本身并不能公正地反映实际性能。 ([View Highlight](https://read.readwise.io/read/01h3bx71h7hkcqee95adb6m0vh)) #Highlight #[[2023-06-20]]
- 接收第一个字节并不能确定良好的最终用户体验，因为大多数页面在初始文档请求之后会加载其他阻塞渲染的资源。TTFB 不考虑 HTTP/2 和 HTTP/3 多路复用的好处，即允许浏览器并行加载文件。该指标也不考虑其他功能，例如 [Early Hints](https://developers.cloudflare.com/cache/advanced-configuration/early-hints/)、[Zaraz](https://www.cloudflare.com/en-gb/products/zaraz/)、 [Rocket Loader](https://developers.cloudflare.com/fundamentals/speed/rocket-loader/) 、[HTTP/2](https://blog.cloudflare.com/better-http-2-prioritization-for-a-faster-web/) 和即将推出的 HTTP/3 Prioritization (消除渲染阻塞） ([View Highlight](https://read.readwise.io/read/01h3bx7g7zhwx4azag0q0xh54p)) #Highlight #[[2023-06-20]]
- TTFB 是衡量 Web 服务器能够快速响应请求并在各个网络层之间传输请求到用户浏览器所需时间的指标。它是内容交付速度的一个指标，但它不是衡量终端用户在能够开始与您的网站进行交互之前实际等待多长时间的指标。TTFB 完全忽略了网络层之后发生的所有事情：加载、下载资源、渲染等。换言之，TTFB 不是以用户为中心的度量标准，而是网络度量标准。 ([View Highlight](https://read.readwise.io/read/01h3bx7tdp9na17n3rr8a1fz1q)) #Highlight #[[2023-06-20]]
- 实时用户监控 (RUM) ([View Highlight](https://read.readwise.io/read/01h3bx8nzyr1jq5dmv35napzmq)) #Highlight #[[2023-06-20]]
- 这些关键指标包括*最大内容绘制时间 (Largest Contentful Paint，LCP)、首次输入延迟 (First Input Delay，FID) 和累计布局位移 (Cumulative Layout Shift，CLS)* ([View Highlight](https://read.readwise.io/read/01h3bx92heba9n3ghqre3801gz)) #Highlight #[[2023-06-20]]
- CLS 的一个好或坏的例子是，当您用手机访问一个网站时，点击一个链接，页面在最后一秒移动，这意味着您点击了您不想点击的东西 ([View Highlight](https://read.readwise.io/read/01h3bx9shydandzarrbzzrfvsj)) #Highlight #[[2023-06-20]]
- 从 CDN 网络中每个数据中心的每台服务器中删除已失效文件 (旧文件) 所需的时间称为 “全局清除时间” ([View Highlight](https://read.readwise.io/read/01h3bxc7qeddf3cxapardz2dj2)) #Highlight #[[2023-06-20]]