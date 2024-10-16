title:: Readwise/Highlights/魔幻的 CRDTs: 如何在无中心化系统中保持数据一致性 - 掘金
author:: [[juejin.cn]]
full-title:: 魔幻的 CRDTs: 如何在无中心化系统中保持数据一致性 - 掘金
category:: #articles
url:: https://juejin.cn/post/7206197077910536252

![](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)
None
- CRDTs 可以分为两种类型：State-based CRDTs 和 Operation-based CRDTs。State-based CRDTs 通过在节点之间复制状态来维护数据一致性，而 Operation-based CRDTs 通过在节点之间复制操作来维护数据一致性。每种类型都有其特定的应用场景和优点。 #Highlight #[[2024-04-07]]
- State-based CRDTs 通常有三种类型：计数器（counter）、集合（set）和映射（map）。Counter CRDTs 可以支持在分布式系统中对计数器的自增操作进行同步，而 Set CRDTs 可以支持在分布式系统中对集合的添加和删除操作进行同步。Map CRDTs 则可以支持在分布式系统中对映射表的插入、更新和删除操作进行同步。 #Highlight #[[2024-04-07]]
- G-Counter 通过维护一个向量，其中每个节点对应一个计数器，来实现计数。每当节点对计数器进行更新时，它会将自己的节点标识和更新值发送给其他节点，并在收到其他节点的更新值时将其合并到自己的向量中。由于 G-Counter 的合并算法是可交换的和可重复的，因此它能够保证计数器的值在不同节点上的一致性。 #Highlight #[[2024-04-07]]
- PN-Counter 是 G-Counter 的扩展，它将 G-Counter 中的增量和减量分开维护，从而支持减法操作。具体来说，PN-Counter 维护了两个 G-Counter，一个用于增量，另一个用于减量。 #Highlight #[[2024-04-07]]
- Set CRDTs 的核心思想是将分布式集合的元素拆分为多个节点，每个节点只处理部分元素，从而实现分布式数据的存储和同步。常见的 Set CRDTs 包括 G-Set 和 2P-Set。 #Highlight #[[2024-04-07]]