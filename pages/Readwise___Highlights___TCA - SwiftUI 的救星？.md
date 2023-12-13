title:: Readwise/Highlights/TCA - SwiftUI 的救星？
author:: [[王巍 (onevcat)]]
full-title:: TCA - SwiftUI 的救星？
category:: #articles
url:: https://onevcat.com/2021/12/tca-1/
tags:: #[[favorite]] #[[swift]] #[[Swift]]
- 发送消息，而非直接改变状态
  
  任何用户操作，我们都通过向 `viewStore` 发送一个 `Action` 来表达。在这里，当用户按下 “-” 或 “+” 按钮时，我们发送对应的 `CounterAction`。选择将 Action 定义为 enum，可以带来更清晰地表达意图。但不仅如此，它还能在合并 reducer 时带来很多便利的特性，在后续文章中我们会涉及相关话题。虽然并不是强制，但是如果没有特殊理由，我们最好跟随这一实践，用 enum 来表达 Action ([View Highlight](https://read.readwise.io/read/01hdzpp1dcmqzpm395chrbgg84)) #Highlight #[[2023-10-30]]
- `Reducer` 是逻辑的核心部分。它同时也是 TCA 中最为灵活的部分，我们的大部分工作应该都是围绕打造合适的 `Reducer` 来展开的。对于状态的改变，应且仅应在 `Reducer` 中完成 ([View Highlight](https://read.readwise.io/read/01hdzpp912vmg8rca73yew55tp)) #Highlight #[[2023-10-30]]
- 在 Reducer 闭包中改变状态是合法的，新的状态将被 TCA 用来触发 view 的渲染，并保存下来等待下一次 Action 到来。在 SwiftUI 中，TCA 使用 `ViewStore` (它本身是一个 `ObservableObject`) 来通过 `@ObservedObject` 触发 UI 刷新 ([View Highlight](https://read.readwise.io/read/01hdzppmv49yhdw5ks1qkcz0np)) #Highlight #[[2023-10-30]]
- 在 TCA 中，一组关联的 State/Reducer/Action (以及 Environment) 统合起来称为一个 Feature。我们总是可以通过把小部件的 Feature 整体一起，组合形成更大的 Feature 或是添加到其他 Feature 上去，形成一组更大的功能。这种依靠组合的开发方式，可以让我们保持小 Feature 的可测试和可用性。而这种组合，也正是 The Composable Architecture 中 Composable 所代表的意涵。 ([View Highlight](https://read.readwise.io/read/01he1zdj8xth17h1671kgdq7w7)) #Highlight #[[2023-10-31]]
- `Store` 扮演的是状态持有者，同时也负责在运行的时候连接 State 和 Action。Single source of truth 是状态驱动 UI 的最基本原则之一，由于这个要求，我们希望持有状态的角色只有一个。因此很常见的选择是，整个 app 只有一个 Store。UI 对这个 Store 进行观察 (比如通过将它设置为 `@ObservedObject`)，攫取它们所需要的状态，并对状态的变化作出响应。 ... 如果让 View 直接观察整个 Store，在其中某个状态发生变化时，SwiftUI 将会要求所有对 Store 进行观察的 UI 更新，这会造成所有的 view 都对 `body` 进行重新求值，是非常大的浪费。 ... TCA 中为了避免这个问题，把传统意义的 Store 的功能进行了拆分，发明了 `ViewStore` 的概念：
  
  `Store` 依然是状态的实际管理者和持有者，它代表了 app 状态的**纯数据层**的表示。在 TCA 的使用者来看，`Store` 最重要的功能，是对状态进行切分 ... 在将 Store 传递给不同页面时，可以使用 `.scope` 将其“切分”出来 ... 这样可以限制每个页面所能够访问到的状态，保持清晰。 ... TCA 通过 `WithViewStore` 来把一个**代表纯数据**的 `Store` 转换为 SwiftUI 可观测的数据。不出意外，当 `WithViewStore` 接受的闭包满足 `View` 协议时，它本身也将满足 `View`，这也是为什么我们能在 `CounterView` 的 `body` 直接用它来构建一个 View 的原因。`WithViewStore` 这个 view，在内部持有一个 `ViewStore` 类型，它进一步保持了对于 `store` 的引用。作为 `View`，它通过 `@ObservedObject` 对这个 `ViewStore` 进行观察，并响应它的变更。因此，如果我们的 View 持有的只是切分后的 `Store`，那么原始 Store 其他部分的变更，就不会影响到当前这个 Store 的切片，从而保证那些和当前 UI 不相关的状态改变，不会导致当前 UI 的刷新。 #Highlight #[[2023-10-31]]