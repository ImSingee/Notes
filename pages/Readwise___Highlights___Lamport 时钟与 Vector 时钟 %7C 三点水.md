title:: Readwise/Highlights/Lamport 时钟与 Vector 时钟 | 三点水
author:: [[lotabout.me]]
full-title:: Lamport 时钟与 Vector 时钟 | 三点水
category:: #articles
url:: https://lotabout.me/2022/Lamport-Clock-and-Vector-Clock/
- Lamport 时钟 [[1]](https://lotabout.me/2022/Lamport-Clock-and-Vector-Clock#fn1) 是一种逻辑上的机制，用来给各个事件打标签，保证如果事件 `A` 发生于 `B` 之前，则 `A` 的标签 `L(A)` 一定小于 `B` 的标签 `L(B)`。 ([View Highlight](https://read.readwise.io/read/01h2fd6prnm7m35d7e5mnkn9ss)) #Highlight #[[2023-06-09]]
- Lamport 时钟可以保证如果事件 `a < b`（`a` 发生在 `b` 之前），就可以推出它们的标签满足 `L(a) < L(b)`。但反过来，如果看到两个标签 `L(a) < L(b)`，能反推出 `a < b` 吗？其实是不行的，因为我们能判定的只有 `A-before` 和 `B-after` 两个区域的事件，但只看 `L(a)` 和 `L(b)` 我们并不知道 `a` 和 `b` 落在哪个区域，因此无法判断 `a` 和 `b` 发生的先后。这就是 Lamport 时钟的局限性， ([View Highlight](https://read.readwise.io/read/01h2fd7kdy9y5gppdgx1epqwd6)) #Highlight #[[2023-06-09]]
- 那 vector 时钟是怎么做到的？
  
  1.  假设有 N 台机器，记为 `N[1], N[2], ..N[n]`
  2.  每台机器需要维护一个 N 维向量作为计数器，记为 `T = <t1, t2, ..., tn>`
  3.  `N[i]` 本机产生一个事件时，就把本机向量里的 `ti` 递增，即 `T[i]++`
  4.  机器 `N[i]` 发送消息 `m` 时，先执行 `T[i]++`，再发送 `(T, m)`
  5.  机器 `N[j]` 收到消息 `(T', m)` 时，执行 `T = max(T, T')`，再执行 `T[j]++`
  
  这些规则看起来很复杂，但实际上它和 Lamport 时钟的 “同步逻辑” 一样，只是每个节点都保存了其它所有节点，最后一次同步过的计数器。 ([View Highlight](https://read.readwise.io/read/01h2fd8dbnn27een22kg9pj1kq)) #Highlight #[[2023-06-09]]
- Vector 时钟最后的标签有多维，如何比较呢？vector 时钟要求，如果每一维上，都有 `T[i] < T'[i]`，则认为 `T < T'`；如果每一维都有 `T[i] = T'[i]`，则认为 `T = T'`；其它情况，都认为 `T` 和 `T'` 不可比。 ([View Highlight](https://read.readwise.io/read/01h2fd9f6c283cgca35d5cc5s1)) #Highlight #[[2023-06-09]]
- Lamport 时钟解决的是分布式系统下的因果一致性问题，方式是在多机有交互时求计数器的 `max`。它的局限是无法从计数器的大小反推事件的先后顺序。
  
  Vector 时钟基本思路和 Lamport 时钟一样，但它在每个机器上都维护了最后看到的，其它机器的计数器。 ([View Highlight](https://read.readwise.io/read/01h2fd9yqvp2vrnekhpb3baqb1)) #Highlight #[[2023-06-09]]