title:: Readwise/Highlights/聊聊Go与依赖注入
author:: [[tonybai.com]]
full-title:: 聊聊Go与依赖注入
category:: #articles
url:: https://tonybai.com/2023/09/28/dependency-injection-with-go/
tags:: #[[go inbox]] #[[inoreader]] #[[tony bai]] #[[博客]]
- 依赖倒置原则实际上就是对控制反转(Inversion of Control，IoC)这一概念的阐述，而[依赖注入(Dependency Injection)](http://en.wikipedia.org/wiki/Dependency_injection)是实现控制反转的一种机制。所以可以说，依赖倒置原则是设计级的指导思想，它提出了正确的依赖关系；而依赖注入是实现级的具体设计模式，它将组件的依赖关系控制权移到了外部，实现了组件之间的解耦，是对依赖倒置原则的一种实现手段。 ([View Highlight](https://read.readwise.io/read/01hbcqbne3ev09crkrye2sn7q0)) #Highlight #[[2023-09-28]]
- 依赖注入可以帮助你开发出松耦合的代码，**松耦合使代码更易于维护**。 ([View Highlight](https://read.readwise.io/read/01hbcqbrkjw6e95yh7gfmf762f)) #Highlight #[[2023-09-28]]
- **往往代码库越庞大，引入DI的好处就越发明显**。松耦合带来的好处并不总是立竿见影，但随着时间的推移，随着代码库复杂性的增加，这些好处就会变得显而易见 ([View Highlight](https://read.readwise.io/read/01hbcqcrgxjpvqzsanhkvmwkcx)) #Highlight #[[2023-09-28]]
- Go社区（尤其是一些大厂）提供了一些Go依赖注入工具，比如：[Google wire](https://github.com/google/wire)、[uber Fx](https://github.com/uber-go/fx)、[facebook inject](https://github.com/facebookarchive/inject)等。这些工具大致可分为两类，一类是**利用代码生成技术的编译期依赖注入**，另一类则是**利用反射技术的运行时依赖注入**。 ([View Highlight](https://read.readwise.io/read/01hbcqde462205xtczergy49c7)) #Highlight #[[2023-09-28]]
- facebook的inject已经public archived；google wire目前的开发也不是很active，wire团队给出的理由是要保持wire足够简单并认为从v0.3.0开始，wire已经是功能特性完备的了，目前不接受新feature，仅接受bug报告和修复的补丁pr。只有uber的fx还处于非常积极的开发状态，uber宣称fx是经过uber生产验证的：uber几乎所有的Go服务都是建立在Fx基础之上的。 ([View Highlight](https://read.readwise.io/read/01hbcqdx8p72yqjxya2pyykpnv)) #Highlight #[[2023-09-28]]
- 编译期间注入的最大好处就是**生成的依赖注入和组装的代码是对你可见的**，没有任何背后的“魔法”。这便于在编译期捕捉到注入过程的错误，也便于代码的调试 ([View Highlight](https://read.readwise.io/read/01hbcqeq8kt4wr3szxet2gzy1b)) #Highlight #[[2023-09-28]]
- 编译期注入可以避免依赖膨胀。Wire生成的代码只会导入所需的依赖项，因此，你的二进制文件不会有未使用的导入。运行时依赖项注入在运行时之前无法识别未使用的依赖项 ([View Highlight](https://read.readwise.io/read/01hbcqew2q3jxp031cj2xaf4eh)) #Highlight #[[2023-09-28]]
- uber应该是先开源的[dig](https://github.com/uber-go/dig)，再有的[fx](https://github.com/uber-go/fx)。dig是基于反射的依赖注入工具包，而fx则是由dig支撑的依赖注入框架。对应普通Go开发者而言，直接使用fx就对了 ([View Highlight](https://read.readwise.io/read/01hbcqfz6b4hvht1wjzw9gqjbd)) #Highlight #[[2023-09-28]]