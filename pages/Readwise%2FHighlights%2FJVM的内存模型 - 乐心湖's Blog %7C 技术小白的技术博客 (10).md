title:: Readwise/Highlights/JVM的内存模型 - 乐心湖's Blog | 技术小白的技术博客 (10)
author:: [[xn2001.com]]
full-title:: JVM的内存模型 - 乐心湖's Blog | 技术小白的技术博客
category:: #articles
url:: https://www.xn2001.com/archives/566.html

- jdk1.8的内存模型是由2部分组成，年轻代 + 年老代。
  年轻代：Eden + 2*Survivor
  年老代：OldGen #Highlight #[[2021-05-28]]
- 在jdk1.8中变化最大的Perm区，用Metaspace（元数据空间）进行了替换。 #Highlight #[[2021-05-28]]
- Metaspace所占用的内存空间不是在虚拟机内部，而是在本地内存空间中，这也是与1.7的永久代最大的区别所在。 #Highlight #[[2021-05-28]]
- 由于永久代内存经常不够用或发生内存泄露，爆出异常java.lang.OutOfMemoryError: PermGen。基于此，将永久区废弃，而改用元空间，改为了使用本地内存空间。 #Highlight #[[2021-05-28]]