title:: Readwise/Highlights/美团终面：cas确定完全不需要锁吗？
author:: [[juejin.cn]]
full-title:: 美团终面：cas确定完全不需要锁吗？
category:: #articles
url:: https://juejin.cn/post/7205045004212224058
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)
CAS大家都知道，这是一项乐观锁技术，是Compare And Swap的简称，顾名思义就是先比较再替换。 虽然他叫乐观锁，但是我们都知道它是不需要加锁的，在JDK1.5 中的JUC就是建立在CAS之
- **硬件层面CAS又是如何保证原子性的呢？真的完全没加锁吗？**
  
  拿比较常见的x86架构的CPU来说，其实 CAS 操作通常使用 cmpxchg 指令实现的。
  
  可是为啥cmpxchg 指令能保证原子性呢？主要是有以下几个方面的保障：
  
  1.  cmpxchg 指令是一条原子指令。**在 CPU 执行 cmpxchg 指令时，处理器会自动锁定总线，防止其他 CPU 访问共享变量，然后执行比较和交换操作，最后释放总线。**
    
  2.  cmpxchg 指令在执行期间，**CPU 会自动禁止中断**。这样可以确保 CAS 操作的原子性，避免中断或其他干扰对操作的影响。
    
  3.  cmpxchg 指令是硬件实现的，可以保证其原子性和正确性。CPU 中的硬件电路确保了 cmpxchg 指令的正确执行，以及对共享变量的访问是原子的。 ([View Highlight](https://read.readwise.io/read/01hq7ba4g1qffq995dps6mf4c1)) #Highlight #[[2024-02-22]]