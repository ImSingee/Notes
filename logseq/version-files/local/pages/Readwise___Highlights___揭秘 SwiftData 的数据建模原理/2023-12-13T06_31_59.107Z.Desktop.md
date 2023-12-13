title:: Readwise/Highlights/揭秘 SwiftData 的数据建模原理
author:: [[fatbobman.com]]
full-title:: 揭秘 SwiftData 的数据建模原理
category:: #articles
url:: https://www.fatbobman.com/posts/unveiling-the-Data-Modeling-Principles-of-SwiftData
tags:: #[[favorite]] #[[go inbox]] #[[inoreader]] #[[博客]] #[[肘子的swift记事本]]

- 由于 SwiftData 允许数据模型的属性声明为更为复杂的类型（枚举，符合 Encoded 协议的结构体等），因此，SwiftData 在构建模型时将通过给定的 KeyPath 来映射对应的存储类型，而且每个 PropertyMetadata 并非一定对应 SQLite 中的一个字段（可能会根据类型创建多个字段）。 ([View Highlight](https://read.readwise.io/read/01hcy4we7jw703xpfkghr9mpy1)) #Highlight #[[2023-10-17]]
- 在调用 createBackingData 时，SwiftData 不能仅依赖当前类提供的 schemaMetadata 创建实例。换句话说，只有在创建了 ModelContainer 实例后，createBackingData 才能正确地构建 PersistentModel 实例。这一点与 Core Data 不同，Core Data 可以仅通过 NSEntityDescription 信息（无需加载 NSManagedObjectModel）创建实例。 ([View Highlight](https://read.readwise.io/read/01hcy4zzncmgvh6tb31tby8nhf)) #Highlight #[[2023-10-17]]