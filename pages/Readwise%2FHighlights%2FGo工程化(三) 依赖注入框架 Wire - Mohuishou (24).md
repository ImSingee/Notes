title:: Readwise/Highlights/Go工程化(三) 依赖注入框架 Wire - Mohuishou (24)
author:: [[lailin.xyz]]
full-title:: Go工程化(三) 依赖注入框架 Wire - Mohuishou
category:: #articles
url:: https://lailin.xyz/post/go-training-week4-wire.html

- Golang 的依赖注入框架有两类，一类是通过反射在运行时进行依赖注入，典型代表是 uber 开源的 dig，另外一类是通过 generate 进行代码生成，典型代表是 Google 开源的 wire。使用 dig 功能会强大一些，但是缺点就是错误只能在运行时才能发现，这样如果不小心的话可能会导致一些隐藏的 bug 出现。使用 wire 的缺点就是功能限制多一些，但是好处就是编译的时候就可以发现问题，并且生成的代码其实和我们自己手写相关代码差不太多，更符合直觉，心智负担更小，所以我更加推荐 wire，如果对 dig 感兴趣可以跳转到文章参考文献处跳转查阅。 #Highlight #[[2021-04-01]]