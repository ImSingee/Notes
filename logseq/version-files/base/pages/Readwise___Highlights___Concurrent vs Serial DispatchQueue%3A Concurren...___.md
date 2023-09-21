title:: Readwise/Highlights/Concurrent vs Serial DispatchQueue: Concurren...
author:: [[Antoine van der Lee]]
full-title:: Concurrent vs Serial DispatchQueue: Concurrency in Swift Explained
category:: #articles
url:: https://www.avanderlee.com/swift/concurrent-serial-dispatchqueue/
tags:: #[[favorite]] #[[Swift]]
- A concurrent dispatch queue can be created by passing in an attribute as a parameter to the `DispatchQueue` initializer ([View Highlight](https://read.readwise.io/read/01havd2cd0ymhky8xa69y67qx8)) #Highlight #[[2023-09-21]]
- A `DispatchQueue` task can be run synchronously or asynchronously. The main difference occurs when you create the task.
  
  •   Synchronously starting a task will block the calling thread until the task is finished
  •   Asynchronously starting a task will directly return on the calling thread without blocking
  
  Say you would add a task to the queue from the main thread, you want to prevent yourself from using the sync method for long-running tasks. This would block the main thread and makes your UI unresponsive. ([View Highlight](https://read.readwise.io/read/01havd5bkwqhbxz1k8m7w14b5h)) #Highlight #[[2023-09-21]]
- The main dispatch queue is a globally available serial queue executing tasks on the application’s main thread. As the main thread is used for UI updates it’s important to be conscious when executing tasks on this queue. ([View Highlight](https://read.readwise.io/read/01havd5wtxtzd6xcfqdb3asav7)) #Highlight #[[2023-09-21]]