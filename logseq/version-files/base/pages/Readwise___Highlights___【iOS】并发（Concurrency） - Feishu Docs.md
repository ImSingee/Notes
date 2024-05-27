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