title:: Readwise/Highlights/用 C 语言理解 Linux 软件库 | Linux 中国 (4)
author:: [[mp.weixin.qq.com]]
full-title:: 用 C 语言理解 Linux 软件库 | Linux 中国
category:: #articles
url:: http://mp.weixin.qq.com/s?__biz=MjM5NjQ4MjYwMQ==&mid=2664634590&idx=1&sn=78ea19fee41e3435f0f38b4fe325987f&chksm=bdcf23988ab8aa8ee1f3900a3959909f80018097e7e5e01a384a69377696a7c2a0331df26f85#rd

- 每个在 C 语言中的函数都有一个存储类，它决定了函数的范围 ([View Highlight](https://instapaper.com/read/1415016267/16515840)) #Highlight #[[2021-05-28]]
- 存储类 static 将一个函数的的范围限制到函数被定义的文件中 ([View Highlight](https://instapaper.com/read/1415016267/16515841)) #Highlight #[[2021-05-28]]
- 函数默认的存储类是 extern，它给了函数一个全局域 ([View Highlight](https://instapaper.com/read/1415016267/16515844)) #Highlight #[[2021-05-28]]
- 库的逻辑名字 ([View Highlight](https://instapaper.com/read/1415016267/16515849)) #Highlight #[[2021-05-28]]
- 库的物理文件名字 ([View Highlight](https://instapaper.com/read/1415016267/16515850)) #Highlight #[[2021-05-28]]
- 为了保持逻辑名不变的同时允许物理名随着新版本而发生变化 ([View Highlight](https://instapaper.com/read/1415016267/16515851)) #Highlight #[[2021-05-28]]
- 在物理文件名 libshprimes.so.1 中最后的 1 代表是第一个库的版本。尽管逻辑文件名和物理文件名可以是相同的，但是最佳做法是将它们命名为不同的名字。一个客户程序将会通过逻辑名（本例中为 libshprimes.so）来访问库 ([View Highlight](https://instapaper.com/read/1415016267/16515854)) #Highlight #[[2021-05-28]]
- 逻辑名 libshprimes.so 不应该改变，但是符号链接的目标（libshrimes.so.1）可以根据需要进行更新，新的库实现可以是修复了 bug，提高性能等。 ([View Highlight](https://instapaper.com/read/1415016267/16515858)) #Highlight #[[2021-05-28]]
- 链接器是懒惰的，这意味着链接标志的顺序是需要考虑的 ([View Highlight](https://instapaper.com/read/1415016267/16515863)) #Highlight #[[2021-05-28]]