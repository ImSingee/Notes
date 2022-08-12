title:: Readwise/Highlights/06｜手写CPU（一）：迷你CPU架构设计与取指令实现 - 计算机基础实战课
author:: [[彭东]]
full-title:: 06｜手写CPU（一）：迷你CPU架构设计与取指令实现 - 计算机基础实战课
category:: #articles
url:: https://time.geekbang.org/column/article/547921

- 如果指令执行之后发现跳转的条件不成立，这时预读取的指令就是无效的，需要对流水线进行冲刷（flush），把无效的指令都清除掉。 #Highlight #[[2022-08-09]]
- 预读取模块读出的指令，并不是全部都能发送后续模块去执行。 #Highlight #[[2022-08-09]]
- 不管指令是否跳转，都提前把跳转之后的下一条指令从存储器中读取出来，以备流水线的下一阶段使用，这就提高了 CPU 的执行效率。 #Highlight #[[2022-08-09]]