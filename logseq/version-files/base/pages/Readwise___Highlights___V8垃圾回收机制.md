title:: Readwise/Highlights/V8垃圾回收机制
author:: [[juejin.cn]]
full-title:: V8垃圾回收机制
category:: #articles
url:: https://juejin.cn/post/6959817876094058533
tags:: #[[ifttt]] #[[instapaper]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)
- 在 V8 中会把堆分为新生代和老生代两个区域，新生代中存放的是生存时间短的对象，老生代中存放的生存时间久的对象。新生区通常只支持 1～8M 的容量，而老生区支持的容量就大很多了。对于这两块区域，V8 分别使用两个不同的垃圾回收器，以便更高效地实施垃圾回收。副垃圾回收器，主要负责新生代的垃圾回收。主垃圾回收器，主要负责老生代的垃圾回收。 ([View Highlight](https://read.readwise.io/read/01hhe7qq9x7jp26ef6d6bhhpnm)) #Highlight #[[2023-12-12]]
- 新生代中用 Scavenge 算法来处理 ([View Highlight](https://read.readwise.io/read/01hhe7qy564j94jrhvqmcjzhct)) #Highlight #[[2023-12-12]]
- 由于新生代中采用的 Scavenge 算法，所以每次执行清理操作时，都需要将存活的对象从对象区域复制到空闲区域。但复制操作需要时间成本，如果新生区空间设置得太大了，那么每次清理的时间就会过久，所以为了执行效率，一般新生区的空间会被设置得比较小。 ([View Highlight](https://read.readwise.io/read/01hhe7rgg4vwsh9zwh4dcfdt49)) #Highlight #[[2023-12-12]]
- JavaScript 引擎采用了对象晋升策略，也就是经过两次垃圾回收依然还存活的对象，会被移动到老生区中 ([View Highlight](https://read.readwise.io/read/01hhe7rtbrrx5kkxs2m89jdn9p)) #Highlight #[[2023-12-12]]
- 主垃圾回收器主要负责老生区中的垃圾回收。除了新生区中晋升的对象，一些大的对象会直接被分配到老生区。因此老生区中的对象有两个特点，一个是对象占用空间大，另一个是对象存活时间长。主垃圾回收器是采用标记 - 清除（Mark-Sweep）的算法进行垃圾回收的。 ([View Highlight](https://read.readwise.io/read/01hhe7s2wf567b5542ypp4619k)) #Highlight #[[2023-12-12]]
- 由于 JavaScript 是运行在主线程之上的，一旦执行垃圾回收算法，都需要将正在执行的 JavaScript 脚本暂停下来，待垃圾回收完毕后再恢复脚本执行。我们把这种行为叫做全停顿（Stop-The-World）。
  
  在 V8 新生代的垃圾回收中，因其空间较小，且存活对象较少，所以全停顿的影响不大，但老生代就不一样了。为了降低老生代的垃圾回收而造成的卡顿，V8 将标记过程分为一个个的子标记过程，同时让垃圾回收标记和 JavaScript 应用逻辑交替进行，直到标记阶段完成，我们把这个算法称为增量标记（Incremental Marking）算法。
  
  使用增量标记算法，可以把一个完整的垃圾回收任务拆分为很多小的任务，这些小的任务执行时间比较短，可以穿插在其他的 JavaScript 任务中间执行，这样当执行上述动画效果时，就不会让用户因为垃圾回收任务而感受到页面的卡顿了。 ([View Highlight](https://read.readwise.io/read/01hhe7thxz0yq1g6n2g5cyhyfq)) #Highlight #[[2023-12-12]]