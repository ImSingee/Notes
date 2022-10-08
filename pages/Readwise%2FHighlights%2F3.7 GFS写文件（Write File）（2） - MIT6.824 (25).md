title:: Readwise/Highlights/3.7 GFS写文件（Write File）（2） - MIT6.824 (25)
author:: [[mit-public-courses-cn-translatio.gitbook.io]]
full-title:: 3.7 GFS写文件（Write File）（2） - MIT6.824
category:: #articles
url:: https://mit-public-courses-cn-translatio.gitbook.io/mit6-824/lecture-03-gfs/3.7-xie-wen-jian-write-file2

- 所有的Secondary都有相同的版本号。版本号只会在Master指定一个新Primary时才会改变。通常只有在原Primary发生故障了，才会指定一个新的Primary。所以，副本（参与写操作的Primary和Secondary）都有相同的版本号 #Highlight #[[2022-03-08]]
- 当指定一个Primary时，为它分配一个租约，Primary只在租约内有效。Master和Primary都会知道并记住租约有多长，当租约过期了，Primary会停止响应客户端请求，它会忽略或者拒绝客户端请求。因此，如果Master不能与Primary通信，并且想要指定一个新的Primary时，Master会等到前一个Primary的租约到期。 #Highlight #[[2022-03-08]]