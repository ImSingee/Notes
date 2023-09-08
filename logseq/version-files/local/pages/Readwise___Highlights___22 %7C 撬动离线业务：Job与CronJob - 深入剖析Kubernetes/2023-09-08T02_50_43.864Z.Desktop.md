title:: Readwise/Highlights/22 | 撬动离线业务：Job与CronJob - 深入剖析Kubernetes
author:: [[张磊]]
full-title:: 22 | 撬动离线业务：Job与CronJob - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/41607

- 早在 Borg 项目中，Google 就已经对作业进行了分类处理，提出了 LRS（Long Running Service）和 Batch Jobs 两种作业形态，对它们进行“分别管理”和“混合调度”。 #Highlight #[[2023-06-09]]
- Job 对象在创建后，它的 Pod 模板，被自动加上了一个 controller-uid=< 一个随机字符串 > 这样的 Label。而这个 Job 对象本身，则被自动加上了这个 Label 对应的 Selector，从而 保证了 Job 与它所管理的 Pod 之间的匹配 #Highlight #[[2023-06-09]]
- Job Controller 之所以要使用这种携带了 UID 的 Label，就是为了避免不同 Job 对象所管理的 Pod 发生重合。需要注意的是，这种自动生成的 Label 对用户来说并不友好，所以不太适合推广到 Deployment 等长作业编排对象上。 #Highlight #[[2023-06-09]]
- 离线计算的 Pod 永远都不应该被重启，否则它们会再重新计算一遍。
  事实上，restartPolicy 在 Job 对象里只允许被设置为 Never 和 OnFailure；而在 Deployment 对象里，restartPolicy 则只允许被设置为 Always。 #Highlight #[[2023-06-09]]
- 定义了 restartPolicy=Never，那么离线作业失败后 Job Controller 就会不断地尝试创建一个新 Pod #Highlight #[[2023-06-09]]
- Job Controller 重新创建 Pod 的间隔是呈指数增加的，即下一次重新创建 Pod 的动作会分别发生在 10 s、20 s、40 s …后。 #Highlight #[[2023-06-09]]
- 如果你定义的 restartPolicy=OnFailure，那么离线作业失败后，Job Controller 就不会去尝试创建新的 Pod。但是，它会不断地尝试重启 Pod 里的容器 #Highlight #[[2023-06-09]]
- Job Controller 实际上控制了，作业执行的并行度，以及总共需要完成的任务数这两个重要参数。而在实际使用时，你需要根据作业的特性，来决定并行度（parallelism）和任务数（completions）的合理取值 #Highlight #[[2023-06-09]]