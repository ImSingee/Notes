title:: Readwise/Highlights/SwiftUI 4.0 的全新导航系统
author:: [[fatbobman.com]]
full-title:: SwiftUI 4.0 的全新导航系统
category:: #articles
url:: https://www.fatbobman.com/posts/new_navigator_of_SwiftUI_4/
- SwiftUI 4.0 中，在 List 绑定了数据后，通过 List 构造方法创建的循环或 ForEach 创建的循环中的内容（ 不能自带点击属性，例如 Button 或 onTapGesture ），将被隐式添加 tag 修饰符，从而具备点击后可更改绑定数据的能力 ([View Highlight](https://read.readwise.io/read/01hayshp60th6kw74smpm3r89f)) #Highlight #[[2023-09-22]]
- 新导航系统也向每一个开发者传递了明确的信号，苹果希望应用能够为 iPad 和 macOS 提供更加符合各自设备特点的 UI 界面。这种信号会越来越强，苹果也为此会提供越来越多的 API ([View Highlight](https://read.readwise.io/read/01haysnc2a2z8k95q8b92crgyz)) #Highlight #[[2023-09-22]]
- 在 SwiftUI 中，无需太在意视图描述的实例（ 注意，不是视图）被多次初始化。创建实例的过程是非常轻量级的（ 因此不要在构造方法中使用任何会造成负担的操作 ）。SwiftUI 可能会出于任意的目的多次创建实例，但通常只会用其中一个实例（通常是最后一个）来生成视图（ 也就是通过该实例的 body 中来创建视图） ([View Highlight](https://read.readwise.io/read/01hayspg59gzmy10q12tbbef0z)) #Highlight #[[2023-09-22]]