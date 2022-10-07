title:: Readwise/Highlights/Rust 中 Trait 的使用及实现分析 (4)
author:: [[mp.weixin.qq.com]]
full-title:: Rust 中 Trait 的使用及实现分析
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MzI1MjAzNDI1MA%3D%3D&mid=2648213439&idx=2&sn=251b41e3181808a3dd30691a804bae87&chksm=f1c5ca1ac6b2430c47cf5b5be69d69aa3f697c0e85bab3513635bac7ffc430beb0ed4f41b6fb&cmdid=QXASI4SQOSA2D8#rd

- 在 Rust 1.26 版本中，引入了一种新的 trait 使用方式，即：impl trait，可以用在两个地方：函数参数与返回值。该方式主要是简化复杂 trait 的使用，算是泛型的特例版，因为在使用 impl trait 的地方，也是静态派发，而且作为函数返回值时，数据类型只能有一种 #Highlight #[[2021-05-28]]
- 对于 trait SubTrait: Base ，在目前的 Rust 版本中，是无法将 &dyn SubTrait 转换到 &dyn Base的。这个限制与 trait object 的内存结构有关。 #Highlight #[[2021-05-28]]
- Rust 使用 fat pointer（即两个指针） 来表示 trait object 的引用，分布指向 data 与 vtable，这和 Go 中的 interface 十分类似。 #Highlight #[[2021-05-28]]
- 并不是所有的 trait 都可用作 trait object，需要满足一定的条件，称之为 object safety 属性 #Highlight #[[2021-05-28]]