title:: Readwise/Highlights/【并发编程】volatile的原理我好像又懂了
author:: [[juejin.cn]]
full-title:: 【并发编程】volatile的原理我好像又懂了
category:: #articles
url:: https://juejin.cn/post/7209090173485350969
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- `volatile` 直译过来是“**不稳定的**”，意味着被其修饰的属性可能随时发生变化。该关键字为Java提供了一个轻量级的同步机制：**保证被volatile修饰的共享变量对所有线程总是可见的，也就是当一个线程修改了一个被 `volatile` 修饰共享变量的值，新值总是可以被其他线程立即得知**。相较于我们熟知的重量级锁 `synchronized`，`volatile` 更轻量级，因为它**不会引起上下文切换和线程调度**。 ([View Highlight](https://read.readwise.io/read/01hetktavz1j9zdwx91t5mwx0t)) #Highlight #[[2023-11-10]]
- `volatile` 关键字的特性主要有以下几点：
  
  1.  **保证可见性**：当一个变量被声明为 **`volatile`** 时，所有线程都可以看到它的最新值，即每次读取都是从**主内存**中获取最新值，而不是从线程的本地缓存中获取旧值;
  2.  **保证有序性**：**`volatile`** 关键字可以禁止指令重排序。编译器和CPU为了提高代码执行效率，可能会对指令进行**重排序**，这可能会导致线程安全问题。但是，当一个变量被声明为 **`volatile`** 时，编译器和CPU会禁止对它进行指令重排序，保证指令执行的正确顺序；
  3.  **无法保证原子性**：**`volatile`** 关键字并不能保证操作过程中的有序性，如果需要保证一系列操作的原子性，仍然需要借助锁机制进行限制。 ([View Highlight](https://read.readwise.io/read/01hetkth6e7z4dkk88gz6a1zg8)) #Highlight #[[2023-11-10]]
- 双重检查锁定(Double-checked locking)是一种延迟初始化的技术，常用于单例模式的实现。在双重检查锁定模式中，首先检查是否已经实例化，如果没有实例化，则进行同步代码块，再次检查是否已经实例化，如果没有则进行实例化。
  
  但是在没有使用volatile修饰共享变量的情况下，可能会出现线程安全问题。因为在实例化对象时，可能会出现指令重排的情况，导致其他线程在检查对象是否为null时，得到的是一个尚未完全初始化的对象。
  
  使用volatile声明共享变量可以禁止指令重排，从而保证双重检查锁定模式的正确性。 ([View Highlight](https://read.readwise.io/read/01hetkvjp6tfpb7vf2pjst4waa)) #Highlight #[[2023-11-10]]