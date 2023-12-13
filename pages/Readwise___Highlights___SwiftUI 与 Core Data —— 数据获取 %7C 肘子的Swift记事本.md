title:: Readwise/Highlights/SwiftUI 与 Core Data —— 数据获取 | 肘子的Swift记事本
author:: [[fatbobman.com]]
full-title:: SwiftUI 与 Core Data —— 数据获取 | 肘子的Swift记事本
category:: #articles
url:: https://www.fatbobman.com/posts/modern-Core-Data-fetcher/

- 对于采用单向数据流方式的开发者，@FetchRequest 就像悬挂在头顶的达摩克利斯之剑，始终让其介怀。类 Redux 框架通常都建议开发者将整个 app 的状态合成到一个单一的结构实例中（ State ，符合 Equatable 协议 ），视图通过观察状态的变化（ 有些框架支持切片式的观察以改善性能 ）而做出响应。而 @FetchRequest 将 app 中状态构成中的很大一部分从独立的结构实例中分拆出来，散落在多个视图之中 ([View Highlight](https://read.readwise.io/read/01hfa18aawe6mrhxpcb24s3y1y)) #Highlight #[[2023-11-16]]
- 似乎 FetchRequest 仍是当前 SwiftUI 中的最优解 ([View Highlight](https://read.readwise.io/read/01hfa18mxqqa0ht0atab1reh4z)) #Highlight #[[2023-11-16]]
- •   创建 NSFetchedResultsController 并获取首批数据的操作是从 onAppear 中发起的，由于 TCA 的 Action 处理机制，数据的首次显示有可感知的延迟（ 效果远不如在视图中通过 FetchRequest 获取 ）
  •   由于 TCA 的 Reducer 无法与视图的存续期自动绑定，上面的可感知延迟在每次触发 onAppear 时都将出现 ([View Highlight](https://read.readwise.io/read/01hfa1azbhjf1sce2d1apnkgvh)) #Highlight #[[2023-11-16]]
- NSFetchedResultsController 通过 NSFetchRequest 从 Core Data 中获取特定的数据集，并将数据集发送至符合 NSFetchedResultsControllerDelegate 协议实例中实现方法，以实现在屏幕上显示数据的目的。
  
  简单地来说，NSFetchedResultsController 就是在首次获取数据集（ performFetch ）后，对 NSManagedObjectContextObjectsDidChange 以及 NSManagedObjectContextDidMergeChangesObjectIDs 通知进行响应，并根据通知内容（ insert、delete、update 等 ）自动更新内存中数据集。为了提高 UITableView（ UICollectionView ）的更新效率，NSFetchedResultsController 会将数据的变化分解成特定的动作（ NSFetchRequestResultType ）以方便开发者快速调整 UITableView 的显示内容（ 无需刷新全部的数据 ）。
  
  遗憾的时，NSFetchedResultsController 为 UITableView 准备的基于 NSFetchRequestResultType 优化操作在 SwiftUI 中并不起作用。在 SwiftUI 中，ForEach 会根据数据标识（ Identifier ）自动处理视图的添加、删除等操作，因此，当在 SwiftUI 中使用 NSFetchedResultsController 时，只需要实现 NSFetchedResultsControllerDelegate 中的 `controllerDidChangeContent(_ controller: )` 方法即可。 ([View Highlight](https://read.readwise.io/read/01hfa1zxg9eqknjqcyh5d3n597)) #Highlight #[[2023-11-16]]
- 在 SwiftUI 中，常见的可以作为 Source of truth 的类型均符合 DynamicProperty 协议。DynamicProperty 协议为数据提供了访问 SwiftUI 托管数据池的能力。通过未公开的 `_makeProperty` 方法，数据可以在 SwiftUI 数据池中申请空间进行保存并读取 ([View Highlight](https://read.readwise.io/read/01hfa20eg2kz9easrhyz187wyc)) #Highlight #[[2023-11-16]]
- DynamicProperty 协议唯一公开的方法是 update ，SwiftUI 将在视图首次被加载以及符合 DynamicProperty 类型中的可引发视图更新的数据发生变化后调用该方法。由于类型的实例在视图存续期中可能会反复地被创建，因此对数据的准备（ 例如首次获取 NSFetchedResultsController 数据、创建订阅关系 ）以及更新工作都应在该方法中进行。 ([View Highlight](https://read.readwise.io/read/01hfa2218b2qw3576emghq940a)) #Highlight #[[2023-11-16]]
- 与 SwiftUI 在视图中更新 Source of truth 的逻辑一致，在一个视图更新周期中，不能对 Source of truth 再度更新。这意味着，尽管我们只能在 update 方法中更改数据，但必须要想办法错开该更新周期。 ([View Highlight](https://read.readwise.io/read/01hfa228zcwvxc7pw5tc1pycbn)) #Highlight #[[2023-11-16]]
- 在 task（ 或 onAppear ）中通过发送 Action 启动一个长期的 Effect ，创建一个 NSFetchedResultsController 从 Core Data 中获取指定谓词的数据集。在 NSFetchedResultsControllerDelegate 实现中将托管对象转换成对应的值类型，并传递给 Reducer 。
  
  在 State 中使用 IdentifiedArray 类型保存数据集，以便通过 .forEach 对 Reducer 进行拆分。
  
  上述做法确实是完全符合 Redux 精神的一种方式，但由于在将托管对象转换到值类型这一过程中我们放弃了 Core Data 的懒加载这一特性，因此一旦数据量较多将导致严重的性能和内存占用问题。因此，只适合数据集较小的使用场景。 ([View Highlight](https://read.readwise.io/read/01hg61ph4pm6gjg75v7c2zny1a)) #Highlight #[[2023-11-26]]