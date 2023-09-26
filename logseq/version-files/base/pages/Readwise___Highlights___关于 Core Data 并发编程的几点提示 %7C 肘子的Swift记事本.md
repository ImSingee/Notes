title:: Readwise/Highlights/关于 Core Data 并发编程的几点提示 | 肘子的Swift记事本
author:: [[fatbobman.com]]
full-title:: 关于 Core Data 并发编程的几点提示 | 肘子的Swift记事本
category:: #articles
url:: https://www.fatbobman.com/posts/concurrencyOfCoreData/

- 为了将因违反 Core Data 并发规则导致的问题尽量扼杀在开发阶段，在使用 Core Data 框架时，务必在启动参数上添加`-com.apple.CoreData.ConcurrencyDebug 1`。该标志将迫使程序执行到理论上会导致并发异常的 Core Data 代码时，立刻抛出错误。做到及时发现，尽早解决。 ([View Highlight](https://read.readwise.io/read/01harm441e5tjynhdc2d9pp83x)) #Highlight #[[2023-09-20]]
- 在 Core Data 中，我们可以创建两种类型的托管对象上下文（NSManagedObjectContext）——主队列上下文和私有队列上下文 ([View Highlight](https://read.readwise.io/read/01harm5t33mqfdvn5vx788cppr)) #Highlight #[[2023-09-20]]
- Core Data 是为多线程开发而设计的。然而，Core Data 框架下的对象并非都是线程安全的。其中，开发者接触最频繁、使用量最大的托管对象上下文（NSManagedObjectContext）和托管对象（NSManagedObject）恰好都不是线程安全的。
  
  因此，在 Core Data 中进行并发编程时，请确保遵守以下规则：
  
  •   托管对象上下文在初始化时被绑定到了与之相关的线程（队列）。
  •   从托管对象上下文中检索的托管对象被绑定到了所属上下文所在的队列。
  
  通俗的来说，就是上下文只能在自己被绑定的队列上执行才是安全的，托管对象亦然。 ([View Highlight](https://read.readwise.io/read/01harm8g9f57h83zq9w7ag0ydg)) #Highlight #[[2023-09-20]]
- 除非开发者能够绝对保证代码运行于主队列中，且调用的是主队列上下文或属于该上下文的托管对象，否则最保险的方式是使用 perform 来杜绝出错 ([View Highlight](https://read.readwise.io/read/01harmffxmx31wfk763b01trn3)) #Highlight #[[2023-09-20]]
- 因为托管对象是同托管它的上下文绑定在同一个队列上，因此，无法在不同队列的上下文之间传递 NSManageObject。
  
  对于需要在不同的队列中对同一个数据记录进行操作情况，解决方式是使用 NSManagedObjectID。 ([View Highlight](https://read.readwise.io/read/01harmhyhv4qpc5f3aj0a96ktv)) #Highlight #[[2023-09-20]]
- 尽管托管对象上下文和托管对象绝大多数的属性、方法都是非线程安全的，但还是有个别属性是可以在其它线程上安全使用的。比如托管对象的 objectID、managedObjectContext、hasChanges、isFault 等。托管对象上下文的 persistentStoreCoordinator、automaticallyMergesChangesFromParent 等 ([View Highlight](https://read.readwise.io/read/01harmk5f7w0mwqbqt1q96vz7c)) #Highlight #[[2023-09-20]]
- NSManagedObjectID 作为托管对象的紧凑通用标识符，被广泛使用于 Core Data 框架中。例如在批量操作、持久化历史跟踪、上下文通知等等方面都是以 NSManagedObjectID 作为数据标识的。但需要注意的是，它并不是绝对不变的。比如在托管对象创建后尚未持久化时，它将首先产生临时 ID，持久化后再转换回持久 ID；亦或者当数据库的版本或某些 meta 信息发生改变后也可能导致它发生变化（苹果没有公布它的生成规则）。
  
  除非在程序运行时，否则不要将其作为托管对象的唯一标识（类似主键的存在），最好还是通过创建自己的 id 属性（例如 UUID）来实现。
  
  如果确有将 ID 归档的需要，可以将 NSManagedObjectID 转换成 URI 表示 ([View Highlight](https://read.readwise.io/read/01harmm69s3tzmgdj97vzdvma4)) #Highlight #[[2023-09-20]]
- ![image-20211104211037413](https://cdn.fatbobman.com/image-20211104211037413.png) ([View Highlight](https://read.readwise.io/read/01harmmxqqep8zerq896vaswzk)) #Highlight #[[2023-09-20]]
- 在 Core Data 中，我们可以创建两种类型的托管对象上下文（NSManagedObjectContext）——主队列上下文和私有队列上下文。
  
  •   主队列上下文（NSManagedObjectContextConcurrencyType.mainQueueConcurrencyType ）
  
  定义于且只能用于主队列上的托管对象上下文。从事同界面（UI）有关的工作，主要用来从持久化存储中获取 UI 显示所需数据。使用 NSPersistentContainer 来创建 Core Data Stack 时，container 的 viewContext 属性对应的便是主队列上下文。
  
  •   私有队列上下文（NSManagedObjectContextConcurrencyType.privateQueueConcurrencyType）
  
  顾名思义，私有队列上下文在创建时将创建它自己的队列，且只能在它自己创建的队列上使用。主要适用于执行时间较长，如果运行在主队列可能会影响 UI 响应的操作。 ([View Highlight](https://read.readwise.io/read/01hb8ah4d33ns7gvqt79he5yf5)) #Highlight #[[2023-09-26]]
- 通过使用 `DispatchQueue.main.async`、`MainActor.run`都可以确保操作是在主线程上进行 ([View Highlight](https://read.readwise.io/read/01hb8ajks879x1589nqtym6vzf)) #Highlight #[[2023-09-26]]
- 对于私有上下文，由于队列是私有的，只存在于 NSManagedObjectContext 实例的内部，因此只能通过`perform`或`performAndwait`方法来调用它。`perform`和`performAndwait`两者之间的区别为执行指定代码块的方式，异步或同步 ([View Highlight](https://read.readwise.io/read/01hb8ajz4r92gm2petjrzvt4k8)) #Highlight #[[2023-09-26]]
- 因为托管对象是同托管它的上下文绑定在同一个队列上，因此，无法在不同队列的上下文之间传递 NSManageObject。
  
  对于需要在不同的队列中对同一个数据记录进行操作情况，解决方式是使用 NSManagedObjectID。 ([View Highlight](https://read.readwise.io/read/01hb8an0c9wyy5x26n9yjmm6bn)) #Highlight #[[2023-09-26]]
- Core Data 预设了四种合并冲突策略，分别为：
  
  •   NSMergeByPropertyStoreTrumpMergePolicy
  
  逐属性比较，如果持久化数据和内存数据都改变且冲突，持久化数据胜出
  
  •   NSMergeByPropertyObjectTrumpMergePolicy
  
  逐属性比较，如果持久化数据和内存数据都改变且冲突，内存数据胜出
  
  •   NSOverwriteMergePolicy
  
  内存数据永远胜出
  
  •   NSRollbackMergePolicy
  
  持久化数据永远胜出 ([View Highlight](https://read.readwise.io/read/01hb8ap05a54cqyh6bja7srzxe)) #Highlight #[[2023-09-26]]