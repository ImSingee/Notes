title:: Readwise/Highlights/掌握 SwiftUI 的 Task 修饰器
author:: [[fatbobman.com]]
full-title:: 掌握 SwiftUI 的 Task 修饰器
category:: #articles
url:: https://www.fatbobman.com/posts/mastering_SwiftUI_task_modifier/
tags:: #[[favorite]] #[[swift]] #[[Swift]]

- SwiftUI 为了判断视图的状态是否发生了改变，它会在视图的存续期内，反复地生成视图类型实例以达成此目的。因此，开发者应避免将一些会对性能造成影响的操作放置在视图类型的构造函数之中，而是在 onAppear 或 task 中进行该类型的操作 ([View Highlight](https://read.readwise.io/read/01hdzp8xtreazd11csqpdxy0kp)) #Highlight #[[2023-10-30]]
- 我们还可以用 task 修饰器创建可以持续运行的异步任务 ([View Highlight](https://read.readwise.io/read/01hdzpc9q9r780nnqvj5w7c7g5)) #Highlight #[[2023-10-30]]
- Swift 采用的是协作式任务取消机制，也就是说，SwiftUI 是无法直接停止掉我们通过 task 修饰器创建的异步任务的。当满足了需要停止由 task 修饰器创建的异步任务条件时，SwiftUI 会给该任务发送任务取消信号，任务必须自行响应该信号并停止作业。
  
  在以下两种情况下，SwiftUI 会给由 task 创建的异步任务发送任务取消信号：
  
  •   视图（ task 修饰器绑定的视图 ）满足 onDisappear 触发条件时
  •   绑定的值发生变化时（ 采用 task 观察值变化时 ） ([View Highlight](https://read.readwise.io/read/01hdzpdjs82bgwsqpcvvh30z81)) #Highlight #[[2023-10-30]]
- 如果我们想让 task 修饰器中的闭包不运行在主线程上，只需要将其声明在没有要求运行于 @MainActor 的地方即可 ([View Highlight](https://read.readwise.io/read/01hdzpfh4qhkpts1mnpe7r1mpd)) #Highlight #[[2023-10-30]]
- wiftUI 对 @State 做了特别的处理，我们可以在任意线程中对其进行安全的修改。但对于其他符合 DynamicProperty 协议的 Source of Truth （ 将 wrappedValue 和 projectedValue 标注为 @MainActor ），在修改前必须切换到主线程上 ([View Highlight](https://read.readwise.io/read/01hdzpg90rt0ya67ag9095prmn)) #Highlight #[[2023-10-30]]
- 通常，我们会用 onReceive 修饰器在视图中响应 Notification Center 的消息。作为一个事件源类型的 Source of Truth，每当接收到一个新的消息时，它都会导致 SwiftUI 对视图的 body 重新求值。 ... 如果，你想有选择性的处理消息，可以考虑用 task 来代替 onReceive #Highlight #[[2023-10-30]]