title:: Readwise/Highlights/2022-30: 如何维护一个开源项目
author:: [[Rust Embedded]]
full-title:: 2022-30: 如何维护一个开源项目
category:: #articles
url:: https://xuanwo.io/reports/2022-30/

- 开源项目的发展也大体遵循着强者恒强的马太定律：一个特定的垂直领域往往只能容下一到两个广泛使用的项目。 ([View Highlight](https://read.readwise.io/read/01g9c0cy19q0zzr5jdq3c6xjcd)) #Highlight #[[2022-08-01]]
- 如果我们不能够比现有项目做的更好，不如直接放弃加入现有项目。否则我们就需要进一步对领域进行细分，找到自己的差异化优势。 ([View Highlight](https://read.readwise.io/read/01g9c0d86qbe3ncvbkv3tqx9ac)) #Highlight #[[2022-08-01]]
- 文章合为时而著，代码合为事而写。开源项目必须要能够解决实际的问题，否则就无法形成一个可靠的开源共同体。 ([View Highlight](https://read.readwise.io/read/01g9c0dygsbv8xtm4vpw02chmb)) #Highlight #[[2022-08-01]]
- 开源维护者必须维护一个良好的集成测试基础设施：在开源协作的环境下，不可能有一个测试团队来为所有 PR 运行测试，因此社区需要一个持续的集成测试服务来保证所有的 PR 都通过必要的测试再合并。
  
  这个集成测试服务必须：
  
  •   快速：在可容忍的时间内返回结果。PR CI 时间越长，对贡献者来说体验就越差。
  •   稳定：能够稳定可靠的返回测试错误，而不是让贡献者经常怀疑是不是 CI 服务器出问题了。
  •   公开：能够公开的查阅错误日志，而不是一个完全的黑箱。
  •   可重现：贡献者能够方便的在本地重现错误，不需要反复 commit 来触发测试。
  
  达成这些，一方面需要可靠稳定的测试基础设施，另一方面需要维护者维护好测试代码以及测试使用的脚本，缺一不可。 ([View Highlight](https://read.readwise.io/read/01g9c0fm9mk07r39tbsz3j58q3)) #Highlight #[[2022-08-01]]
- 在开源项目的维护过程中经常会出现各种热血沸腾的 idea，比如增加一个全新的功能，进行大规模的重构，对 API 进行完全的重新设计，架构进行大规模调整等。维护者需要回顾自己项目的愿景，决定是否要延拓项目的边界，三思而后行。一个非常好的办法就是写 RFC：写 RFC 能够帮助厘清需求的前因后果，需要的投出，产出的收益，让维护者冷静下来重新思考是否有必要进行这样的修改。 ([View Highlight](https://read.readwise.io/read/01g9c0hjwrvn9p91jf72fnrcyj)) #Highlight #[[2022-08-01]]