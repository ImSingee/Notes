title:: Readwise/Highlights/大多数人一辈子都接触不到淘宝双 11 流量冲击？那么我们怎么去锻炼这样的能力？ - V2ex
author:: [[v2ex.com]]
full-title:: 大多数人一辈子都接触不到淘宝双 11 流量冲击？那么我们怎么去锻炼这样的能力？ - V2ex
category:: #articles
url:: https://www.v2ex.com/t/830461
- 根据我的经验总结，只需要牢记一些常识就行：
  1. mysql 的 tps 你就按 5000 算，每秒超过 5000 请求，直接用 myql 肯定不行
  2. 单机 redis 的 qps 可以到 100k ，把一些数据 /缓存，存到 redis ，能有效提高并发
  3. 利用消息队列实现削峰，实现生产与消费的解耦
  4. 保证处理逻辑可以并行，可以扩展，谨慎使用锁
  5. 尽量将服务做成无状态可扩展的，把状态扔给 redis 或者其他高效的存储 #Highlight #[[2022-01-25]]