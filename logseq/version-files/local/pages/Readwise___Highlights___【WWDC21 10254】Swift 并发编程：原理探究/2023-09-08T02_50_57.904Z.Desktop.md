title:: Readwise/Highlights/【WWDC21 10254】Swift 并发编程：原理探究
author:: [[xiaozhuanlan.com]]
full-title:: 【WWDC21 10254】Swift 并发编程：原理探究
category:: #articles
url:: https://xiaozhuanlan.com/topic/7604819352

- 当我们向一个异步队列加入任务时（调用 `DispatchQueue.sync()` 或者 `DispatchQueue.asnyc()`），CPU 会创建若干个线程来执行这些任务，直到所有的 CPU 核心都被占用 ([View Highlight](https://read.readwise.io/read/01h5vr36dpdnynn918dbht9agt)) #Highlight #[[2023-07-21]]
- 通过 Swift 的并发模型，我们可以完全避免线程数量过多的问题，理论上使得线程数保持与 CPU 核心数量相同 ([View Highlight](https://read.readwise.io/read/01h5vr3ynb28djkt2rw2hnzwxs)) #Highlight #[[2023-07-21]]
- Swift 引入了延续点（Continuation）的概念，来保证线程的可持续使用，避免了由于线程阻塞导致的线程数量膨胀和线程上下文切换带来的额外开销，从而达到 Swift 并发模型的极致目标：**线程数量等同于 CPU 核心数量。** ([View Highlight](https://read.readwise.io/read/01h5vr5nq4xkr6mda8d7gw6qmv)) #Highlight #[[2023-07-21]]
- Task 和 Task group 是 Swift 并发模型中引入的另一个抽象概念，Task 可以包含一系列的异步操作，例如一段包含 `async/await` 的代码，Task group 可以包含一系列的 Task。 ([View Highlight](https://read.readwise.io/read/01h5vr5zv254jw07wkn5jj08x3)) #Highlight #[[2023-07-21]]
- 在一个 Task group 中，可能会包含多个子 Task，而每个 Task 必定会在上一个 Task 执行完成后才会执行 ([View Highlight](https://read.readwise.io/read/01h5vr6ewz6pktg8s6ra6xwatp)) #Highlight #[[2023-07-21]]
- 使用 `await` 特性会破坏代码的原子性，是另外一个需要我们额外注意的问题。在之前对 `async/await` 的原理讨论中我们了解到，加入了 `await` 的异步函数，并不能保证与调用它的函数在同一线程执行，同样，在 `await` 返回后的代码也无法保证在同一线程执行，因此我们需要在任何加入了 `await` 的地方避免以下行为：
  
  •   在 `await` 前加锁
  •   在 `await` 前后访问线程私有数据 ([View Highlight](https://read.readwise.io/read/01h5vra9yj4wh9fzp4vsfz7sxq)) #Highlight #[[2023-07-21]]
- 我们必须避免在使用 `await` 时增加任何可能阻塞线程的行为 ([View Highlight](https://read.readwise.io/read/01h5vrapkbqphf955rbsdsexdw)) #Highlight #[[2023-07-21]]
- 同步场景下，使用锁是绝对安全的，因为在同步场景下，持有锁的线程，必定会继续执行任务并释放锁，因此并不违法 Swift 并发模型的运行时约定；异步场景下，如果持有锁的线程只会阻塞比较短的时间，那这种场景下也可以认为此线程是可继续执行任务的 ([View Highlight](https://read.readwise.io/read/01h5vrbx42x8eqdz005n1hp0br)) #Highlight #[[2023-07-21]]
- 在 debug 模式下时增加环境变量 `LIBDISPATCH_COOPERATIVE_POOL_STRICT=1` 可以开启强制使用协作式线程池，如果代码运行中出现不完全类型和 Swift 并发模型同时使用的情况，会立即触发 `semaphore_waite_trap` ([View Highlight](https://read.readwise.io/read/01h5vrcaremvh7ypqjxnxhr24k)) #Highlight #[[2023-07-21]]
- Actors 的一个重要特性 —— **可重入性（Reentrancy）**，一个可重入的 Actor 即使有暂时挂起的旧的任务，它仍然可以创建并执行其他新任务，而不会一直等待挂起的任务完成 ([View Highlight](https://read.readwise.io/read/01h5vrex1qttdk0d65qw6ncan7)) #Highlight #[[2023-07-21]]
- 我们还需要了解一个特殊的 Actor——Main Actor（可以理解为 GCD 中的主队列）。当我们执行完一个异步操作并需要刷新 UI 时，我们便涉及到与 Main actor 相关的 Actor hopping 操作，在这种情况下，我们需要额外留意其带来的上下文切换损耗，因为 Main actor 的任务必定会由主线程来执行，因此在发生 Actor hopping 时，极大可能会有线程上下文切换所带来的损耗 ([View Highlight](https://read.readwise.io/read/01h5vrg5bvssymw5vj8b1j3x0e)) #Highlight #[[2023-07-21]]