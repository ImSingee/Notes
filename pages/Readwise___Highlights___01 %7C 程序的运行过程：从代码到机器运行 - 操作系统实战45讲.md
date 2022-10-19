title:: Readwise/Highlights/01 | 程序的运行过程：从代码到机器运行 - 操作系统实战45讲
author:: [[彭东]]
full-title:: 01 | 程序的运行过程：从代码到机器运行 - 操作系统实战45讲
category:: #articles
url:: https://time.geekbang.org/column/article/369457

- gcc HelloWorld.c -E -o  HelloWorld.i 预处理：加入头文件，替换宏。
  gcc HelloWorld.c -S -c HelloWorld.s 编译：包含预处理，将 C 程序转换成汇编程序。
  gcc HelloWorld.c -c HelloWorld.o 汇编：包含预处理和编译，将汇编程序转换成可链接的二进制程序。
  gcc HelloWorld.c -o HelloWorld 链接：包含以上所有操作，将可链接的二进制程序和其它别的库链接在一起，形成可执行的程序文件。 #Highlight #[[2021-07-05]]
- 它会根据编译流程分别调用预处理程序、编译程序、汇编程序、链接程序来完成具体工作。 #Highlight #[[2021-07-05]]
- 调用预处理程序、编译程序、汇编程序、链接程序 #Highlight #[[2021-07-05]]
	- **Note**: 编译的流程：
	       预编译处理程序 ， 编译程序 ， 汇编程序 ， 链接程序