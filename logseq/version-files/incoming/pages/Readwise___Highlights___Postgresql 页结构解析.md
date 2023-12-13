title:: Readwise/Highlights/Postgresql 页结构解析
author:: [[juejin.cn]]
full-title:: Postgresql 页结构解析
category:: #articles
url:: https://juejin.cn/post/7214254999907975226
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]
- 一般来说，数据表数据物理存储在非易失性存储设备上面，PG也不例外。如下图所示，数据表中的数据存储在N个数据文件中，每个数据文件有N个Page（大小默认为8K，可在编译安装时指定）组成。Page为PG的最小存取单元。
  
  ![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00947c7aaa974e4fade5a2d7141a12c6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?) ([View Highlight](https://read.readwise.io/read/01hetm8a9a11abm6cbxp2q89f8)) #Highlight #[[2023-11-10]]
- 数据页Page由页头、数据指针数组（ItemIdData）、可使用的空闲空间（Free Space）、实际数据（Items）和特殊空间（Special Space）组成。
  
  •   页头存储LSN号、校验位等元数据信息，占用24Bytes。
  •   数据指针数组存储指向实际数据的指针，数组中的元素ItemId可理解为相应数据行在Page中的实际开始偏移，数据行指针ItemID由三部分组成，前15位为Page内偏移，中间2位为标志，后面15位为长度。
  •   空闲空间为未使用可分配的空间，ItemID从空闲空间的头部开始分配，Item（数据行）从空闲空间的尾部开始。 - 实际数据为数据的行数据（每种数据类型的存储格式后续再解析）。
  •   特殊空间用于存储索引访问使用的数据，不同的访问方法数据不同。
  
  ![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ff5288e733643d5a5a7a2792d713bb7~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?) ([View Highlight](https://read.readwise.io/read/01hetm92xc0tn0wfr1hetc8zb6)) #Highlight #[[2023-11-10]]
- pageinspect 是pg提供的一个插件，可以将页面的结构信息进行查看和分析 ([View Highlight](https://read.readwise.io/read/01hetm99drm8x2kqjx8zrpec86)) #Highlight #[[2023-11-10]]