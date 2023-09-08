title:: Readwise/Highlights/16 | 编排其实很简单：谈谈“控制器”模型 - 深入剖析Kubernetes
author:: [[张磊]]
full-title:: 16 | 编排其实很简单：谈谈“控制器”模型 - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/40583

- Pod 这个看似复杂的 API 对象，实际上就是对容器的进一步抽象和封装而已 #Highlight #[[2023-06-08]]
- 控制器之所以被统一放在 pkg/controller 目录下，就是因为它们都遵循 Kubernetes 项目中的一个通用编排模式，即：控制循环（control loop） #Highlight #[[2023-06-08]]
- 以 Deployment 为例，我和你简单描述一下它对控制器模型的实现：
  Deployment 控制器从 Etcd 中获取到所有携带了“app: nginx”标签的 Pod，然后统计它们的数量，这就是实际状态；
  Deployment 对象的 Replicas 字段的值就是期望状态；
  Deployment 控制器将两个状态做比较，然后根据比较结果，确定是创建 Pod，还是删除已有的 Pod（具体如何操作 Pod 对象，我会在下一篇文章详细介绍）。
  可以看到，一个 Kubernetes 对象的主要编排逻辑，实际上是在第三步的“对比”阶段完成的。
  这个操作，通常被叫作调谐（Reconcile）。这个调谐的过程，则被称作“Reconcile Loop”（调谐循环）或者“Sync Loop”（同步循环）。
  所以，如果你以后在文档或者社区中碰到这些词，都不要担心，它们其实指的都是同一个东西：控制循环。
  而调谐的最终结果，往往都是对被控制对象的某种写操作。 #Highlight #[[2023-06-08]]
- 像 Deployment 定义的 template 字段，在 Kubernetes 项目中有一个专有的名字，叫作 PodTemplate（Pod 模板） #Highlight #[[2023-06-08]]