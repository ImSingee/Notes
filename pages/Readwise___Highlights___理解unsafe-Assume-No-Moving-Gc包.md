title:: Readwise/Highlights/理解unsafe-Assume-No-Moving-Gc包
author:: [[tonybai.com]]
full-title:: 理解unsafe-Assume-No-Moving-Gc包
category:: #articles
url:: https://tonybai.com/2023/04/16/understanding-unsafe-assume-no-moving-gc/
tags:: #[[go inbox]] #[[inoreader]] #[[tony bai]] #[[博客]]
- go4的来历：**gopher的谐音** ([View Highlight](https://read.readwise.io/read/01gydakwwpceqnaz8gfqb8f31y)) #Highlight #[[2023-04-20]]
- 如果你的代码中使用了Go中的unsafe tip，那么**你的程序可以正常工作的前提是Go运行时垃圾回收器不是一个带迁移机制的回收器(collector)**。
  
  所谓带迁移机制的collector，即在GC回收时可能将某些heap object挪到其他内存地址上。你的程序如果导入unsafe-assume-no-moving-gc这个包，就可以在Go GC支持迁移机制时以“程序启动崩溃”的行为提醒你。 ([View Highlight](https://read.readwise.io/read/01gydbbtgyc5aqgndejv21xck7)) #Highlight #[[2023-04-20]]
- unsafe-assume-no-moving-gc只针对GC对heap object的迁移，而不会保证栈地址的迁移，我们知道，Go中栈地址是会变的，因为goroutine的初始栈才2KB，一旦超出这个范围，Go runtime就会对栈进行扩展，即分配一个更大的地址范围作为goroutine的栈，然后将原栈上的变量迁移到新栈中，这样原先栈上变量的地址就都会发生变化 ([View Highlight](https://read.readwise.io/read/01gydbhkny9q06t6awmwap8jwf)) #Highlight #[[2023-04-20]]
- 如果你的Go源码中采用了unsafe tips，依赖了heap object的地址，那么这里建议你导入unsafe-assume-no-moving-gc包。但要注意，随着go最新版本的发布，你要及时更新依赖的unsafe-assume-no-moving-gc的版本。否则当用户使用最新版本go时，依赖你的包的程序就会以panic来提醒 ([View Highlight](https://read.readwise.io/read/01gydbhvakcb246fqk16refmes)) #Highlight #[[2023-04-20]]