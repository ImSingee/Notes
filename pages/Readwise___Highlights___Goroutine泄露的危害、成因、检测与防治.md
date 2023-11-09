title:: Readwise/Highlights/Goroutine泄露的危害、成因、检测与防治
author:: [[juejin.cn]]
full-title:: Goroutine泄露的危害、成因、检测与防治
category:: #articles
url:: https://juejin.cn/post/7128665615383920677

- Go 10次内存泄漏，8次goroutine泄漏，1次是真正内存泄漏，还有1次是cgo导致的内存泄漏 ([View Highlight](https://read.readwise.io/read/01herxhh11m459d40a5dvt1ctb)) #Highlight #[[2023-11-09]]
- 关于[单个Goroutine占用内存](https://link.juejin.cn?target=https%3A%2F%2Fwww.google.com.hk%2Fsearch%3Fq%3Dgoroutine%25E5%258D%25A0%25E7%2594%25A8%25E7%259A%2584%25E5%2586%2585%25E5%25AD%2598%26oq%3Dgoroutine%25E5%258D%25A0%25E7%2594%25A8%25E7%259A%2584%25E5%2586%2585%25E5%25AD%2598%26aqs%3Dchrome..69i57.3976j0j1%26sourceid%3Dchrome%26ie%3DUTF-8)，可参考[Golang计算单个Goroutine占用内存](https://link.juejin.cn?target=https%3A%2F%2Fblog.csdn.net%2Fcbmljs%2Farticle%2Fdetails%2F83005749), 在不发生栈扩张情况下, 新版本Go大概单个goroutine 占用2.6k左右的内存 ([View Highlight](https://read.readwise.io/read/01herxhyf55h58x2janqz5tx2r)) #Highlight #[[2023-11-09]]