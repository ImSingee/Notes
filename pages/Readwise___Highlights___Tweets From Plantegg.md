title:: Readwise/Highlights/Tweets From Plantegg
author:: [[@plantegg on Twitter]]
full-title:: Tweets From Plantegg
category:: #tweets
url:: https://twitter.com/plantegg

- 一语惊醒梦中人的感觉最爽，我是做了10年性能优化后碰到了一次醍醐灌顶般的醒悟
  这之后，无数次只需要看一眼服务的RT、CPU状态就能很快给出服务的极限QPS是多少。
  
  这个原理最简单的总结就是：QPS和延时的乘积是常量（复杂版总结如图1）；分析案例如图2 
  
  ![](https://pbs.twimg.com/media/FjdrfahVEAIyAIp.jpg) 
  
  ![](https://pbs.twimg.com/media/FjdroVeUYAAyUgJ.jpg) ([View Tweet](https://twitter.com/plantegg/status/1601051759727845378)) #Highlight #[[2022-12-10]]
- TCP Delay ACK 百闻不如一见 
  
  ![](https://pbs.twimg.com/media/Fjdp8axUUAA8Et9.jpg) 
  
  ![](https://pbs.twimg.com/media/FjdqG-IXEAI0Yrx.jpg) ([View Tweet](https://twitter.com/plantegg/status/1600864876901339136)) #Highlight #[[2022-12-10]]
- 超线程(Hyper-Threading)原理
  一个物理核还可以进一步分成几个逻辑核，来执行多个控制流程，这样可以进一步>提高并行程度，这一技术就叫超线程，有时叫做 simultaneous multi-threading（
  SMT） https://t.co/FHTpfdJ7p4
  
  ![](https://pbs.twimg.com/media/Fo1GEQCacAAWRGs.jpg) ([View Tweet](https://twitter.com/plantegg/status/1626843960810569731)) #Highlight #[[2023-05-04]]
- 挺好的文章，推荐配合这篇中文的一起阅读效果更好：https://t.co/86kpwWxsjR https://t.co/nb62JrlbVG ([View Tweet](https://twitter.com/plantegg/status/1667821557614354434)) #Highlight #[[2023-06-11]]
- 本文将演示 OpenResty XRay 如何使用“智能抓包”功能，只抓取慢速的（或有其他错误的）TCP 连接上的数据包而不影响生产服务器的性能。——怎么实现呢？看完我觉得有点囧，客户端发请求慢，服务端怎么会记录出来响应慢的？上行时延、下行时延！https://t.co/fXUVIisq1H ([View Tweet](https://twitter.com/plantegg/status/1679071098577510400)) #Highlight #[[2023-07-13]]
- 这方法好，三小时速通内核发包流程，再花三小时收包流程也速通了。内核这么复杂看代码几乎不可能，那些拿着代码讲的大佬都是对内核已经很熟悉的情况下，要不这么多代码你根本搞不清逻辑，还是这方法好 https://t.co/iyI3Jcqynd
  
  ![](https://pbs.twimg.com/media/F4dw-_UagAAAx7Z.jpg) ([View Tweet](https://twitter.com/plantegg/status/1695448230396592242)) #Highlight #[[2023-08-27]]
- 你们怎么这么喜欢看视频，微信读书上有他的《复旦经济课》，一边看书一边搜索他说的东东去验证，以及几年后去验证他当时的看法以及结果验证就很好。
  
  比如如图就是我读的时候去佐证并笔记之，你们现在去读应该还能看到我的笔记
  
  https://t.co/HGEfaQrKAb https://t.co/wDwxKTuY2e https://t.co/MVrihFHzqB
  
  ![](https://pbs.twimg.com/media/F5tmvJmacAA5eiP.jpg)
  
  ![](https://pbs.twimg.com/media/F5tnPfmbAAAEUVi.png) ([View Tweet](https://twitter.com/plantegg/status/1701066986648899722)) #Highlight #[[2023-09-11]]
- 最近看了几个业务毛刺的问题，莫名其妙内核卡12ms、8ms，看他们一通分析下来基本都是内核 CFS 调度的锅。分析如图，我啥也没学会只是现在对8/12/16/20ms这些卡顿很敏感了https://t.co/bxmupeYawt https://t.co/FmIrlZmWBP
  
  ![](https://pbs.twimg.com/media/F7A1MhnasAAZC3O.png) ([View Tweet](https://twitter.com/plantegg/status/1711226730172822006)) #Highlight #[[2023-10-09]]
- 讲一个百闻不如一见的案例
  
  很多地方我们都听说过**Delay ACK**了
  
  Delay ACK的概念：指收到包后不立即ack，而是等一小会（比如40毫秒）看看，如果这40毫秒以内有其它包（比如http response）正要发给client，那么这个ack包就跟着发过去（顺风车，http reponse包不需要增加任何大小和包的数量），这样节省了资源。 
  
  当然如果超过这个时间还没有包发给client（比如nginx处理需要40毫秒以上），那么这个ack也要发给client了（即使为空，要不client以为丢包了，又要重发http request，划不来）。
  
  **总结下就是delay ack开启的情况下：ack包有顺风车就搭；如果凑两个ack包那么包个车也立即发车；再如果等了40毫秒以上也没顺风车或者拼车的，那么自己打个专车也要发车。
  **
  看完概念你也许记住了，但是下次被坑不一定能想起来这个delay ack，因为你也看不到、感受不到这个delay ack。但是来一次抓包
  
  这个图1就是所有ack的rt分布，可以明显看到两个极端，要么rt接近0ms，要么rt在40ms附近，这些在40ms附近的ack就是delay ack故意延迟40ms的。
  
  再看图2，把delay ack关掉后，所有ack分布就没有超过1ms的了。
  
  图3是一个没有delay的ack，没有delay的话，ack包立即发出去的，rt很小。
  
  图4是一个delay ack的抓包详情，标准的40ms
  
  最后这个40ms的由来是这样的，HZ在内核编译时设定，一般是1000，所以这个40 你也不能修改了
  //默认 delay ack 40ms，不能修改和关闭
  #define TCP_DELACK_MIN  ((unsigned)(HZ/25))     /* minimal time to delay before sending an ACK */
  
  看完上面这一完整介绍，相信以后再也不会对delay ack迷糊了，这就是看到的力量
  
  ![](https://pbs.twimg.com/media/GIO2UVtboAAENuR.jpg)
  
  ![](https://pbs.twimg.com/media/GIO2gZkagAAEOgM.jpg)
  
  ![](https://pbs.twimg.com/media/GIO2j0WaMAESN25.jpg)
  
  ![](https://pbs.twimg.com/media/GIO2m--acAAuHkF.jpg) ([View Tweet](https://twitter.com/plantegg/status/1766456429475668387)) #Highlight #[[2024-03-09]]
- 小问题虽小，但是经常出来恶心人
  
  执行得好好的命令放到crontab中就不行了；
  执行得好好的命令放到ssh/ansible中也不行了（图1）；
  
  这是没搞清楚 login shell 和 no-login shell 的区别
  **login shell加载环境变量的顺序是**：
  ① /etc/profile 
  ② ~/.bash_profile 
  ③ ~/.bashrc 
  ④ /etc/bashrc 
  
  **而non-login shell加载环境变量的顺序是**： ① ~/.bashrc ② /etc/bashrc
  
  加载的环境变量不一样，那么PATH、参数等都不一样，所以差别大
  
  在centos执行好好的脚本放到Ubuntu上就不行了，报语法错误？
  
  如果到ubuntu上用 bash https://t.co/wl0DT0YImu是可以的，但是sh https://t.co/wl0DT0YImu就报语法错误，但是在centos上执行：sh或者bash https://t.co/wl0DT0YImu 都可以通过。 在centos上执行 ls -lh /usr/bin/sh 可以看到 /usr/bin/sh link到了 /usr/bin/bash 也就是sh等同于bash，所以都可以通过不足为奇。 
  
  但是在ubuntu上执行 ls -lh /usr/bin/sh 可以看到 /usr/bin/sh link到了 **/usr/bin/dash** ， 这就是为什么ubuntu上会报错
  
  sh 跟bash的区别，实际上是bash有没开启POSIX模式的区别。 简单说，sh是bash的一种特殊的模式，sh就是开启了POSIX标准的bash， /bin/sh 相当于/bin/bash --posix
  
  ![](https://pbs.twimg.com/media/GIRVWVGa4AA_YLg.jpg) ([View Tweet](https://twitter.com/plantegg/status/1766631117611024771)) #Highlight #[[2024-03-10]]
- 面试都在**背八股文**，真正有能力的面试官也可以从面试者的回答中深挖细挖。一般可以**夺命连环追问**就能看出应试者是真的理解了还是只是背好了八股文。
  
  我们来看一个典型的面试问题：
  
  > 问：为什么TCP是可靠的？
  > 答：因为TCP有连接（或者回答因为TCP有握手）
  
  > 追问：为什么有连接就可靠了？（面试的人估计心里在骂，你这不是傻逼么，有连接就可靠啊）
  > 追问：这个TCP连接的本质是什么？网络上给你保留了一个带宽所以能可靠？
  > 答：……懵了（或者因为TCP有ack，所以可靠）
  
  > 追问：握手的本质是什么？为什么握手就可靠了
  > 答：因为握手需要ack
  > 追问：那这个ack也只是保证握手可靠，握手是怎么保证后面数据传输可靠的？握手本质做了什么事情？
  
  > 追问：有了ack可靠后还会带来什么问题（比如发一个包ack一下，肯定是可行的，但是效率不行，面试官想知道的是这里TCP怎么传输的，从而引出各个buffer、拥塞窗口的概念）
  
  基本上我发现**99%的程序员会回答TCP相对UDP是可靠的，70%以上的程序员会告诉你可靠是因为有ack（其他的会告诉你可靠是因为握手或者有连接）**，再追问下次就开始王顾左右而言他、胡言乱语。这两年死背八股文（面经）的多了，可能比例会高点，但是对本质的理解还是能追问出来的。
  
  我的理解：
  > 物理上没有一个连接的东西在这里，udp也类似会占用端口、ip，但是大家都没说过udp的连接。而本质上我们说tcp的握手是指握手的时候协商和维护一些状态信息的，这个状态信息就包含seq、ack、窗口/buffer，tcp握手就是协商出来这些初始状态，通过这些状态才有了连接的可靠性。这些状态才是我们平时所说的tcp连接的本质。
  
  这说明大部分程序员对问题的本质的理解上出了问题，或者教科书描述的过于教条不够接地气所以看完书本质没get到。
  
  想想 **费曼学习方法** 中对事物本质的理解的重要性。下次讲讲工作中遇到的一个大神无招胜有招的故事（如何在不懂领域解决问题起来胜过该领域的工程师）
  
  ![](https://pbs.twimg.com/media/GITXYhEboAA4-y_.jpg) ([View Tweet](https://twitter.com/plantegg/status/1766773917849731280)) #Highlight #[[2024-03-10]]