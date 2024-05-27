title:: Readwise/Highlights/长连接黑洞重现和分析
author:: [[plantegg]]
full-title:: 长连接黑洞重现和分析
category:: #articles
url:: https://plantegg.github.io/2024/05/05/%E9%95%BF%E8%BF%9E%E6%8E%A5%E9%BB%91%E6%B4%9E%E9%87%8D%E7%8E%B0%E5%92%8C%E5%88%86%E6%9E%90-public/
tags:: #[[go inbox]] #[[inoreader]] #[[plantegg]] #[[star]] #[[博客]]  
![](https://cdn.jsdelivr.net/gh/plantegg/plantegg.github.io/images/951413iMgBlog/1713838496899-274cdfbd-aa6e-4f1f-9fcc-16725593c25e.png)
这是一个存在多年，遍及各个不同的业务又反反复复地在集团内部出现的一个问题，本文先通过重现展示这个问题，然后从业务、数据库、OS等不同的角度来分析如何解决它，这个问题值得每一位研发同学重视起来，避免再次踩
- TCP 长连接在发送包的时候，如果没收到ack 默认会进行15次重传(net.ipv4.tcp_retries2=15, 这个不要较真，会根据RTO 时间大致是15次)，累加起来大概是924秒，所以我们经常看到业务需要15分钟左右才恢复。这个问题存在所有TCP长连接中(几乎没有业务还在用短连接吧？)，问题的本质和 LVS/k8s Service 都没关系 ([View Highlight](https://read.readwise.io/read/01hxzsh433tkv0mepe7fyvpnps)) #Highlight #[[2024-05-16]]