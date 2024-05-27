title:: Readwise/Highlights/Channels | Tokio - An asynchronous Rust runtime
author:: [[tokio.rs]]
full-title:: Channels | Tokio - An asynchronous Rust runtime
category:: #articles
url:: https://tokio.rs/tokio/tutorial/channels

![](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)
None
- Tokio provides a [number of channels](https://docs.rs/tokio/1/tokio/sync/index.html), each serving a different purpose.
  
  *   [mpsc](https://docs.rs/tokio/1/tokio/sync/mpsc/index.html): multi-producer, single-consumer channel. Many values can be sent.
  *   [oneshot](https://docs.rs/tokio/1/tokio/sync/oneshot/index.html): single-producer, single consumer channel. A single value can be sent.
  *   [broadcast](https://docs.rs/tokio/1/tokio/sync/broadcast/index.html): multi-producer, multi-consumer. Many values can be sent. Each receiver sees every value.
  *   [watch](https://docs.rs/tokio/1/tokio/sync/watch/index.html): multi-producer, multi-consumer. Many values can be sent, but no history is kept. Receivers only see the most recent value.
  
  If you need a multi-producer multi-consumer channel where only one consumer sees each message, you can use the [`async-channel`](https://docs.rs/async-channel/) crate. also channels for use outside of asynchronous Rust, [`std::sync::mpsc`](https://doc.rust-lang.org/stable/std/sync/mpsc/index.html) and [`crossbeam::channel`](https://docs.rs/crossbeam/latest/crossbeam/channel/index.html). These channels wait for messages by blocking the thread, which is not allowed in asynchronous code. #Highlight #[[2024-05-16]]