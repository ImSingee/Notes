title:: Readwise/Highlights/iCloud Documents 详解：基础设置与文件操作
author:: [[fatbobman.com]]
full-title:: iCloud Documents 详解：基础设置与文件操作
category:: #articles
url:: https://fatbobman.com/posts/In-Depth-Guide-to-iCloud-Documents
tags:: #[[go inbox]] #[[inoreader]] #[[博客]] #[[肘子的swift记事本]]  
![](https://fatbobman.com/images/In-Depth-Guide-to-iCloud-Documents.jpg)
- 苹果基于 CloudKit 为开发者提供了三个主要的功能：CloudKit（保存结构化数据）、NSUbiquitousKeyValueStore（保存键值数据）以及 iCloud Documents（文件共享与云存储） ([View Highlight](https://read.readwise.io/read/01hhbtf4crdd1ywb20ymzfj09q)) #Highlight #[[2023-12-11]]
- 通常情况下，对于单个文件的变化，我们可以使用 `NSFilePresenter` 来感知变化。 ([View Highlight](https://read.readwise.io/read/01hhbtkxnjp15d2t65tnmszs7v)) #Highlight #[[2023-12-11]]
- `NSFilePresenter` 不仅可以监视单个文件，还可以监视整个目录。然而，由于其提供的信息有限，除非你只需要在目录内容发生变化时得到通知，否则我们通常不会使用它来监控一个目录。 ([View Highlight](https://read.readwise.io/read/01hhbtmk5sz7700xrjbp1zzdhm)) #Highlight #[[2023-12-11]]
- `NSMetadataQuery` 作为一种搜索 Spotlight metadata 的工具，可以用来监控 iCloud 文档目录的文件变化。它允许开发者设置特定的查询条件，监控文件的添加、删除或修改。当检测到文件系统的这些变化时，`NSMetadataQuery` 会发送通知，使开发者能够及时更新应用界面或执行相应的逻辑操作。这一功能在处理文件同步和状态更新时尤其重要。 ([View Highlight](https://read.readwise.io/read/01hhbtn2z388j8e08jx6cxwnna)) #Highlight #[[2023-12-11]]