title:: Readwise/Highlights/Core Data
author:: [[王 巍]]
full-title:: Core Data
category:: #books

- Core Data 其实并不是一个传统意义上的数据库，而是一套对象图管理系统。这套系统默认使用 SQLite 作为底层存储，通过由低向高地将相关的管理组件构建为一个栈，来提供缓存和对象管理机制。这让我们对于数据对象的存储和访问都能够高效而有序地进行 #Highlight #[[2023-07-24]]
- 修改数据模型会导致 app 在下次运行时崩溃 #Highlight #[[2023-07-25]]
- 如果把 Core Data 当成一个对象图管理系统来正确使用的时候，得益于内建的缓存和对象管理机制，它在很多方面实际上反而更快 #Highlight #[[2023-07-24]]
- 抽象级别更高的 API 可以让你专注于优化 app 里关键部分的性能，而不是从头开始来实现如何持久化 #Highlight #[[2023-07-24]]
- 一个基本的 Core Data 栈由四个主要部分组成：托管对象 (managed objects)(NSManagedObject)，托管对象上下文 (managed object context)(NSManagedObjectContext)，持久化存储协调器 (persistent store coordinator) (NSPersistentStoreCoordinator)，以及持久化存储(persistent store) (NSPersistentStore) #Highlight #[[2023-07-24]]
- Core Data 的灵活性是一把双刃剑，当你选择了更多的上下文以及协调器时，也意味着你为项目引入了更多的复杂度。尽可能在能够满足需求的前提下，选择最简单的 Core Data 栈设置，是高效正确使用 Core Data 的关键 #Highlight #[[2023-07-24]]
- NSDate 或者 Date 只是一个与基准时间的间隔距离的双精度值的封装，它是自 UTC 时间 2001 年 1 月 1 日午夜以来的秒数 #Highlight #[[2023-07-27]]
- 其实 Core Data 的数据模型文件 (.xcdatamodeld) 就是一个包 (package)，在它内部还可以继续包含多个表示不同数据模型版本的 .xcdatamodel 包。当编译应用时，数据模型会被编译到一个 .momd 包中去，在其中每一个数据模型版本有一个对应的 .mom 文件，当前数据模型版本还会有一个变种的优化 (.omo) 文件。在数据迁移的过程中，我们可以从这个包中加载之前任意一个版本的数据模型。
  ￼ #Highlight #[[2023-07-30]]
