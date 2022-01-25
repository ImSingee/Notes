---
title: CAS
---

- #[[并发]]

- 

- CAS 的含义是 Compare And Swap，其是由 [[CPU 原语]]实现的，通常用于实现 [[无锁编程]] 或是 [[乐观锁]]，也是很多 [[原子操作]] 的

- 

- 简单说它的原理就是

- 
```c
bool compare_and_swap(int* old_value, int expect_value, int new_value) {
  if (*old_value == expect_value) {
    *old_value = new_value;
    return true;
  } else {
    return false;
  }
}
```

- （这个代码是伪代码，这个过程实质上是由一条 CPU 指令完成的）

- 

- 一个典型的场景是用它实现 [[原子操作]]
