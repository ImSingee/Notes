title:: Readwise/Highlights/SwiftUI 布局 —— 对齐
author:: [[fatbobman.com]]
full-title:: SwiftUI 布局 —— 对齐
category:: #articles
url:: https://www.fatbobman.com/posts/layout-alignment/

- 对齐指南（ alignment guide）用来标识视图间进行对齐的依据 ... 在 SwiftUI 中，分别用 HorizontalAlignment 和 VerticalAlignment 来标识在视图纵轴和横轴方向的参考线，并且可以由两者共同构成对视图中的某个具体的参考点的标识。
  
  HorizontalAlignment.leading 、HorizontalAlignment.center 、HorizontalAlignment.trailing 分别标识了前沿、中心和后缘（ 沿视图水平轴 ）。
  
  VerticalAlignment.top 、VerticalAlignment.center 、VerticalAlignment.bottom 则分别标识了顶部、中心和底部（ 沿视图垂直轴 ）。
  
  而 Alignment.topLeading 则由 HorizontalAlignment.leading 和 VerticalAlignment.top 构成，两条参考线的交叉点标识了视图的顶部—前沿。 #Highlight #[[2023-09-26]]
- •   对齐指南由函数构成
  
  HorizontalAlignment 和 VerticalAlignment 本质上是一个返回类型为 CGFloat 的函数。该函数将返回沿特定轴向的对齐位置（ 偏移量 ） ([View Highlight](https://read.readwise.io/read/01hb86chzs1ddzzpbwsagh60b5)) #Highlight #[[2023-09-26]]
- 正是由于对齐指南由函数构成，因此其先天便具备了灵活的适应能力。在 SwiftUI 中，系统预置对齐指南都提供了对不同布局方向的支持。只需修改视图的排版方向，对齐指南将自动改变其对应的位置 ([View Highlight](https://read.readwise.io/read/01hb86d5ny7ddknjbw6sqf32t7)) #Highlight #[[2023-09-26]]