- 托管对象上下文记录了它管理的对象，以及你对这些对象的所有操作，比如插入，删除和修改等。每个被托管的对象都知道自己属于哪个上下文 #Highlight #[[2023-07-24]]
- 对于二进制值，Core Data 支持所谓的外部存储 (external storage)，可以通过设置 NSAttributeDescription 实例的 allowsExternalBinaryDataStorage 属性，或者是在 Data Model Inspector 里勾上 “Allows External Storage” 的复选框来开启。它可以让 Core Data 根据数据的大小来决定是把二进制数据存储在 SQLite 里还者是存储成外部文件。底层的 SQLite 可以直接在数据库里高效地存储不超过大概 100 kb 的二进制数据。一般来说这个选项通常都应该被开启。 #Highlight #[[2023-07-27]]
- Core Data 存储结构化的数据。所以为了使用 Core Data，我们首先需要创建一个数据模型 (或者是大纲 (schema)，如果你乐意这么叫它的话) 来描述我们的数据结构 #Highlight #[[2023-07-24]]
- 在你的模型对象里包含很大的二进制数据的话，将它们保持在内存里的开销会变得很昂贵。如果在大多数情况下，这个实体的二进制数据和其他属性需要一同被获取的话，那么把它们存储在一起是合理的。否则，可能更好的做法是把二进制数据存储为另一个单独的实体，并在两个实体之间创建一个关系 #Highlight #[[2023-07-27]]
- 获取请求的默认行为是返回托管对象 (其实还可以是其他的结果类型 (result types)，不过我们暂时不考虑它们)。这些对象默认是惰值，也就是一些没有填充实际数据的轻量级对象。它们承诺会在你需要的时候去加载数据 #Highlight #[[2023-07-28]]
- 如果上下文里已存在具有相同的对象 ID 的对象，那么这个已有的对象将会被使用。这就是所谓的唯一性：Core Data 保证在一个托管对象上下文里，无论你通过什么方式，只会得到唯一一个表示某块数据的对象。换句话来说：也就是在相同的托管对象上下文里，表示相同数据的对象的指针地址也是相等的。 #Highlight #[[2023-07-28]]
- 当我们更改了某个实体的类名或它的某个二进制属性的内部格式时，我们必须为这个实体或是这个二进制属性指定一个唯一的哈希修饰符 (hash modifier)。然后 Core Data 就会将这个修饰符加入到版本哈希值的计算过程中去。这样一来尽管我们并没有对数据库结构做出更改，还是可以创建一个和旧版本不兼容的新版本。 #Highlight #[[2023-07-30]]
- 实体 (entity) 是数据模型的基石。正因为如此，一个实体应该代表你的应用程序里有意义的一部分数据 #Highlight #[[2023-07-24]]
- 在 NSManagedObject 子类里， Core Data 会为表示实体的属性动态地实现 setter 和 getter 方法。这就是为什么我们要在 Swift 里把这些属性的声明标记为 @NSManaged 的原因：这会告诉编译器 Core Data 将在运行时提供这些存取方法。这些存取方法处理了所有 Core Data 相关的任务，比如从存储里加载惰值数据，记录更改等等。 #Highlight #[[2023-07-27]]
- 在 Core Data 中数据迁移是这样的：它会将数据从一个 SQLite 数据库移动到另一个数据库，这两个数据库使用的是不同的数据模型。 #Highlight #[[2023-07-30]]
- 我们有两种截然不同的方法来创建映射模型。如果两个数据模型版本之间的改动只是一些简单变换的话，就可以直接让 Core Data 自动推断映射模型。这种方式叫轻量级数据迁移。如果你想要在新的数据模型上做更复杂的更改，那就必须创建一个自定义的映射模型。 #Highlight #[[2023-07-30]]
- 当你在协调器上调用 addPersistentStoreWithType(ofType:configurationName:at:options:) 这个方法并且将 nil 做为 options 参数传入时，如果指定的数据库无法匹配这个协调器的数据模型版本的话，程序就会抛出一个异常。这时候就需要使用数据迁移来将 SQLite 数据库转变成协调器能够理解的格式。 #Highlight #[[2023-07-30]]
- 把一个属性标记为可索引时，Core Data 会在底层 SQLite 数据库表里创建一个索引。索引可以加速这个属性的搜索和排序，但代价是插入数据时的性能下降和额外的存储空间 #Highlight #[[2023-07-24]]
- 临时属性是指不会被持久化的属性。临时属性的数据在托管对象变成惰值或者生命周期结束时会被丢弃掉。你可以在 Data Model Inspector 里将任意属性标记为临时属性，这会把它变成一个只在内存里存在的属性。 #Highlight #[[2023-07-27]]
- 通常情况下，在你的托管对象子类里，如果需要额外而又非持久化的属性，那么你应该总是使用临时属性。当然，这并不适用于计算属性 (computed properties) 这种没有实际存储的属性。 #Highlight #[[2023-07-27]]
- 实体只是描述了哪些数据属于 mood 对象。为了在代码中能使用这个数据，我们需要一个具有和实体里定义的属性们相对应的属性的类 #Highlight #[[2023-07-24]]
- 遵循 NSCoding 协议的数据类型都可以直接声明为可转换的属性。不过，你也可以指定一个自定义值转换器 (value transformer) 来用更高效的格式存储你的数据。 #Highlight #[[2023-07-27]]
- 一个好的实践是按它们所代表的东西来命名这些类，并且不用添加类似 Entity 这样的后缀 #Highlight #[[2023-07-24]]
- 在任何情况下，最重要的是你的自定义数据类型是不可变的值类型。在数据发生变化时，你需要为它设置一个新的值。只有这样 Core Data 才能感知到变化，并在下次保存的时候把它持久化。换句话说，如果你在 Core Data 的属性上设置一个可变对象，然后修改这个可变对象里的某些地方，那么 Core Data 将无法跟踪这种变化。反过来，这还会导致不确定行为以及可能造成数据丢失。 #Highlight #[[2023-07-27]]
- 执行普通的获取请求后 (即其中的 returnsObjectsAsFaults 和 includesPropertyValues 属性都是 true)，所有你请求的数据会被加载到行缓存里。这样的结果是，填充返回的惰值的开销是相当廉价的 — 这是在较高内存占用和更快填充返回的惰值之间的一个权衡。
  但是，通过设置 includesPropertyValues 属性为 false，你可以改变特定获取请求的默认行为，防止它从数据库里加载除了对象 ID 之外的任何属性值。只获取对象 ID 本身可以非常有用。例如，Core Data 的批量获取的机制就是利用了这一点。 #Highlight #[[2023-07-28]]
