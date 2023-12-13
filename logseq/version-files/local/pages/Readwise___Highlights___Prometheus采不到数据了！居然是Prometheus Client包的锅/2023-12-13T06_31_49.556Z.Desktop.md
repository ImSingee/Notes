title:: Readwise/Highlights/Prometheus采不到数据了！居然是Prometheus Client包的锅
author:: [[tonybai.com]]
full-title:: Prometheus采不到数据了！居然是Prometheus Client包的锅
category:: #articles
url:: https://tonybai.com/2022/06/15/prometheus-can-not-pick-up-data-because-of-the-prometheus-client-package/
tags:: #[[inoreader]] #[[star]] #[[博客]]

- 通常情况下，读取/proc/{pid}/fd目录是没有问题的，但当我们的程序上连接着100w+的连接时，意味着fd目录下有100w+的文件，逐一遍历这些文件将带来很大的开销。这就是导致Prometheus在超时时间(通常是10几秒)内无法及时采集到数据的原因。 ([View Highlight](https://read.readwise.io/read/01hdms7rck41c0vxzt81fcm75s)) #Highlight #[[2023-10-26]]