title:: Readwise/Highlights/Swift Package Plugins 初探
author:: [[Semyon]]
full-title:: Swift Package Plugins 初探
category:: #articles
url:: https://mp.weixin.qq.com/s/US6_4Yvs_XnUF1gELYiN6g

![](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_182549/0)

- 与 iOS 类似，macOS 也在内核层面提供了进程沙盒的支持，可以精准控制每个沙盒进程的权限（例如文件访问、Mach IPC 等系统调用）。与 iOS 不同的是，macOS 提供了一个命令行工具 sandbox-exec，来将沙盒的能力暴露给用户。我们可以通过 sandbox-exec 并配合上一个用来描述权限的 profile 文件，就可以在一个自定义的沙盒环境中执行任意进程了。 ([View Highlight](https://read.readwise.io/read/01h6n42gkdqmq3gtpdeae6tm2z)) #Highlight #[[2023-07-31]]
- open (1) 或其他类似的启动应用方式借助的是 Launch Services 这个系统服务，它由 launchd 进程提供，应用通过 Mach IPC 与 launchd 交互，并最终由 launchd 启动应用，即可 “逃逸沙盒”（其实在进程关系上，这个 “子进程” 的父进程是 launchd，与 Sandbox 的进程模型并不冲突） ([View Highlight](https://read.readwise.io/read/01h6n45nz76w7j6yxcb3vmebzz)) #Highlight #[[2023-07-31]]