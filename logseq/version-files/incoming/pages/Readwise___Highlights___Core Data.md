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