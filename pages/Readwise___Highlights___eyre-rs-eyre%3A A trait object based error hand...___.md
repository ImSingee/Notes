title:: Readwise/Highlights/eyre-rs-eyre: A trait object based error hand...
author:: [[github.com]]
full-title:: eyre-rs/eyre: A trait object based error handling type for easy idiomatic error handling and reporting in Rust applications
category:: #articles
url:: https://github.com/eyre-rs/eyre?tab=readme-ov-file

![](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)
None

- Use `eyre` if you don't think you'll do anything with an error other than report it. This is common in application code. Use `thiserror` if you think you need an error type that can be handled via match or reported. This is common in library crates where you don't know how your users will handle your errors. #Highlight #[[2024-05-28]]