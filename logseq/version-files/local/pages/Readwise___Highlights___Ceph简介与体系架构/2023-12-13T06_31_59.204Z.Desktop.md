title:: Readwise/Highlights/Ceph简介与体系架构
author:: [[juejin.cn]]
full-title:: Ceph简介与体系架构
category:: #articles
url:: https://juejin.cn/post/7176786232007983141
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- Ceph 独一无二地用统一的系统提供了**对象、块、和文件存储**功能，它可靠性高、管理简便、并且是自由软件。 ([View Highlight](https://read.readwise.io/read/01hdfzhtpq0n2axpeg8gzj1hqb)) #Highlight #[[2023-10-24]]
- ceph是一种开源的分布式的存储系统 包含以下几种存储类型：
  
  •   块存储（rbd）
  •   对象存储(RADOS Gateway)，
  •   文件系统（cephfs） ([View Highlight](https://read.readwise.io/read/01hdfzj5vmcd6w6ffahd4jamkp)) #Highlight #[[2023-10-24]]
- 分布式存储优点：
  
  •   **高可靠：** 既满足存储读取不丢失，还要保证数据长期存储。 在保证部分硬件损坏后依然可以保证数据安
  •   **高性能：** 读写速度快
  •   **可扩展：** 分布式存储的优势就是“分布式”，所谓的“分布式”就是能够将多个物理节点整合在一起形成共享的存储池，节点可以线性扩充，这样可以源源不断的通过扩充节点提升性能和扩大容量，这是传统存储阵列无法做到的 ([View Highlight](https://read.readwise.io/read/01hdfzj7x6g1j21rmbj5bq8w3q)) #Highlight #[[2023-10-24]]
- 块设备可理解成一块硬盘，用户可以直接使用不含文件系统的块设备，也可以将其格式化成特定的文件系统，由文件系统来组织管理存储空间，从而为用户提供丰富而友好的数据操作支持。 ([View Highlight](https://read.readwise.io/read/01hdfzkctzhvp389z3rb2qr7cb)) #Highlight #[[2023-10-24]]
- > Ceph有了块设备接口，在块设备上完全可以构建一个文件系统，那么Ceph为什么还需要文件系统接口呢？
  
  > 主要是因为应用场景的不同，Ceph的块设备具有优异的读写性能，但不能多处挂载同时读写，目前主要用在OpenStack上作为虚拟磁盘，而Ceph的文件系统接口读写性能较块设备接口差，但具有优异的共享性。 ([View Highlight](https://read.readwise.io/read/01hdfzky2ny7ee6bqjsr2ep3x6)) #Highlight #[[2023-10-24]]