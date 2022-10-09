title:: Readwise/Highlights/3.8 Gfs的一致性 - Mit6.824 (32)
author:: [[mit-public-courses-cn-translatio.gitbook.io]]
full-title:: 3.8 Gfs的一致性 - Mit6.824
category:: #articles
url:: https://mit-public-courses-cn-translatio.gitbook.io/mit6-824/lecture-03-gfs/3.8

- Primary返回写入失败会导致不同的副本有完全不同的数据 #Highlight #[[2022-03-08]]
- 学生提问：为什么GFS要设计成多个副本不一致？Robert教授：我不明白GFS设计者为什么要这么做。GFS可以设计成多个副本是完全精确同步的，你们在lab2和lab3会设计一个系统，其中的副本是同步的。并且你们也会知道，为了保持同步，你们要使用各种各样的技术。如果你们想要让副本保持同步，其中一条规则就是你们不能允许这种只更新部分服务器的不完整操作。这意味着，你必须要有某种机制，即使客户端挂了，系统仍然会完成请求。如果这样的话，GFS中的Primary就必须确保每一个副本都得到每一条消息。 #Highlight #[[2022-03-08]]
- 这里希望为应用程序提供一个相对简单的写入接口，但应用程序需要容忍读取数据的乱序。 #Highlight #[[2022-03-08]]
- GFS在Google内部广泛被应用。它最严重的局限可能在于，它只有一个Master节点 #Highlight #[[2022-03-08]]
- 从我们读到的GFS论文中，Master节点的故障切换不是自动的。GFS需要人工干预来处理已经永久故障的Master节点，并更换新的服务器 #Highlight #[[2022-03-08]]
- 我们才需要多副本，多活，高可用，故障自修复的分布式系统 #Highlight #[[2022-03-08]]