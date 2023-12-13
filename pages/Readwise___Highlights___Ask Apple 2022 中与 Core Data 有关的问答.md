title:: Readwise/Highlights/Ask Apple 2022 中与 Core Data 有关的问答
author:: [[fatbobman.com]]
full-title:: Ask Apple 2022 中与 Core Data 有关的问答
category:: #articles
url:: https://www.fatbobman.com/posts/Core-Data-of-Ask-Apple-2022/
tags:: #[[swift]] #[[肘子的swift记事本]]
- 在 Core Data 中开启 Allows External Storage 后，[二进制的读取效率是有保障的](https://www.sqlite.org/intern-v-extern-blob.html)。Core Data 会将大于一定尺寸（ 100KB ）的文件保存在文件系统中，并且仅在 BLOB 字段中保存该文件的文件名。文件被保存在与 SQLite 数据库同级创建的一个隐藏目录（ *EXTERNAL*DATA ）下。很遗憾， Core Data 并没有提供直接返回这些文件 URL 的 API（ 或将 BLOB 转换成以某种 URL 访问的方式 ），因此，当需要将数据以 URL 的方式进行传递时，就需要先将数据写到临时目录后才能进行。因此，是否保存在 Core Data 中，取决于你的具体使用场景。对于需要同步的应用来说，如果采用在 Core Data 中保存 URL 并将数据保存到目录的方式，需要自己实现外置数据的同步。 ([View Highlight](https://read.readwise.io/read/01hd4cbd57g4yhwer0yf1040ht)) #Highlight #[[2023-10-20]]
- 在使用单 Container 的情况下，开发者可以通过 UserDefaults 的方式，控制应用程序在下次冷启动时，是否启用网络同步功能（ 通过设置 cloudKitContainerOptions 与否 ）。 ([View Highlight](https://read.readwise.io/read/01hd4ch0x4f8ec5006h79vbgdt)) #Highlight #[[2023-10-20]]
- 在 SwiftUI 中，我们通常会使用 environment 为视图树注入视图上下文，一旦 loadPersistentStores 出现错误导致 container 无法正常创建，那么调用上下文的注入将会失败，导致无法进入 UI 界面。如需要处理这种情况，就需要在主视图（ 或使用 Core Data 功能的根视图 ）对 Container 的状态进行判断（ 通常是在 loadPersistentStores 闭包中修改状态 ），转入失败提示逻辑。 ([View Highlight](https://read.readwise.io/read/01hd4cj5t3m991z3wqmhz18rcc)) #Highlight #[[2023-10-20]]
- 使用 Transformable 处理包含关联值的枚举有一定的局限性，1、有一定的性能损失；2、无法在 Core Data 中通过谓词对其进行查询。如果你对查询有特别的需求的话，可以将枚举类型中关联数据打散，在实体中，将所有的关联值都定义成属性，并增加一个与枚举对应的类型属性，在托管对象中定义一个枚举类型的计算属性，通过它对数据进行转换。虽然这种方式会浪费一定的存储空间，但具备转换效率高和可查询的优势。 ([View Highlight](https://read.readwise.io/read/01hd4cpeywg3d99bamz025man3)) #Highlight #[[2023-10-20]]
- @FetchRequest 是个让人又爱又恨的东西。它很好用，几乎是在视图中获取数据的首选。但对于 Redux-like 框架的使用者来说，它更像一个破坏者，让大量的数据游离于应用的单一状态之外。让单一状态框架与 @FetchRequest 更好地结合目前仍是一个课题 ([View Highlight](https://read.readwise.io/read/01hd4cqxsnzk51edry2z3k62wj)) #Highlight #[[2023-10-20]]
- Core Data with CloudKit 为了突破 CloudKit API 中对于关系数量（ CKRecord.Reference 不能超过 750 个 ）的限制，采用了双向关联的方式。因此，只有明确逆关系，Core Data with CloudKit 才能在云端创建正确的 Schema。 ([View Highlight](https://read.readwise.io/read/01hd4cx5q028yv77c10bhg7gsn)) #Highlight #[[2023-10-20]]
- 在使用 Core Data with CloudKit 时，对数据模型最好采用只增不改不减的调整原则。如果确实需要对数据模型有破坏性的修改，最好创建两个 Container（ 分别使用不同的 Model ），在使用者确保原始数据都同步到本地后，再将旧数据转换至新的 Container 之上。 ([View Highlight](https://read.readwise.io/read/01hd4d3mr3kpttg0ndy15nr4kj)) #Highlight #[[2023-10-20]]
- 在 Core Data 中，NSManagedObjectID 是线程安全的。通过向其他的上下文传递 ID，并通过该 ID 在不同线程的上下文中获取托管对象，这样可以确保应用不会出现崩溃。 ([View Highlight](https://read.readwise.io/read/01hd4d4ypb166f8xr9fsvm3w5k)) #Highlight #[[2023-10-20]]