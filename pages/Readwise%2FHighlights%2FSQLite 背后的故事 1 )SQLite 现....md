title:: Readwise/Highlights/SQLite 背后的故事 1 )SQLite 现...
author:: [[@leyafo on Twitter]]
full-title:: SQLite 背后的故事 1 )SQLite 现...
category:: #tweets
url:: https://twitter.com/leyafo/status/1553752242540257283

- SQLite 背后的故事
  1 )SQLite 现在已经是全球用户最多的数据库产品。它非常小巧以及单文件无单独操作系统进程，就像病毒一样依附在宿主程序的进程里运行，你看不到它，但它却无处不在。汽车，手机，浏览器，以及各类 app 里都能见到 .db 结尾的 SQLite 数据库文件。 假如 SQLite 出现重大bug，或像平常 ([View Tweet](https://twitter.com/leyafo/status/1553752242540257283)) #Highlight #[[2022-08-01]]
- 2)的数据库那样无法连接，整个地球都会乱套。你身边用的几乎所有电子产品（手机，电脑，ipad，笔记本）和嵌入式设备全部都会出问题。它的诞生到大范围全球流行的过程和一般软件有着不太一样的发展历程。 ([View Tweet](https://twitter.com/leyafo/status/1553752244939399169)) #Highlight #[[2022-08-01]]
- 3)SQLite 诞生的契机就是典型的程序员开发的故事剧本。作者 Richard 最开始在一艘军舰上做 contractor（就是我们说的外包）。他们程序跑在军舰安装的电脑上，电脑上装的是 informix。Richard 的工作就是把 informix 的数据拿出来进行计算然后展示到电脑屏幕上（这和我们今天的 CRUD 工作类似）。 ([View Tweet](https://twitter.com/leyafo/status/1553752247367938048)) #Highlight #[[2022-08-01]]
- 4)比较令人恼火的是 informix 很不稳定，经常崩溃连不上。部队里的铁拳长官可不懂啥 TCP/IP或者数据库系统知识。他们只看到软件的对话框经常弹出来，而这个对话框又是 SQLite 的作者 Richard 用软件画出来的，锅自然从天而降。于是 Richard 决定自己从头写一个无需外部连接的数据库来解决这个问题 ([View Tweet](https://twitter.com/leyafo/status/1553752249976836097)) #Highlight #[[2022-08-01]]
- 5)当时恰逢布什政府消减政府预算， Richard 作为外包商没法获得订单，不得不暂停在军舰上的开发。这让 Richard 有了几个月的时间去构思并从头实现 SQLite。 ([View Tweet](https://twitter.com/leyafo/status/1553752252405276673)) #Highlight #[[2022-08-01]]
- 6)那时时间是 2000 年初，软件开发没有现在这么多参考资料，没有维基百科，google 还没完全起来， 美国只有 1% 家庭有宽带。 而 Richard 也没有数据库开发经验，只有编译器开发经验。他最初的构想非常简单，把每条 sql 语句看成一个独立的执行程序。 ([View Tweet](https://twitter.com/leyafo/status/1553752254905139200)) #Highlight #[[2022-08-01]]
- 7)于是他首先实现了 bytecode 执行器，然后把 sql 语句转化成 byte code 执行。一开始 SQLite 并没有替换掉他们在军舰上的 informix，尽管他们每个开发者都恨透了 informix，但客户指定要用又不得不继续使用（好熟悉的场景）。就这样 SQLite 一直做为 Richard 的 side project 在开发。 ([View Tweet](https://twitter.com/leyafo/status/1553752257224527872)) #Highlight #[[2022-08-01]]
- 8) 为了验证一些想法和测试其中的代码，Richard 开始把 SQLite 发布到了网上，接下来的故事和 linux 诞生有点类似了。 很多人看到一个数据库居然能运行在 palm 这种性能非常弱的掌机上都大为惊叹。 ([View Tweet](https://twitter.com/leyafo/status/1553752259766341632)) #Highlight #[[2022-08-01]]
- 9) 一些大公司也开始注意到了 SQLite。首先找上门来的是摩托罗拉，给他们签订了一个功能增强订单，大约 8 万美元的样子。有了这笔钱后，Richard 得以让他认识的几个优秀程序员开始全职在 SQLite 上进行开发。然后就是巨头 AOL（美国在线）打来了电话要把 SQLite 放在 cd 里面使用。 ([View Tweet](https://twitter.com/leyafo/status/1553752262014484481)) #Highlight #[[2022-08-01]]
- 10) 后来更大巨头 Nokia 也过来了， 他们需要把 SQLite 放到 symbian os（塞班系统）。当时 nokia 决定采用 SQLite 绝非偶然，而是 SQLite 在 nokia 内部的产品选型里击败了9个同类其他产品。nokia 之后 SQLite 成立了一个 SQLite 联盟， ([View Tweet](https://twitter.com/leyafo/status/1553752264606875651)) #Highlight #[[2022-08-01]]
- 11) 当时 Mozilla 基金会 Mitchell Baker 教 Richard 如何运行这个组织，如何让那些加入的公司可以资助金钱，但最终决定做什么由他们自己的开发人员拍板。就这样一通码农看不懂的基金会骚操作，让 SQLite 得到了 Mozilla, symbian, Adobe 这些大公司的金钱资助但没有决定权。 ([View Tweet](https://twitter.com/leyafo/status/1553752266993065984)) #Highlight #[[2022-08-01]]
- 12) 这阶段算是 SQLite 发展的中期阶段，像病毒一样发展的高峰阶段是 andorid 发明。
  
  当时 Andorid 是一个内部系统，它比 iPhone 实际上要更早。2005 年那会机器也都是原型机，SQLite 就运行在这些原型机上，调试通过公共网络接入到电脑里面的 GDB。 ([View Tweet](https://twitter.com/leyafo/status/1553752269576843269)) #Highlight #[[2022-08-01]]
- 13) 当时 Richard 看到运行 SQLite 的原型机能通过共用的网络进行 GDB 调试时，就觉得 android 以后肯定会迅猛发展。后面的事情果然如预想的那样，SQLite 也跟着像病毒一样看不见，但却无处不在。 ([View Tweet](https://twitter.com/leyafo/status/1553752272009510912)) #Highlight #[[2022-08-01]]
- 14) 由于他们的客户都是工业界的头部公司，对 SQLite 的稳定性要求特别高， Richard 也时不时需要向客户证明它们的代码没有 bug，质量是稳定可靠的。因此 SQLite 测试非常严苛， 他们的测试在业界也非常知名的，他们自己也经常提及。但他们测试的做事方式确是来自于航空领域的 DO-178B 手册。 ([View Tweet](https://twitter.com/leyafo/status/1553752274547093504)) #Highlight #[[2022-08-01]]
- 15) Richard 说这手册里面的内容常人也能看懂，里面主要推动的是 MC/DC（代码覆盖率）这件事。但 SQLite 的代码非常底层，有时甚至需要深入到机器码这个层面去测试，测试难度相当高，要做到 100% 测试覆盖绝非易事。他们花了整整一年的时间，每天12小时，每周工作 60 小时做到了 95% 的覆盖率， ([View Tweet](https://twitter.com/leyafo/status/1553752277080453120)) #Highlight #[[2022-08-01]]
- 16) 另外剩余的 5% 更困难，花了更多的时间去做。据 Richard 自己说，这 5% 的测试代码从未开放过，它甚至想作为产品的核心功能拿去卖钱。有了 100% 测试覆盖率后，SQLite 在 andorid 就没在被客户报过 bug 了。 ([View Tweet](https://twitter.com/leyafo/status/1553752279840239616)) #Highlight #[[2022-08-01]]
- 17) 他们的测试代码量非常恐怖，每个版本 10 万个测试 case，会跑 10 亿个测试。SQLite 运行的环境估计是地球上运行环境最广的软件了。运行的 cpu 从 arm/intel/amd 到操作系统 linux/bsd/windows/macos， 几乎所有的 CPU，所有的操作系统都需要跑这些测试，这还仅仅只是代码层面的测试。 ([View Tweet](https://twitter.com/leyafo/status/1553752282222604288)) #Highlight #[[2022-08-01]]
- 18) 还有 sql 语句的测试，要做到输入的 sql 执行结果和市面上 mysql/orcle/postgres 这些数据库一样的结果才行（Richard 特别提到 postgresql 这方面表现是最好的）。 ([View Tweet](https://twitter.com/leyafo/status/1553752284785389569)) #Highlight #[[2022-08-01]]
- 19) Richard 提到了他是如何在完全不懂数据库的情况下把 SQLite 做出来的。他提到这是第一性原理(first principle)的应用。简单来说就是按照事物本来的样子去设计。他说做数据库的人和组织非常多，但最后的结果大家都殊途同归。用不同的做事方式最后都达到同样的结果。 ([View Tweet](https://twitter.com/leyafo/status/1553752287150895121)) #Highlight #[[2022-08-01]]
- 20) 还有些趣事是，他也不懂 B 树。需要用到的时候还得去翻看 The Art of Computer Programming（计算机程序设计艺术）。并且 Knuth 的书连 b 树的 delete 删除的算法都没提供，被做为练习题让读者自己去实现。。。。 ([View Tweet](https://twitter.com/leyafo/status/1553752290598612994)) #Highlight #[[2022-08-01]]
- 21) 我个人一直以来对 SQLite 有很大的误解，认为它很小巧应该是个复杂度不搞的小型项目，会比 mysql/postgres/orecle 这类数据库复杂度要小不少。实际上事实并不是这样的。SQLite 经过 20 多年发展，支持几乎所有数据库功能，并且能跑在几乎所有小型的嵌入式环境里。 ([View Tweet](https://twitter.com/leyafo/status/1553752292997808128)) #Highlight #[[2022-08-01]]
- 22) 对这些小型环境需要做的优化比普通数据库要更多，实现起来了要更复杂。想学习数据库的实现从 SQLite 入手并不是一个好的选择。 它虽然运行环境和代码量小巧，但在工程层面实际上是个大项目，背后还有无数的单元测试。它做到了软件开发的一个非常难做到的事情：100%测试覆盖。 ([View Tweet](https://twitter.com/leyafo/status/1553752295514390528)) #Highlight #[[2022-08-01]]
- 23) 这意味着后续的任何开发迭代都能做到机器自动化测试，自动找出新加入代码产生的兼容性问题，不得不说这是程序员梦想中的代码迭代方式。SQLite 一开始就诞生在工业界巨头公司的夹缝里面，从最开始它就是一个对运行质量要求极高的工业软件。 ([View Tweet](https://twitter.com/leyafo/status/1553752297905131520)) #Highlight #[[2022-08-01]]
- 24) 它看起来像一个精致的小软件，但绝不是一个小玩具，当年他合作的是摩托罗拉和诺基亚这种巨头放在今天也是facebook，google 这种体量。从它打败诺基亚内部9个同类产品这段经历来看，这是很典型的一个头部软件赢家通吃的案例。它是纯粹商业驱动项目，并不是开源社区项目，开源只是它商业模式的一部分 ([View Tweet](https://twitter.com/leyafo/status/1553752300312621061)) #Highlight #[[2022-08-01]]
- [完]
  参考资料：
  https://t.co/GRmRpqMOYs
  https://t.co/GEc28TwtWc
  
  原文阅读：
  https://t.co/kELOjBVbIx
  
  感谢阅读。 ([View Tweet](https://twitter.com/leyafo/status/1553752303122821120)) #Highlight #[[2022-08-01]]