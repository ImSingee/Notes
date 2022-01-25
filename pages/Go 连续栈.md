---
title: Go 连续栈
---

- #Golang #go1.16 #stack
- Go 的递归是否会出现栈溢出？
	- 一个验证方式是使用递归方式计算数列和
	-
	- 先看 Python 版本的
		- ```python
		  def sum(n):
		    if n <= 0:
		      return 0
		  
		    return n + sum(n - 1)
		  
		  i = 1
		  while True:
		    print(i)
		    print(sum(i))
		    i += 1
		  ```
		- 当计算到 i=998 时报错 `RecursionError: maximum recursion depth exceeded in comparison`
		- Python 是根据栈深度来进行栈检测的，可以查看[文档](https://docs.python.org/3/library/sys.html#sys.getrecursionlimit)中相关参数的说明来获取或配置这一参数值。默认是 1000
		- 需要注意的是，帮助文档中的 `This limit prevents infinite recursion from causing an overflow of the C stack and crashing Python`，这一设定仅仅是 Python 虚拟机的检测，最大深度同样还受限于系统设定的栈大小，这一值可通过 #[[ulimit]] 查看，利用 `ulimit -s` 可知默认情况下为 `8192` 即 8192KB = 8M，如果达到了这一系统限制就直接造成程序退出了（而不再是抛出异常）
		- 利用 `sys.setrecursionlimit(2**31-1)` 将 Python 的栈允许值设定为最大时，可以发现当到 24956 时（这一值在不同环境下均不一样）直接 segmentation fault 程序退出
	- 在 C 中，这一值直接就是由系统控制了，超出直接导致 segmentation fault
		- ```c
		  #include <stdio.h>
		  #include <stdint.h>
		  
		  uint64_t sum(int n) {
		    if (n <= 0) {
		      return 0;
		    }
		  
		    return n + sum(n - 1);
		  }
		  
		  int main() {
		    for (int i = 1; ; i++) {
		      printf("%d\n", i);
		      printf("%llu\n", sum(i));
		    }
		  }
		  ```
		- 在我当前环境下，一直到 174322 segmentation fault
	- 在 Go 下
		- ```javascript
		  package main
		  
		  func sum(n uint64) uint64 {
		    if n <= 0 {
		      return 0
		    }
		  
		    return n + sum(n - 1)
		  }
		  
		  func main() {
		    for i := int64(0); i >= 0 ; i += 100 {
		      println(i)
		      println(sum(uint64(i)))
		    }
		  }
		  
		  ```
		- 可以发现 —— 一直到 16780000 才报了一个 panic（而非 segment fault）`runtime: goroutine stack exceeds 1000000000-byte limit` 栈超过了 1GB！而这个值远远超过了我们 #ulimit 所设置的 8MB
		-
-
- 在 Go1.3 以后，Go 采用了一种叫做 [连续栈 Contiguous Stacks](https://docs.google.com/document/d/1wAaf1rYoM4S4gtnPh0zOlGzWtrZFQ5suE8qr2sD8uWQ/pub) 的方式
- > 需要注意这个英文名称是 Conti**g**uous 而不是 Conti**n**uous，有很多文章都写错了，这两个单词的具体区别可以参考 [[Contiguous vs. Continuous: What’s the Difference?]]
- 这个东西简单来说就是 Go 所使用的栈因为一些原因（下面会说到）并没有使用操作系统中的栈（即利用 `%rsp` 和 `%rbp` [[寄存器]]），而是自己实现的，因此也就不受限于 [[ulimit]]
-
- Go 中的栈最大大小是根据 [/src/runtime/stack.go](https://github.com/golang/go/blob/release-branch.go1.16/src/runtime/stack.go) 中的 [maxstacksize](https://github.com/golang/go/blob/release-branch.go1.16/src/runtime/stack.go#L498) 变量决定的
	- ```javascript
	  var maxstacksize uintptr = 1 << 20 // enough until runtime.main sets it for real
	  ```
	- 在启动时这个值为 1MB
	- 这一变量的值由 [[runtime.main]] 函数动态赋值
	- ```javascript
	  // https://github.com/golang/go/blob/release-branch.go1.16/src/runtime/proc.go#L122-L129
	  
	  // The main goroutine.
	  func main() {
	    // ...
	  
	    // Max stack size is 1 GB on 64-bit, 250 MB on 32-bit.
	    // Using decimal instead of binary GB and MB because
	    // they look nicer in the stack overflow failure message.
	    if sys.PtrSize == 8 {
	    maxstacksize = 1000000000
	    } else {
	    maxstacksize = 250000000
	    }
	  
	    // ...
	  }
	  ```
	- 在 64 位机器上是 1GB，在 32 位机器上是 250MB（[[sys.PtrSize]] 是[[指针长度]]（单位为 Byte），在 32 位机器上是 4，在 64 位机器上是 8）
	- 另外，实际上大小是比 1GB/250MB 小的，因为计算机内部是 1024 进制而这里用了 1000，根据注释这个的原因是为了报错时候看起来好看……
-
- 在 Go1.3 之前，即连续栈被应用之前，Go 在每次栈即将满时会创建一个新的栈分片（new stack chunk）作为临时栈给新的函数调用使用
	- ```javascript
	  func main() {
	    // 定义了一些很大的局部变量
	    // 这些局部变量将栈几乎占满了
	  
	    for i := 0; i < 1000; i++ {
	  dosomething()
	    }
	  }
	  ```
	- 考虑上面的情形，当 main 中函数变量使得函数栈基本满，那么就会出现每次调用 dosomething 时都会创建一个新的临时栈给 dosomething 使用，而在 dosomething 结束再销毁新的栈
	- dosomething 执行几次还好，但如果 something 是一个热点代码，会被执行成千上万次，那么就意味着临时栈会被创建并销毁成千上万次，临时栈的创建销毁开销是不能被忽略的，这会造成很大的资源浪费，这一问题被称为 hot split
	- 另一个问题就是，对于复杂并持续运行的程序而言，理论上只要有过一次的临时栈分配，后续就往往会再次出现相同情形下的栈分配，而目前的机制临时栈的分配和释放会在每一次出现
- 在连续栈中，不再有临时栈的存在，当栈将满时会直接**扩充栈容量**，即创建一个新的更大的栈、将当前栈的数据拷贝至新的上、用新的栈替换当前栈。
-
-