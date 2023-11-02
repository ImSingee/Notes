title:: Readwise/Highlights/图解原理｜Linux I-O 神器之 Io_uring
author:: [[songsong001]]
full-title:: 图解原理｜Linux I/O 神器之 Io_uring
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MzA3NzYzODg1OA==&mid=2648467122&idx=1&sn=38abebe2705855f1ad80c0a81128dd9a&chksm=87663b17b011b201827c845f7d5c701f0100999203dc9e076c97c92c976c91b1fdd152682569#rd
tags:: #[[inoreader]] #[[star]] #[[微信公众号]]

- `io_uring` 通过用户态与内核态共享内存的方式，来免去了使用系统调用发起 I/O 操作的过程 ([View Highlight](https://read.readwise.io/read/01hdqer1phr6yjdvypxrppg6h7)) #Highlight #[[2023-10-27]]
- `uring` 主要创建了 3 块共享内存：
  
  •   **提交队列（Submission Queue, SQ）**：一整块连续的内存空间存储的环形队列，用于存放将执行 I/O 操作的数据（指向提交队列项数组的索引）。
  •   **完成队列（Completion Queue, CQ）**：一整块连续的内存空间存储的环形队列，用于存放 I/O 操作完成后返回的结果。
  •   **提交队列项数组（Submission Queue Entry，SQE）**：提交队列中的一项。 ([View Highlight](https://read.readwise.io/read/01hdqerg89tnvypt0h45vnafc5)) #Highlight #[[2023-10-27]]
- `io_uring` 是 Linux 于 2019 年加入到内核的一种新型异步 I/O 模型，`io_uring` 主要为了解决 `原生AIO（Native AIO）` 存在的一些不足之处。下面介绍一下原生 AIO 的不足之处：
  
  •   **系统调用开销大**：提交 I/O 操作和获取 I/O 操作的结果都需要通过系统调用完成，而触发系统调用时，需求进行上下文切换。在高 IOPS（Input/Output Per Second）的情况下，进行上下文切换也会消耗大量的CPU时间。
    
  •   **仅支持 Direct I/O（直接I/O）**：在使用原生 AIO 的时候，只能指定 `O_DIRECT` 标识位（直接 I/O），不能借助文件系统的页缓存（page cache）来缓存当前的 I/O 请求。
    
  •   **对数据有大小对齐限制**：所有写操作的数据大小必须是文件系统块大小（一般为4KB）的倍数，而且要与内存页大小对齐。
    
  •   **数据拷贝开销大**：每个 I/O 提交需要拷贝 64+8 字节，每个 I/O 完成结果需要拷贝 32 字节，总共 104 字节的拷贝。这个拷贝开销是否可以承受，和单次 I/O 大小有关：如果需要发送的 I/O 本身就很大，相较之下，这点消耗可以忽略。而在大量小 I/O 的场景下，这样的拷贝影响比较大。 ([View Highlight](https://read.readwise.io/read/01hdz8460tdsvcnes1p0rn9t12)) #Highlight #[[2023-10-30]]
- 在内核中，使用 `io_sq_ring` 结构来表示 `提交队列` ... `io_sq_ring` 结构各个字段的含义如下：
  
  •   **head**：环形队列的头指针。
    
  •   **tail**：环形队列的尾指针。
    
  •   **ring_entries**：队列中已存在的 I/O 操作项总数。
    
  •   **array**：环形队列数组，指向提交队列项数组的索引。
    
  
  `io_sq_ring` 的结构图如下所示：
  
  ![Image](https://mmbiz.qpic.cn/mmbiz_png/ciab8jTiab9J4TqVWEqicPDIXZEoeiadUbI4Y37Q0qfJLwiaLTrHbXKGXVYYrJbibib79mMlCl3j2B8fDDfT28PlXlgFQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1) #Highlight #[[2023-10-30]]
- 内核会将 `io_sq_ring` 结构映射到应用程序的内存空间，这样应用程序与内核都能操作 `io_sq_ring` 结构。应用程序可以直接向 `io_sq_ring` 结构的环形队列中提交 I/O 操作，而不用通过系统调用来提交，从而避免了上下文切换的发生。
  
  而内核线程可以通过从 `io_sq_ring` 结构的环形队列中获取到要进行的 I/O 操作，并且发起 I/O 请求。 ([View Highlight](https://read.readwise.io/read/01hdz8620zp9tp9hgmy40p1qzb)) #Highlight #[[2023-10-30]]
- `io_sq_ring` 结构 `array` 字段只是一个整形类型的数组，用于存储指向 `提交队列项数组` 的的索引。在内核中，`提交队列项` 使用 `io_uring_sqe` 结构表示 ([View Highlight](https://read.readwise.io/read/01hdz86yqs493rgxrv20wgexj9)) #Highlight #[[2023-10-30]]
- `io_uring_sqe` 结构各个字段的作用：
  
  •   **opcode**：I/O 操作码，主要用于表示当前的 I/O 操作是什么类型，如读、写或者同步等。
    
  •   **ioprio**：I/O 操作的优先级，可以通过此字段来把一些重要的 I/O 操作提前执行。
    
  •   **fd**：I/O 操作对应的文件句柄。
    
  •   **off**：当前 I/O 操作的偏移量。
    
  •   **addr**：用于指向当前 I/O 操作所关联的内存地址。如写操作，指向的是要写入到文件的内容的内存地址。
    
  •   **len**：表示当前 I/O 操作的数据长度。 ([View Highlight](https://read.readwise.io/read/01hdz878hdh6zrbns30rjp7atd)) #Highlight #[[2023-10-30]]
- 当用户调用 `io_uring_setup()` 系统调用创建一个 `io_ring` 对象时，内核将会创建一个类型为 `io_uring_sqe` 结构的数组。内核也会将此数组映射到应用程序的内存空间，这样应用程序就可以直接操作这个数组。
  
  应用程序提交 I/O 操作时，先要从 `提交队列项数组` 中获取一个空闲的项，然后向此项填充数据（如 I/O 操作码、要进行 I/O 操作的文件句柄等），然后将此项在 `提交队列项数组` 的索引写入 `提交队列` 中。 ([View Highlight](https://read.readwise.io/read/01hdz87gvvwape4jdasagk0d3t)) #Highlight #[[2023-10-30]]
- 当内核完成 I/O 操作后，会将 I/O 操作的结果保存到 `完成队列` 中。内核使用 `io_cq_ring` 结构来表示 ([View Highlight](https://read.readwise.io/read/01hdz87yyfvv2kbrt9vx34wdbw)) #Highlight #[[2023-10-30]]
- `完成队列` 与 `提交队列` 类似，也是一个环形队列 ... `io_cq_ring` 结构各个字段的作用：
  
  •   **head**：环形队列的头指针。
    
  •   **tail**：环形队列的尾指针。
    
  •   **ring_entries**：已完成的 I/O 操作总数。
    
  •   **cqes**：用于保存 I/O 操作结果的环形队列数组，其元素类型为 `io_uring_cqe` 结构。
    
  
  `io_cq_ring` 的结构图如下所示：
  
  ![Image](https://mmbiz.qpic.cn/mmbiz_png/ciab8jTiab9J4TqVWEqicPDIXZEoeiadUbI4M39jbdibuiaKdbfyaAFRdAlWlTZ59wicibWsGtaTeefEZiajUKoGhaoKPyQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1) #Highlight #[[2023-10-30]]
- 当用户使用 `SQPOLL` 模式（指定了 `IORING_SETUP_SQPOLL` 标志）创建 io_uring 时，内核将会创建一个名为 `io_uring-sq` 的内核线程（称为 SQ 线程），此内核线程会不断从 `提交队列` 中读取 I/O 操作，并且发起 I/O 请求。
  
  当 I/O 请求完成以后，SQ 线程将会把 I/O 操作的结果写入到 `完成队列` 中，应用程序就可以从 `完成队列` 中读取 I/O 操作的结果。 ([View Highlight](https://read.readwise.io/read/01hdz891dmjks3et5tn9xnrb5b)) #Highlight #[[2023-10-30]]
- 简单总结下 `io_uring` 的操作步骤：
  
  •   **第一步**：应用程序通过向 `io_uring` 的 `提交队列` 提交 I/O 操作。
    
  •   **第二步**：SQ内核线程从 `提交队列` 中读取 I/O 操作。
    
  •   **第三步**：SQ内核线程发起 I/O 请求。
    
  •   **第四步**：I/O 请求完成后，SQ内核线程会将 I/O 请求的结果写入到 `io_uring` 的 `完成队列` 中。
    
  •   **第五步**：应用程序可以通过从 `完成队列` 中读取到 I/O 操作的结果。 ([View Highlight](https://read.readwise.io/read/01hdz89af0pqrrd7smgm0fbjtt)) #Highlight #[[2023-10-30]]
- `io_uring` 主要通过用户态与内核态共享内存的途径，来摒弃使用系统调用来提交 I/O 操作和获取 I/O 操作的结果，从而避免了上下文切换的情况。另外，由于用户态进程与内核态线程通过共享内存的方式通信，从而避免了内存拷贝的过程，提升了 I/O 操作的性能。
  
  所以，io_uring 主要通过两个优化点来提升 I/O 操作的性能：
  
  •   摒弃使用系统调用来提交 I/O 操作和获取 I/O 操作结果。
    
  •   减少用户态与内核态之间的内存拷贝。 ([View Highlight](https://read.readwise.io/read/01hdz89dxyrqwf05sqkg8zfg8r)) #Highlight #[[2023-10-30]]