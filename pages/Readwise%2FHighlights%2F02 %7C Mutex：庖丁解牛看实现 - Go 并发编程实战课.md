title:: Readwise/Highlights/02 | Mutex：庖丁解牛看实现 - Go 并发编程实战课
author:: [[晁岳攀（鸟窝）]]
full-title:: 02 | Mutex：庖丁解牛看实现 - Go 并发编程实战课
category:: #articles
url:: https://time.geekbang.org/column/article/295850

- Unlock 方法可以被任意的 goroutine 调用释放锁，即使是没持有这个互斥锁的 goroutine，也可以进行这个操作。这是因为，Mutex 本身并没有包含持有这把锁的 goroutine 的信息，所以，Unlock 也不会对此进行检查。Mutex 的这个设计一直保持至今。 #Highlight #[[2021-07-05]]