title:: Readwise/Highlights/什么是持久化历史跟踪（Persistent History Tracking）
author:: [[fatbobman.com]]
full-title:: 什么是持久化历史跟踪（Persistent History Tracking）
category:: #articles
url:: https://www.fatbobman.com/posts/persistentHistoryTracking/
tags:: #[[swift]]

- 为持久化存储启用 Persistent History Tracking 后，你的应用程序将开始为 Core Data 的持久化存储中发生的任何更改创建事务记录（ Transaction ）。无论该事务是由何种方式（通过上下文还是不经过上下文）产生的，由那个 App 或 Extension 产生，都将事无巨细的记录下来。
  
  所有的变化都会被保存在你的 Sqlite 数据库文件中，苹果在 Sqlite 中创建了几个表，用来记录了 Transaction 对应的各类信息。 ([View Highlight](https://read.readwise.io/read/01havm8na86w1nhgcn85j23rs1)) #Highlight #[[2023-09-21]]
- 苹果将数据组织的非常紧凑的。`ATRANSACTION`中是尚未消除的 transaction，`ATRANSACTIONSTRING`中是 author 和 contextName 的字符串标识，`ACHANGE`是变化的数据，以上数据最终转换成对应的 ManagedObjectID。 ([View Highlight](https://read.readwise.io/read/01havm99cbsxtze4bqetcxwy49)) #Highlight #[[2023-09-21]]
- Transaction 将按照产生顺序被自动记录。我们可以检索特定时间后发生的所有更改。你可以通过多种表达方式来确定这个时间点：
  
  •   基于令牌（Token）
  •   基于时间戳（Timestamp）
  •   基于交易本身（Transaction）
  
  一个基本的 Persistent History Tracking 处理流程如下：
  
  1.  响应 Persistent History Tracking 产生的 NSPersistentStoreRemoteChange 通知
  2.  检查从上次处理的时间戳后是否仍有需要处理的 Transaction
  3.  将需要处理的 Transaction 合并到当前的视图上下文中
  4.  记录最后处理的 Transaction 时间戳
  5.  择机删除已经被合并的 Transaction ([View Highlight](https://read.readwise.io/read/01havm9sk6bez1wdpsxfgcxrz9)) #Highlight #[[2023-09-21]]
- 我们注册`processor`来响应`NSNotification.Name.NSPersistentStoreRemoteChange`。
  
  每当你的数据库中启用 Persistent History Tracking 的 Entity 发生数据变动时，`processor`都将会被调用。 ([View Highlight](https://read.readwise.io/read/01havmcnp0b1nz5jq2qg26qe73)) #Highlight #[[2023-09-21]]
- 所有针对 Persistent History Tracking 的数据操作都放在 `backgroundContext`中进行，避免影响主线程 ([View Highlight](https://read.readwise.io/read/01havmd5n1bnz6qd06w2141m7d)) #Highlight #[[2023-09-21]]