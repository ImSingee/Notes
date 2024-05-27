title:: Readwise/Highlights/【iOS】并发（Concurrency） - Feishu Docs
author:: [[bytedance.larkoffice.com]]
full-title:: 【iOS】并发（Concurrency） - Feishu Docs
category:: #articles
url:: https://bytedance.larkoffice.com/docx/doxcnMYZcL7DvPKuE9IN0iJ4eKh

![](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)
None

- 通常，我们会希望将长时间运行的非 UI 任务在后台异步运行。 GCD 通过使用几行代码的闭包使这变得非常简单，如下所示：​
  
  ​
  
  Swift
  
  Copy
  
  // Class level variable​
  
  let queue \=DispatchQueue(label: "worker")​
  
  // Somewhere in your function​
  
  queue.async {​
  
  // Call slow non-UI methods here​
  
  DispatchQueue.main.async {​
  
  // Update the UI here​
  
  }​
  
  }​
  
  ​ #Highlight #[[2024-05-27]]
- 通常，我们创建一个队列，向其提交任务以在后台线程上异步运行，完成后，我们将代码委托回主线程以更新 UI #Highlight #[[2024-05-27]]
- 放入队列的任务可以同步或异步运行。 同步运行任务时，应用程序将等待并阻塞当前 run loop，直到执行完成，然后再继续执行下一个任务。 或者，一个异步运行的任务启动，但将立即返回到应用程序中。 这样，应用程序可以在该任务执行时自由运行其他任务。​
  
  ​
  
  注意：请务必记住，虽然队列是基于 FIFO 的，但这并不能确保任务将按照我们提交的顺序完成。 FIFO 过程适用于任务开始时，而不是完成时。​
  
  ​ #Highlight #[[2024-05-27]]
- GCD 是 Apple 对 C 的 libdispatch 库的实现。它的目的是将任务（方法或闭包）排队，这些任务可以并行运行，具体取决于资源的可用性；然后它在可用的处理器内核上执行任务。 #Highlight #[[2024-05-27]]
- 虽然 GCD 在其实现中使用线程，但作为开发人员，我们无需担心自己管理它们。 GCD 的任务非常轻量级，以至于 Apple 在其 2009 年关于 GCD 的技术简报中表示，实现只需要 15 条指令，而处理传统线程可能需要数百条指令。​
  
  GCD 为我们管理的所有任务都放入 GCD 管理的先进先出 (FIFO) 队列中。然后，我们提交到队列的每个任务都针对由系统完全管理的线程池执行。​
  
  ​
  
  注意：无法保证我们的任务将针对哪个线程执行。​
  
  ​ #Highlight #[[2024-05-27]]
- Operation 类具有代表其生命周期的状态机。在此生命周期的各个部分会出现几种可能的状态：​
  
  ​
  
  •
  
  当它被实例化并准备好运行时，它将转换到 isReady 状态。​
  
  •
  
  在某些时候，我们可能会调用 start 方法，此时它将进入 isExecuting 状态。​
  
  •
  
  如果应用程序调用 cancel 方法，那么它将在进入 isFinished 状态之前转换到 isCancelled 状态。​
  
  •
  
  如果它没有被取消，那么它将直接从 isExecuting 移动到 isFinished。​
  
  ​
  
  ​ #Highlight #[[2024-05-27]]
- BlockOperation 管理默认全局队列上一个或多个闭包的并发执行。 这为使用 OperationQueue 并且不想创建单独的 DispatchQueue 的应用程序提供了一个面向对象的包装器。 #Highlight #[[2024-05-27]]
- 创建队列时，操作系统可能会创建一个或多个线程并将其分配给队列。 如果现有线程可用，则可以重用它们； 如果没有，那么操作系统将根据需要创建它们。 #Highlight #[[2024-05-27]]
- 与 GCD 不同的是，一个 Operation 默认是同步运行的，而让它异步运行需要更多的工作。虽然我们可以自己直接执行操作，但由于其同步性质，这不是一个好主意。我们需要通过将其提交到 OperationQueue 来将其从主线程中移除，这样我们的 UI 性能就不会受到影响。 #Highlight #[[2024-05-27]]
- 从类名中没有立即看出的是 BlockOperation 管理一组闭包。 它的行为类似于调度组，因为它在所有闭包都完成时将自己标记为完成。 #Highlight #[[2024-05-27]]
- 当我们的应用程序启动时，会自动为我们创建一个主调度队列。 它是一个负责 UI 的串行队列 #Highlight #[[2024-05-27]]
- 关于我们应该在应用程序中使用 GCD 还是 Operation，没有标准答案。对于我们只需要执行一次的简单任务，GCD 往往更易于使用。当我们需要跟踪任务或保持取消任务的能力时，Operation 提供了更多功能。 #Highlight #[[2024-05-27]]
- lockOperation 是 Operation 子类，管理默认全局队列上多个闭包的并发执行。 #Highlight #[[2024-05-27]]
- GCD 和 Operation 都允许我们提交应该在单独的线程上运行的代码块；但是，Operation 允许对提交的任务进行更大的控制。​
  
  正如开头所提到的，Operation 是建立在 GCD 之上的。它们添加了额外的功能，例如对其他 Operation 的依赖、取消正在运行的 Operation 的能力以及支持更复杂需求的面向对象模型。​
  
  ​ #Highlight #[[2024-05-27]]
