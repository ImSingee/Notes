title:: Readwise/Highlights/Core Data 是如何在 SQLite 中保存数据的
author:: [[fatbobman.com]]
full-title:: Core Data 是如何在 SQLite 中保存数据的
category:: #articles
url:: https://www.fatbobman.com/posts/tables_and_fields_of_CoreData
tags:: #[[favorite]] #[[swift]] #[[肘子的swift记事本]]
- Core Data 按照如下规则将数据模型中的实体转换成 SQLite 的格式：
  
  •   实体对应的表名为 Z + 实体名称（全部大写），本例中为 ZITEM
  •   实体中属性对应的字段为 Z + 属性名称（全部大写），本例中为 ZTIMESTAMP
  •   对于大写后名称一致的属性（属性在定义时是大小写敏感的），将为其他重名属性添加编号。如 Item 有两个属性 timestamp 和 timeStamp ，将在表中创建两个字段 ZTIMESTAMP 及 ZTIMESTAMP1
  •   为每个实体表添加三个特殊字段： Z*PK、Z*ENT、Z_OPT（均为 INTEGER 类型）
  
  •   如实体定义中包含关系，在实体表中为关系创建对应的字段或创建对应的中间关系表（详细内容见后文） ([View Highlight](https://read.readwise.io/read/01har8g13j5pcnbx0m17a0ga6q)) #Highlight #[[2023-09-20]]
- Z*PK + Z*ENT （ 主键 + 表 ID ）是 Core Data 在特定 SQLite 数据文件中查找具体条目的关键 ([View Highlight](https://read.readwise.io/read/01har8gkns4vs8j0423awj5cke)) #Highlight #[[2023-09-20]]
- Z*PRIMARYKEY 表是实现通过 Z*PK + Z_ENT 定位数据的基础。它的主要作用有：
  
  •   对 Core Data 在 SQLite 中创建的表（所有需要通过 Z*PK + Z*ENT 定位记录的表，不包括 Z*PRIMARYKEY、Z*METADATA、Z_MODELCACHE）进行登记
  •   标注实体之间的关系（仅针对抽象实体）
  •   记录实体的名称（数据模型中定义的名称）
  •   记录每个登记表当前已使用的最大 Z_PK 值 ([View Highlight](https://read.readwise.io/read/01har8hk5wa6wqnjf6tykey7vn)) #Highlight #[[2023-09-20]]
- Z_MAX 字段
  
  标记了每个登记表最后使用的 Z*PK 值。在创建新的实体数据时，Core Data 将从 Z*PRIMARYKEY 表中找到对应实体最后使用的 Z*PK 值（ Z*MAX ），在此值基础上加一，作为新记录的 Z*PK 值，并更新该实体对应的 Z*MAX 值。 ([View Highlight](https://read.readwise.io/read/01har8n3657sw166ykry95hsrf)) #Highlight #[[2023-09-20]]
- 尽管 Core Data 在 Z*METADATA 表中的 Z*PLIST 中保留了当前使用的数据模型版本的签名信息，但由于 Z*PLIST 的内容是可更改的，因此为了确保应用正在使用的数据模型版本与 SQLite 文件中的完全一致，Core Data 在 Z*MODELCACHE 表中保存了一份与当前 SQLite 数据对应的数据模型的缓存版本 （某种 mom 或 omo 的变体）。
  
  Z_MODELCACHE 中的缓存数据和元数据中的数据模型签名共同为数据模型的版本验证和版本迁移提供了保障。 ([View Highlight](https://read.readwise.io/read/01har8rs9mw300dy9rkwfepx2m)) #Highlight #[[2023-09-20]]
- Core Data 通过实体表对应的 Z_MAX 自动为每条新增记录添加了自增主键数据。因此在 Core Data 定义数据模型时，开发者无须为实体特别定义主键属性（事实上也无法创建自增主键）。 ([View Highlight](https://read.readwise.io/read/01har8s56nsnckyzbzn5ftpe16)) #Highlight #[[2023-09-20]]
- 托管对象的 NSManagedObjectID 由：数据库 ID + 表 ID + 实体表中的主键共同构成。在 SQLite 中对应的字段为 Z*UUID + Z*ENT + Z_PK ([View Highlight](https://read.readwise.io/read/01har8yfkgc6b4qt5q2xsd1rds)) #Highlight #[[2023-09-20]]
- Core Data 利用了在同一个数据库中仅需依靠 Z*ENT + Z*PK 即可定位记录的特性来实现了在不同的实体之间标注关系的工作。为了节省空间，Core Data 仅保存了每个关系记录的 Z*PK 数据，Z*ENT 则直接由数据模型从 Z_PRIMARYKEY 表中获取 ([View Highlight](https://read.readwise.io/read/01har90n2e6n4zs2svtfhp3nxr)) #Highlight #[[2023-09-20]]
- 在数据库中创建关系的规则为：
  
  •   一对多
  
  “一”的一侧不创建新的字段，在“多”的一侧为关系创建新的字段，该字段对应“一”的 Z_PK 值。字段名称为 Z + 关系名称（大写）
  
  •   一对一
  
  关系两端都添加新的字段，分别为对应数据的 Z_PK 值
  
  •   多对多
  
  关系两端都不添加新的字段，创建一个表示该多对多关系的新表，并在其中逐行添加关系两侧数据的 Z_PK 值。 ([View Highlight](https://read.readwise.io/read/01har91j0cqdhwry89hs54y5aq)) #Highlight #[[2023-09-20]]
- Core Data 在保存数据时，通过乐观锁的方式来判断是否会出现保存冲突的情况。而乐观锁的判断依据则是根据每条记录的 Z_OPT 数据，采用了版本号机制。
  
  在数据进行持久化时，如果 Core Data 发现上下文的数据快照中的 Z*OPT 数据与行缓存中的不一致，或者行缓存中的 Z*OPT 与数据库文件不一致，均会认为是发生了保存冲突。 ([View Highlight](https://read.readwise.io/read/01har978w0d86q07w6e9kvhyk4)) #Highlight #[[2023-09-20]]
- 在持久化历史跟踪中，创建事务的工作是由 Core Data 自动完成的，大概的流程如下：
  
  •   从 Z*PRIMARYKEY 表中获取 Z*ATRANSACTION 的 Z_MAX
  •   使用 Z*PK （ Z*MAX + 1 ） + Z*ENT ( 事务表在 Z*PRIMARYKEY 中对应的 Z*ENT ) + 作者 ID + 时间戳 在 Z*ATRANSACTION 中创建新事务记录，并更新 Z_MAX
  •   获取 Z*ACHANGE 的 Z*MAX
  •   在 Z_ACHANGE 中逐条创建数据操作记录 ([View Highlight](https://read.readwise.io/read/01har9emz9jcdmcgj4sm60nhz7)) #Highlight #[[2023-09-20]]
- 因为数据库中只保存了事务创建的时间戳，因此无论采用哪种查询方式（时间 Date、令牌 NSPersistentHistoryToken、事务 NSPersistentHistoryTransaction ）最终都会转换成比较时间戳的方式。
  
  •   时间戳晚于上次当前应用的查询时间
  •   作者不是当前 App 的作者或其他系统功能作者
  •   获取满足上述条件的全部 Z_CHANGE 记录 ([View Highlight](https://read.readwise.io/read/01har9ezwbhnf0sp2rdhgvc901)) #Highlight #[[2023-09-20]]