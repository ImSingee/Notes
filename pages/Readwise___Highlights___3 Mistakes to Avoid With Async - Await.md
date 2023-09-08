title:: Readwise/Highlights/3 Mistakes to Avoid With Async - Await
author:: [[Vincent Pradeilles]]
full-title:: 3 Mistakes to Avoid With Async / Await
category:: #articles
url:: https://www.swiftwithvincent.com/blog/three-mistakes-to-avoid-with-async-await-in-swift
tags:: #[[Swift]]
- These errors are perfectly normal: since our `**Task**` now runs detached from the `**@MainActor**` context, we need to explicitly acknowledge the potential suspend point whenever we try to access something that is bound to the `**@MainActor**` and we do so by adding an `**await**` at each of these call sites. ([View Highlight](https://read.readwise.io/read/01h79ncyxdm90kq6dqe24hw35v)) #Highlight #[[2023-08-08]]