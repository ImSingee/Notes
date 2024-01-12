title:: Readwise/Highlights/后台自动化测试与持续部署实践
author:: [[腾讯程序员]]
full-title:: 后台自动化测试与持续部署实践
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MjM5ODYwMjI2MA==&mid=2649770383&idx=1&sn=063430342affbcd5aa78e27060aba0e1&chksm=beccdaf489bb53e290ab12b587153df69a8c15f6452f97fc6dd40b45e1b4982493df618e0003#rd
tags:: #[[inoreader]] #[[star]] #[[微信公众号]]  
![](http://mmbiz.qpic.cn/mmbiz_jpg/j3gficicyOvasKZNMI7ibTSY3FNTmtwb6GPDJOiajYEXs5st4WY2jRibOnSA4M2K8sYViaAf36wjR1ANV08qVps957lQ/0?wx_fmt=jpeg)
- “可见”的前提是输出，提高可观测性就应该多多输出，包括分级的事件日志（Logging）、调用链路追踪信息（Tracing）、各种聚合指标（Metrics），同时也应该提供各类可测试性接口获取内部信息以及系统内部自检信息的上报，以确保影响程序行为的因素可见。另外，有问题的输出要易于识别，无论通过日志自动分析还是界面高亮显示的方式，要能有助于发现。 ([View Highlight](https://read.readwise.io/read/01hjfvpeg8qfyr1gr3gb3expj7)) #Highlight #[[2023-12-25]]
- 上游不必关心具体失败点（即端到端调用的返回信息可能不足以定位失败点），但必须向上游抛出。将失败完全内部消化，只会让上游调用者不知道请求是否成功，或者无法确认应对操作。 ([View Highlight](https://read.readwise.io/read/01hjfvppbbh5jx30y4b1fsxvxy)) #Highlight #[[2023-12-25]]