title:: Readwise/Highlights/PromQL的一些整理
author:: [[首页]]
full-title:: PromQL的一些整理
category:: #articles
url:: https://juejin.cn/post/7108382941897556004

![](https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png)
- Prometheus有四个指标类型
  
  •   **Counter**：计数器，单调递增；
  •   **Gauge**：仪表盘，可增可减的数据；
  •   **Histogram**：直方图，将时间范围内的数据划分成不同的时间段，并各自评估其样本个数及样本值之和，因而可计算出分位数；
  
  可用于分析因异常值而引起的平均值过大的问题；
  
  分位数计算要使用专用的histogram_quantile函数；
  
  •   **Summary**：类似于Histogram，但客户端会直接计算并上报分位数； ([View Highlight](https://read.readwise.io/read/01hg7he0sya3qa2p8zbxmywyr9)) #Highlight #[[2023-11-27]]