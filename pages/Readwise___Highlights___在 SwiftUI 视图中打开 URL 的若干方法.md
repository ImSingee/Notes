title:: Readwise/Highlights/在 SwiftUI 视图中打开 URL 的若干方法
author:: [[布局逻辑：]]
full-title:: 在 SwiftUI 视图中打开 URL 的若干方法
category:: #articles
url:: https://www.fatbobman.com/posts/centering_the_View_in_SwiftUI/
tags:: #[[Swift]] #[[肘子的swift记事本]]

- Spacer 是有最小厚度设定的，默认的最小垫片厚度为 8px 。即使文本宽度超出了 HStack 给出的建议宽度，但 HStack 在布局时，仍会保留其最小厚度，导致下图上方的文本无法充分利用矩形视图的宽度。
  
  解决方法为：`Spacer(minLength: 0)`。 ([View Highlight](https://read.readwise.io/read/01hayzc4gr77cmcydeh78d8smm)) #Highlight #[[2023-09-23]]