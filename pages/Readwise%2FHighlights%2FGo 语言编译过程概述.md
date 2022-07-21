title:: Readwise/Highlights/Go 语言编译过程概述
author:: [[draveness.me]]
full-title:: Go 语言编译过程概述
category:: #articles
url:: https://draveness.me/golang/docs/part1-prerequisite/ch02-compile/golang-compile-intro/

- 静态单赋值（Static Single Assignment、SSA）是中间代码的特性，如果中间代码具有静态单赋值的特性，那么每个变量就只会被赋值一次 #Highlight #[[2022-07-21]]
- 编译器的前端一般承担着词法分析、语法分析、类型检查和中间代码生成几部分工作，而编译器后端主要负责目标代码的生成和优化，也就是将中间代码翻译成目标机器能够运行的二进制机器码 #Highlight #[[2022-07-21]]
- Go 的编译器在逻辑上可以被分成四个阶段：词法与语法分析、类型检查和 AST 转换、通用 SSA 生成和最后的机器代码生成 #Highlight #[[2022-07-21]]
- Go 语言的语法解析器使用的是 LALR(1)6 的文法 #Highlight #[[2022-07-21]]
- 类型检查阶段不止会对节点的类型进行验证，还会展开和改写一些内建的函数，例如 make 关键字在这个阶段会根据子树的结构被替换成 runtime.makeslice 或者 runtime.makechan 等函数 #Highlight #[[2022-07-21]]