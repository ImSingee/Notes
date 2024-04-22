title:: Readwise/Highlights/Rust Web Frameworks Have Subpar Error Reporting
author:: [[lpalmieri.com]]
full-title:: Rust Web Frameworks Have Subpar Error Reporting
category:: #articles
url:: https://www.lpalmieri.com/posts/rust-web-frameworks-have-subpar-error-reporting/
tags:: #[[a learning journal]] #[[go inbox]] #[[inoreader]] #[[博客]]  
![](https://www.lpalmieri.com/image/pavex-report-04/pavex_logo.webp)
None of the major Rust web frameworks have a great error reporting story, according to my personal definition of great.
- [`std::error::Error`](https://doc.rust-lang.org/std/error/trait.Error.html) is the cornerstone(基石) of Rust's error handling story. It requires error types to:
  
  •   Implement the [`Display`](https://doc.rust-lang.org/std/fmt/trait.Display.html) trait(特质), as its **user-facing representation**
  •   Implement the [`Debug`](https://doc.rust-lang.org/std/fmt/trait.Debug.html) trait(特质), as its **operator-facing representation**
  •   Provide a way to access the [**source of the error**](https://doc.rust-lang.org/std/error/trait.Error.html#method.source), if any ([View Highlight](https://read.readwise.io/read/01hnxnk20n938b1kejscp11c2n)) #Highlight #[[2024-02-06]]