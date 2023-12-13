title:: Readwise/Highlights/How Async-Await Works Internally in Swift
author:: [[Bruno Rocha]]
full-title:: How Async/Await Works Internally in Swift
category:: #articles
url:: https://swiftrocks.com/how-async-await-works-internally-in-swift
tags:: #[[favorite]] #[[swift]]
- One of the main focuses of Swift is making undefined behavior impossible, and today this is achieved via a combination of compiler features (like explicit initialization, type-safety, and optional types) and runtime features (like throwing an exception when an array is accessed at an index that doesn’t exist. It’s still a crash, but it’s not undefined behavior anymore because now we know what’s supposed to happen!). ([View Highlight](https://read.readwise.io/read/01hcy5etjd7x4yy9r7wpvhzdan)) #Highlight #[[2023-10-17]]
- The primary reason why this was the case is because Grand Central Dispatch (GCD), Apple’s main concurrency solution for iOS apps, was not a feature of the Swift compiler itself, but rather a C library (libdispatch) that was shipped into iOS as part of Foundation. Just as expected of a C library, GCD gave you a lot of freedom in regard to concurrency work, making it challenging for Swift to prevent common concurrency issues like **data races, race conditions, deadlocks, priority inversions, and thread explosion.** ([View Highlight](https://read.readwise.io/read/01hcy5tmvqx2abz41xe2pt1vnh)) #Highlight #[[2023-10-17]]
- •   Data Race: Two threads accessing shared data at the same time, leading to unpredictable results
  •   Race Condition: Failing at synchronize the execution of two or more threads, leading to events happening in the wrong order
  •   Deadlock: Two threads waiting on each other, meaning neither is able to proceed
  •   Priority inversion: Low-priority task holding a resource needed by a high-priority task, causing delays in execution
  •   Thread explosion: Excessive number of threads in the program, leading to resource exhaustion and decreased system performance ([View Highlight](https://read.readwise.io/read/01hcy5tx7chn8fghataw498aq6)) #Highlight #[[2023-10-17]]
- One of the most important aspects of how async/await works in Swift, and one that we must cover before anything else, is that while async/await technically uses GCD under the hood, **it does not use the `DispatchQueues` that we are familiar with.** Instead, what powers async/await is a completely new feature of libdispatch called **The Cooperative Thread Pool.** ([View Highlight](https://read.readwise.io/read/01hcy6c93z511sxrjh4vfm6f9d)) #Highlight #[[2023-10-17]]
- Unlike traditional `DispatchQueues`, which creates and terminates threads dynamically as it deems necessary, the Cooperative Thread Pool manages a **fixed number of threads** that are constantly helping each other with their tasks.
  
  The “fixed number”, which in this case is equal to the system’s number of CPU cores, is an intentional move that aims to prevent **thread explosion** and improve system performance in general ([View Highlight](https://read.readwise.io/read/01hcy6dk1qmadvgt9cppewm7zb)) #Highlight #[[2023-10-17]]
- When a high-priority job is enqueued to a list that previously only had low-priority jobs, the executor escalates the priority of all jobs that came before it. ([View Highlight](https://read.readwise.io/read/01hcy6yp5qbn3gmqz0x7vg6e5p)) #Highlight #[[2023-10-17]]
- Instead of thinking of an asynchronous function as just a syntax sugar for declaring a bunch of closures, think of it as an **ordinary function that has the special power to give up its thread and wait for something to happen.** When that thing is complete, the function bootstraps itself back up and resumes its execution. ([View Highlight](https://read.readwise.io/read/01hcy71naetva8bsjmkbz3fde2)) #Highlight #[[2023-10-17]]
- when you `await` on an actor, your code will be forwarded not to the default global concurrent executor, but a **serial** one that was created specifically for that actor instance. ([View Highlight](https://read.readwise.io/read/01hd5jak0prbayfby6yw1v2zc2)) #Highlight #[[2023-10-20]]
- While actors naturally protect you from **data races**, it’s critical to remember that **they cannot protect you from logic mistakes like race conditions / straight-up incorrect code.** ([View Highlight](https://read.readwise.io/read/01hd5je13thjegywhg8z2dqf0c)) #Highlight #[[2023-10-20]]
- When a suspension point is created, **the actor will allow other jobs in the serial queue to run.** This means that when the result for the original job finally arrives, it’s possible that the actor’s state may have changed in a way where whatever assumptions you made *before* the suspension point are no longer true! ([View Highlight](https://read.readwise.io/read/01hd5jeb48ed37sj5xmtamkgcw)) #Highlight #[[2023-10-20]]
- in order for your actors to be thread-safe, you must structure your code so that no state is assumed or carried over across suspension points. ([View Highlight](https://read.readwise.io/read/01hd5jeyhhcxpbmk9sqebszq1s)) #Highlight #[[2023-10-20]]
- This doesn’t mean that you can mark anything as `Sendable` through; Swift *really* doesn’t want you to introduce data races into your programs, so the compiler has very strict requirements of what can inherit it:
  
  •   Actors (does so by default)
  •   Value types
  •   `final` classes that have no mutable properties
  •   Functions and closures (by marking them with `@Sendable`) ([View Highlight](https://read.readwise.io/read/01hd5jg30xd4bwb0jk2zkfs3r6)) #Highlight #[[2023-10-20]]
- similarly to `Sendable`, not everything can be marked as `nonisolated`. Only types that are `Sendable` can be marked as such. ([View Highlight](https://read.readwise.io/read/01hd5jtqe1f40nss1xdzdgzkbf)) #Highlight #[[2023-10-20]]