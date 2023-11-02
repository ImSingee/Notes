title:: Readwise/Highlights/Rust中Future执行底层探秘
author:: [[JasonkayZK]]
full-title:: Rust中Future执行底层探秘
category:: #articles
url:: https://rustcc.cn/article?id=720e246e-4378-47c2-ad7d-76ba05a1b05e
tags:: #[[favorite]] #[[inoreader]] #[[read]] #[[rust.cc]]

- Rust中的异步`async/.await`代码在编译时会被转换为Future+Waker+Executor的事件状态机的执行 ([View Highlight](https://read.readwise.io/read/01hdeenabpk5751d48gnhr9fdr)) #Highlight #[[2023-10-23]]
- 对于一个 Async 系统而言，主要分为这么几个部分：
  
  •   **执行器 Executor：本质上是一个 mpsc Channel 的 Receiver + Waker 的实现；**
  •   **唤醒器 Waker：Future 通过调用 waker 中的 wake 函数通知 Executor 调用 poll 函数推动 Future 任务完成；**
  •   **Future（不知道怎么翻译，应该是期货的意思）：包装 Task 以及 Waker，由 Executor 推动惰性执行；**
  •   **任务 Task：实际异步执行的任务，被包装在 Future 中，任务完成后通过 Future 返回结果；** ([View Highlight](https://read.readwise.io/read/01hdeesby6hyyvqhyd8qehnpj6)) #Highlight #[[2023-10-23]]
- Rust 的 `Future` 是惰性的，只有调度器调用了在 Future Trait 中定义的 `poll` 方法，才会真正被执行；
  
  其中一个推动它的方式就是在 `async` 函数中使用 `.await` 来调用另一个 `async` 函数；
  
  但是那些最外层的 `async` 函数，谁来推动它们运行呢？答案就是：执行器 `executor` ！
  
  **任何一个异步系统，最终都需要一个统一的 Executor 来统一管理这些 Future 任务** ([View Highlight](https://read.readwise.io/read/01hdeet1cb7bc2jctw1rj4cag5)) #Highlight #[[2023-10-23]]
- 最开始，Executor 会先 `poll` 一次 `Future` ，后面就不会主动去 `poll` 了，而是等待 `Future` 通过调用 `wake` 函数来通知它可以继续，它才会继续去 `poll`（类似于 Event-Loop） ([View Highlight](https://read.readwise.io/read/01hdeetyjt3qg5a5r852xt11j4)) #Highlight #[[2023-10-23]]
- 在异步场景下，Waker 是一个很重要的组件，因为我们不能让 Executor 不断的去轮询所有的 Future 来查看任务是否完成，而是应当在 Future 执行完成后主动的向 Executor 报告！
  
  并且通常情况下，对于 `Future` 来说，第一次被 `poll` 时无法完成任务是很正常的；因此它需要确保在未来一旦准备好时，可以通知 Executor 再次对其进行 `poll`，进而继续往下执行，该通知就是通过 `Waker` 类型完成的； ([View Highlight](https://read.readwise.io/read/01hdeexjpkkcmxzdyh9kh3b4b5)) #Highlight #[[2023-10-23]]