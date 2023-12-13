title:: Readwise/Highlights/如何在 Core Data 中使用 Derived 和 Transient 属性 | 肘子...
author:: [[fatbobman.com]]
full-title:: 如何在 Core Data 中使用 Derived 和 Transient 属性 | 肘子的Swift记事本
category:: #articles
url:: https://www.fatbobman.com/posts/derivedAndTransient/
tags:: #[[Core Data]] #[[favorite]] #[[swift]]
- 派生数据的值是由 SQLite 直接计算并更新的。
  
  Derived 值的计算是 Core Data 中为数不多的几个直接使用 SQLite 内置机制来完成的操作，并非由 Swift（或 Objective - C） 代码计算而来。 ([View Highlight](https://read.readwise.io/read/01hdzrjxtweyeavvh7r88et01b)) #Highlight #[[2023-10-30]]
- 派生数据什么时候更新
  
  因为是由 SQLite 直接处理的，所以只有在数据持久化时 SQLite 才会更新对应的派生数据。只在上下文中处理不持久化的话是不会获得正确的派生值的。持久化的行为可以是通过使用代码`viewcontext.save()`，或者通过网络同步等方式激发。 ([View Highlight](https://read.readwise.io/read/01hdzrkrv8416fp79cn5b9hhc9)) #Highlight #[[2023-10-30]]
- 对于使用频率不高的属性值，为托管对象创建计算属性或许是更好的选择 ([View Highlight](https://read.readwise.io/read/01hdzrmbka3t0pjby0cnts5vmc)) #Highlight #[[2023-10-30]]
- 托管对象的托管属性（使用@NSManaged 标示）是由 Core Data 来托管的，Core Data 将持续跟踪托管对象中的托管属性来设置相应的状态。使用 Transient 属性，Core Data 在该属性内容发生变化时将托管对象实例的 hasChanges 以及托管对象上下文的 hasChanges 设置为 true，这样无论是@FetchRequest 还是 NSFetchedResultsController 都将会自动反应数据的变化。
  
  因此，当我们不需要持久化但又要能够 dirty 状态时，Transient 就成了唯一的选择 ([View Highlight](https://read.readwise.io/read/01hdzrpjy5d3qzjkj6jkwcy5mh)) #Highlight #[[2023-10-30]]
- 由于 Transient 属性是不可持久化的，因此每当含有 Transient 属性的托管对象实例出现（Fetch、Create、Undo 等情况）在上下文中时，其瞬态属性都将恢复到初始值。
  
  尽管在 Data Model Editor 中，我们可以为 Transient 设置默认值，但很多场景下，我们需要根据情况或其他数据计算并创建 Transient 的初始值。我们可以选择在如下的时机来设置：
  
  •   awakeFromFetch
  
  为惰值状态（Fault）的实例填充数据时
  
  •   awakeFromInsert
  
  创建托管对象实例时
  
  •   awake(fromSnapshotEvents:NSSnapshotEventType)
  
  从快照中载入实例时
  
  在这些方法中设置 Transient 或其他属性时，应使用原始访问器方法来设置数据，避免触发 KVO 观察器通知 ([View Highlight](https://read.readwise.io/read/01hdzrq6mcpb6pw1z605ttw6x4)) #Highlight #[[2023-10-30]]
- NSManagedObjectContext 的 refreshAllObjects 将重置 Transient 内容 ([View Highlight](https://read.readwise.io/read/01hdzrs2ptsch5xw8cc2rqtzby)) #Highlight #[[2023-10-30]]
- 如果仅需要查看托管对象可持久性属性是否有改变可以使用 hasPersistentChangedValues ([View Highlight](https://read.readwise.io/read/01hdzrsbbafcmjttz4t1f6gm4t)) #Highlight #[[2023-10-30]]
- 不要在 NSPredicate 中使用 transient 属性作为限制条件 ([View Highlight](https://read.readwise.io/read/01hdzrs5gtkjf8js9ek3y6aey5)) #Highlight #[[2023-10-30]]