title:: Readwise/Highlights/Swift中闭包底层原理探索
author:: [[juejin.cn]]
full-title:: Swift中闭包底层原理探索
category:: #articles
url:: https://juejin.cn/post/6935797942435446791
tags:: #[[Swift]]

- 总结一下闭包捕获列表（`closure capture list`）原理：增加闭包本身的参数个数，添加参数的类型与放在闭包捕获列表中的值的类型一致，并放在原闭包参数列表的后面，最后把捕获列表中的值通过参数的形式传给函数内部，传值的拷贝形式的和函数参数传值一致。 ([View Highlight](https://read.readwise.io/read/01hcvpgvhtjkf2r7k9f8afj620)) #Highlight #[[2023-10-16]]