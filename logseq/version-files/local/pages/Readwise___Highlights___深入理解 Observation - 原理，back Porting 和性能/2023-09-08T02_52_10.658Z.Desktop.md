title:: Readwise/Highlights/深入理解 Observation - 原理，back Porting 和性能
author:: [[王巍 (onevcat)]]
full-title:: 深入理解 Observation - 原理，back Porting 和性能
category:: #articles
url:: https://onevcat.com/2023/08/observation-framework/

- 在订阅引用类型时，`ObservableObject` 扮演着 Model 类型的角色，但它存在一个严重的问题，即无法提供属性粒度的订阅。在 SwiftUI 的 View 中，对 `ObservableObject` 的订阅是基于整个实例的。只要 `ObservableObject` 上的任何一个 `@Published` 属性发生改变，都会触发整个实例的 `objectWillChange` 发布者发出变化，进而导致所有订阅了这个对象的 View 进行重新求值。在复杂的 SwiftUI 应用中，这可能会导致严重的性能问题，并且阻碍程序的可扩展性。因此，使用者需要精心设计数据模型，以避免大规模的性能退化。 ([View Highlight](https://read.readwise.io/read/01h9sa8k46njqdbqdhapsdsnfz)) #Highlight #[[2023-09-08]]