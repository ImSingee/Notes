title:: Readwise/Highlights/避免 SwiftUI 视图的重复计算
author:: [[fatbobman.com]]
full-title:: 避免 SwiftUI 视图的重复计算
category:: #articles
url:: https://www.fatbobman.com/posts/avoid_repeated_calculations_of_SwiftUI_views/
tags:: #[[favorite]] #[[Swift]] #[[肘子的swift记事本]]
- •   在初始化 State 时，initialValue 仅被保存在 State 实例的内部属性 _value 中，此时，使用 Stae 包装的变量值没有被保存在 SwiftUI 的托管数据池中，并且 SwiftUI 也尚未在属性图中将其作为 Source of Truth 与视图关联起来。
  
  •   当 SwiftUI 将视图加载到视图树时，通过调用 `_makeProperty` 完成将数据保存到托管数据池以及在属性图中创建关联的操作，并将数据在托管数据池中的引用保存在 `_location` （ AnyLocation 为引用类型，为 AnyLocationBase 的子类 ） 中。wrappedValue 的 get 和 set 方法都是针对 `_location` 操作的（ projectedValue 也一样 ）。
  
  •   当 SwiftUI 将视图从视图树上删除时，会一并完成对 SwiftUI 数据池以及关联的清理工作。如此，使用 State 包装的变量，其存续期将与视图的存续期保持完全一致。并且 SwiftUI 会在其变化时自动更新（ 重新计算 ）对应的视图。 ([View Highlight](https://read.readwise.io/read/01haywdza51asajv2r8zb7hv9a)) #Highlight #[[2023-09-23]]
- 对于像 @StateObject 这类针对引用类型的属性包装器，SwiftUI 会在属性图中将视图与包装对象实例（ 符合 ObservableObject 协议 ）的 objectWillChange（ ObjectWillChangePublisher ）关联起来，**在该 Publisher 发送数据时，更新视图**。任何通过 `objectWillChange.send` 进行的操作都将导致视图被刷新，无论实例中的属性内容是否被修改 ([View Highlight](https://read.readwise.io/read/01haywegaq7g4dgtyzwvhyjxbr)) #Highlight #[[2023-09-23]]
- 任何可以在当前视图之外进行改动的 Source of Truth（ 符合 DynamicProperty 协议的属性包装器 ），只要在视图类型中声明了，无论是否在视图 body 中被使用，在它给出刷新信号时，当前视图都将被刷新 ([View Highlight](https://read.readwise.io/read/01haywf8vrbgrhjf9z7mas60rf)) #Highlight #[[2023-09-23]]
- 为了全面地向 SwiftUI life cycle 转型，苹果为 SwiftUI 提供了一系列可以直接在视图中处理事件的视图修饰器，例如：onReceive、onChange、onOpenURL、onContinueUserActivity 等。这些触发器被称为事件源，它们也被视为 Source of Truth ，是视图状态的组成部分。
  
  这些触发器是以视图修饰器的形式存在的，因此触发器的生命周期同与其关联的视图的存续期完全一致。当触发器接收到事件后，无论其是否更改当前视图的其他状态，当前的视图都会被更新。 ([View Highlight](https://read.readwise.io/read/01haywk8we36wpbj38fjyhv5dz)) #Highlight #[[2023-09-23]]
- SwiftUI 会在主线程上运行触发器闭包，如果闭包中的操作比较昂贵，可以考虑将闭包发送到后台队列 ([View Highlight](https://read.readwise.io/read/01haywkk1yj9f23q5exays0nx2)) #Highlight #[[2023-09-23]]