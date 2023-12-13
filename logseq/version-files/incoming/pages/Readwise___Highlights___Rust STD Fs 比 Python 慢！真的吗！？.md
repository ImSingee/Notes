title:: Readwise/Highlights/Rust STD Fs 比 Python 慢！真的吗！？
author:: [[Xuanwo]]
full-title:: Rust STD Fs 比 Python 慢！真的吗！？
category:: #articles
url:: https://mp.weixin.qq.com/s/m-IBomxu88DlNcEyOgyOew

![](https://mmbiz.qpic.cn/mmbiz_jpg/XL2RlpYXQ3Zbp4e9qicw7avcAOjv5H77iaf6GYxprFOpo2ARj19c68Iia55OLauGJJ9LS55Y01msXiaqrlJMiaoBspQ/0?wx_fmt=jpeg)
- `mmap`系统调用由`glibc`分派。我们使用`malloc`向系统请求内存，作为回应， `glibc`采用了 `brk` 和 `mmap` 系统调用来根据我们的请求大小分配内存。如果请求的大小足够大，那么 `glibc` 会选择使用 `mmap`, 这有助于缓解内存碎片问题。 ([View Highlight](https://read.readwise.io/read/01hgf8j4g7cy8bxkjm96251axb)) #Highlight #[[2023-11-30]]
- Python has a `pymalloc` allocator optimized for small objects (smaller or equal to 512 bytes) with a short lifetime. It uses memory mappings called “arenas” with a fixed size of either 256 KiB on 32-bit platforms or 1 MiB on 64-bit platforms. It falls back to PyMem_RawMalloc() and PyMem_RawRealloc() for allocations larger than 512 bytes. ([View Highlight](https://read.readwise.io/read/01hgf8jw95kvtbhf6bvypa50jz)) #Highlight #[[2023-11-30]]
- CPU拥有许多可能将私有数据暴露给攻击者的漏洞，其中`Spectre`是最知名的之一。Linux内核已经开发了各种缓解这些漏洞的措施，并且默认启用它们。然而，这些缓解措施可能会增加额外的系统成本。因此，Linux内核也为希望禁用它们的用户提供了一个`mitigations`开关 ([View Highlight](https://read.readwise.io/read/01hgf8m9kjk4z0t02f6fkpdzwf)) #Highlight #[[2023-11-30]]
- 透明大页[14]可以显著影响性能。大多数现代发行版默认启用它 ([View Highlight](https://read.readwise.io/read/01hgf8n3fm3th2qn074xa9t7e9)) #Highlight #[[2023-11-30]]
- `strace -e raw=read,mmap ./program`被用来打印系统调用的未解码参数：指针地址 ([View Highlight](https://read.readwise.io/read/01hgf8pzbhqpx80n33a27y5fvr)) #Highlight #[[2023-11-30]]
- 系统调用性能与内存区域的偏移量有关。他指出当从每页的前 `0x10` 字节写入时，这款CPU会变慢 ([View Highlight](https://read.readwise.io/read/01hgf8rk3ah6bvk92benap35eq)) #Highlight #[[2023-11-30]]
- Rust开发者可能会考虑切换到 `jemallocator`以提高性能 ，即使没有AMD CPU Bug 存在，这也是一个好主意 ([View Highlight](https://read.readwise.io/read/01hgf8tn9hg8c24zbe2tfj5t9v)) #Highlight #[[2023-11-30]]