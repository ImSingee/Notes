title:: Readwise/Highlights/Go 语言内存分配器的实现原理 | Go 语言设计与实现
author:: [[draveness.me]]
full-title:: Go 语言内存分配器的实现原理 | Go 语言设计与实现
category:: #articles
url:: https://draveness.me/golang/docs/part3-runtime/ch07-memory/golang-memory-allocator/

- 内存管理一般包含三个不同的组件，分别是用户程序（Mutator）、分配器（Allocator）和收集器（Collector）[1](https://draveness.me/golang/docs/part3-runtime/ch07-memory/golang-memory-allocator#fn:1)，当用户程序申请内存时，它会通过内存分配器申请新内存，而分配器会负责从堆中初始化相应的内存区域。
  
  ![Replaced by Image Uploader](https://vip2.loli.io/2022/08/09/9diFPJXcD4LTHg1.png) ([View Highlight](https://read.readwise.io/read/01g9cjqjwz02qd23ba3aey4dh2)) #Highlight #[[2022-08-01]]