title:: Readwise/Highlights/StateObject 与 ObservedObject
author:: [[fatbobman.com]]
full-title:: StateObject 与 ObservedObject
category:: #articles
url:: https://www.fatbobman.com/posts/StateObject_and_ObservedObject/
tags:: #[[favorite]] #[[Swift]] #[[肘子的swift记事本]]
- 当将视图加载到视图树时，SwiftUI 会根据当时采用的实例将需要绑定的状态（ @State、@StateObject、onReceive 等 ）托管到 SwiftUI 的托管数据池中，之后无论实例再被创建多少次，SwiftUI 始终只使用首次创建的状态。也就是说，为视图绑定状态的工作只会进行一次 ([View Highlight](https://read.readwise.io/read/01hayvzmnbhmz5tsnchd3qd9fn)) #Highlight #[[2023-09-23]]
- 很多情况下，我们需要从视图的角度来理解 SwiftUI 的属性包装器名称，例如：
  
  •   ObservedObject （ 视图订阅某个可观察对象 ）
  •   StateObject（ 订阅某个可观察对象，并持有其强引用 ）
  •   State（ 持有某个值 ） ([View Highlight](https://read.readwise.io/read/01hayw0gptm4x2pc8khzzjrxtc)) #Highlight #[[2023-09-23]]
- 避免创建 `@ObservedObject var testObject = TestObject()` 这样的代码 #Highlight #[[2023-09-23]]
- 避免创建 `@ObservedObject var testObject = TestObject()` 这样的代码 ... ObservedObject 的正确用法为：`@ObservedObject var testObject:TestObject` 。通过从父视图传递一个可以保证存续期长于当前视图存续期的可观察对象，从而避免不可控的情况发生 #Highlight #[[2023-09-23]]