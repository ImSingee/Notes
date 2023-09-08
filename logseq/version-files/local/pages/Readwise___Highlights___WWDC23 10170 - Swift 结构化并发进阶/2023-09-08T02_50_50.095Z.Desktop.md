title:: Readwise/Highlights/WWDC23 10170 - Swift 结构化并发进阶
author:: [[作者：]]
full-title:: WWDC23 10170 - Swift 结构化并发进阶
category:: #articles
url:: https://xiaozhuanlan.com/topic/3249081765

- 在 Swift 并发框架中，使用 `async let` ，`task group` 任务组，或创建执行独立 (`detached`) 或普通 `Task` 任务来触发并发任务执行。但使用 `async let` 和任务组创建的任务是结构化的，而直接执行 `Task` 和独立 `Task.detached` 任务并非结构化并发。 ([View Highlight](https://read.readwise.io/read/01h5vrnfhkwc3r1d2w2pyt8wxc)) #Highlight #[[2023-07-21]]
- 结构化任务会在执行完毕前一直存在，并当任务超出作用域时自动被取消，这些特性使得结构化任务能够让你非常清晰的理解任务会存在多久，以及在何处结束 ([View Highlight](https://read.readwise.io/read/01h5vrr53xrnm3twhf838ca6dy)) #Highlight #[[2023-07-21]]
- 建议在必要时，优先选择结构化并发任务 ([View Highlight](https://read.readwise.io/read/01h5vrrh2xjmtkd0mq8ws3dh6r)) #Highlight #[[2023-07-21]]
- 任务的取消只是在 Swift 并发任务层面的取消，实际代码中还需要额外的手动抛出异常或释放资源 ([View Highlight](https://read.readwise.io/read/01h5vrvx9cac0k7vshey26a706)) #Highlight #[[2023-07-21]]
- `TaskLocal` 值就是 `Task` 绑定的私有全局值，不同 `Task` 对于该变量的访问将会得到不同结果；`TaskLocal` 值必须被定义为静态存储属性，受限于包装器 `TaskLocal Property wrapper` 的包装器的支持范围，不能定义为顶级属性；`TaskLocal` 对于包装类型限制必须实现 `Sendable` 协议 ([View Highlight](https://read.readwise.io/read/01h5vs00jm60sqsfh6w3ked7ry)) #Highlight #[[2023-07-21]]
- 在执行任务时，父级任务会把 `TaskLocal` 包裹变量传递给子任务，子任务在访问时可以基于编译器优化，具体而言，设计中子任务会从过层层遍历来访问到父任务的 `TaskLocal` 值，但实际实现中， `TaskLocal` 的实现是一个头插法的单链表，查询 `TaskLocal` 就是链表的遍历查询，因此访问到对应的 `TaskLocal` 变量时时间复杂度为 `O(n)`，`TaskLocal` 值在任务结束时被销毁时由于采用头插法，销毁的时间复杂度只有 `O(1)`。 ([View Highlight](https://read.readwise.io/read/01h5vs1jwp0pqknpketfh548tf)) #Highlight #[[2023-07-21]]
- `Task.detached{}` 类型的任务是六亲不认，不仅不能继承 `actor` 的上下文，对于 `TaskLocal` 变量也不能传递 ([View Highlight](https://read.readwise.io/read/01h5vs3gpetb3hkcwat35h54jv)) #Highlight #[[2023-07-21]]