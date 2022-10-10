title:: Readwise/Highlights/12 | 异常重试：在约定时间内安全可靠地重试 - RPC实战与核心原理 (65)
author:: [[何小锋]]
full-title:: 12 | 异常重试：在约定时间内安全可靠地重试 - RPC实战与核心原理
category:: #articles
url:: https://time.geekbang.org/column/article/211261

- 综上，我们可以总结出：在使用 RPC 框架的时候，我们要确保被调用的服务的业务逻辑是幂等的，这样我们才能考虑根据事件情况开启 RPC 框架的异常重试功能。这一点你要格外注意，这算是一个高频误区了。 #Highlight #[[2022-06-17]]