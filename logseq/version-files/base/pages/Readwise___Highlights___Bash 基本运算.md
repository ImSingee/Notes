title:: Readwise/Highlights/Bash 基本运算
author:: [[王 茂南]]
full-title:: Bash 基本运算
category:: #articles
url:: https://mathpretty.com/14592.html
tags:: #[[inoreader]] #[[star]] #[[博客]]
- •   `expr`, 可用于整数运算，为内置命令来自于 `Unix`；
  •   `$[ ]`, 简单算术运算，是较老版本；
  •   `(( ))`, 用于简单算术运算，`bash` 中的算术扩展，是 `$[]` 的升级版（**推荐使用**）；
  •   `let`, 运行简单的运算同时赋给变量，为内置命令
  •   `declare`, 定义变量值和属性，-i 参数可用于赋值给变量一个整数属性
  •   `bc`, `Linux` 下的计算器程序，整数运算及小数运算，需要额外安装 ([View Highlight](https://read.readwise.io/read/01hfkxwg460j69q8smc7z0fqqn)) #Highlight #[[2023-11-19]]
- `(())` 是 `$[]` 的升级版。`$[]` 是非常早期的 `bash` 语法，其处理能力和功能性上的弱势使得人们对其功能进行了优化增强，从而出现了 `(())`，官方更多地推荐大家使用 `(())`，淘汰 `$[]`，后者的存在只是为了让一些老版本的脚本不会报错而保留。 ([View Highlight](https://read.readwise.io/read/01hfkxxvcbespjrx4x1dy03ybf)) #Highlight #[[2023-11-19]]
- `let` 命令可以说是 `(())` 的命令版本，在 `(())` 中如果不知道可用的参数，可以直接查看 `let` 的参数介绍。 `let` 是内建命令，若是想看其参数介绍需要用 `help let`。
  
  `let` 与直接使用 `(())` 一样，表达式执行之后是没有结果返回的，要想看到 `let` 执行的效果需要通过变量去查看。 ([View Highlight](https://read.readwise.io/read/01hfky0bypvna4zex6qgpymcqa)) #Highlight #[[2023-11-19]]