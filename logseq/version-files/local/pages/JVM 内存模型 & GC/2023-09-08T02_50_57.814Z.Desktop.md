---
title: JVM 内存模型 & GC
---

- #java #jvm #memory #gc

- 

- **JVM 7**
	 - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fsingee-chaos%2FUNd1b7htoD.png?alt=media&token=a99038b3-e93a-4f63-950d-cd1da2d09c88)

	 - 

- **JVM 8**
	 - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fsingee-chaos%2Fs531P3D9kn.png?alt=media&token=f9f033a6-c15c-43fa-9e0c-107af6756e83)

	 - ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fsingee-chaos%2FoTyfceHL7O.png?alt=media&token=f4ed7152-33e9-47a0-b915-969237f531a9)

- 

- 在 JVM 7 中堆内存包括年轻代、老年代和永久代

- 在 JVM 8 中堆内存只有了年轻代和老年代，永久代被从堆内存中移除，原永久代所包含的内容（class, method, field）被移动至堆外新增的「元空间 metaspace」

- 

- > 目前写的 GC 都是 [CMS](https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/cms.html) ，对于 [G1](https://docs.oracle.com/javase/9/gctuning/garbage-first-garbage-collector.htm#JSGCT-GUID-ED3AB6D3-FD9B-4447-9EDF-983ED2F7A573) 相关的后续再整理

- 

- 对于年轻代进行垃圾回收被称为「Minor GC」，对于老年代（和 Java 7 的永久代，同时包括不在堆空间中的 Java 8 Metaspace）进行垃圾回收被称为「Major GC」

- 「Full GC」的定义是对年轻代和老年代均进行垃圾回收即清理整个堆空间和 Metaspace（即 MinorGC + Major GC），但实际上，Major GC 往往是由 Minor GC 引发的，即 Major GC 往往伴随着 Minor GC，因此在实务上一般不会刻意区分 Major GC 和 Full GC

- 

- 「年轻代」和「老年代」听名字就知道是根据「年龄」即「对象的存活时间」进行区分的，Java 中的「年龄」是根据 Minor GC 的次数决定的，当一个对象每经过一次 Minor GC 就会增加「1 岁」，当一个对象小于等于 TenuringThreshold （这个值是动态改变的，最大值由 JVM 参数 ((72ebfb6f-7662-411b-83f6-078a234af04a)) 控制）所指定的「年龄」时（默认是 15「岁」）被认为是年轻代，当大于时被认为是老年代

- 

- 之所以对「年轻代」进行垃圾回收称为 Minor GC 是因为 #[[分代收集]] 的统计事实：对于程序，存在一定比例的内存块的生存周期比较短；而剩下的内存块，生存周期会比较长，甚至会从程序开始一直持续到程序结束。生存期较短对象的比例通常在 80%～90% 之间，这种思想简单点说就是：对象存在时间越长，越可能不是垃圾，应该越少去收集。

- 一般的，MinorGC 的频率会比较高、速度很快，而 Major GC 的频率比较低、所需时间一般在 MinorGC 的十倍以上

- 

- ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fsingee-chaos%2FoTyfceHL7O.png?alt=media&token=f4ed7152-33e9-47a0-b915-969237f531a9)

- 

- 年轻代被分为了两种、三个区：一个 Eden 两个 Survivor

- #TODO 描述下垃圾回收的过程（使用流程图）

- 一些小的细节
	 - 只有 Eden 满才会触发 Minor GC（运行时也只有 Eden 可能满）

	 - 如果 Minor GC 时 Survivor 满了为 undesired premature promotion 会将剩余元素（可能是 Eden 也可能是在进行 GC 的 Survivor）直接放入 Old Gen

	 - 每次 MinorGC 后会计算新的 tenuring threshold 和各个分区（Eden, Survivor）的大小以避免 undesired premature promotion

- 
