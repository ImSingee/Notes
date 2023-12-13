title:: Readwise/Highlights/Why Async Rust?
author:: [[without.boats]]
full-title:: Why Async Rust?
category:: #articles
url:: https://without.boats/blog/why-async-rust/
tags:: #[[favorite]] #[[Rust]]

- A big issue for any green threading system - Rust’s or Go’s or any other language’s - is what to do about the program stack for these threads. Remember that one of the goals of a user-space concurrency mechanism is to reduce the memory overhead of the large, pre-allocated stack used by OS threads. Therefore, green thread libraries tend to try to adopt a mechanism to spawn threads with smaller stacks, and grow them only as needed. ([View Highlight](https://read.readwise.io/read/01hdzv7prgp774ppxy4raj6944)) #Highlight #[[2023-10-30]]