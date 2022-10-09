title:: Readwise/Highlights/面试官：什么是mmap？ (33)
author:: [[mp.weixin.qq.com]]
full-title:: 面试官：什么是mmap？
category:: #articles
url:: http://mp.weixin.qq.com/s?__biz=MzU3NDE0NjMwNw==&mid=2247495372&idx=1&sn=2e5d6fa0e16e79bc3f0e431485c8e645&chksm=fd347ca0ca43f5b6e0c1eccd45e6ee04aec3f4e74dfb05c1fa12b5f3f34371654341d94991ed#rd

- RocketMQ 和 Kafka 都使用到了零拷贝的技术。
  
  对于 MQ 而言，无非就是生产者发送数据到 MQ 然后持久化到磁盘，之后消费者从 MQ 读取数据。
  
  对于 RocketMQ 来说这两个步骤使用的是 mmap+write，而 Kafka 则是使用 mmap+write 持久化数据，发送数据使用 sendfile。 ([View Highlight](https://instapaper.com/read/1410292217/16512108)) #Highlight #[[2021-05-28]]
- 由于 CPU 和 IO 速度的差异问题，产生了 DMA 技术，通过 DMA 搬运来减少 CPU 的等待时间。
  
  传统的 IOread+write 方式会产生 2 次 DMA 拷贝 + 2 次 CPU 拷贝，同时有 4 次上下文切换。
  
  而通过 mmap+write 方式则产生 2 次 DMA 拷贝 + 1 次 CPU 拷贝，4 次上下文切换，通过内存映射减少了一次 CPU 拷贝，可以减少内存使用，适合大文件的传输。
  
  sendfile 方式是新增的一个系统调用函数，产生 2 次 DMA 拷贝 + 1 次 CPU 拷贝，但是只有 2 次上下文切换。因为只有一次调用，减少了上下文的切换，但是用户空间对 IO 数据不可见，适用于静态文件服务器。
  
  sendfile+DMA gather 方式产生 2 次 DMA 拷贝，没有 CPU 拷贝，而且也只有2次上下文切换。虽然极大地提升了性能，但是需要依赖新的硬件设备支持。 ([View Highlight](https://instapaper.com/read/1410292217/16512112)) #Highlight #[[2021-05-28]]
- 零拷贝技术是指计算机执行操作时，CPU 不需要先将数据从某处内存复制到另一个特定区域，这种技术通常用于通过网络传输文件时节省 CPU 周期和内存带宽。
  
  那么对于零拷贝而言，并非真的是完全没有数据拷贝的过程，只不过是减少用户态和内核态的切换次数以及 CPU 拷贝的次数。 ([View Highlight](https://instapaper.com/read/1410292217/16512125)) #Highlight #[[2021-05-28]]