---
title: Java 工具
---

- #java #jvm

- 

- 

- [jps](https://docs.oracle.com/javase/7/docs/technotes/tools/share/jps.html)
id:: 7059c83f-c14c-4cdf-946c-221423c53f54
	 - 查看当前系统中所有 JVM 进程，第一列为进程 pid （实际上称为 lvmid, local virtual machine identifier），第二列为 Jar 包文件名或类名

	 - 
```shell
> jps

13377 LoggerServer
9800 YarnTaskExecutorRunner
14472 YarnTaskExecutorRunner
18057 NameNode
26826 Main
23435 YarnJobClusterEntrypoint
25227 YarnTaskExecutorRunner
17038 agent-api.jar
25999 YarnTaskExecutorRunner
4048 RunJar

```

	 - 

	 - 可添加 `-l` 参数以展示全路径（类的全路径或 jar 包名称）

	 - 
```shell
> jps -l
13377 org.apache.dolphinscheduler.server.log.LoggerServer
9800 org.apache.flink.yarn.YarnTaskExecutorRunner
14472 org.apache.flink.yarn.YarnTaskExecutorRunner
18057 org.apache.hadoop.hdfs.server.namenode.NameNode
26826 com.cloudera.server.cmf.Main
23435 org.apache.flink.yarn.entrypoint.YarnJobClusterEntrypoint
25227 org.apache.flink.yarn.YarnTaskExecutorRunner
17038 /opt/nta/agent-api.jar
```

	 - 

	 - `-q` 参数代表只展示进程 pid

	 - `-m` 参数表示展示出传递给 main 函数的参数列表

	 - `-v` 参数表示展示出 JVM 参数（如果和 `-m` 一同使用时其输出在 main 参数列表之后）

- 

- [jstat](https://docs.oracle.com/javase/8/docs/technotes/tools/unix/jstat.html)
	 - 展示指定 Java 程序的统计信息

	 - 用法：`jstat -STATOPTION VMID`

	 - VMID （Virtual Machine Identifier）为进程的 ID（即上面 ((7059c83f-c14c-4cdf-946c-221423c53f54)) 返回的值）

	 - STATOPTION 是要展示的信息类别
		 - ((d5541b95-893c-44be-9567-d14a24bec3de)): Displays statistics about the behavior of the class loader.

		 - compiler: Displays statistics about the behavior of the Java HotSpot VM Just-in-Time compiler.

		 - gc: Displays statistics about the behavior of the garbage collected heap.

		 - gccapacity: Displays statistics about the capacities of the generations and their corresponding spaces.

		 - gccause: Displays a summary about garbage collection statistics (same as -gcutil), with the cause of the last and current (when applicable) garbage collection events.

		 - gcnew: Displays statistics of the behavior of the new generation.

		 - gcnewcapacity: Displays statistics about the sizes of the new generations and its corresponding spaces.

		 - gcold: Displays statistics about the behavior of the old generation and metaspace statistics.

		 - gcoldcapacity: Displays statistics about the sizes of the old generation.

		 - gcmetacapacity: Displays statistics about the sizes of the metaspace.

		 - gcutil: Displays a summary about garbage collection statistics.

		 - printcompilation: Displays Java HotSpot VM compilation method statistics.

	 - 

	 - jstat -class
id:: d5541b95-893c-44be-9567-d14a24bec3de
		 - 展示类加载器的统计数据

		 - 
```plain text
> jstat -class 11131
Loaded  Bytes  Unloaded  Bytes     Time
 23361 42017.6      230   291.4      24.36
```

		 - Loaded: 加载了多少个类

		 - （第一个）Bytes：加载的类占用的空间（注意单位是 **KB**）

		 - Unloaded：有多少个类还没加载

		 - （第二个）Bytes：未加载的类占用的空间（单位也是 KB）

		 - Time：Load 和 Unload 类所花费的时间总计（单位为秒）

		 - 

		 - 根据 [[JVM 内存模型 & GC]]，这里占用的空间在 1.7 及之前是在堆中的（永久代 PermGen），在 1.8 及以后是在堆外的（元空间 Metaspace，不再有永久代）

	 - jstat -compiler
		 - 展示 JIT 编译统计

		 - 
```javascript
> jstat -compiler 11131
Compiled Failed Invalid   Time   FailedType FailedMethod
   37413      6       0   343.46          1 sun/misc/URLClassPath getResource
```

		 - Compiled: Number of compilation tasks performed.

		 - Failed: Number of compilations tasks failed.

		 - Invalid: Number of compilation tasks that were invalidated.

		 - Time: Time spent performing compilation tasks.

		 - FailedType: Compile type of the last failed compilation.

		 - FailedMethod: Class name and method of the last failed compilation.

	 - jstat -gc
		 - 展示 GC 的相关参数

		 - 
```javascript
> jstat -gc 11131
 S0C    S1C    S0U    S1U      EC       EU        OC         OU       MC     MU    CCSC   CCSU   YGC     YGCT    FGC    FGCT     GCT
621056.0 635904.0 187879.6  0.0   3536896.0 2221713.0 6109696.0  1381575.2  144768.0 133695.5 17280.0 15417.6    366  118.869  14     48.324  167.192
```

		 - S0C：第一个 Survivor 区的大小（KB）

		 - S1C：第二个 Survivor 区的大小（KB）

		 - S0U：第一个 Survivor 区的使用大小（KB）

		 - S1U：第二个 Survivor 区的使用大小（KB）

		 - EC：Eden 区的大小（KB）

		 - EU：Eden 区的使用大小（KB）

		 - OC：Old 区大小（KB）

		 - OU：Old 使用大小（KB）

		 - [Java 7] PC：永久代大小（KB）

		 - [Java 7] PU：永久代使用大小（KB）

		 - [Java 8] MC：元空间大小（KB）

		 - [Java 8] MU：元空间使用大小（KB）

		 - [Java 8] CCSC：压缩类空间大小（KB）

		 - [Java 8] CCSU：压缩类空间使用大小（KB）

		 - YGC：年轻代垃圾回收次数

		 - YGCT：年轻代垃圾回收消耗时间

		 - FGC：老年代垃圾回收次数

		 - FGCT：老年代垃圾回收消耗时间

		 - GCT：垃圾回收消耗总时间

- 
