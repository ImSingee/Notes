title:: Readwise/Highlights/一段因 @State 注入机制所产生的“灵异代码”
author:: [[fatbobman.com]]
full-title:: 一段因 @State 注入机制所产生的“灵异代码”
category:: #articles
url:: https://www.fatbobman.com/posts/bug-code-by-state-inject
tags:: #[[inoreader]] #[[博客]] #[[肘子的swift记事本]]

- 针对值类型的主要注入手段 @State，SwiftUI 则为其实现了高度的优化机制（ EnvironmentValue 没有提供优化，行为与引用类型注入行为一致 ）。这意味着，即使我们在定义视图的结构体中声明了使用 @State 标注的变量，但只要 body 中没有使用该属性（ 通过 ViewBuilder 支持的语法 ），即使该属性发生变化，视图也不会刷新。 ([View Highlight](https://read.readwise.io/read/01hd36kt9c59ecmkkcgb5gdahg)) #Highlight #[[2023-10-19]]
- 与大多数的 View Extension 和 ViewModifier 不同，在视图中，通过 `.sheet` 或 `.fullScreenCover` 来声明的模态视图内容代码的闭包，只会在显示模态视图的时候才会被调用、解析（ 对闭包中的 View 进行求值 ）。
  
  而其它通过视图修饰器声明的代码块，则会在主视图 body 求值时进行一定的操作：
  
  •   overlay、background 等，会在 body 求值时调用、解析（ 因为要与主视图一并显示 ）
  •   alert、contextMenu 等则会在 body 求值时调用（ 可以理解为创建实例 ），但只有在需要显示时才进行求值
  
  这就是说，即使我们在 Sheet 代码块的 Text 中添加了对 n 的引用，但只要模态视图尚未显示，则 n 的 _wasRead 仍为 false（ 并没有与视图创建关联 ）。 ([View Highlight](https://read.readwise.io/read/01hd36n5cxk2ye1zg37w7qxs6h)) #Highlight #[[2023-10-19]]
- 当 SwiftUI 创建并显示一个 Sheet 视图时，并非在现有的视图树上创建分支，而是新建一棵独立的视图树。也就是说 Sheet 中的视图与原有视图分别处于不同的上下文中。
  
  > 在 SwiftUI 早期的版本中，对于分别位于不同上下文的独立的视图树，开发者需要显式为 Sheet 视图树注入环境依赖。后期版本已为开发者自动完成该注入工作。 ([View Highlight](https://read.readwise.io/read/01hd36xwyq9ze8xg5brj42aehj)) #Highlight #[[2023-10-19]]
- id 或 onChange 均可以在不添加显示内容的情况下，创建关联 ([View Highlight](https://read.readwise.io/read/01hd377hz8vpqhmm4x69q5bm75)) #Highlight #[[2023-10-19]]