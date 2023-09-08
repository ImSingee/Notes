title:: Readwise/Highlights/Discover How @MainActor Works
author:: [[Vincent Pradeilles]]
full-title:: Discover How @MainActor Works
category:: #articles
url:: https://www.swiftwithvincent.com/blog/discover-how-main-actor-works-in-swift
tags:: #[[Swift]]
- anything that is connected to the UI can only be accessed from the main thread ([View Highlight](https://read.readwise.io/read/01h79n32rxkn321gffvb80qaxr)) #Highlight #[[2023-08-08]]
- `**@MainActor**` can be used in a variety of places: on types, on methods, on properties and even on closures. ([View Highlight](https://read.readwise.io/read/01h79n3x9affb2haqs36rcgb72)) #Highlight #[[2023-08-08]]
- `**@MainActor**` will only have an effect in asynchronous code that uses Swift Concurrency.
  
  If your code uses a `**completionHandler**` or `**Combine**`, then `**@MainActor**` will have no effect, and you will still need to manually switch the execution to the main thread. ([View Highlight](https://read.readwise.io/read/01h79n5ea3kgmv5encpxere3ah)) #Highlight #[[2023-08-08]]