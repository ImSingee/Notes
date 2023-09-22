title:: Readwise/Highlights/在 SwiftUI 中创建自适应的程序化导航方案
author:: [[fatbobman.com]]
full-title:: 在 SwiftUI 中创建自适应的程序化导航方案
category:: #articles
url:: https://www.fatbobman.com/posts/adaptive-navigation-scheme/

- “程序化导航”就是开发者可以通过代码感知应用当前的导航状态并设置导航目标的方式。从 4.0 版本开始，苹果对之前 SwiftUI 有限的程序化导航能力进行了大幅度的增强，通过引入 NavigationStack 和 NavigationSplitView，开发者基本上具备了全程掌握应用的导航状态的能力，并可在视图内外的代码中实现任意位置的跳转 ([View Highlight](https://read.readwise.io/read/01hayqykn1hh3wqxdxa71nc0y7)) #Highlight #[[2023-09-22]]
- NavigationStack 用“栈”作为导航的状态表述。使用数组（ NavigationPath 也是对 Hashable 数组的一种包装 ）作为状态的表现形式。在栈中推送和弹出数据的过程对应了导航容器中添加和移除视图的操作。弹出全部数据相当于返回根视图，推送多个数据相当于一次性添加多个视图并直接跳转到最后数据所代表的视图。需要特别注意的是，在 NavigationStack 中，根视图是直接通过代码声明的，并不存在于“栈”中 ([View Highlight](https://read.readwise.io/read/01hayqzdw17wrwmg2t12v4q9vs)) #Highlight #[[2023-09-22]]