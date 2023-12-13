title:: Readwise/Highlights/解析 SwiftUI 中两处由状态更新滞后引发的严重 Bug | 肘子的Swift记事本
author:: [[fatbobman.com]]
full-title:: 解析 SwiftUI 中两处由状态更新滞后引发的严重 Bug | 肘子的Swift记事本
category:: #articles
url:: https://www.fatbobman.com/posts/serious-issues-caused-by-delayed-state-updates-in-SwiftUI
tags:: #[[favorite]] #[[swift]] #[[肘子的swift记事本]]

- 在通过手势取消 Sheet 时，与其关联的状态是在 Sheet 完成取消动画后才发生了改变。而通过调用环境值或直接修改绑定状态，SwiftUI 则遵循了响应式编程原则，进行了的先调整状态，后更新视图的操作 ([View Highlight](https://read.readwise.io/read/01hd35ze53qymzp7snp2ewxf1b)) #Highlight #[[2023-10-19]]
- NavigationStack 同样也存在类似的情况。运行下面的代码，点击左上方的返回按钮，与 NavigationStack 绑定的 path，直到视图返回上一层后，才会发生改变。通过环境值返回上层视图也同样需要等待视图返回后，才会修改状态。只有直接修改 path，SwiftUI 才能表现的像一个真正的响应式编程框架 ([View Highlight](https://read.readwise.io/read/01hd362nd7chevxxwmfpabbk0n)) #Highlight #[[2023-10-19]]
- 当 showSheet 为真时，为 NavigationStack 添加一个屏蔽手势的前景视图，以确保用户只能在 showSheet 为否时通过滑动返回到上一层视图 ([View Highlight](https://read.readwise.io/read/01hd36672fymm3a3q1r1fg7gwm)) #Highlight #[[2023-10-19]]
- AttributeGraph 是 SwiftUI 用于维护众多数据源与视图之间依赖关系的工具。为了改善 AttributeGraph 的效率并减少其占用空间，SwiftUI 会在一些特定情况下对其进行清理和维护（例如通过 `CFRunLoopObserverCreate` 监听 Runtime 的空闲时机）。
  
  在我们遇到问题的两个场景中，应用程序都恰好使用了导航容器，并且通过特定的操作，使 RunLoop 处于了适合 AG 打包更新的状态。由于在返回上层视图时，状态尚未更新，因此在清理 AG 时（返回动画运行中），会破坏应用程序的 AttributeGraph 完整性，从而导致应用程序死锁或崩溃。
  
  因此，当我们首先更新状态，然后 SwiftUI 再响应该状态的变化（返回上层视图），即使此时对 AG 进行清理，仍将可以保证 AttributeGraph 的完整性，应用自然不会出现问题。 ([View Highlight](https://read.readwise.io/read/01hd36bjj0fmkrz2nw40psgnkr)) #Highlight #[[2023-10-19]]