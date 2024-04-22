title:: Readwise/Highlights/Cargo Package 离线编译策略
author:: [[rustcc.cn]]
full-title:: Cargo Package 离线编译策略
category:: #articles
url:: https://rustcc.cn/article?id=a4650d78-02d8-4f58-8308-f8fc48d73a55
tags:: #[[inoreader]] #[[read]] #[[star]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)
cargo build命令也不需要--offline命令行参数了，因为【目录·源码替换】配置规则会生效和告诉cargo从本地硬盘的何处寻找依赖项crate源码。
- 简单地讲，`cargo`为`Package`提供了两套【离线编译】解决方案：
  
  •   方案一：`cargo fetch` + `cargo build --offline`
  •   方案二：`cargo vendor` + 修改`.cargo/config.toml`文件 + `cargo build` ([View Highlight](https://read.readwise.io/read/01hq7a4nfc5a8dvh7nvga679gx)) #Highlight #[[2024-02-22]]
- `cargo vendor`性能最佳·参数组合
  
  `cargo vendor --no-delete --versioned-dirs --respect-source-config`
  
  •   `--no-delete`不删除上一次执行`cargo vendor`时留下的`vendor`文件夹。这样下载过的`crate`源码就不会再重新下载了。
  •   `--versioned-dirs`给每个依赖项目录名追加以`-`开头的版本号后缀（例如，`base64-0.5.2`）。这样，不用刻意地浏览每个依赖项的`Cargo.toml`文件，便可知晓它们的版本信息。
  •   `--respect-source-config`若你的工程早先就已经配置过【源码替换】`[source.***]`配置块，`cargo`将对旧配置做兼容处理。否则，旧配置就会被无视了。 ([View Highlight](https://read.readwise.io/read/01hq7a8z422gnm4crytkf6291t)) #Highlight #[[2024-02-22]]