title:: Readwise/Highlights/08｜List：如何实现高性能的无限列表？ - React Native 新架构实战课
author:: [[蒋宏伟]]
full-title:: 08｜List：如何实现高性能的无限列表？ - React Native 新架构实战课
category:: #articles
url:: https://time.geekbang.org/column/article/506825
- React Native 的 ScrollView 组件在 Android 的底层实现用的是 ScrollView 和 HorizontalScrollView，在 iOS 的底层实现用的是 UIScrollView。 #Highlight #[[2023-04-17]]
- 通常评判列表卡顿的指标是 UI 线程的帧率和 JavaScript 线程的帧率。 #Highlight #[[2023-04-17]]
- FlatList 性能还过得去，但我不推荐你优先使用它，只有在你的列表项内容高度不能事先确定，或者不可枚举的情况下使用它；
  RecyclerListView 性能最好，你应该优先使用它，但使用它的前提是可枚举且高度确定或大致确定。 #Highlight #[[2023-04-17]]
- RecyclerListView 用的是 position:absolute 的绝对定位布局，所有的列表项的宽度 width、高度 height、顶部偏移量 top、左边偏移量 left 都得在布局之前计算出来。 #Highlight #[[2023-04-17]]
- 使用列表组件 RecyclerListView 有两个前提：首先是列表项的宽高必须是确定的，或者是大致确定的；第二是列表项的类型必须是可枚举的。这两个前提，都体现在了列表项的布局方法 layoutProvider 中了。 #Highlight #[[2023-04-17]]
- 用户移动 ScrollView 时，相当于往数组 list 后面 push 新的元素对象，而 RecyclerListView 相当于把 list 的第一项挪到了最后一项中。挪动对象位置用到的计算资源少，也不用在内存中开辟一个新的空间。而创建新的对象，占用计算资源多，同时占用新的内存空间。 #Highlight #[[2023-04-17]]
- 在 iOS 中，表单视图 UITableView，实际就是可以上下滚动、左右滚动的可复用列表组件。它可以通过复用唯一标识符 reuseIdentifier，标记表单中的复用单元 cell，实现单元 cell 的复用。
  在 Android 上，动态列表 RecyclerView 在列表项视图滚出屏幕时，不会将其销毁，相反会把滚动到屏幕外的元素，复用到滚动到屏幕内的新的列表项上。这种复用方法可以显著提高性能，改善应用响应能力，并降低功耗。 #Highlight #[[2023-04-17]]
- 在首次渲染时，RecyclerListView 只会渲染首屏内容和用户即将看到的内容，所以它的首次渲染速度很快。在滚动渲染时，只会渲染屏幕内的和屏幕附近 250 像素的内容，距离屏幕太远的内容是空的。 #Highlight #[[2023-04-17]]
- 实际生产中，如果你不填 getItemLayout 属性，不把列表项的高度提前告诉 FlastList，让 FlastList 通过 onLayout 的布局回调动态计算，用户是可以感觉到滑动变卡的。因此，如果你使用 FlastList，又提前知道列表项的高度，我建议你把 getItemLayout 属性填上。 #Highlight #[[2023-04-17]]
- 对于高度未知的情况，FlastList 会启用列表项的布局回调函数 onLayout，在 onLayout 中会有大量的动态测量高度的计算，包括每个列表项的准确高度和整体的平均高度。 #Highlight #[[2023-04-17]]
- 在 onScroll 事件中，我们可以获取到当前滚动的偏移量 offset 等信息。以当前滚动的偏移量为基础，默认向上数 10 个屏幕的高度，向下数 10 个屏幕的高度，这一共 21 个屏幕的内容就是需要按需渲染的区域，其他区域都是无需渲染的区域。这样，即便是异步渲染，我们也不能保证所有 JavaScript 执行的渲染任务都实时地交由 UI 线程处理，立刻展示出来。但因为有这 10 个屏幕的内容作为缓冲，用户无论是向上滚动还是向下滚动，都不至于一滚动就看到白屏。 #Highlight #[[2023-04-17]]
- FlatList 性能比 ScrollView 好的原因是， FlatList 列表组件利用按需渲染机制减少了首次渲染的视图，利用空视图的占位机制回收了原有视图的内存 #Highlight #[[2023-04-17]]
- 列表组件和滚动组件的关键区别是，列表组件把其内部子组件看做由一个个列表项组成的集合，每一个列表项都可以单独渲染或者卸载。而滚动组件是把其内部子组件看做一个整体，只能整体渲染。而自动按需渲染的前提就是每个列表项可以独立渲染或卸载。 #Highlight #[[2023-04-17]]
- FlatList 是 React Native 官方提供的第二代列表组件。FlatList 组件底层使用的是虚拟列表 VirtualizedList，VirtualizedList 底层组件使用的是 ScrollView 组件。因此 VirtualizedList 和  ScrollView 组件中的大部分属性，FlatList 组件也可以使用 #Highlight #[[2023-04-17]]
- 使用 ScrollView 组件时，ScrollView 的所有内容都会在首次刷新时进行渲染。内容很少的情况下当然无所谓，内容多起来了，速度也就慢下来了。 #Highlight #[[2023-04-17]]
- ScrollView 设置固定高度或宽度，而是给其父组件设置固定高度或宽度。
  一般而言，我们会使用安全区域组件 SafeAreaView 组件作为 ScrollView 的父组件，并给 SafeAreaView 组件设置布局属性 flex:1，让内容自动撑高 SafeAreaView。使用 SafeAreaView 作为最外层组件的好处是，它可以帮我们适配 iPhone 的刘海屏，节约我们的适配成本 #Highlight #[[2023-04-17]]
- 所谓的滚动，解决的是在有限高度的屏幕内浏览无限高度的内容的问题。有限高度的容器是 ScrollView，无限高度，或者说高度不确定的内容是 ScrollView 的 children。 #Highlight #[[2023-04-17]]