---
title: 使用 Rust 完成逻辑开发
---

- 不得不说，Swift 是一门用起来非常舒服的语言，然而，作为一名独立开发者，最大的权力就在于可以做一些自己喜欢的事情，例如 —— 开心的使用 rust！

- 

- 安装
	 - XCode 和 Rust 的安装就不说了，如果这还不会就没必要看这个文章了……

	 - 

	 - 为 rust 增加 iOS 的支持

	 - 
```shell
rustup target add aarch64-apple-ios x86_64-apple-ios
```

	 - （如果需要支持上古设备那么额外增加 `armv7-apple-ios armv7s-apple-ios i386-apple-ios`
