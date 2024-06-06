title:: Readwise/Highlights/集群节点的弹性扩缩
author:: [[微信公众号]]
full-title:: 集群节点的弹性扩缩
category:: #articles
url:: https://www.chenshaowen.com/blog/auto-add-or-remove-nodes-incluster.html
tags:: #[[inoreader]] #[[博客]] #[[陈少文的博客]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)
弹性伸缩主要有三个维度： HPA，根据利用率，自动伸缩 Pod 数量 VPA，根据历史数据，自动设置 Pod 的 Request、Limit CA，根据使用率，自动伸缩 Node 数量 本篇主要讨论的是节点扩缩容部分。 1.

- autoscaler 是 Kubernetes 社区维护的项目。目前 autoscaler 组件已经提供有 VPA、CA 的伸缩能力。EKS、CCE、ACK、TKE 等主流厂商，都是依赖此组件进行 CA 弹性扩容。 ([View Highlight](https://read.readwise.io/read/01hzpez7hvz4f79wyz8kbt1z54)) #Highlight #[[2024-06-06]]
- VPA 与 HPA 都依赖于 Metrics-server 获取监控指标数据 ([View Highlight](https://read.readwise.io/read/01hzpf0afkrv1qdjy87apxn450)) #Highlight #[[2024-06-06]]
- VPA 与 HPA 不要一起使用。这两种方式有冲突，Pod 数量水平扩缩容和 Pod Limit 垂直扩缩容可能被同时触发。 ([View Highlight](https://read.readwise.io/read/01hzpezvk1eb0vp51yvdnnt8ct)) #Highlight #[[2024-06-06]]