---
title: sys.PtrSize
---

- #Golang #go1.16
-
- Go 中使用 [sys.PtrSize](https://github.com/golang/go/blob/release-branch.go1.16/src/runtime/internal/sys/stubs.go#L9:7) 代表 [[指针长度]]（单位为字节）
-
- ```javascript
  // unsafe.Sizeof(uintptr(0)) but an ideal const
  const PtrSize = 4 << (^uintptr(0) >> 63)
  ```
-
- 这个注释很好玩，利用的是 [[uintptr]] 类型，`uintptr(0)` 是一个位长度等同于系统指针长度（32 位系统为 32bit = 4Byte，64 位系统为 64bit=8Byte）的 0 值，因此想要知道一个指针是多少 Byte 调用 [[unsafe.Sizeof]] 就可以
-
- 然而 Go 中没有常量函数，因此无法调用 `unsafe.Sizeof` 函数并将结果作为常数，因此 Go 用了一个 tricky 的做法。。。
	- `uintptr(0)` 会产生 32/64 个 0
	- `^uintptr(0)` 会产生 32/64 个 1
	- `(^uintptr(0) >> 63)` 对于 32 位机器为 0，而对于 64 位机器为 1
	- `4 << (^uintptr(0) >> 63)` 对于 32 位机器为 `4 << 0 = 4`，而对于 64 位机器为 `4 << 1=8`
-
- 很明显，对于 32/64 位架构是足够的🌚当然未来出了 128 位机器就不行了
-