- 如果将 includesPropertyValues 设置为 false ，那么填充一个用这样的请求取回的对象的惰值，会导致另一次到 SQLite 的往返，除非这部分数据已经通过另一种方式取回了。这种获取请求的前期开销比较低，但是使用对象的开销可能会很昂贵。 #Highlight #[[2023-07-28]]
- 一般而言，最好的做法是，只有当你真正需要的时候，才把对象里的属性和方法公开地暴露出来 #Highlight #[[2023-07-24]]
- 参照完整性是数据库系统确保不同表里的关系保持一致的重要概念。因为一个双向关系的一端可能会因为强制刷新而被破坏掉。 #Highlight #[[2023-07-28]]
- 仅获取对象的 ID 很简单：只需把结果类型设置为 .managedObjectIDResultType，获取请求将返回 NSManagedObjectID 实例的数组而不是通常的托管对象。但是请注意，这样的获取请求仍然会从数据库中加载匹配行的所有数据，并更新协调器的行缓存。如果你想防止这种行为，那么你还是需要把获取请求的 includesPropertyValues 属性设为 false。 #Highlight #[[2023-07-28]]
- 模型里的实体可以按层次进行组织：一个实体可以是另一个实体的子实体，子实体会继承父实体的属性和关系。 #Highlight #[[2023-07-25]]
- 创建子实体的唯一原因是，你需要在单一的获取请求的结果或者实体的关系里得到不同类型的对象 #Highlight #[[2023-07-25]]
- 为一个抽象父实体定义一个类，甚至定义一个 NSManagedObject 的子类并不是必须的。但通常实践中我们会这样做，因为我们可以用它来作为包含所有子实体的获取请求的结果类型 #Highlight #[[2023-07-25]]
- 虽然 Country 和 Continent 是 Region 实体的子实体，但是我们没有让 Country 和 Continent 成为 Region 的子类。如果这样有助于我们的目的，我们也可以这么做。尽管从原则上来讲，类的层次结构和实体的层次结构是彼此独立的 #Highlight #[[2023-07-25]]
- 共同父实体的子实体将共享一个公共的数据库表，所有兄弟实体 (sibling entities) 的所有属性都会被合并进这个表里。尽管 Core Data 在与你交互的层级上隐藏了这一点，但 Core Data 将不得不从一个巨大的数据库表里读取所有数据，所以这很快会成为一个性能和内存的问题 #Highlight #[[2023-07-25]]
- 除非你需要在相同的获取请求结果或者同一个关系里得到多种类型的对象，否则最好还是避免使用子实体 #Highlight #[[2023-07-25]]
- 多个类继承一个相同的父类，而又不把它们变成相同实体的子实体的做法是完全可以接受的。但是在 Swift 里，使用一个共同的协议而不是子类化的做法可能会更好。 #Highlight #[[2023-07-25]]
- 我们首先尝试寻找一个优化模型文件 (文件后缀为 .omo)，如果找不到的话再尝试使用二进制的 plist 模型文件 (文件后缀为 .mom)。优化模型文件加载会稍微快一些。最新的模型版本会以 .omo 文件的形式存在，而其他老的版本则不会。 #Highlight #[[2023-07-30]]
- 一个获取 (Fetch) 请求描述了哪些数据需要被从持久化存储里取回，以及它们是如何被取回的 #Highlight #[[2023-07-24]]
- 每次你执行一个获取请求，Core Data 会穿过整个 Core Data 栈，直到文件系统。按照 API 约定，获取请求就是往返的：从上下文，经过持久化存储协调器和持久化存储，降入 SQLite，然后原路返回 #Highlight #[[2023-07-24]]
- 虽然获取请求是强力的工具，但是它们需要做很多的工作。执行一个获取请求是个相对昂贵的操作 #Highlight #[[2023-07-24]]
- 要慎重地使用获取请求，因为它们可能是一个潜在的性能瓶颈。通常，我们可以通过遍历关系来避免使用获取请求 #Highlight #[[2023-07-24]]
- Core Data 会自动地更新反向关系：当我们设置 Country 的 continent 时，在 Continent 上对应的 countries 属性会被自动更新，反之亦然。需要注意的是，反向关系的更新不会立刻发生，而是在上下文的 processPendingChanges() 方法被调用时更新。你并不需要手动调用这个方法；Core Data 会在适当的时候处理好这些事情。 #Highlight #[[2023-07-25]]
- 在数据模型里定义的所有这些关系并不是必须要加到你的 NSManagedObject 子类里的。我们在这里这样做的原因是因为我们希望能在代码里使用它们。只要在数据模型里定义了反向关系，就算子类里没有定义它们，Core Data 也会工作得很好。 #Highlight #[[2023-07-25]]
- 在内部的 SQL 存储里，“多对多”关系要比“一对一”或者“一对多”关系更复杂。这是因为它们用了连接表 (join table) #Highlight #[[2023-07-25]]
- 临时属性不会被保存到持久性存储里，它们只在对象存活的时候才存在。但是它们仍然会参与惰值化的过程：如果对象被变成惰值，临时属性的值将会被清除掉。 #Highlight #[[2023-07-27]]
- “对多”关系有两种形式：无序的和有序的。默认情况下，“对多”关系没有特定的顺序，通过它们的数据类型就可以看出来。标准的“对多”关系是用 Set 类型的属性来表示的。这可以保证包含的对象的唯一性，但是没有特定的顺序。 #Highlight #[[2023-07-25]]
- 你还可以创建单向关系 (unidirectional relationships)，也就是没有对应的反向关系的关系。但是，你应该非常小心这种情况，因为这可能导致你的数据集出现参照完整性问题 (referential integrity problem)。这意味着在数据库中的一个条目可能指向另一个已经不存在的条目。当你删除一个被其他对象引用，但是却没有指回这些对象的关系的对象时，就可能会发生这种情况。通常情况下，Core Data 会保证对象被删除时关系能正确地更新。但一旦你使用了单向关系，那么你就必须要自己处理这些关系的更新。
  你应该只有在你完全确信你永远不会删除一个缺少反向关系的对象时才考虑使用单向关系。 #Highlight #[[2023-07-25]]
- 我们在 getter 里使用 willAccessValue(forKey:) 和 didAccessValue(forKey:) 方法，在 setter 里使用 willChangeValue(forKey:) 和 didChangeValue(forKey:) 方法，对 primitiveColors 属性的访问进行了包装。 这允许 Core Data 在幕后执行通常的整理工作。 #Highlight #[[2023-07-27]]
- awakeFromInsert() 方法在对象的生命周期里只会被调用一次，正如其名，也就是对象第一次被创建时候 #Highlight #[[2023-07-27]]
- 你应该总是在后台队列上执行数据迁移并且将进度报告给用户。 #Highlight #[[2023-07-30]]
- 一个更微妙的陷阱就是，更改索引 (包括属性上的索引以及复合索引) 并不等于更改数据模型。因此你必须为更改的属性或实体指定一个哈希值，从而使得 Core Data 在数据迁移过程中做出正确的操作。 #Highlight #[[2023-07-30]]
- 当我们遍历数组时，Core Data 会额外加载几批所需数据之外的对象，并以最近使用作为原则来保持少量批次，而较早的批次将会被释放。因此，使用 fetchBatchSize 允许我们通过一种内存非常高效的方式来遍历超大的对象集合。
  值得注意的是，将分批次获取和设置 returnsObjectsAsFaults 为 false 组合起来使用是有意义的。这是因为我们一次只加载一小批的对象的数据。而且，我们很有可能是要立即使用这批数据 #Highlight #[[2023-08-01]]
