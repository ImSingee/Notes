title:: Readwise/Highlights/如何提高缓存系统的内存利用率和可扩展性 · Nsdi '21
author:: [[draveness.me]]
full-title:: 如何提高缓存系统的内存利用率和可扩展性 · Nsdi '21
category:: #articles
url:: https://draveness.me//papers-segcache

- Segcache 使用数据段（Segment）组织缓存中的数据，它会在固定大小的数据段中存储数据并提供以下三个特性：
  
  •   将创建时间和过期时间相似的对象分组存储；
  •   将每个对象的元数据合并存储到数据段头中；
  •   以数据段为维度执行批量过期和驱逐操作； ([View Highlight](https://read.readwise.io/read/01hfky5c3e4cy7bb5pswkvye25)) #Highlight #[[2023-11-19]]
- •   主动过期：整个数据段中的数据过了约定的存活时间，系统会使用后台的线程扫描 TTL 桶中的数据段；
  •   数据段驱逐：系统中的空间不足以分配新的数据，这时需要驱逐一些数据为新对象腾出空间； ([View Highlight](https://read.readwise.io/read/01hfky6w75ahca6rtv4345yf80)) #Highlight #[[2023-11-19]]
- Segcache 的主动驱逐机制会合理利用机器的内存资源，每次对内存的扫描都只会访问一小块连续的元数据，这种策略可以保证过期的对象能够被及时地、彻底地回收，提高内存的利用率。而在生产环境中，该策略对缓存丢失率造成的影响微乎其微。 ([View Highlight](https://read.readwise.io/read/01hfky6jmb2bggh7xjx8hm4cap)) #Highlight #[[2023-11-19]]
- 因为 Segcache 会以数据段为单位驱逐，所以会提高缓存的丢失率。为了解决这个问题，Segcache 会使用基于合并的驱逐算法，它会组合内存中的多个数据段、选择其中会经常访问的一小部分对象并驱逐余下的对象。 ([View Highlight](https://read.readwise.io/read/01hfky731bfq6ppvt34s9rj6z6)) #Highlight #[[2023-11-19]]