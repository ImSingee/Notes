title:: Readwise/Highlights/Redis 5分钟掌握简单动态字符串SDS
author:: [[juejin.cn]]
full-title:: Redis 5分钟掌握简单动态字符串SDS
category:: #articles
url:: https://juejin.cn/post/7193517801909747771
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- Redis 没有直接使用 C 语言传统的字符串表示（而是以空字符结尾的字符数组，以下简称 C 字符串），自己构建了一种名为**简单动态字符串（simple dynamic string，SDS）** 的抽象类型，并将 SDS 用作 Redis 的默认字符串表示。 ([View Highlight](https://read.readwise.io/read/01heksh26a6rjaapaydgg04pab)) #Highlight #[[2023-11-07]]
- Redis 将在数据库中创建了一个新的键值对，其中：
  
  •   键值对的键是一个字符串对象，对象的底层实现是一个保存着字符串 `"msg"` 的 SDS 。
  •   键值对的值也是一个字符串对象，对象的底层实现是一个保存着字符串 `"hello world"` 的SDS。 ([View Highlight](https://read.readwise.io/read/01heksj7vy8tvg8xvdngmcrgde)) #Highlight #[[2023-11-07]]
- 除了用来保存数据库中的字符串值之外，SDS 还被用作缓冲区（buffer）：AOF 模块中的 AOF 缓冲区，以及客户端状态中的输入缓冲区，都是由 SDS 实现的 ([View Highlight](https://read.readwise.io/read/01heksjqxr2gyks1gdy31kg8fq)) #Highlight #[[2023-11-07]]
- struct sdshdr { // 记录 buf 数组中已使用字节的数量 int len; // 记录 buf 数组中未使用字节的数量 int free; // 字节数组，用于保存字符串 char buf[]; }; ([View Highlight](https://read.readwise.io/read/01heksjz6kyvvsy97jvry1f75y)) #Highlight #[[2023-11-07]]
- SDS 的空间分配策略完全杜绝了发生缓冲区溢出的可能性：当 SDS API 需要对 SDS 进行修改时，**API 会先检查 SDS 的空间是否满足修改所需的要求，如果不满足的话，API 会自动将 SDS 的空间扩展至执行修改所需的大小，然后才执行实际的修改操作**，所以使用 SDS 既不需要手动修改 SDS 的空间大小，也不会出现前面所说的缓冲区溢出问题。 ([View Highlight](https://read.readwise.io/read/01hekskzrq99e781hewkr91x2w)) #Highlight #[[2023-11-07]]
- C 字符串的长度和底层数组的长度之间存在着这种关联性，所以**每次增长或者缩短一个 C 字符串，程序都总要对保存这个 C 字符串的数组进行一次内存重分配**操作，在 SDS 中，数组里面可以包含未使用的字节，而这些字节的数量就由 SDS 的 `free` 属性记录。并实现了两种优化策略 ... 空间预分配，当进行字符串增长操作时，程序会额外分配空间，并记录的`free`字段 ... 惰性空间释放，当进行字符串缩短操作时，程序不立即重新分配内存，而是用`free`属性将这些字节的数量记录起来。 #Highlight #[[2023-11-07]]
- C字符串中不能包含空字符串，否则会被误认为是字符串结尾。所有 SDS API 都会以处理二进制的方式来处理 SDS 存放在 `buf` 数组里的数据，程序不会对其中的数据做任何限制、过滤、或者假设 ——数据在写入时是什么样的，它被读取时就是什么样。 ([View Highlight](https://read.readwise.io/read/01heksn5kh2qr25a4c1zmh8k5g)) #Highlight #[[2023-11-07]]