- 异步获取请求也可以和 NSProgress API 集成，你可以用它来监测进度或者取消正在进行的请求。如果你需要在大数据集上执行昂贵的获取请求，这就会很有用了。举一个例子，比如搜索时你使用了很复杂的谓词，可能等到搜索结果回来的时候你已经不再需要它们了。 #Highlight #[[2023-08-01]]
- 为生产环境中所有可能发生的数据迁移路径编写自动化测试。数据迁移是一个典型的无法使用手动测试的例子。 #Highlight #[[2023-08-01]]
- performChanges，调用了上下文的 perform(_ block:) 方法，它将执行作为参数传入的函数，然后保存上下文。调用 perform 方法能确保我们是从正确的队列里访问上下文和它的托管对象。当我们需要添加第二个在后台队列里的上下文的时候，这就显得很重要了。 #Highlight #[[2023-11-16]]
- ManagedObjectObserver 类注册了“对象已改变”的通知 (.NSManagedObjectContextObjectsDidChange) - Core Data 在每次上下文里的托管对象发生变化的时候都会发出这个通知。 #Highlight #[[2023-11-16]]
- 保存上下文会触发一个 .NSManagedObjectContextDidSave 通知，这个通知包含自从上次保存以来所有更改的信息。 #Highlight #[[2023-11-24]]
- 只有持久化存储拥有数据表中对象的主键的最终决定权 #Highlight #[[2023-11-27]]
- 在你插入一个新的对象时，上下文会使用一个临时 ID，这个 ID 在保存请求执行过程中被会替换掉。(你可以使用 NSManagedObjectID 的 isTemporaryID 标志位来检查一个 ID 是否是临时的) #Highlight #[[2023-11-27]]
- 如果行缓存里的数据已更改，保存会失败或者根据上下文的合并策略进行处理 #Highlight #[[2023-11-27]]
- 在验证代码中调用 Core Data 属性的 setter 方法需要格外小心。因为验证代码会反复运行，直到达到一个稳定的状态 (也就是没有新的更改被引入了)。如果你总是在验证过程中弄“脏”托管对象，那么你可能会陷入一个死循环。 #Highlight #[[2023-11-27]]
- 除了属性层级的验证，你还可以实现操作跨属性的验证规则。为了实现这个目的，你需要覆盖 validateForInsert，validateForUpdate 或者 validateForDelete 方法。你应该在你的覆盖方法的实现里调用 super，不然属性级别的验证不会发生。 #Highlight #[[2023-11-27]]
- Core Data 采用一种叫乐观锁 (optimistic locking) 的方法来处理冲突。这种方法之所以被称为乐观，是因为它把冲突的检查推迟到了上下文被保存的时候。 #Highlight #[[2023-11-27]]
- 每个上下文都维护着每个托管对象数据的快照，这些快照表示的是每个对象最近的已知的持久化状态。当你保存一个上下文时，这个快照会被用来和行缓存里的数据以及在 SQLite 里的数据进行比较，以确保一切都没有更改。如果确实有更改，Core Data 会使用上下文的合并策略来解决冲突。如果你不指定合并策略，Core Data 的默认策略会直接抛出一个 NSManagedObjectMergeError。这个错误将包含关于哪里出错的详细信息。 #Highlight #[[2023-11-27]]
- 批量更新绕过了托管对象上下文和持久化存储协调器，它会直接对 SQLite 数据库进行操作。如果你用这种方式更新一个属性或者删除一条记录，无论是托管对象上下文还是协调器，都不会感知到这个变化。如果你不做一些额外的工作，这意味着所有常用的更新用户界面的机制 (比如 NSFetchedResultsController) 都将无法正常工作。另外，如果你没有考虑到要手动进行更改的话，你可能会在后续保存时遇到冲突。 #Highlight #[[2023-11-27]]
- 假设我们需要访问托管对象的一个属性 (比如 Person 对象的 name 属性)。如果这个托管对象已经被完全实体化 (materialized，即不是一个惰值 (fault))，那么我们的操作会停留在上下文这一层。在我们简化过的性能模型中，这将会消耗 1 个单位的时间或者能量。如果这个托管对象是一个惰值，但是数据存在于持久化存储协调器的行缓存中，访问这个属性的操作将会降入协调器层，其结果是操作的开销比起上下文层会多大约 10 倍：也就是 10 个单位的时间或者能量。如果行缓存中也没有这个数据，我们将不得不从 SQL 存储中进行检索；与最开始的情况相比，操作的开销大约是 100 倍：也就是 100 个单位的时间或者能耗。 #Highlight #[[2023-11-27]]
- 托管对象上下文和托管对象是完全无锁的，因为它们必须只被一个特定的队列访问。与这一层的交互是非常快的。如果托管对象被完全实体化 (即不是惰值) 了，访问或修改托管对象的属性的性能就和访问普通对象实例的属性如出一辙。 #Highlight #[[2023-11-27]]
- 持久化协调器是线程安全的，所以为了保证线程安全，Core Data 需要加一些锁。如果能非竞态 (uncontended) 地访问协调器，那么操作同样会非常快。其访问的性能与非竞态自旋锁相当。
  译者注：非竞态锁指的是第一次请求加锁就能完成的锁，而不存在不同线程同时请求同一个锁的情况。 #Highlight #[[2023-11-27]]
