title:: Readwise/Highlights/WWDC21 - 认识 Swift 中的异步与并发
author:: [[xiaozhuanlan.com]]
full-title:: WWDC21 - 认识 Swift 中的异步与并发
category:: #articles
url:: https://xiaozhuanlan.com/topic/8627905413

- `async` / `await` 实际上的意思：
  
  1.  `async` 允许一个函数被挂起；
  2.  `await` 标记一个异步函数的潜在暂停点；
  3.  在挂起期间可能会进行其他工作；
  4.  一旦等待的异步调用完成，在 `await` 之后恢复执行。 ([View Highlight](https://read.readwise.io/read/01h5vq07g70xbc13rn1yzxq6mf)) #Highlight #[[2023-07-21]]
- 我们用 `async` 标记一个函数是异步函数，这仅仅是一个标记，并不意味着函数一定是异步操作 ([View Highlight](https://read.readwise.io/read/01h5vq0gfg0g9pgq0stpd3tyk1)) #Highlight #[[2023-07-21]]
- 异步函数在执行同步代码时，不能放弃自己的线程，当执行到潜在暂停点时，会放弃自己的线程，挂起并等待被调用的异步函数的结果。当被调用的异步函数完成时，控制返回原来的异步函数的潜在暂停点（需要注意这时的线程不一定和之前的相同），继续执行之后的代码 ([View Highlight](https://read.readwise.io/read/01h5vq1804n08ehq6ger2p7xc1)) #Highlight #[[2023-07-21]]
- 使用 `async let` 标记 `data` 和 `metadata`，使用 `await` 进行访问，如果函数可以抛出错误，那么还需要使用 `try` 关键字。两个网络请求会同时进行，并且执行后续代码，即上文提到的无关任务。当需要访问结果的时候，系统会进行等待直到完成或者抛出错误。这样便能更高效地完成整个任务。
  
  需要注意的是，这两个网络请求是并发的，假如第一个获取图片的任务失败了抛出错误需要退出函数，Swift 会自动将未等待的任务标记取消，然后等待它完成再退出函数。任务被标记取消并不意味着停止任务，只是通知不需要该任务的返回值。 ([View Highlight](https://read.readwise.io/read/01h5vqce0mgdneyrq38hhavbsg)) #Highlight #[[2023-07-21]]
- 子任务被标记取消并不会停止任务，我们可以尽可能地检查任务是否被取消，提前退出，不再请求后续的 ([View Highlight](https://read.readwise.io/read/01h5vqfkm26wq23hmf08d44fcg)) #Highlight #[[2023-07-21]]
- 并发虽然高效，但是如果没有采取手段加以控制，很容易产生数据竞争的问题 ([View Highlight](https://read.readwise.io/read/01h5vqj44gvsk6hrz9k7qk0rnd)) #Highlight #[[2023-07-21]]
- `Actor` 模型描述了一组为避免并发编程问题的公理。
  
  1.  所有 `actor` 状态都是本地的，外部无法访问；
  2.  `actor` 之间必须通过消息传递进行通讯；
  3.  一个 `actor` 可以响应消息、退出新的 `actor`、改变内部状态、把消息发送给一个或多个 `actor`；
  4.  `actor` 可能会阻塞自己但是不应该阻塞运行的线程。 ([View Highlight](https://read.readwise.io/read/01h5vqkeytsxf93ge21n8jnyeq)) #Highlight #[[2023-07-21]]
- 对 `actor` 的变量访问和方法调用都是消息，在同一时刻只有一条消息可以被处理，多条消息按照顺序依次被处理。当某一条消息需要 `await` 等待其他异步任务时，消息会被挂起进行等待，`actor` 得以处理邮箱中的后续消息，表现为 `actor` 是可重入的。这就需要我们使用额外的机制来处理重复的请求，避免资源的浪费 ([View Highlight](https://read.readwise.io/read/01h5vqmey9vc1jwq2140qg2aw1)) #Highlight #[[2023-07-21]]
- 在 `actor` 内访问自有属性和方法都是同步逻辑，对外则表现为异步逻辑，同一时刻只能处理一条消息，多条消息顺序处理，这些规则为 `actor` 的高并发性提供了保证 ([View Highlight](https://read.readwise.io/read/01h5vqxvber0kp2ssecr1ht558)) #Highlight #[[2023-07-21]]