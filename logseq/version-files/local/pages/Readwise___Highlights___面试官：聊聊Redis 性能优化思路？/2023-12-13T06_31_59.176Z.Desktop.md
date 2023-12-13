title:: Readwise/Highlights/面试官：聊聊Redis 性能优化思路？
author:: [[吴师兄学算法]]
full-title:: 面试官：聊聊Redis 性能优化思路？
category:: #articles
url:: https://www.cxyxiaowu.com/20487.html
tags:: #[[coding]] #[[database]] #[[inoreader]] #[[博客]]

- Redis 的官方博客在几个地方都说，性能瓶颈更可能是**网络** ([View Highlight](https://read.readwise.io/read/01hdzbsa8yp8t4kpnhq8rqam52)) #Highlight #[[2023-10-30]]
- 在大数据量的情况下，有些操作的执行时间会相对长，比如 `KEYS *`，`LRANGE mylist 0 -1`，以及其他算法复杂度为 O(n) 的指令。因为 Redis 只用一个线程来做数据查询，如果这些指令耗时很长，就会阻塞 Redis，造成大量延时。 ([View Highlight](https://read.readwise.io/read/01hdzbsny2cq5j7nrgfnpx70ty)) #Highlight #[[2023-10-30]]
- Redis Essential 这本书建议利用 `rename-command KEYS ''` 来禁止使用这个耗时的指令。 ([View Highlight](https://read.readwise.io/read/01hdzbt9h9egrk8ypmmmw44v6n)) #Highlight #[[2023-10-30]]
- 除了这些耗时的指令，Redis 中 transaction，script，因为可以合并多个 commands 为一个具有原子性的执行过程，所以也可能占用 Redis 很长时间，需要注意。 ([View Highlight](https://read.readwise.io/read/01hdzbtf32dz17enhz1nctrfn2)) #Highlight #[[2023-10-30]]
- 如果你想找出生产环境使用的「慢指令」，那么可以利用 `SLOWLOG GET count` 来查看最近的 count 个执行时间很长的指令。至于多长算长，可以通过在 redis.conf 中设置 slowlog-log-slower-than 来定义。 ([View Highlight](https://read.readwise.io/read/01hdzbtjqaqhqndmeqk19z00wq)) #Highlight #[[2023-10-30]]