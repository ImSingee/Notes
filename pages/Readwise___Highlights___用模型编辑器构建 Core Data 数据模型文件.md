title:: Readwise/Highlights/用模型编辑器构建 Core Data 数据模型文件
author:: [[fatbobman.com]]
full-title:: 用模型编辑器构建 Core Data 数据模型文件
category:: #articles
url:: https://www.fatbobman.com/posts/from-Data-Model-Construction-to-Managed-Object-Instances-in-Core-Data/

- `init(context:)` 要求我们必须首先创建托管对象上下文（ NSManagedObjectContext ），其实，在 Core Data 中，我们完全可以在没有上下文的情况下来创建托管对象实例 ([View Highlight](https://read.readwise.io/read/01har63f42crsg30maqfxfwc59)) #Highlight #[[2023-09-20]]
- 创建托管对象实例的关键并不在于是否有托管对象上下文，而在于告诉 NSManagedObject，该实例对应的是哪个 EntityDescription ([View Highlight](https://read.readwise.io/read/01har64at3ntee3nym2zs6t0e2)) #Highlight #[[2023-09-20]]
- 通过直接从 NSManagedObjectModel 获取对应的 EntityDescription，开发者可以在仅拥有 NSManagedObjectModel 实例的情况下，就具备了创建托管对象实例的条件 ([View Highlight](https://read.readwise.io/read/01har68q9rvw3m59mcahh56nwa)) #Highlight #[[2023-09-20]]