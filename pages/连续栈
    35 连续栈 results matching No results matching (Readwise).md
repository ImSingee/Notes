retrieved:: [[2022-02-01]], 2:43:45 PM
              author:: [[简悦]]
              category:: [[articles]]
              source:: [[api_article]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)
- ## [[Readwise Highlights]]
	- goroutine 可以初始时只给栈分配很小的空间，然后随着使用过程中的需要自动地增长
	                link:: [null](null)
	                on:: [[2021-06-01]]
	                tags::
	- 每次执行函数调用时 Go 的 runtime 都会进行检测，若当前栈的大小不够用，则会触发 “中断”，从当前函数进入到 Go 的运行时库，Go 的运行时库会保存此时的函数上下文环境，然后分配一个新的足够大的栈空间，将旧栈的内容拷贝到新栈中，并做一些设置，使得当函数恢复运行时，函数会在新分配的栈中继续执行，仿佛整个过程都没发生过一样，这个函数会觉得自己使用的是一块大小“无限” 的栈空间
	                link:: [null](null)
	                on:: [[2021-06-01]]
	                tags::
	- Go 语言和 C 不同，不是使用栈指针寄存器和栈基址寄存器确定函数的栈的
	                link:: [null](null)
	                on:: [[2021-06-01]]
	                tags::
	- 每个 goroutine 对应一个结构体 G，大致相当于进程控制块的概念
	                link:: [null](null)
	                on:: [[2021-06-01]]
	                tags::