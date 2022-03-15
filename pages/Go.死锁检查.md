title:: Go/死锁检查

- #Go #go1.17
-
- **Go 语言没有真正意义上的运行时死锁检查**
-
- 在 Go 语言的
-
- Go 的死锁检查是利用 [runtime.checkdead](https://github.com/golang/go/blob/go1.17.8/src/runtime/proc.go#L5206) 函数实现的
-