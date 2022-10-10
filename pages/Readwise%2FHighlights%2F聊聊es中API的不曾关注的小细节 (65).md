title:: Readwise/Highlights/聊聊es中API的不曾关注的小细节 (65)
author:: [[微信公众平台]]
full-title:: 聊聊es中API的不曾关注的小细节
category:: #articles
url:: http://mp.weixin.qq.com/s?__biz=Mzk0NTIwMjc0Nw==&mid=2247487007&idx=1&sn=94cd4f19014c2168bcaeee6a959b78ca&chksm=c319bd4bf46e345db659683363b35bb632dd550a6a8c65219ed6bb2a0f6ce8ca92510a33a44b#rd

- es 的 API 请求，`Content-type的header是必填项`。用来约束请求体的文件格式类型，同时也告诉服务端，用什么格式来解析请求体。目前大部分的 API 支持的格式 JSON、YAML，CBOR，SMILE，复杂查询的 API 支持的格式有 NDJSON，JSON，SMILE，其他的格式会被服务器以错误信息返回。同时，`所有的请求体编码格式只支持UTF-8`, 同样，es 的返回信息的编码也是 UTF-8。 ([View Highlight](https://read.readwise.io/read/01g8yqmft63pep2ey682qjvfs4)) #Highlight #[[2022-07-27]]
- 对于 GET 请求，es 是允许进行携带请求体的，并且如果你觉得这个违背了你 RESTFUL 的强迫症，你可以将 GET 请求换成 POST 请求 ([View Highlight](https://read.readwise.io/read/01g8yqt75jmry6cpy92zsqvs0s)) #Highlight #[[2022-07-27]]