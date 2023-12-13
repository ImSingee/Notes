title:: Readwise/Highlights/Ab、locust、Jmeter、go压测工具实战
author:: [[微信公众平台]]
full-title:: Ab、locust、Jmeter、go压测工具实战
category:: #articles
url:: http://mp.weixin.qq.com/s?__biz=MzAwNjMxMTgwNw==&mid=2247491311&idx=1&sn=1d89bc13a0081e306e22def8ea503f3a&chksm=9b0e04ffac798de9ecc12d92eb1b7b7497af04f867dfc6652cfbf05c59230b3af2242aea2965#rd
tags:: #[[favorite]]

- 压测类型解释
  
  压测类型
  
  解释
  
  压力测试(Stress Testing)
  
  也称之为强度测试，测试一个系统的最大抗压能力，在强负载(大数据、高并发)的情况下，测试系统所能承受的最大压力，预估系统的瓶颈
  
  并发测试(Concurrency Testing)
  
  通过模拟很多用户同一时刻访问系统或对系统某一个功能进行操作，来测试系统的性能，从中发现问题(并发读写、线程控制、资源争抢)
  
  耐久性测试(Configuration Testing)
  
  通过对系统在大负荷的条件下长时间运行，测试系统、机器的长时间运行下的状况,从中发现问题(内存泄漏、数据库连接池不释放、资源不回收) ([View Highlight](https://read.readwise.io/read/01hf8fgtdaxj8bvsfs9zct3e0w)) #Highlight #[[2023-11-15]]
- 压测名词解释
  
  压测名词
  
  解释
  
  并发(Concurrency)
  
  指一个处理器同时处理多个任务的能力(逻辑上处理的能力)
  
  并行(Parallel)
  
  多个处理器或者是多核的处理器同时处理多个不同的任务(物理上同时执行)
  
  QPS(每秒钟查询数量 Query Per Second)
  
  服务器每秒钟处理请求数量 (req/sec 请求数/秒 一段时间内总请求数/请求时间)
  
  事务(Transactions)
  
  是用户一次或者是几次请求的集合
  
  TPS(每秒钟处理事务数量 Transaction Per Second)
  
  服务器每秒钟处理事务数量(一个事务可能包括多个请求)
  
  请求成功数(Request Success Number)
  
  在一次压测中，请求成功的数量
  
  请求失败数(Request Failures Number)
  
  在一次压测中，请求失败的数量
  
  错误率(Error Rate)
  
  在压测中，请求成功的数量与请求失败数量的比率
  
  最大响应时间(Max Response Time)
  
  在一次事务中，从发出请求或指令系统做出的反映(响应)的最大时间
  
  最少响应时间(Mininum Response Time)
  
  在一次事务中，从发出请求或指令系统做出的反映(响应)的最少时间
  
  平均响应时间(Average Response Time)
  
  在一次事务中，从发出请求或指令系统做出的反映(响应)的平均时间 ([View Highlight](https://read.readwise.io/read/01hf8fh087wjsz42hntqa8teek)) #Highlight #[[2023-11-15]]
- ApacheBench 是 Apache服务器自带的一个web压力测试工具，简称ab。ab又是一个命令行工具，对发起负载的本机要求很低，根据ab命令可以创建很多的并发访问线程，模拟多个访问者同时对某一URL地址进行访问，因此可以用来测试目标服务器的负载压力。总的来说ab工具小巧简单，上手学习较快，可以提供需要的基本性能指标，但是没有图形化结果，不能监控。 ([View Highlight](https://read.readwise.io/read/01hf8fhkmhb62n6p957fvcrr79)) #Highlight #[[2023-11-15]]