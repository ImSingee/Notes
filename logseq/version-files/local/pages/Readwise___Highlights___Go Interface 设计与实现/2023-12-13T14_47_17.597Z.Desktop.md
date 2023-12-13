title:: Readwise/Highlights/Go Interface 设计与实现
author:: [[juejin.cn]]
full-title:: Go Interface 设计与实现
category:: #articles
url:: https://juejin.cn/post/7173965896656879630
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)

- `interface{}` 类型在底层实际上是 `eface` 类型，而 `Flyable` 类型在底层实际上是 `iface` 类型 ([View Highlight](https://read.readwise.io/read/01hg2c0q9dgg9hkes3hqc0gzqs)) #Highlight #[[2023-11-25]]
- o 中的接口变量其实是用 `iface` 和 `eface` 这两个结构体来表示的：
  
  •   `iface` 表示某一个具体的接口（含有方法的接口）。
  •   `eface` 表示一个空接口（`interface{}`） ([View Highlight](https://read.readwise.io/read/01hg2c0vqjvf0k81gmbpr9x2rg)) #Highlight #[[2023-11-25]]
- go 底层的类型信息是使用 `_type` 结构体来存储的。 ([View Highlight](https://read.readwise.io/read/01hg2c15z54zks3w34pjtpt9v2)) #Highlight #[[2023-11-25]]
- 在 go 中，`_type` 是保存了变量类型的元数据的结构体 ([View Highlight](https://read.readwise.io/read/01hg2c4afhn2snazg2jsye2skz)) #Highlight #[[2023-11-25]]
- 在底层，go 是通过 `_type` 里面 `uncommon` 返回的地址，加上一个偏移量（`x.moff`）来得到实际结构体类型的方法列表的 ([View Highlight](https://read.readwise.io/read/01hg2c67h036m0v9tf26t22kjy)) #Highlight #[[2023-11-25]]
- 根据 `interfacetype` 我们可以得到关于接口所有方法的信息 ([View Highlight](https://read.readwise.io/read/01hg2cncy0ehmtfanxb6ktqh7f)) #Highlight #[[2023-11-25]]
- `itab` 实际上定义了 `interfacetype` 和 `_type` 之间方法的交集 ([View Highlight](https://read.readwise.io/read/01hg2cqnhrfj97fkzhch452xxk)) #Highlight #[[2023-11-25]]
- go 里面定义了一个全局变量 `itabTable`，用来缓存 `itab` ([View Highlight](https://read.readwise.io/read/01hg2cr6334rnhjmhmwp1k24x1)) #Highlight #[[2023-11-25]]
- 类型断言的代码，本质上是对 `runtime.assert*` 方法的调用（`assertI2I`、`assertI2I2`、`assertE2I`、`assertE2I2`） ([View Highlight](https://read.readwise.io/read/01hg2ct35ek5yth25cf9dzvcsw)) #Highlight #[[2023-11-25]]