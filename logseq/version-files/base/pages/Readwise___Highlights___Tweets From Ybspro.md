title:: Readwise/Highlights/Tweets From Ybspro
author:: [[@ybspro_official on Twitter]]
full-title:: Tweets From Ybspro
category:: #tweets
url:: https://twitter.com/ybspro_official

![](https://pbs.twimg.com/profile_images/1453589897323835393/bZAy4GeF.jpg)
- 挖src（漏洞赏金）的初学者可以看看，希望有帮助。
  
  挖不到洞的主要原因就是思路问题，你可以多看一些漏洞赏金报告学会归纳总结，构建你自己的测试树。
  https://t.co/XryxgLZnWj
  https://t.co/NEhuvagHyx
  
  如果你觉得看报告太枯燥了，没关系，可以来刷一些和业务相关的靶场，而非那种带有脑洞含量的machinelabs。
  https://t.co/BAwTsftcHM
  https://t.co/DOoJQ9LVas
  
  如果你觉得靶场也刷够了，那么非常好，重点来了。
  学习漏洞组合拳：
  selfxss变storexss，crlf+xss，csrf+xss……
  学习漏洞点举一反三：
  1. 资产路径home/user.php的$test参数存在漏洞时，可以拿同样的路径与参数测试一下相同公司的其他资产，因为开发人员如果偷懒使用相同框架开发很有可能会有所疏忽。
  2. 在国内很多报告中都看到过差评反馈等类似功能进行xss的，直到有一天看到一个老外在应用卸载反馈框放了log4j的payload，我才知道我这举一反三的能力还是太差。
  
  最后，耐心很重要，大家都知道我在挖src方面非常没耐心，但我却能做到想挖的时候随时出洞，这大概是因为我的思绪异常活跃吧，经常睡不着的时候想某个功能点可能有什么洞…想到了就拿标签记下来睡醒了测一下。
  
  btw,,,,终于能发长文了✌️ ([View Tweet](https://twitter.com/ybspro_official/status/1731609259232870468)) #Highlight #[[2023-12-05]]