title:: Readwise/Highlights/Swift ABI 稳定对我们到底意味着什么
author:: [[王巍 (onevcat)]]
full-title:: Swift ABI 稳定对我们到底意味着什么
category:: #articles
url:: https://onevcat.com/2019/02/swift-abi/
- 什么是 ABI 稳定？
  
  就是 binary 接口稳定，也就是在运行的时候只要是用 Swift 5 (或以上) 的编译器编译出来的 binary，就可以跑在任意的 Swift 5 (或以上) 的 runtime 上。这样，我们就不需要像以往那样在 app 里放一个 Swift runtime 了，Apple 会把它弄到 iOS 和 macOS 系统里。 ([View Highlight](https://read.readwise.io/read/01he1scehb3dyty082xzv56n63)) #Highlight #[[2023-10-31]]
- 同一个 Xcode 版本默认使用的编译器版本只有一个 (在你不更换 toolchain 的前提下)，当我们在说到“使用 Xcode10.2 的 Swift 4 兼容模式”时，我们其实指的是，使用 Xcode 10.2 搭载的 Swift 5.0 版本的编译器，它提供了 4.2 的语法兼容，可以让我们不加修改地编译 Swift 4.2 的代码。即使你在 Xcode 10.2 中选择语言为 Swift 4，你所得到的二进制依然是 ABI 稳定的。ABI 和你的语言是 Swift 4 还是 Swift 5 无关，只和你的编译器版本，或者说 Xcode 版本有关。
  
  > 多提一句，即使你选择了 Swift 4 的语言兼容，只要编译器版本 (当然，以及对应的标准库版本) 是 5.0 以上，你依然可以使用 Swift 5 的语法特性 (比如新增加的类型等)。 ([View Highlight](https://read.readwise.io/read/01he1sf5hbgz92nx58nyatkpf9)) #Highlight #[[2023-10-31]]