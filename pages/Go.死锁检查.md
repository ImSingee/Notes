title:: Go/死锁检查
- #Go #go1.17
-
- **Go 语言没有真正意义上的运行时[死锁](https://zh.wikipedia.org/wiki/%E6%AD%BB%E9%94%81)检查**
-
- 一个最简单构造出 Golang 「死锁」的脚本：
- ```go
  // https://go.dev/play/p/3mTxFVMtRt3
  
  package main
  
  func main() {
  	select {}
  }
  ```
-
- 可以看到，这个程序抛出（throw）了 deadlock，具体的名字为「fatal error: all goroutines are asleep - deadlock!」
- 可以看到，Go 的死锁认定是根据所有的 Goroutine 都是 sleep 状态而完成的，对于真正的锁互相等待是不会报错的，即下面的几种情形是真正意义上的死锁，但在 Go 中只会一直等待下去而不会报出任何异常
- ```go
  // https://go.dev/play/p/YKNGY6Aa3Ye
  
  package main
  
  import "sync"
  
  var lock sync.Mutex
  
  func main() {
  	go lock.Lock()
  	go lock.Lock()
  
  	for {
  	}
  }
  ```
- ```go
  // https://go.dev/play/p/QcMLrpmtWe3
  
  package main
  
  import "sync"
  
  var lock sync.RWMutex
  
  func main() {
  	go func() {
  		lock.RLock()
  		lock.Lock()
  
  	}()
  
  	for {
  	}
  }
  ```
-
- Go 的死锁检查是利用 [runtime.checkdead](https://github.com/golang/go/blob/go1.17.8/src/runtime/proc.go#L5206) 函数实现的，其根本上判断的只是 [`mcount() - sched.nmidle - sched.nmidlelocked - sched.nmsys`](https://github.com/golang/go/blob/go1.17.8/src/runtime/proc.go#L5238) 的值是否为 0（存在 ExtraM 的情形除外，具体可以阅读源码）
	- [mcount()](https://github.com/golang/go/blob/go1.17.8/src/runtime/proc.go#L4658:6) 返回的是当前依然存活的 M （系统线程）的数量
	- [sched](https://github.com/golang/go/blob/go1.17.8/src/runtime/runtime2.go#L1095:2).[nmidle](https://github.com/golang/go/blob/go1.17.8/src/runtime/runtime2.go#L757:2) 为当前不活跃的 M 的数量（处于 Idle 状态，等待分配 G 来执行）
	- sched.nmidlelocked 为正在等待锁的 M 的数量
	- sched.nmsys 为当前等待系统资源的 M 数量
-