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
- 复合视图的 firstTextBaseline 和 lastTextBaseline 计算方法为：
  
  •   对于 firstTextBaseline ，如果复合视图中（ 容器中 ）的子视图存在**显式值非 nil** 的 firstTextBaseline ，则返回显式值位置最高的 firstTextBaseline，否则返回默认值（ 通常为 bottom ）
  •   对于 lastTextBaseline ，如果复合视图中（ 容器中 ）的子视图存在**显式值非 nil** 的 lastTextBaseline ，则返回显式值位置最低的 lastTextBaseline，否则返回默认值（ 通常为 bottom ） ([View Highlight](https://read.readwise.io/read/01hb86jv494jvr0efg3yfshn20)) #Highlight #[[2023-09-26]]
- SwiftUI 4.0 新增的 Layout 协议，让开发者拥有了自定义布局容器的能力 ([View Highlight](https://read.readwise.io/read/01hb86kaa9e2c5ck75zewkbcp5)) #Highlight #[[2023-09-26]]
- Layout 协议提供了两个不同参数类型的 explicitAlignment 方法，分别对应 VerticalAlignment 和 HorizontalAlignment 类型。explicitAlignment 让开发者可以站在布局的角度来设置对齐指南的显式值。explicitAlignment 的默认实现将为任何的布局指南的显式值返回 nil 。 ([View Highlight](https://read.readwise.io/read/01hb86khgassf727yeyge18epb)) #Highlight #[[2023-09-26]]