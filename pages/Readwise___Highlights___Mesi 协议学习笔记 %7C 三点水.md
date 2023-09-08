title:: Readwise/Highlights/Mesi 协议学习笔记 | 三点水
author:: [[lotabout.me]]
full-title:: Mesi 协议学习笔记 | 三点水
category:: #articles
url:: https://lotabout.me/2022/MESI-Protocol-Introduction/
- The MESI protocol is an **Invalidate-based** cache coherence protocol, and is one of the most common protocols that support write-back caches. ([View Highlight](https://read.readwise.io/read/01h2fdf21asey1rbhrzmcjxw0q)) #Highlight #[[2023-06-09]]
- 当一份内存的数据存储在缓存时，我们有必要保证两者是一致的。假设我们修改了缓存上的数据，这份数据要如何同步回内存呢？常见的有两种方法 [[1]](https://lotabout.me/2022/MESI-Protocol-Introduction#fn1)：
  
  1.  Write-Though（直写），每次修改都同步更新到缓存和内存中
  2.  Write-Back（写回），修改先更新到缓存上，缓存快失效时才更新回内存中
  
  它们的核心区别在于更新操作是 “同步” 还是 “异步”。显然异步的写入性能更高。 ([View Highlight](https://read.readwise.io/read/01h2fdfh81chv7es22ffqap83d)) #Highlight #[[2023-06-09]]
- 假设没有缓存，多个 CPU 对同一个内存地址做读写，逻辑上，我们会认为这些操作是原子的，有顺序的。假设当前内存的值是 `0`，CPU1 先发出写操作 `W(1)`, CPU2 再发出读操作 `R`，则逻辑上我们理解 CPU2 一定要读到 `1` 这个值。
  
  现在假设两个 CPU 都有自己的缓存，CPU1 先发出 `W(1)` 写到自己的缓存，因为使用了 Write-Back 技术，还没有更新到内存，此时 CPU2 发出 `R`，读到的是自己的缓存（或者缓存不存在从内存加载），读到的还是 `0`，和我们上面说的预期不一致。
  
  缓存一致性是指：通过在缓存之间做同步，达到仿佛系统不存在缓存时的行为。 ([View Highlight](https://read.readwise.io/read/01h2fdgtzbgawszeq8a1ypb2dw)) #Highlight #[[2023-06-09]]
- •   Write Propagation（写传播）：即写入一个缓存要让其它缓存能看到
  •   Transaction Serialization（事务顺序化）：即不同 CPU 对同一个地址发出读写指令，不管这些指令最终的先后顺序如何，不同 CPU 看到的顺序要一样。
  
  这也对应我们一般说的可见性和顺序性。 ([View Highlight](https://read.readwise.io/read/01h2fdh4j6r1ywary46brqbrpp)) #Highlight #[[2023-06-09]]
- MESI 的状态机包含了 4 个状态，也是名字的由来：
  
  •   (M) odified: 单副本 + 脏数据（即缓存改变，未写回内存）
  •   (E) xclusive: 单副本 + 干净数据
  •   (S) hared: 多副本 + 干净数据
  •   (I) nvalid: 数据未加载或缓存已失效 ([View Highlight](https://read.readwise.io/read/01h2fdhsangj1zmjtv50pwf6wk)) #Highlight #[[2023-06-09]]