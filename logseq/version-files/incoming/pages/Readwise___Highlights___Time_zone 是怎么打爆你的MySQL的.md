title:: Readwise/Highlights/Time_zone 是怎么打爆你的MySQL的
author:: [[# CPU]]
full-title:: Time_zone 是怎么打爆你的MySQL的
category:: #articles
url:: https://plantegg.github.io/2023/10/03/time_zone%E6%98%AF%E6%80%8E%E4%B9%88%E6%89%93%E7%88%86%E4%BD%A0%E7%9A%84MySQL%E7%9A%84/
tags:: #[[go inbox]] #[[inoreader]] #[[plantegg]] #[[博客]]
- 如果MySQL 读取 timestamp 字段时，需要做时区转换，当 time_zone 设置为 system 时，意味着MySQL 要去follow OS系统时区，也就是把读到的timestamp 根据OS系统时区进行转换，这个转换调用OS 的glibc 的时区函数来获取 Linux OS 的时区，在这个函数中会加 mutex 锁，当并发高时，会出现 mutex 竞争激烈，每次只有一个线程获得锁，释放锁时会唤醒所有等锁线程，但最终只有一个能获取，于是一下子导致系统 sys飙高、上下文切换飙高。每读取一行带 timestamp 字段时，都会通过这个 glibc 的时区函数导致锁竞争特别激烈最终 QPS 拉胯厉害。 ([View Highlight](https://read.readwise.io/read/01hc6p1p8w2djwyp7wk36jdfng)) #Highlight #[[2023-10-08]]