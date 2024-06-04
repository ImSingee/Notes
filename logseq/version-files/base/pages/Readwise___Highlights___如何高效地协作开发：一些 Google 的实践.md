title:: Readwise/Highlights/如何高效地协作开发：一些 Google 的实践
author:: [[0x01 byte]]
full-title:: 如何高效地协作开发：一些 Google 的实践
category:: #articles
url:: https://1byte.io/articles/google-large-scale-dev/

![](https://readwise-assets.s3.amazonaws.com/static/images/article4.6bc1851654a0.png)
标题: 如何高效地协作开发：一些 Google 的实践

作者: 0x01 byte

领域: 1byte.io

这篇文章提供了关于如何高效地协作开发的一些 Google 实践经验。作者分享了自己在 Google Web Server（GWS）团队工作的经历，介绍了 Google 在代码管理、安全、构建工具、自动化测试、代码审查、版本管理和发布流程等方面的做法，以及在项目管理和排期方面的一些见解。

1. 背景介绍
\- Google 的工程实践在技术演讲、书籍等多个渠道中被广泛提及，其中 2000~2010 年被认为是 Google 最具创造力、高效和人才吸引力最强的时期。
- 作者在 Google Web Server（GWS）团队工作了三年，这个团队维护着 Google 最悠久的项目之一，GWS 是 Google HTTP header 中的标识。
- GWS 作为一个支持全球 13% 活跃网站的 web server，包含了搜索、广告、拼写检查等多个业务逻辑。

2. 代码管理和安全
- Google 的每个工程师可以访问 99.9% 的公司代码，除了少数的高价值知识产权部分。
- Google 使用共享的代码库 google3，每个工程师都可以编译、测试和修改公司的任何项目。
- 通过 OverlayFS 和 g4 工具，工程师可以在本地直接访问 Google 代码库，提高了代码的可访问性和修改效率。

3. 构建工具
- Google 使用 Blaze 来支持 C++、Java、Python 和 JavaScript 项目的构建，后来开源并改名为 Bazel。
- 每个项目都有一个 Wiki 页面介绍

- 对公司而言，让自己跑得更快远比让竞争对手跑得慢一点更重要。所以大部分情况下保密措施应该是以不伤害效率为前提的。对用户数据的保密除外，但是保护用户数据的措施通常不会影响到大部分人的工作效率。 ([View Highlight](https://read.readwise.io/read/01hzhbh6kn7121sgszv32nsc21)) #Highlight #[[2024-06-04]]
- 当时内部邮件列表每个人都可以建，项目管理工具的项目每个人都可以建，工程师可以看任何一个数据中心的任何机器上任何服务的日志，甚至可以动态修改它的 feature flag。理论上这些都可以被滥用或者误用，但是滥用往往缺乏动机，误用可以从设计上避免。一个大原则是风险可控或可逆的事情默认是没有流程的，只有实际发生了问题，证明必要时才会靠引入流程来解决。有了流程就需要有人审批有人执行，如果它解决的问题不常发生、有其他方案或者产生的危害不如流程带来的成本，那么设立流程就是不理性的。 ([View Highlight](https://read.readwise.io/read/01hzhbj68q2y9q51yzayxya3ct)) #Highlight #[[2024-06-04]]
- 用静态语言的项目测试难度比动态语言大很多，因为对象的属性和方法无法动态替换，想要能在测试中 mock 掉 side effects 需要在设计上做更多的努力 ([View Highlight](https://read.readwise.io/read/01hzhbm2mtdc0e1kk4283z50fj)) #Highlight #[[2024-06-04]]
- 确保自己项目的稳定性和质量的方式不是不让别人改，而是把自己关心的东西加到测试里去 ([View Highlight](https://read.readwise.io/read/01hzhbmjkrnwwjydwvgd5ee8n1)) #Highlight #[[2024-06-04]]
- Google 在内部做版本管理的方式就是不做版本管理，所有项目都 [live at head](https://www.youtube.com/watch?v=tISy7EJQPzI)。当然，每个项目都有对公司外的版本发布流程，live at head 是对内依赖的策略。一般不会出现一个项目依赖一个组件的 1.1，而另一个项目依赖这个组件的 1.2 这样的情况。每个项目在每次编译的时候，都会把所有依赖从最新的代码编译，使用到的依赖的版本是由编译的时间点决定的。这自然就意味着每一次提交后的代码状态都应该作为稳定版本对待。 ([View Highlight](https://read.readwise.io/read/01hzhbzzfvmv9asds9wwcv1spf)) #Highlight #[[2024-06-04]]
- 以上这样 live at head 的方式意味着不太可能有长期存在的功能分支。如果一个工程师在独立功能分支上开发了几周，那基本上是不太可能合并回主线的。无论是多大的新功能，都会需要拆成很多小的 changelist，高频地提交到主线。只是未完成的功能会用一个 flag 屏蔽掉，在生产环境不会运行。 ([View Highlight](https://read.readwise.io/read/01hzhc7gm230b8v31f2j8d5trg)) #Highlight #[[2024-06-04]]
- 如果大部分事情都需要项管排期，一件很小的事情也可能被排到一两个月后，而这件小事可能 block 了很多其他工作。把一个工程师的时间按开发任务线性地排列，完全做完一件事再开始做另一件事，也并不是高效的方式。工程师确实是需要专注的、避免多任务切换的时间，但这样的时间应该是以小时计，而不是以天或周计的。 ([View Highlight](https://read.readwise.io/read/01hzhc8xm8bsr8cm7f34v3h5w7)) #Highlight #[[2024-06-04]]
- 过去十多年里，硅谷比较成功的互联网公司都是用与 Google 相似的方式来工作的，这不是偶然现象。网状的沟通协作与传统的树状比，表面可能感觉混乱，但是因为不容易形成瓶颈、沟通中信息损耗少，效率是很高的。 ([View Highlight](https://read.readwise.io/read/01hzhcawqzhbp1tbkwy34r0h3g)) #Highlight #[[2024-06-04]]