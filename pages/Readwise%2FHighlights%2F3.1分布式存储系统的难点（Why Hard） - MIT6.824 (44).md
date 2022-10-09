title:: Readwise/Highlights/3.1分布式存储系统的难点（Why Hard） - MIT6.824 (44)
author:: [[mit-public-courses-cn-translatio.gitbook.io]]
full-title:: 3.1分布式存储系统的难点（Why Hard） - MIT6.824
category:: #articles
url:: https://mit-public-courses-cn-translatio.gitbook.io/mit6-824/lecture-03-gfs/3.1

- 如果你在成百上千台服务器进行分片，你将会看见常态的故障。如果你有数千台服务器，那么总是会有一台服务器宕机，每天甚至每个小时都可能会发生错误。所以，我们需要自动化的方法而不是人工介入来修复错误。我们需要一个自动的容错系统，这就引出了容错这个话题（fault tolerance）。 #Highlight #[[2022-03-07]]