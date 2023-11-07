title:: Readwise/Highlights/关于 Cors
author:: [[iamgodot.com]]
full-title:: 关于 Cors
category:: #articles
url:: https://iamgodot.com/posts/about-cors/

- SOP(Same-origin policy)：浏览器打开的网页只可以对该网页的同源网站发起请求。注意，受约束的主要是脚本代码，不包括图片或者 CSS 等资源（字体文件是个例外）。同源的定义包括三部分，即协议、域名和端口都要保持一致 ([View Highlight](https://read.readwise.io/read/01hekrex62tq4mkq9nzk8zk28x)) #Highlight #[[2023-11-07]]
- WS 连接并不受同源策略的约束，但是在建立连接时服务端也需要判断 headers 中的 `Origin` 是否可以接受 ([View Highlight](https://read.readwise.io/read/01hekrf2q20brhe00cbj5gyhaw)) #Highlight #[[2023-11-07]]