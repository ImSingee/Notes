title:: Readwise/Highlights/Shared state | Tokio - An asynchronous Rust r...
author:: [[tokio.rs]]
full-title:: Shared state | Tokio - An asynchronous Rust runtime
category:: #articles
url:: https://tokio.rs/tokio/tutorial/shared-state

![](https://rdl.ink/render/https%3A%2F%2Ftokio.rs%2Ftokio%2Ftutorial%2Fshared-state)
None
- The goal of `Bytes` is to provide a robust byte array structure for network programming. The biggest feature it adds over `Vec<u8>` is shallow cloning. , calling `clone()` on a `Bytes` instance does not copy the data. Instead, a `Bytes` instance is a reference-counted handle to some data. The `Bytes` type is roughly an `Arc<Vec<u8>>` but with some added capabilities. #Highlight #[[2024-05-16]]
- A common error is to unconditionally use `tokio::sync::Mutex` from within async code. An async mutex is a mutex that is locked across calls to `.await`. #Highlight #[[2024-05-16]]
- As a , using a synchronous mutex from within asynchronous code is fine contention remains low and the lock is not held across calls to `.await`. #Highlight #[[2024-05-16]]
- That said, an asynchronous mutex is more expensive than an ordinary mutex, and it is typically better to use one of the two other approaches. #Highlight #[[2024-05-16]]