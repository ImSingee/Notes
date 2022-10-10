title:: Readwise/Highlights/在 Apple Silicon Mac 上入门汇编语言 (722)
author:: [[evian-zhang.github.io]]
full-title:: 在 Apple Silicon Mac 上入门汇编语言
category:: #articles
url:: https://evian-zhang.github.io/learn-assembly-on-Apple-Silicon-Mac/3-%E7%A1%AC%E4%BB%B6%E5%9F%BA%E7%A1%80.html

- 在内存和硬盘中，数据的存储的基本单位都是字节 (Byte)。我们知道，在硬件中表示数据都是采用的二进制位，也就是 `0` 和 `1`. 我们称每一位这样的二进制位为一个比特 (Bit). 而一个字节，就是连续的八个比特。我们在汇编语言中，大部分情况下需要处理的最小的单位就是字节。一个字节，也可以看作是一个 8 位二进制数，或者一个 2 位 16 进制数。1 字节常记做 1B, 1 比特常记做 1b. 我们常用的单位还有 KB (Kilobyte), KiB (Kibibyte), MB (Megabyte), MiB (Mebibyte) 与 GB (Gigabyte), GiB (Gibibyte). 严格来说，1KB=1000B, 1KiB=1024B, 1MB=1000KB, 1MiB=1024KiB, 1GB=1000MB, 1GiB=1024MiB. 在 macOS 以及 iOS 中采用的是这种标准的记法（可参考 [iOS 和 macOS 如何报告储存容量](https://support.apple.com/zh-cn/HT201402#decimal)）。 ([View Highlight](https://read.readwise.io/read/01geqcqnc0q86e9k4p7gvcczpm)) #Highlight #[[2022-10-07]]
- 指令集架构（Instruction Set Architecture, ISA）描述了如何通过软件控制 CPU，是软件与硬件之间的一个中介。ISA 定义了包括支持的数据类型、寄存器、硬件如何操作主存储器等特性，可以参见 [What Is an Instruction Set Architecture?](https://www.arm.com/glossary/isa)。总的来说，就是大部分和计算机体系结构相关的具体细节。 ([View Highlight](https://read.readwise.io/read/01geqcr3agw88n9rsmgeqv4r1a)) #Highlight #[[2022-10-07]]