- Apple 最流行且易于使用的编写和管理并发任务的机制 - Grand Central Dispatch #Highlight #[[2024-05-27]]
- 将任务同步提交到调度队列时要格外小心。如果我们发现自己调用的是 sync 方法，而不是 async 方法，请三思而后行，是否真的应该这样做。如果我们将一个任务同步提交到当前队列，阻塞了当前队列，而我们的任务试图访问当前队列中的资源，那么我们的应用就会死锁，这在第 5 章“并发问题”中有详细说明。同样，如果我们从主队列调用同步，我们将阻塞更新 UI 的线程，我们的应用程序将卡死。​
  
  ​
  
  注意：永远不要从主线程调用同步，因为它会阻塞你的主线程，甚至可能导致死锁。​
  
  ​ #Highlight #[[2024-05-27]]
- BlockOperation 中的任务同时运行。 如果我们需要它们串行运行，请将它们提交到私有 DispatchQueue 或设置依赖项。 #Highlight #[[2024-05-27]]
- 当我们想向 BlockOperation 添加额外的闭包时，我们将调用 addExecutionBlock 方法并简单地传入一个新的闭包 #Highlight #[[2024-05-27]]
- 除非与实际的 UI 工作相关，否则远不要对主队列同步执行某些事情。 否则，程序的的 UI 会卡顿，这可能会降低应用程序性能。 #Highlight #[[2024-05-27]]
- 我们可能想要使用 Operation 的首要原因之一是可重用性。如果我们有一个简单的“一劳永逸”的任务，那么 GCD 可能就是你所需要的。​
  
  ​
  
  Operation 是一个实际的 Swift 对象，这意味着我们可以传递输入来设置任务、实现辅助方法等。因此，我们可以包装一个工作单元或任务，并在将来的某个时间执行它，然后轻松多次提交该工作单元。 #Highlight #[[2024-05-27]]
- 并发队列非常普遍，Apple 提供了六个不同的全局并发队列，具体取决于队列应具有的服务质量 (Quality of service，QoS)。 #Highlight #[[2024-05-27]]
- 一旦屏障命中，队列就假装它是串行的，只有屏障任务可以运行直到完成。一旦完成，在屏障任务之后提交的所有任务都可以再次并发运行。 #Highlight #[[2024-05-27]]
- BlockOperation 是并发运行的，而不是串行运行的，因此执行的顺序是不确定的 #Highlight #[[2024-05-27]]
- 在使我们的应用程序并发时，我们将使用两个 API：GCD 和 Operations。这些既不是相互竞争的技术，也不是我们必须在其中选择的东西。事实上，Operations 是建立在 GCD 之上的！ #Highlight #[[2024-05-27]]
- Thread Sanitizer 是运行时分析。这意味着，如果在执行期间没有出现问题，则不会被标记 #Highlight #[[2024-05-27]]
- 我们应该尝试经常使用 Thread Sanitizer 运行——而不仅仅是一次。启用 sanitizer 会对性能产生相当大的影响，CPU 速度会降低 2 倍到 20 倍，但是，我们应该经常运行它，或者将其集成到我们的工作流程中，这样我们就不会错过所有这些鬼鬼祟祟的线程问题！ #Highlight #[[2024-05-27]]
- 默认情况下，调度队列将运行我们的设备一次能够处理的尽可能多的作业。如果我们希望限制该数量，只需在 DispatchQueue 上设置 maxConcurrentOperationCount 属性。如果我们将 maxConcurrentOperationCount 设置为 1，那么我们实际上创建了一个串行队列。 #Highlight #[[2024-05-27]]
- 在向 OperationQueue 添加任何操作之前，我们可以将现有的 DispatchQueue 指定为底层队列。如果这样做，请记住 DispatchQueue 的服务质量将覆盖我们为 OperationQueue 的 QoS 设置的任何值。​
  
  ​
  
  注意：不要将主队列指定为底层队列！​
  
  [https://developer.apple.com/documentation/foundation/nsoperationqueue/1415344-underlyingqueue](https://developer.apple.com/documentation/foundation/nsoperationqueue/1415344-underlyingqueue)​
  
  ​ #Highlight #[[2024-05-27]]
- OperationQueue 的行为类似于 DispatchGroup，我们可以添加具有不同服务质量值的操作，并且它们将根据相应的优先级运行。​
  
  OperationQueue 的默认服务质量级别是 .background。虽然我们可以在操作队列上设置 qualityOfService 属性，但请记住，它可能会被我们在队列管理的各个 Operation 上设置的服务质量覆盖。 #Highlight #[[2024-05-27]]
- 我们可以通过将 isSuspended 属性设置为 true 来暂停调度队列。已经添加的操作将继续运行，但在将 isSuspended 更改回 false 之前不会安排新添加的操作。 #Highlight #[[2024-05-27]]
- 将Operation 添加到 OperationQueue 后，就不能再将相同的操作添加到任何其他 OperationQueue。Operation 实例是一次完成的任务，这就是为什么要将它们变成子类，以便在必要时可以多次执行它们。 #Highlight #[[2024-05-27]]