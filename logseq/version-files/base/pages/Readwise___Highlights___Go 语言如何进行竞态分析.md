title:: Readwise/Highlights/Go 语言如何进行竞态分析
author:: [[liqianglau@outlook.com]]
full-title:: Go 语言如何进行竞态分析
category:: #articles
url:: https://liqiang.io/post/how-golang-detect-data-race
tags:: #[[inoreader]] #[[博客]] #[[格物致知]]

- 编译器会为原子操作（如 atomic.AddInt32、atomic.LoadUint64 等）和同步原语（如 Mutex、RWMutex、Channel 等）插入特殊的检测代码。这些代码有助于 Race Detector 更准确地分析程序的同步行为，从而更可靠地检测数据竞争。 ([View Highlight](https://read.readwise.io/read/01hf3yhyv260cbdx9cdac2vd69)) #Highlight #[[2023-11-13]]
- •   Stub Code：如前所述，Go 编译器会在内存访问和同步操作处插入额外的代码，以便与 Race Detector 通信。这些插入的代码在程序运行期间执行，直接在发生内存访问和同步操作的 Goroutine 中运行。
  •   Shadow Memory：Race Detector 使用 Shadow Memory 来存储内存访问的元数据。Shadow Memory 的管理和更新在发生内存访问操作的 Goroutine 中进行，以保证元数据的实时性。
  •   数据竞争检测：Race Detector 的数据竞争检测逻辑通常在发生内存访问操作的 Goroutine 中执行。这意味着，当一个 Goroutine 执行一个内存访问操作时，Race Detector 会在同一个 Goroutine 中检查是否存在数据竞争。
  •   报告和诊断：当 Race Detector 检测到数据竞争时，它会生成详细的报告，包括数据竞争发生的位置、涉及的 Goroutine 以及栈跟踪等信息。报告生成可能会涉及多个 Goroutine 和线程，因为它需要收集和整理各种上下文信息。 ([View Highlight](https://read.readwise.io/read/01hf3yjrb3jkk7b8b1wpy0g15k)) #Highlight #[[2023-11-13]]
- 虽然 Go 的 Data Race 启用很方便，并且 Go 编译器和 Race Detector 会尽可能地检测所有内存访问的数据竞争，但它们不能保证 100% 的准确性和完整性。因此，开发者仍然需要遵循良好的编程实践，确保程序的同步和并发行为是正确和安全的 ([View Highlight](https://read.readwise.io/read/01hf3yk3rksjjfe3c90sgz2fm8)) #Highlight #[[2023-11-13]]
- 增加了 Data Race 检测之后，内存占用肯定会增加，执行速度也会降低，根据官方的文档说明：内存占用会有 5-10 倍的增加，执行时间会有 2-20 倍的降低。 ([View Highlight](https://read.readwise.io/read/01hf3yk7xz0mrytvk1ybwk54ca)) #Highlight #[[2023-11-13]]