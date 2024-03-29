title:: Readwise/Highlights/08 | 动态链接（下）：延迟绑定与动态链接器是什么？ - 编程高手必学的内存知识
author:: [[海纳]]
full-title:: 08 | 动态链接（下）：延迟绑定与动态链接器是什么？ - 编程高手必学的内存知识
category:: #articles
url:: https://time.geekbang.org/column/article/440471
- 好，我是海纳 #Highlight #[[2023-05-09]]
- 动态链接会把不同模块之间，符号重定位的操作，推迟到程序运行的时候，而 ld-linux.so 就负责这个工作。所以我们经常称 ld.so 为动态链接器，又因为它还负责加载动态库文件，所以我们有时也叫它 loader，或者加载器。 #Highlight #[[2023-05-07]]
- ld-linux.so 的源码实际上是在 glibc 里边，主要实现都是在 glibc 的 elf 文件夹下。 #Highlight #[[2023-05-07]]
- ld-linux.so 做的事情主要有这么几件：第一是启动动态链接器；第二是根据可执行文件的动态链接信息，寻找并加载可执行文件依赖的.so 文件；第三步是跟静态链接器一样，对所有的符号进行解析和重定位；最后会根据 so 的情况来依次执行各个 so 的 init 函数。 #Highlight #[[2023-05-07]]
- ld-linux.so 在启动之后，首先需要完成自己的符号解析和重定位的过程，这个过程叫做动态链接器的自举 (Bootstrap) #Highlight #[[2023-05-07]]
- 在 Linux 下，编译一个最简单的可执行程序，通过 ldd a.out 命令你会发现有一个特殊的共享库文件：ld-linux-x86-64.so。从名字上可以看出，这个 ld-linux.so 跟链接器 ld 应该是存在某种联系的。 #Highlight #[[2023-05-07]]
- 根据可执行文件的.dynamic 段信息依次加载程序依赖的共享库文件。程序的共享库依赖关系往往是一个图的关系，所以这里在加载共享库的过程也相当于是图遍历的过程，这里往往采用的是广度优先搜索的算法来遍历。 #Highlight #[[2023-05-07]]
- 在静态链接的过程中，如果不同的.o 里边定义了相同的符号，这时链接器会报出 redefine 的错误。而 ld-linux.so 的执行策略则是不同的，ld-linux.so 在碰到相同的符号时，只会将第一次碰到的符号添加到全局符号表中，而后续碰到重名的符号就被自动忽略。 #Highlight #[[2023-05-07]]
- 有的 so 文件还会有.init 段，进行一些初始化函数的调用，例如 so 中全局变量的对象构造函数，或者用户自己生成在.init 段的初始化函数等。这些都会由 ld-linux.so 在最后的阶段进行一次调用 #Highlight #[[2023-05-07]]
- 重定位的时机有三个，分别是编译期重定位（第 6 节课），加载期（第 7 节课）和这节课介绍的运行时重定位。 #Highlight #[[2023-05-07]]
- patch code 技术有一个缺点，那就是在运行期要修改代码段的数据，这为系统带来了风险。动态链接库则引入了.plt 和.got 段，通过间接调用来解决这个问题。在运行时，符号解析函数只需要修改 GOT 的内容就可以了，代码段是不会发生任何变化的。 #Highlight #[[2023-05-07]]