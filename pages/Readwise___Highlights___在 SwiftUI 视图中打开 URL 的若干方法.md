title:: Readwise/Highlights/在 SwiftUI 视图中打开 URL 的若干方法
author:: [[布局逻辑：]]
full-title:: 在 SwiftUI 视图中打开 URL 的若干方法
category:: #articles
url:: https://www.fatbobman.com/posts/centering_the_View_in_SwiftUI/
tags:: #[[Swift]] #[[肘子的swift记事本]]

- Spacer 是有最小厚度设定的，默认的最小垫片厚度为 8px 。即使文本宽度超出了 HStack 给出的建议宽度，但 HStack 在布局时，仍会保留其最小厚度，导致下图上方的文本无法充分利用矩形视图的宽度。
  
  解决方法为：`Spacer(minLength: 0)`。 ([View Highlight](https://read.readwise.io/read/01hayzc4gr77cmcydeh78d8smm)) #Highlight #[[2023-09-23]]
- 为布局容器设置明确的 spacing 是一个好习惯，在未明确指定时，HStack、VStack 在进行布局时可能会出现某些超出你预期的情况 ([View Highlight](https://read.readwise.io/read/01hb85rfmjt7yn7zc851464pwz)) #Highlight #[[2023-09-26]]
- HStack、VStack 是不会给 Spacer 分配 spacing 的，毕竟 Spacer 本身就代表了空间占用 ([View Highlight](https://read.readwise.io/read/01hb85rs3jqjtffeefxbsj95r6)) #Highlight #[[2023-09-26]]
- 在不给 VStack、HStack 的 spacing 设定明确值的情况下（ spacing = nil ），布局容器将尝试从每个子视图中获取子视图的预设 spacing 值，并将此值应用在与之临近的视图之间。由于不同种类的视图的默认 spacing 并不相同，因此就会出现貌似 spacing 分配不均匀的情况（ 事实上布局容器正确地执行了我们的要求 ）。如果想保证所有的视图之间都能保持一致的间隔，需要给布局容器设置明确的 spacing 值 ([View Highlight](https://read.readwise.io/read/01hb85tvw4xdr6wxtg72p04wng)) #Highlight #[[2023-09-26]]