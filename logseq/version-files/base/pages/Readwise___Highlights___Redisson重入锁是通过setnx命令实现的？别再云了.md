title:: Readwise/Highlights/Redisson重入锁是通过setnx命令实现的？别再云了
author:: [[juejin.cn]]
full-title:: Redisson重入锁是通过setnx命令实现的？别再云了
category:: #articles
url:: https://juejin.cn/post/7101486706666242079
- redisson加锁机制并不是通过setnx命令，而是通过lua脚本来实现的 ([View Highlight](https://read.readwise.io/read/01hfqx2fsv9vbs5mwebt32yr3g)) #Highlight #[[2023-11-21]]
- 首先判断传入的key是否存在，如果不存在，那么就将hash的值自增1，并且设置锁的过期时间，然后返回null；其次如果key已经存在，并且是当前线程获取的锁，就将hash的值自增1，并且重新设置过期时间，然后返回null；最后没有获取到锁的话返回锁的过期时间 ([View Highlight](https://read.readwise.io/read/01hfqx392xb9d206kdg2ehn10s)) #Highlight #[[2023-11-21]]