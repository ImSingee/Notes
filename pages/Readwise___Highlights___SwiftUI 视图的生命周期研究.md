title:: Readwise/Highlights/SwiftUI 视图的生命周期研究
author:: [[juejin.cn]]
full-title:: SwiftUI 视图的生命周期研究
category:: #articles
url:: https://juejin.cn/post/7035770548915273759
- 在 WWDC 2020 的 [Data Essentials in SwiftUI](Data Essentials in SwiftUI) 专题中，苹果特别指出：**视图的生命的周期与定义它的结构的生命周期是分开的**。 ([View Highlight](https://read.readwise.io/read/01h6x9vcjke9xrzy8s3wv7qz5p)) #Highlight #[[2023-08-03]]
- 通过在结构体的构造函数中添加打印命令，我们很容易就可以获知 SwiftUI 创建了某个结构体的实例。如果你仔细分析构造函数的打印结果，你会发现创建结构体实例的时机和频率远超你的预期。
  
  **想要获取 body 值一定要首先创建实例，但创建实例并非一定有获取 body 值的必要！**
  
  •   在 SwiftUI 生成视图值树时，当发现没有对应的实例时，SwiftUI 会创建一个实例从而获取它的 body 结果。
  •   在生成新的视图值树时，即使已经有可以对应的实例（该实例并未销毁），SwiftUI 仍可能会创建一个新的实例。但 SwiftUI 并非一定会从新的实例中获取 body 结果，如果之前的实例注册过数据依赖，视图值树仍可能会从原来的实例的 body 中获取结果。
  •   在 NavigationView 中，如果在 NavigationLink 中使用了静态的目标视图，SwiftUI 将会为所有的目标视图创建实例，无论是否访问。
  •   在 TabView 中，SwiftUI 在一开始就为所有 tab 对应的视图创建了实例。 ([View Highlight](https://read.readwise.io/read/01h6xare30cn2aafc1en50x18p)) #Highlight #[[2023-08-03]]
- 很多开发者都会碰到某些视图莫名多次初始化的情况。这种情况可能是 SwiftUI 将第一个实例销毁后创建了一个新的实例，也可能是没有销毁第一个实例而直接创建了一个新的实例。
  
  总之，SwiftUI 将根据它自身的需要，可能在任意的时间、创建任意数量的实例。开发者为了适应 SwiftUI 的这种特性，唯一可以做的就是让结构体的构造函数尽可能的简单。除了必要的参数设置外，不要做任何多余的操作。这样即使 SwiftUI 创建了多余的实例，也不会加大系统的负担 ([View Highlight](https://read.readwise.io/read/01h6xasm3bpy805k0xjhwnhjpv)) #Highlight #[[2023-08-03]]