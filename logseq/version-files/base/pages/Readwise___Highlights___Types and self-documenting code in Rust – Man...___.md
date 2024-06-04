title:: Readwise/Highlights/Types and self-documenting code in Rust – Man...
author:: [[ceronman.com]]
full-title:: Types and self-documenting code in Rust – Manuel Cerón
category:: #articles
url:: https://ceronman.com/2024/05/28/types-and-self-documenting-code-in-rust/

![](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)
None

- It’s important to remember that char represents a Unicode Scalar Value, and might not match your idea of what a ‘character’ is. Iteration over grapheme clusters may be what you actually want. This functionality is not provided by Rust’s standard library, check crates. io instead. #Highlight #[[2024-06-04]]
- In Java, the most accepted position is to accept and return abstractions in APIs as much as possible. But in the Go community, the suggested practice is to [accept interfaces but return structs](https://go.dev/doc/effective_go#interfaces). #Highlight #[[2024-06-04]]