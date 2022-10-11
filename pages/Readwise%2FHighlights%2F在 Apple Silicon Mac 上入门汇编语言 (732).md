title:: Readwise/Highlights/在 Apple Silicon Mac 上入门汇编语言 (732)
author:: [[evian-zhang.github.io]]
full-title:: 在 Apple Silicon Mac 上入门汇编语言
category:: #articles
url:: https://evian-zhang.github.io/learn-assembly-on-Apple-Silicon-Mac/14-%E6%B1%87%E7%BC%96%E3%80%81%E9%93%BE%E6%8E%A5%E4%B8%8E%E8%B0%83%E8%AF%95.html

- 正如静态链接和动态链接的名字所指示的，静态链接就是在编译时将库的代码直接放到可执行程序内部，而动态链接是在执行可执行程序的过程中，将动态链接库载入内存。如果有多个程序动态链接到了同一个库，那么在载入这些程序到内存的过程中，会将动态链接库所在的同一张物理页映射到这些程序的进程空间中。也就是说，这些进程的内存空间实际上有共同的一部分物理内存，这部分就是动态链接库所在的物理页。这种方式就可以减小内存占用，同时也是一些现代的处理器层面的攻击手段（如熔断、幽灵漏洞等）得以攻击的途径。 ([View Highlight](https://read.readwise.io/read/01gevcs75ztgr5fgyhy4wghj0f)) #Highlight #[[2022-10-08]]
- 静态链接的程序就是指不依赖任何动态链接库的程序，其余的程序则是动态链接的程序 ([View Highlight](https://read.readwise.io/read/01gevcsvcy9ted71j3m0jzf6fy)) #Highlight #[[2022-10-08]]
- 在生成目标文件时，我们会将所有在汇编时无法确认地址的符号（包括不定义在这个文件中的函数，以及我们之前提到的 `@PAGE`、`@PAGEOFF` 等等）放到重定位表中。我们在使用 `nm` 查看符号表的时候，前面的 "U" 就代表这个符号目前无法确认地址，需要重定位。在静态链接的过程中，链接器会查看所有被链接的目标文件的符号。例如，会根据 `14-main.o` 的重定位表，得知其需要 `bar1` 和 `bar2` 这两个符号。在得知 `lib14-foo-static.a` 这个库中提供了 `bar1` 和 `bar2` 这两个符号之后，就可以使用正确的地址去修改在 `14-main.o` 中的函数调用语句，将其地址替换为正确的地址。 ([View Highlight](https://read.readwise.io/read/01gevd1mk3fny69thvdwgyrata)) #Highlight #[[2022-10-08]]
- 在静态链接时，实际上只需要给出动态链接库的名字以及动态链接库提供的符号。因此，在最近的新版本的 macOS 中，所有的系统库都采用了`.tbd` 文件的形式存储在硬盘中。这些`.tbd` 文件只含有动态链接库的名字和其中的符号，不含有实际指令。通过这种方案，减小了 SDK 在硬盘中的体积，也减小了系统库被逆向的可能性。 ([View Highlight](https://read.readwise.io/read/01gevdh3tz8kzdpecbkxe1at15)) #Highlight #[[2022-10-08]]