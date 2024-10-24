title:: Readwise/Highlights/怎么做一个清爽、轻盈的 Ux 设计 1- 今...
author:: [[@nishuang on Twitter]]
full-title:: 怎么做一个清爽、轻盈的 Ux 设计 1/ 今...
category:: #tweets
url:: https://twitter.com/nishuang/status/1625269080084164608
- 怎么做一个清爽、轻盈的 UX 设计
  
  1/
  
  今天体验了推友开发的博客托管服务
  
  除了非专业设计师通常的设计小缺点之外，它的后台设计有个很明显的缺陷：视觉上很清爽、轻盈，但操作很重
  
  他可能想提供 iA Writer 那样极简、沉浸的写作体验，因此后台的 UI 也使用了极简设计 + 黑白灰配色，心理感觉类似下图 
  
  ![](https://pbs.twimg.com/media/Fo4ZN8ZWAAITKhE.jpg) ([View Tweet](https://twitter.com/nishuang/status/1625269080084164608)) #Highlight #[[2023-02-15]]
- 2/
  
  之所以看似简洁的 UI 用起来却很重，因为它在 UX 上并不简洁
  
  UX 设计的重点是帮用户完成任务，此时的“简/simple”通常是指“容易/easy”、“洁/clean”通常是指“清晰/clear”
  
  比如有人在空间很宽裕的网页界面里设计纯图形 icon，这看似简洁其实增加了理解难度、增加了记忆的负担，属于很蠢的设计思路 ([View Tweet](https://twitter.com/nishuang/status/1625341256544010242)) #Highlight #[[2023-02-15]]
- 3/
  
  很多方法让 UX 设计清爽、轻盈
  
  1）让控件的外观有层级，比如
- 4/
  
  2）区分相似的控件
  
  比如标题、正文、可点击的链接、被选中的链接，这几者是功能完全不同的控件
  
  我在测试时几乎看不出它们的差别，眼睛很累也就算了，心情很紧张怕点错好吧
  
  以前 iOS 7 刚刚引入扁平化时，用户也是分不清标题和链接，看不出“返回”到底能不能点…当时苹果的设计师被全世界人民唾骂 ([View Tweet](https://twitter.com/nishuang/status/1625341259219931142)) #Highlight #[[2023-02-15]]
- 5/
  
  3）把相似的内容分组，把性质不同的内容区隔
  
  有两个界面，一个有 5 个分散的元素，另一个有分成三组的 15 个元素…你猜哪个看起来更简单？
  
  后者！
  
  我测试的后台，菜单区域和主操作区的区别不明显，而操作区里内容块之间的区隔非常不明显，在一个内容块嵌套的界面里，我都不知道我在操作什么 ([View Tweet](https://twitter.com/nishuang/status/1625342742380310528)) #Highlight #[[2023-02-15]]
- 6/
  
  4）保持页面排版和控件的设计风格一致
  
  这个很好理解，非但一致性会带来心理上的轻松、满足，一致性也因为降低学习难度，而让操作变得更简单
  
  建议在设计阶段先从最小颗粒的控件开始，设计一套“设计系统”，用这个系统来搭建出界面；而不是从页面功能开始，临时设计排版、设计控件 ([View Tweet](https://twitter.com/nishuang/status/1625343617538686976)) #Highlight #[[2023-02-15]]
- 7/
  
  5）让操作结果更直观
  
  我测试的这个博客服务，后台最重要功能是编辑器，出于各种原因，开发者提供了纯 Markdown 编辑器，就是纯文字加上 #、![](url) 等等参数，编辑完了再预览文章的效果
  
  相比之下，Notion 的编辑器就非常直观，所有编辑所见即所得，不需要在编辑器和预览之间来回切换 ([View Tweet](https://twitter.com/nishuang/status/1625523243036643330)) #Highlight #[[2023-02-15]]
- 8/
  
  6）减少流程，自动化地帮助用户完成任务
  
  新用户总会遇到冷启动的问题，比如创建自己的博客，既需要填充个人资料、又需要设置博客的基本参数、还要设计网站的外观、然后最关键的…需要发布新文章
  
  这么多任务积压在冷启动的一瞬间，想想也不可能“轻盈”，无论是心理上还是体力上 ([View Tweet](https://twitter.com/nishuang/status/1625523244647305217)) #Highlight #[[2023-02-15]]
- 9/
  
  与其设计一组你以为酷炫、其实用户根本不看的 onboarding 动画，不如帮用户完成初始任务
  
  参考 Notion 的做法，每个用户注册成功后，Notion 帮你“写好”3篇文章/笔记，它们既是功能示例、又是教程、又是作品。Notion 不是丢给你一个空白的笔记工具，而是给你一个已经填好笔记的笔记本 ([View Tweet](https://twitter.com/nishuang/status/1625523245964222464)) #Highlight #[[2023-02-15]]
- 10/
  
  7）让核心功能最轻
  
  每个产品都有核心功能，让核心功能轻快、好用，效果远远好于一大堆清爽、轻盈的辅助功能
  
  对博客而言最重要的功能是编辑器
  
  我测试的博客服务使用 iA Writer 一样的纯种 Markdown 编辑器，这种编辑器插入图片有点麻烦，绘制表格比较麻烦，给内容左右分栏非常麻烦… ([View Tweet](https://twitter.com/nishuang/status/1625523247331569665)) #Highlight #[[2023-02-15]]
- 11/
  
  相比之下，Notion 们的编辑器里的内容块可以随意拖放、还能自动排版；所有操作都自动保存，不用担心忘记保存而丢失辛辛苦苦写下的东西
  
  有这样的编辑器，写文章的心理感觉就像发推文一样相对轻松，而不是一个充满仪式感的沉重任务 https://t.co/1qkIO44sOb ([View Tweet](https://twitter.com/nishuang/status/1625523248732536836)) #Highlight #[[2023-02-15]]
- 12/
  
  中途小结一下，以上说的设计思路，都是通过让产品操作更容易、更清晰，来实现用户身心的“轻盈”
  
  在看电视、刷抖音那种不过脑的娱乐产品里，轻盈不重要，反正也不需要动手干嘛。而在发推文、写博客这种需要操作的产品里，轻的产品会让用户增加使用时间、创造更多内容
  
  下面接着说视觉上的“清爽” ([View Tweet](https://twitter.com/nishuang/status/1625523250116677639)) #Highlight #[[2023-02-15]]