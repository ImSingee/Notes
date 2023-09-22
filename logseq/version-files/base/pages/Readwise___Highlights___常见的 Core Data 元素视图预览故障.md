title:: Readwise/Highlights/常见的 Core Data 元素视图预览故障
author:: [[fatbobman.com]]
full-title:: 常见的 Core Data 元素视图预览故障
category:: #articles
url:: https://www.fatbobman.com/posts/coreDataInPreview/
- 通常不推荐在视图中直接获取或操作`Core Data`数据（非常简单的应用除外）。将需求发送给`Store`，数据经过处理和加工后再提交给`State`，视图往往使用的并非`Core Data`框架产生的原生数据（比如说托管对象） ([View Highlight](https://read.readwise.io/read/01hayyy7h0bfy2jz9sh9xv3f75)) #Highlight #[[2023-09-23]]
- 在 App 中先对`CoreDataStack`的单例进行引用，然后再注入 ([View Highlight](https://read.readwise.io/read/01hayz182f1d00a6gv79b39t0f)) #Highlight #[[2023-09-23]]
- 尽管 SwiftUI 的 Redux 模式有诸多优点，但由于只存在视图这一种表现形式，因此在视图描述中经常会参杂不少的数据计算、整理的工作。通过为此种类型的视图添加一个专门用来处理数据的父视图，可以有效的将两种逻辑分割开来 ([View Highlight](https://read.readwise.io/read/01hayz4q0a6rnwhzhc1gqga96q)) #Highlight #[[2023-09-23]]