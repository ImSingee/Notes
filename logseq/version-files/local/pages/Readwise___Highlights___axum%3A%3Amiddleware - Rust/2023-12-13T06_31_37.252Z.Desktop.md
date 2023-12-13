title:: Readwise/Highlights/axum::middleware - Rust
author:: [[docs.rs]]
full-title:: axum::middleware - Rust
category:: #articles
url:: https://docs.rs/axum/latest/axum/middleware/index.html

- When you add middleware with [`Router::layer`](../struct.Router.html#method.layer "method axum::Router::layer") (or similar) all previously added routes will be wrapped in the middleware. Generally speaking, this results in middleware being executed from bottom to top. #Highlight #[[2023-10-13]]
- `ServiceBuilder` works by composing all layers into one such that they run top to bottom. #Highlight #[[2023-10-13]]