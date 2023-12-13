title:: Readwise/Highlights/用 SwiftUI 的方式进行布局 | 肘子的Swift记事本
author:: [[fatbobman.com]]
full-title:: 用 SwiftUI 的方式进行布局 | 肘子的Swift记事本
category:: #articles
url:: https://www.fatbobman.com/posts/layout-in-SwiftUI-way/
tags:: #[[favorite]] #[[swift]] #[[肘子的swift记事本]]  
![](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_182549/layout-in-SwiftUI-way.png)
- `Color.clear.ignoresSafeArea()` 将创建一个与屏幕尺寸一致的视图 ([View Highlight](https://read.readwise.io/read/01hd37kdjdtdcr2emadh6zrj0k)) #Highlight #[[2023-10-19]]
- padding 是在布局层面进行的调整，添加 padding 后的视图，同时也会对其他视图的布局产生影响。offset 则是在渲染层面进行的位置调整，即使出现了位置变化，其他视图在布局时，并不会将其位移考虑在其中。 ([View Highlight](https://read.readwise.io/read/01hd37tg6y1eaymkdaghv1adrf)) #Highlight #[[2023-10-19]]
- 无论为同一个视图添加多少层 overlay（ 或 background ），它们为子视图所提供的建议尺寸都是一致的（ 与原视图的尺寸一致 ） ([View Highlight](https://read.readwise.io/read/01hd37wd0djt45f0tgh9pdn773)) #Highlight #[[2023-10-19]]
- NameSpace + matchedGeometryEffect 是对一组修饰器以及代码的统一封装。通过命名空间以及 ID 来保存特定视图的几何信息（ 位置、尺寸 ），并自动设置给其他有需求的视图 ([View Highlight](https://read.readwise.io/read/01hd37yd0sjr5bq2v53m11w0vm)) #Highlight #[[2023-10-19]]
- 尽管都是垂直构图（ axis 为 vertical ），但 ScrollView 与 VStack 在处理各种尺寸的逻辑上还是有非常大的差别。
  
  ScrollView 会使用父视图给定的全部建议尺寸创建滚动区域，但在询问其子视图的需求尺寸时只会提供理想尺寸。这意味着，在 ScrollView 中，子视图最好明确的设定尺寸（ 提出明确地需求尺寸 ）。因此，在上面的代码中，需要通过屏幕高度和视图一的高度差来计算上方的空白站位视图高度。 ([View Highlight](https://read.readwise.io/read/01hd381bv7103mstk70j2safhj)) #Highlight #[[2023-10-19]]