- 两个或多个托管对象上下文使用同一个持久化存储协调器并试图同时访问这个协调器时，任意指定的时间里只可能有一个上下文能访问它，其他的上下文则会被阻塞住，直到这个上下文访问结束 #Highlight #[[2023-11-27]]
- SQLite 使用文件系统锁来保证多个实例能访问同一个数据库文件。是否是竞态访问对 SQL 层的性能特征表现影响很大。此外，请记住 SQLite 会从文件系统中读取数据，所以只要执行 SQL 语句，我们其实进行的是文件系统数据的读写。即便是现代的操作系统，访问文件系统的速度也会比访问内存要慢得多，而且这会是数量级的差距。 #Highlight #[[2023-11-27]]
- 对性能影响最大的是获取请求 (fetch request)。获取请求会遍历整个 Core Data 栈。一个获取请求，按照它的 API 约定，就算是从托管对象上下文中发起的，也会查询到文件系统的 SQLite 存储。
  因此获取请求天生就很昂贵。我们后面会探讨如何确保获取请求尽可能的廉价。尽管是一句漂亮话，仍然需要指出的是：最快的获取请求就是不发请求。换个说法就是：尽可能地避免获取请求，可以获得最大的性能。如果你在本章中只能记住一点，那就是它了。
  如何避免获取请求取决于你当前的实际情况，不过我们会介绍一些通常的模式，比如：使用关系，或者使用一个类似单例的对象。 #Highlight #[[2023-11-27]]
- Core Data 强制对象的唯一性。如果 Person 对象已经在上下文里注册过，那么 city 对象的 mayor 属性会指向这个实例。如果这个 Person 对象已经被完全实体化了 (非惰值)，它的 mayor 属性将会指向这个被完全实体化的 Person 对象 #Highlight #[[2023-11-27]]
- 即便是最坏的情况下遍历关系的开销也会和执行获取请求相同；但是我们有很大的几率不需要进入协调器和 SQL 层。 #Highlight #[[2023-11-27]]
- 相对小的数据集。要么事先你就知道整个 app 的对象数量不会超过几百个，要么你知道特定的实体的对象数目不会超过几百个 #Highlight #[[2023-11-27]]
- 当我们通过获取请求从 Core Data 获取多个对象时，我们几乎总是希望以特定的顺序来将这些对象展示给用户。而给获取请求设置合适的 NSSortDescriptor 来让 SQLite 进行排序几乎每次都是最好的做法。 #Highlight #[[2023-11-27]]
- 通过使用 Instruments，我们可以精细地调整批次的大小 (我们将在性能分析这一章中更多地讨论这一点)。通常保守的猜测会花费我们很长的时间，一个经验法则是，适合一屏显示项数的 1.3 倍会是一个合适初始值。需要记住的重要一点是，一屏显示所需的数量是设备相关的。对于 table view，我们可以直接用屏幕的高度除以行高，然后乘以 1.3 就很合适了，尽管 table view 的高度实际上会比屏幕高度小那么一些。 #Highlight #[[2023-11-27]]
- 获取请求返回的对象默认没有填充它们的属性，这些数据只会加载到行缓存里。只有设置 returnsObjectsAsFaults 为 false 的时候，对象才会被完整填充，也就是说，它将不是一个惰值 #Highlight #[[2023-11-27]]
- 对于对一关系，获取请求会把目标对象的 ID 作为获取的一部分取出。而对于对多的关系，则不会做额外的工作。
  当我们访问关系的另一端的对象时，会触发一个惰值；对于对多的关系，这甚至会导致双重惰值。 #Highlight #[[2023-11-27]]
- 是否添加索引，取决于，在你的应用程序中，获取数据与修改数据频繁程度的比例。如果更新或者插入非常频繁，最好不要添加索引。如果更新或插入不频繁，而查询和搜索非常频繁，那么添加索引会是个好主意。
  还有一个因素是数据集的大小：如果实体的数目相对较小，添加索引并不能给我们带来多少帮助，因为数据库扫描所有数据也很快。但是如果数量巨大，添加索引就可能可以显著改善性能。 #Highlight #[[2023-11-27]]
- 由于 SQLite 查询规划器 (query planner) 的实现方式，对于一个给定的获取请求，SQLite 一次只能使用一个索引 #Highlight #[[2023-11-27]]
- 在上下文层中插入新对象或者修改已有对象的操作开销都很小，因为这些操作只接触到了托管对象上下文层，没有接触到 SQLite 层。
  只有当这些改动被持久化到存储层的时候开销才会相对较高。因为持久化操作会涉及到协调器层和 SQL 层。也就是说，调用 save() 是非常昂贵的。 #Highlight #[[2023-11-27]]
- 保存一个大的改动会增加内存消耗，因为上下文会一直记录这些改动直到它们被保存；同时，与保存小的改动相比，保存大的改动需要消耗更多的 CPU 资源和内存。不过一般而言，保存一个大的改变集会比保存很多小的改动集代价要更低。 #Highlight #[[2023-11-27]]
- save() 方法是事务性的 (transactional)。也就是说，save() 操作是一个单独的逻辑单元，它会对所有在上下文中的数据进行处理，在执行 save() 时所有的更改都会被提交。如果保存不成功，所有的保存都不会起效，并不会出现部分内容保存成功的情况 #Highlight #[[2023-11-27]]
- 这是有效的数据冗余，用数据库的术语来说就是去规范化。虽然我们曾经被多次教导过，数据冗余是不好的，但是在这种情况下，去规范化是能显著提高获取性能的一个有力工具。
  在你应用这个技巧的时候，确保你的模型类能自动更新这个冗余的属性是非常重要的，在你的应用程序的其他地方它们应该是只读的。 #Highlight #[[2023-11-27]]
