title:: Readwise/Highlights/深入理解 Observation - 原理，back Porting 和性能
author:: [[王巍 (onevcat)]]
full-title:: 深入理解 Observation - 原理，back Porting 和性能
category:: #articles
url:: https://onevcat.com/2023/08/observation-framework/

- 在订阅引用类型时，`ObservableObject` 扮演着 Model 类型的角色，但它存在一个严重的问题，即无法提供属性粒度的订阅。在 SwiftUI 的 View 中，对 `ObservableObject` 的订阅是基于整个实例的。只要 `ObservableObject` 上的任何一个 `@Published` 属性发生改变，都会触发整个实例的 `objectWillChange` 发布者发出变化，进而导致所有订阅了这个对象的 View 进行重新求值。在复杂的 SwiftUI 应用中，这可能会导致严重的性能问题，并且阻碍程序的可扩展性。因此，使用者需要精心设计数据模型，以避免大规模的性能退化。 ([View Highlight](https://read.readwise.io/read/01h9sa8k46njqdbqdhapsdsnfz)) #Highlight #[[2023-09-08]]
- 在 `View` 的 `body` 中，通过 getter 访问实例上的属性时，Observation Registrar 会记录这次访问，并为当前 `View` 注册一个能够刷新自身的方法；而当通过 setter 修改属性的值时，Registrar 会从记录中找到对应的刷新方法并执行，进而触发 View 的重新求值和刷新 ([View Highlight](https://read.readwise.io/read/01h9x999e1nm5dz48q91w8k200)) #Highlight #[[2023-09-09]]