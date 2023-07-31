title:: Readwise/Highlights/25 | 深入解析声明式API（二）：编写自定义控制器 - 深入剖析Kubernetes
author:: [[张磊]]
full-title:: 25 | 深入解析声明式API（二）：编写自定义控制器 - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/42076

- 编写自定义控制器代码的过程包括：编写 main 函数、编写自定义控制器的定义，以及编写控制器里的业务逻辑三个部分 #Highlight #[[2023-06-09]]
- 控制器要做的第一件事，是从 Kubernetes 的 APIServer 里获取它所关心的对象，也就是我定义的 Network 对象。
  这个操作，依靠的是一个叫作 Informer（可以翻译为：通知器）的代码库完成的。Informer 与 API 对象是一一对应的，所以我传递给自定义控制器的，正是一个 Network 对象的 Informer（Network Informer）。 #Highlight #[[2023-06-13]]
- 在 ListAndWatch 机制下，一旦 APIServer 端有新的 Network 实例被创建、删除或者更新，Reflector 都会收到“事件通知”。这时，该事件及它对应的 API 对象这个组合，就被称为增量（Delta），它会被放进一个 Delta FIFO Queue（即：增量先进先出队列）中。
  而另一方面，Informe 会不断地从这个 Delta FIFO Queue 里读取（Pop）增量。每拿到一个增量，Informer 就会判断这个增量里的事件类型，然后创建或者更新本地对象的缓存。这个缓存，在 Kubernetes 里一般被叫作 Store。 #Highlight #[[2023-06-13]]
- 同步本地缓存的工作，是 Informer 的第一个职责，也是它最重要的职责 #Highlight #[[2023-06-13]]
- 所谓 Informer，其实就是一个带有本地缓存和索引机制的、可以注册 EventHandler 的 client #Highlight #[[2023-06-13]]
- Informer 通过一种叫作 ListAndWatch 的方法，把 APIServer 中的 API 对象缓存在了本地，并负责更新和维护这个缓存 #Highlight #[[2023-06-13]]