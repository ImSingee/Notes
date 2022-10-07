title:: Readwise/Highlights/3.6 GFS写文件（Write File）（1） - MIT6.824 (6)
author:: [[mit-public-courses-cn-translatio.gitbook.io]]
full-title:: 3.6 GFS写文件（Write File）（1） - MIT6.824
category:: #articles
url:: https://mit-public-courses-cn-translatio.gitbook.io/mit6-824/lecture-03-gfs/3.6-xie-wen-jian-write-file

- 当有多个客户端同时写同一个文件时，一个客户端并不能知道文件究竟有多长。因为如果只有一个客户端在写文件，客户端自己可以记录文件长度，而多个客户端时，一个客户端没法知道其他客户端写了多少。例如，不同客户端写同一份日志文件，没有一个客户端会知道文件究竟有多长，因此也就不知道该往什么样的偏移量，或者说向哪个Chunk去追加数据。这个时候，客户端可以向Master节点查询哪个Chunk服务器保存了文件的最后一个Chunk。 #Highlight #[[2022-03-08]]
- 对于读文件来说，可以从任何最新的Chunk副本读取数据，但是对于写文件来说，必须要通过Chunk的主副本（Primary Chunk）来写入。对于某个特定的Chunk来说，在某一个时间点，Master不一定指定了Chunk的主副本。所以，写文件的时候，需要考虑Chunk的主副本不存在的情况。 #Highlight #[[2022-03-08]]
- 如果Master节点重启，并且与Chunk服务器交互，同时一个Chunk服务器重启，并上报了一个比Master记住的版本更高的版本。Master会认为它在分配新的Primary服务器时出现了错误，并且会使用这个更高的版本号来作为Chunk的最新版本号。 #Highlight #[[2022-03-08]]