- 让去规范化的属性始终保持最新有时会比较棘手，给它们添加自动化测试用例会是个好主意 #Highlight #[[2023-11-27]]
- SQLite 使用 WAL 机制来实现原子事务，WAL 机制的原理是：修改并不直接写入到数据库而是写入到一个称为 WAL 的文件中；如果事务失败，WAL 中的记录会被忽略，撤销修改；如果事务成功，它将在随后的某个时间被写回到数据库文件中，提交修改。同步 WAL 文件和数据库文件的行为被称为检查点。 #Highlight #[[2023-11-27]]
- 我们的同步架构的一个主要设计目标是确保清晰的关注点分离 (separation of concerns, SoC)，即每个小的部分只承担非常有限的责任 #Highlight #[[2023-11-27]]
- 术语远程标识符 (remote identifier) 指的是 CloudKit 用来标识特定的对象的标识符 #Highlight #[[2023-11-27]]
- 我们总共会有三个模组：应用程序本身，模型，以及同步代码。这种设置在较高层级上有利于关注点分离 — 在这种设置下，我们会不太容易去创建任何这三个模块之间的紧耦合 #Highlight #[[2023-11-27]]
- Core Data，连同 SQLite，提供了 ACID 属性：也就是原子性 (Atomicity)，一致性 (Consistency)，隔离性 (Isolation) 和持久性 (Durability)。这个同步架构试图为整个同步过程引入一些 ACID 的特性。同步代码是以一种就算在 app 崩溃或者被系统挂起的时候也能工作的方式来构建的。即便我们碰巧处于离线状态，我们的本地数据也将保持一致，一旦 app 重新启动或者网络恢复，我们就可以继续工作。 #Highlight #[[2023-11-27]]
- 同步协调器 (Sync Coordinator)实现了一个上下文属主 (Context Owner) 协议 (在图表的底部)。上下文属主协议有两个主要职责：它合并 UI 和同步托管对象上下文之间的更改，并把由 UI 产生的本地更改提供给同步架构 #Highlight #[[2023-11-27]]
- 上下文属主的职责有两个。首先，当 UI 将更改保存到对象时，我们希望同步代码能自动处理这些更改。与此同时，我们还希望同步代码运行在和 UI 代码不同的队列里，这可以尽量减少对 UI 响应产生的影响。 #Highlight #[[2023-11-27]]
- 创建单线程架构的同步代码是一个重要的设计决定：同步代码的性能主要被网络请求的速度所限制，其次是文件系统的 I/O 操作，不过 I/O 的影响相对要低得多。对两者而言，是否使用多线程并没有什么区别。单线程架构带给我们的是一个简单的代码库 — 它很容易被理解与测试。 #Highlight #[[2023-11-27]]
- 除了创建视图上下文外，我们还创建一个后台上下文，这两个上下文使用一个相同的，由持久化容器提供的持久化存储协调器 #Highlight #[[2023-11-27]]
- Core Data 有一个简单直接的并发模型：上下文以及它的托管对象必须而且只能够在它所处的队列中被访问。而其他处于上下文下面的那些组件 — 比如，持久化存储协调器，持久化存储，以及 SQLite — 是线程安全的并且可以在多个上下文之间共享。 #Highlight #[[2023-11-28]]
- 当使用容器 (NSPersistentContainer) 的 viewContext 时，我们使用的是第一种并发类型：.MainQueueConcurrencyType，这种类型会将上下文绑定到主线程上。第二种类型：.PrivateQueueConcurrencyType，会将上下文绑定到一个由 Core Data 自行管理的后台线程上。比如当你在 NSPersistentContainer 对象上调用 newBackgroundContext 或 performBackgroundTask 时返回的上下文就是这种类型。 #Highlight #[[2023-11-28]]
- 在访问上下文和它的托管对象之前，一定要调用 performBlock(_:) 把任务调度到上下文所处的队列上执行。这是避免并发所带来的问题的最有效方法。 #Highlight #[[2023-11-28]]
- 不同上下文中的操作必须完全分离，上下文之间的数据交换只能通过“上下文已保存”通知进行，切记不要在不同上下文之间随意调度 #Highlight #[[2023-11-28]]
- 当一个上下文保存的时候，它会把它的更改推入持久化存储协调器，并从那里进入持久化存储。但是保存并不会把持久化存储协调器传上来的更改传播给其他的托管对象上下文。 #Highlight #[[2023-11-28]]
- 为了协调两个上下文的更改，我们可以监听从一个上下文到另一个上下文的上下文已保存通知，并处理这些合并通知。 #Highlight #[[2023-11-28]]
- 如果对象 ID 所处的上下文连接到的是另一个持久化存储协调器，那么在当前上下文中，你必须通过该对象的 URIRepresentation 来重建对象的 ID。可以使用持久化存储协调器的 managedObjectID(forURIRepresentation:) 方法来实现这个操作 #Highlight #[[2023-11-28]]
- 两个上下文并没有共享同个协调器，所以它们无法共享行缓存 #Highlight #[[2023-11-28]]
- 不同上下文中的操作必须完全分离，进行任何操作前必须调度到上下文所处的队列中，在不同的上下文之间只能传递对象的 ID #Highlight #[[2023-11-28]]
- 当合并完成后，processPendingChanges 方法会被调用，同时发送一个“对象已更改”通知。(针对一个合并操作，Core Data 可能会发送多个对象已更改通知，所以你不能假设一个合并操作只会发送一个通知。) #Highlight #[[2023-11-28]]
- 位于“上下文已保存”通知中的更改 (比如更新那些并没有在目标上下文中注册的对象)，如果没有影响到目标上下文的话，那么这些改动就不会出现在“对象已更改”通知中 #Highlight #[[2023-11-28]]
- 因为我们在 perform 中进行合并更改操作，所以它是异步的。而 Core Data 的上下文已保存通知是同步发出的，这就会导致观察这个通知的那部分代码会在 save 方法返回前被执行。也就是说在完成保存操作以及在另一个队列上下文中完成合并更改操作之间会有一定的时间差 #Highlight #[[2023-11-28]]
- Core Data 允许多种不同的设置方式，例如：可以多个上下文连接到一个协调器，可以多个上下文一个接一个互相连接，也可以使用多个协调器，还可以使用多个持久化存储等等。理论上讲可以有无限多种不同的设置方式，每一种方式都有自己的优缺点 #Highlight #[[2023-11-28]]
- Core Data 并发设置的默认方法：多个上下文连接到一个协调器 #Highlight #[[2023-11-28]]
- 持久化存储的唯一标识符是对象 ID 的一部分，所以在一个栈中创建的 ID 无法直接在另一个拥有不同协调器的栈中使用。你必须调用协调器的 managedObjectIDForURIRepresentation(_:) 方法将来自另一个协调器的对象 ID 的 URI 表示 (URIRepresentation) 转换成在当前协调器上有效的对象 ID #Highlight #[[2023-11-28]]
- 嵌套上下文另一个不错的用例就是使用临时的子上下文。你可以将另一个主线程上下文与应用程序的视图上下文连接，成为其子上下文。然后在此上下文上进行数据更改，这样就不会影响到应用的其他部分。然后你可以决定是否要持久化这些更改，或者直接丢弃它们。 #Highlight #[[2023-11-28]]
- 除非使用异步获取操作，否则获取操作都是同步的，它们会阻塞所有位于始发上下文 (执行获取操作的那个上下文) 和协调器之间的所有父上下文 #Highlight #[[2023-11-28]]
- 当你保存一个上下文，并且这个上下文连接了持久化存储协调器时，你可以使用上下文的合并策略来处理冲突。但是当你保存一个子上下文时，合并策略会被忽略，并且父上下文中的数据会被覆盖。 #Highlight #[[2023-11-28]]
- 对象 ID，也就是 NSManagedObjectID，是 Core Data 的核心组件。它是那些位于同一个持久化存储协调器下的所有上下文中对象的唯一标识。至少在嵌套上下文出现之前可以这么讲 #Highlight #[[2023-11-28]]
- 当你在一个托管对象上下文中创建了一个新对象时，这个对象会拥有一个临时的 ID。你可以通过检查 NSManagedObjectID 的 isTemporaryID 标识来区分临时 ID 和永久 ID。当你成功保存了上下文，临时 ID 会被更换成另一个永久 ID，这个永久 ID 是由 SQLite 数据库分配的。从这之后，你就可以在那些连接到同一个协调器上的上下文中使用这个永久 ID 来作为对象在整个持久化存储中的唯一标识了。如果两个对象表示的是同样的数据，那么它们的 ID 也是相同的。(你甚至可以跨协调器使用这些 ID，只要通过使用 ID 的 URIRepresentation 来进行简单的转换就行。) #Highlight #[[2023-11-28]]
- 在嵌套上下文中这种情况会稍微有些不同。哪怕上下文已经保存，位于子上下文中的对象还是会保留它们的临时 ID。只有在根上下文 (直接连接到持久化存储协调器的上下文) 中的那些对象才会在上下文保存后获得永久 ID。所以上面提到的：在同一个协调器下如果两个对象表示相同的数据那么它们的 ID 也相同这个结论在此并不成立。 #Highlight #[[2023-11-28]]
- 你可以等效地使用对象的临时或永久 ID 来获取相应的对象，但是这只在特定的范围内有效，这个范围是：从对象被创建的那个上下文往下一直到根上下文，以及根上下文的直接子上下文。在这个范围之外，你只能使用永久 ID。如果你在这个范围之外通过调用 object(with objectID:) 方法并传入一个临时 ID 作为参数来实例化一个对象的话，你会得到一个对象不存在的错误 (当你使用这个对象时会造成程序崩溃)。 #Highlight #[[2023-11-28]]
- 快照其实就是字典，其中包含了每一个托管对象所关联的原始数据。快照表示了每个对象最后已知的持久化数据，其中包括了一个用于乐观锁的版本标识：当你尝试保存更改时，Core Data 会在不同的栈层之间比较这些版本标识。这样一来，当要存储托管上下文对象的数据时，Core Data 将其与原来的持久化数据进行比较，如果两者版本标识不同，就意味着这个持久化数据发生了改变，这就叫保存冲突 #Highlight #[[2023-11-28]]
- 冲突可能在以下两个不同的地方发生：在快照和持久化存储的行缓存数据之间在持久化存储的行缓存数据和 SQLite 的数据之间 #Highlight #[[2023-11-28]]
- 如何处理这些冲突都是由上下文的合并策略决定的。合并策略由NSMergePolicy 类来表示，系统已经提供了一些预定义的合并策略，这些预定义的策略能够涵盖大部分常见的情况。默认的合并策略是 NSErrorMergePolicy，这个策略并不会去解决那些冲突，而是抛出一个 NSManagedObjectMergeError 错误，这个错误里包含了冲突的详细信息。 #Highlight #[[2023-11-28]]
- 强烈建议不要将键名硬编码到谓词中。因为这么做不仅会使后续的更改变得非常困难，也会使得拼写错误更难被发现。所以我们建议使用 Swift 提供的 #keyPath() 表达式 #Highlight #[[2023-11-28]]
- 版本号其实就是一个简单的整形数，它的值与数据库里的每一条记录相关联并且会随着每一次更改而增加 #Highlight #[[2023-11-28]]
- 我们已经在后台上下文 (用来和网络服务通信) 上使用了对象获胜(object-trump) 的策略，并且在 UI 上下文上使用了持久化存储获胜 (store-trump) 的策略。这样的设置方式反映了一件事，那就是“一切以服务器上的数据为准”：如果 UI 上下文中的更改和网络服务导入的数据冲突，那么后者会胜出 #Highlight #[[2023-11-28]]
- 除非出现编程错误，否则fetch(_:) 方法不会出错 #Highlight #[[2023-11-28]]
- 不要在格式化字符串里硬编码任何属性名 (比如键)，而是使用 %K 这样的格式字符 (“K” 代表键)，这是一种很好的做法 #Highlight #[[2023-11-28]]
- %ld 这个格式字符来表示整数类型 (Int) 的值 #Highlight #[[2023-11-28]]
- 对于双精度浮点类型 (Double) 的值，我们需要使用 %la 这个格式字符。对于浮点类型 (Float) 的值，要使用 %a #Highlight #[[2023-11-28]]
- 我们可以使用 %@ 这个格式字符将一个 Date 对象传入到格式字符串中，然后用as NSDate 来进行类型转换 #Highlight #[[2023-11-28]]
- 如果需要匹配的属性是可选类型，最稳妥的办法就是不管怎样都要检查该属性是否为 nil (根据具体需求，可以用 AND %K != nil 或者 OR %K ==nil)，这么做是为了让谓词在匹配时保持意义明确 #Highlight #[[2023-11-28]]
- 在大多数多个上下文的设置方式中，删除操作是可能会引起崩溃的。如果在某个上下文中有个惰值，并且这个惰值所对应的对象在另一个上下文中被删除了，那么第一个上下文就无法填充这个惰值。如果你尝试去填充这个惰值，那就会导致一个运行时异常，因为这个惰值所引用的数据已经不存在了。每当在某个上下文中删除一个对象时，所有其他的上下文必须将这个删除更改进行合并。当合并完成后，所有那些在起始上下文中被删除的对象也同样会在其他上下文中被标记为已删除，这时候再访问它们的话就不会导致崩溃了。但是，如果需要执行合并操作的上下文和起始上下文处于不同队列的话，那么前者仍然有可能在合并发生前访问那个惰值。 #Highlight #[[2023-11-28]]
- Date 的内部包装了一个双精度浮点值，这个值表示日期与绝对参考日期 00:00:00UTC on 1 January 2001 (2001 年 1 月 1 日 00:00:00 世界标准时) 之间相差的秒数。在 SQLite 中保存的就是这个双精度浮点值，同时谓词也是基于这个值来匹配的。 #Highlight #[[2023-11-28]]
- 通常来说，检查日期是否处于某个区间内才是更恰当的做法 #Highlight #[[2023-11-28]]
- 一旦开启了shouldDeleteInaccessibleFaults(译者注：该属性默认值为YES，即开启)，CoreData就再也无法在非可选属性上执行验证了 #Highlight #[[2023-11-28]]
- 一个解决问题的方法叫两步删除法，它的优点是能够在iOS9和macOS10.11之前的那些系统上使用。在这个策略下，我们首先会将要删除的对象标记为“删除正在进行中”，而不是直接删除对象。这个标记会被合并到所有的上下文中。此时，所有的上下文必须释放对这个已被标记的对象的引用。当上面的两个操作全部完成后，起始上下文就可以在合适的时间删除该对象。 #Highlight #[[2023-11-28]]
- 在iOS9和macOS10.11中，可以简单有效地通过批量删除达到相同目的。因为我们知道此时已经没有对象还继续保持着对这些对象的引用，所以我们不用担心在批量删除后更新上下文会出问题 #Highlight #[[2023-11-28]]
- 当你使用了两步删除法后，如果对象只是被标记为已删除但实际还没有被删除，那么CoreData的关系删除规则就会无效。如果你需要将一个被标记为已删除的对象从关系中移除，那么你必须进行手动的操作 #Highlight #[[2023-11-28]]
- 谓词有一个很强大的特性，就是能够直接匹配对象。我们可以使用对象本身或者对象的 ID 来匹配。 #Highlight #[[2023-11-28]]
- 当我们执行一个匹配对象的获取请求时，会导致 Core Data 从文件系统中重新导入这个对象并且更新行缓存 #Highlight #[[2023-11-28]]
- [n] 这个字符选项会告诉 Core Data 可以通过比较每一个字节来比较字符串。因此，如果在传入的属性上启用了索引，那么 SQLite 就可以直接使用这个索引 #Highlight #[[2023-11-28]]
- 执行获取请求 (通过 API 约定) 总是要查询 SQLite 以及文件系统中的数据 #Highlight #[[2023-11-28]]