title:: Readwise/Highlights/Nonisolated and Isolated Keywords: Understand...
author:: [[Antoine van der Lee]]
full-title:: Nonisolated and Isolated Keywords: Understanding Actor Isolation
category:: #articles
url:: https://www.avanderlee.com/swift/nonisolated-isolated/

- It’s typical to run into errors with actors like the ones below:
  
  •   Actor-isolated property ‘balance’ can not be referenced from a non-isolated context
  •   Expression is ‘async’ but is not marked with ‘await’
  
  Both errors have the same root cause: actors isolate access to its properties to ensure mutually exclusive access. ([View Highlight](https://read.readwise.io/read/01havc7abr2g2zrgggve4e13w4)) #Highlight #[[2023-09-21]]