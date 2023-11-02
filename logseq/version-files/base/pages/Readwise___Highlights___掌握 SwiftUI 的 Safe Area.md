title:: Readwise/Highlights/掌握 SwiftUI 的 Safe Area
author:: [[fatbobman.com]]
full-title:: 掌握 SwiftUI 的 Safe Area
category:: #articles
url:: https://www.fatbobman.com/posts/safeArea
tags:: #[[favorite]] #[[swift]] #[[肘子的swift记事本]]

- 在 UIKit 中，开发者需要利用 safeAreaInsets 或 safeAreaLayoutGuide ，才能确保将视图放置在界面中的可见部分。
  
  SwiftUI 对上述过程进行了彻底的简化。除非开发者明确要求视图突破安全区域的限制，否则 SwfitUI 将尽力确保开发者创建的视图都被布局到安全区域当中。 ([View Highlight](https://read.readwise.io/read/01hd3ct1aq6j67ndh4r4j7630g)) #Highlight #[[2023-10-19]]
- SafeAreaInsets 是用来确定视图安全区域的插入值。
  
  对于根视图来说，safeAreaInsets 反映的是状态栏、导航栏、主页提示器以及 TabBar 等在各个边的占用数值。对于视图层次上的其他视图，safeAreaInesets 只反映视图中被覆盖的部分。如果一个视图可以完整地放置在父视图的安全区域中，该视图的 safeAreaInsets 为 0。当视图尚未在屏幕上可见时，该视图的 safeAreaInset 也为 0 。
  
  在 SwiftUI 中，开发者通常只有在需要获取 StatusBar + NavBar 的高度或 HomeIndeicator + TabBar 的高度时才会使用到 safeAreaInsets 。 ([View Highlight](https://read.readwise.io/read/01hd3ctwsw55hf2h987aqwq718)) #Highlight #[[2023-10-19]]
- SafeAreaRegions 定义了三种安全区域划分：
  
  •   container
  
  由设备和用户界面内的容器所定义的安全区域，包括诸如顶部和底部栏等元素。
  
  •   keyboard
  
  与显示在视图内容上的任何软键盘的当前范围相匹配的安全区域。
  
  •   all（默认）
  
  上述两种安全区域划分的合集 ([View Highlight](https://read.readwise.io/read/01hd3d2ysgjvga7h3wraa2m77c)) #Highlight #[[2023-10-19]]
- 从 iOS 14 开始，SwiftUI 计算视图的安全区域时，将软键盘在屏幕上的覆盖区域（iPadOS 下，将软键盘缩小后键盘的覆盖区域将被忽略）也一并进行考虑。因此，无需使用任何额外的代码，视图便自动获得了键盘避让的能力。但有时，并非所有的视图都需要将软键盘的覆盖区域从安全区域中去除，因此需要正确地设置 SafeAreaRegions ([View Highlight](https://read.readwise.io/read/01hd3d47f29rj0kr826j766j6q)) #Highlight #[[2023-10-19]]
- 通过 safeAreaInset，我们可以缩小视图的安全区域，以确保所有内容都可以按预期显示 ([View Highlight](https://read.readwise.io/read/01hd3d6sqs6b1tgkaksyvprdfz)) #Highlight #[[2023-10-19]]
- 我们是无法通过使用 ignoresSafeArea，让 TextField 在保持对键盘自动避让的情况下，固定底部的状态条。此时，底部状态条的表现肯定不符合设计的初衷。
  
  如果想让底部状态条固定，同时又保持 TextField 的自动避让能力，需要通过监控键盘的状态，做一点额外的操作。 ([View Highlight](https://read.readwise.io/read/01hd3d9z1f70vp5cva2y91c1rg)) #Highlight #[[2023-10-19]]