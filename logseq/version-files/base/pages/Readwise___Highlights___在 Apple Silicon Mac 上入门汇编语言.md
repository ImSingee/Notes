title:: Readwise/Highlights/在 Apple Silicon Mac 上入门汇编语言
author:: [[evian-zhang.github.io]]
full-title:: 在 Apple Silicon Mac 上入门汇编语言
category:: #articles
url:: https://evian-zhang.github.io/learn-assembly-on-Apple-Silicon-Mac/3-%E7%A1%AC%E4%BB%B6%E5%9F%BA%E7%A1%80.html

- 在内存和硬盘中，数据的存储的基本单位都是字节 (Byte)。我们知道，在硬件中表示数据都是采用的二进制位，也就是 `0` 和 `1`. 我们称每一位这样的二进制位为一个比特 (Bit). 而一个字节，就是连续的八个比特。我们在汇编语言中，大部分情况下需要处理的最小的单位就是字节。一个字节，也可以看作是一个 8 位二进制数，或者一个 2 位 16 进制数。1 字节常记做 1B, 1 比特常记做 1b. 我们常用的单位还有 KB (Kilobyte), KiB (Kibibyte), MB (Megabyte), MiB (Mebibyte) 与 GB (Gigabyte), GiB (Gibibyte). 严格来说，1KB=1000B, 1KiB=1024B, 1MB=1000KB, 1MiB=1024KiB, 1GB=1000MB, 1GiB=1024MiB. 在 macOS 以及 iOS 中采用的是这种标准的记法（可参考 [iOS 和 macOS 如何报告储存容量](https://support.apple.com/zh-cn/HT201402#decimal)）。 ([View Highlight](https://read.readwise.io/read/01geqcqnc0q86e9k4p7gvcczpm)) #Highlight #[[2022-10-07]]
- 指令集架构（Instruction Set Architecture, ISA）描述了如何通过软件控制 CPU，是软件与硬件之间的一个中介。ISA 定义了包括支持的数据类型、寄存器、硬件如何操作主存储器等特性，可以参见 [What Is an Instruction Set Architecture?](https://www.arm.com/glossary/isa)。总的来说，就是大部分和计算机体系结构相关的具体细节。 ([View Highlight](https://read.readwise.io/read/01geqcr3agw88n9rsmgeqv4r1a)) #Highlight #[[2022-10-07]]
- 链接器首先会在`__TEXT`段的`__stubs`节生成若干个桩函数，在原来对`bar1`、`bar2`的调用处的指令，实际上被替换为了对对应的桩函数的调用。
  
  在桩函数中，会间接跳转到某些地址上。这些地址一般存储在`__DATA`段的`__got`节，或者存在`__la_symbol_ptr`等节中。一般而言，这节中的这些地址，一开始是动态链接器的某些函数的地址。因此在第一次调用到桩函数的过程中，会调用到动态链接器的函数。动态链接器此时解析相应的符号，然后把`__got`节（或者别的类似的节）中的地址重写为真正的解析到的函数的地址。 ([View Highlight](https://read.readwise.io/read/01hfm83tsc3sxj9ytcfkfm6xjx)) #Highlight #[[2023-11-20]]
- 静态链接生成`14-main-dynamic`时，似乎不需要动态链接库 ... 但是我们给出的静态链接的过程中，依然需要在命令行里给出相应的动态链接库 ... 事实上，在静态链接时提供动态链接库主要有两个原因： ... 在生成的可执行程序中存储动态链接库的名字
  
  在静态链接时，对于该可执行程序执行时需要的动态链接库，我们显式地给出来，链接器会把这些动态链接库的名字存储在可执行程序内。在执行时，动态链接器就可以根据这些名字，直接将相应的动态链接库载入内存。 ... 确保所有符号都会被解析
  
  如果有的符号在动态链接库中也不存在，那么执行时动态链接器就没办法解析相应的符号，造成崩溃。因此，在链接时可以直接检查是不是所有没定义的符号都在动态链接库中，从而减小开发者失误的可能性。 #Highlight #[[2023-11-20]]
- 在静态链接时，实际上只需要给出动态链接库的名字以及动态链接库提供的符号。因此，在最近的新版本的macOS中，所有的系统库都采用了`.tbd`文件的形式存储在硬盘中。这些`.tbd`文件只含有动态链接库的名字和其中的符号，不含有实际指令。通过这种方案，减小了SDK在硬盘中的体积，也减小了系统库被逆向的可能性。 ([View Highlight](https://read.readwise.io/read/01hfm85cx9jbntveenx5hq5anf)) #Highlight #[[2023-11-20]]