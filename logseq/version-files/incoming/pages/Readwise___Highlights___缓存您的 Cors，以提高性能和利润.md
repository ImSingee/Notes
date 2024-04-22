title:: Readwise/Highlights/缓存您的 Cors，以提高性能和利润
author:: [[Lenix Blog | 记录－交流－Web开发知识分享]]
full-title:: 缓存您的 Cors，以提高性能和利润
category:: #articles
url:: https://blog.p2hp.com/archives/10021

![](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)
缓存您的 CORS，以提高性能和利润 | CORS 是许多 API 所必需的，但基本配置会产生大量额外请求，从而减慢每个浏览器 API 客户端的速度，并
- 默认情况下，OPTIONS 请求不可缓存，因此您的 CDN 通常不会处理它们，并且每次都必须访问您的服务器。
  
  它们缓存在客户端中，但默认情况下仅缓存 5 秒 ([View Highlight](https://read.readwise.io/read/01hq2amxcrxek12sm19gteh2ax)) #Highlight #[[2024-02-20]]
- 要在浏览器中缓存 CORS 响应，只需将此标头添加到您的预检响应中：
  
    Access-Control-Max-Age: 86400
  
  这是以秒为单位的缓存时间。 ([View Highlight](https://read.readwise.io/read/01hq2anhea6qznt0799pp2ejev)) #Highlight #[[2024-02-20]]