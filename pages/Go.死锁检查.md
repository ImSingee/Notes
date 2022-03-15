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
- 可以看到，Go 的死锁认定是根据所有的 Goroutine 都是 sleep 状态而完成的，对于真正的锁互相等待是不会报错的
-
- Go 的死锁检查是利用 [runtime.checkdead](https://github.com/golang/go/blob/go1.17.8/src/runtime/proc.go#L5206) 函数实现的
-