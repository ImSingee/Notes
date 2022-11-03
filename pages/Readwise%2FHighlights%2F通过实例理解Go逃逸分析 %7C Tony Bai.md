title:: Readwise/Highlights/通过实例理解Go逃逸分析 | Tony Bai
author:: [[tonybai.com]]
full-title:: 通过实例理解Go逃逸分析 | Tony Bai
category:: #articles
url:: https://tonybai.com/2021/05/24/understand-go-escape-analysis-by-example/

- 被分配在栈内存上的变量也被称为“自动变量” #Highlight #[[2021-05-31]]
- 堆内存对象需要通过专用API手工分配和释放 #Highlight #[[2021-05-31]]
- 和自动变量相比，堆内存对象的生命周期管理将会给开发人员带来很大的心智负担。为了降低这方面的心智负担，带有GC（垃圾回收）的编程语言出现了 #Highlight #[[2021-05-31]]
- GC的出现虽然降低了开发人员在内存管理方面的心智负担，但GC不是免费的，它给程序带来的性能损耗是不可忽视的，尤其是当堆内存上有大量待扫描的堆内存对象时，将会给GC带来过大的压力，从而使得GC占用更多本应用于处理业务逻辑的计算和存储资源 #Highlight #[[2021-05-31]]
- 逃逸分析（escape analysis）就是在程序编译阶段根据程序代码中的数据流，对代码中哪些变量需要在栈上分配，哪些变量需要在堆上分配进行静态分析的方法 #Highlight #[[2021-05-31]]
- 新版代码主要位于Go项目源码的src/cmd/compile/internal/gc/escape.go中 #Highlight #[[2021-05-31]]