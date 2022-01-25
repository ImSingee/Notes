---
title: JVM 参数
---

- #java #jvm

- 

- https://www.oracle.com/java/technologies/javase/vmoptions-jsp.html

- 

- Behavioral Options

- 

- Garbage First (G1) Garbage Collection Options
	 - #gc

	 - -XX:MaxTenuringThreshold=n
id:: 72ebfb6f-7662-411b-83f6-078a234af04a
		 - Maximum value for tenuring threshold. The default value is 15.

		 - 即对象从年轻代到老年代所需要经过 Minor GC 的最大次数，默认是 15 

		 - 其指定的是 TenuringThreshold 的最大值，实际次数由 JVM [动态计算](https://github.com/openjdk/jdk7/blob/master/hotspot/src/share/vm/gc_implementation/shared/ageTable.cpp#L81)

		 - [不要设定超过默认值（即 15）的值，因为超过意味着「永远不老」](https://support.oracle.com/knowledge/Middleware/1283267_1.html)

- 
