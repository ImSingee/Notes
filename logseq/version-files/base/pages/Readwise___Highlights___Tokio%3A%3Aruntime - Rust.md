title:: Readwise/Highlights/Tokio::runtime - Rust
author:: [[docs.rs]]
full-title:: Tokio::runtime - Rust
category:: #articles
url:: https://docs.rs/tokio/latest/tokio/runtime/index.html
- The multi-thread scheduler executes futures on a thread pool, using a
  work-stealing strategy. By default, it will start a worker thread for each
  CPU core available on the system. This tends to be the ideal configuration
  for most applications. #Highlight #[[2023-11-15]]