title:: Readwise/Highlights/Systemd 日志维护指南（附实例） | Linux 中国
author:: [[邀你一起加入]]
full-title:: Systemd 日志维护指南（附实例） | Linux 中国
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MjM5NjQ4MjYwMQ==&mid=2664675200&idx=2&sn=b02b2354d1879f35fa22c13daada0945&chksm=bdcf8cc68ab805d08b985e1446891df8bd99b910badb2f4e5751ff69ee676f6504e369d4d88e#rd
tags:: #[[inoreader]] #[[公众号「linux中国」]] #[[微信公众号]]

- 如果你的 Linux 发行版支持 systemd🔗 www.freedesktop.org，那么从启动时开始，它每秒钟都会从系统的所有进程和应用程序中收集日志。所有这些日志事件都由 systemd 的 `journald` 守护程序管理。journald 收集所有的日志（信息、警告、错误等），并将其作为二进制数据存储在磁盘文件中。 ([View Highlight](https://read.readwise.io/read/01hevx1zvmmpsqms48ntqeaygq)) #Highlight #[[2023-11-10]]
- 日志以二进制形式存储在路径 `/var/log/journal`，文件夹为机器 ID ([View Highlight](https://read.readwise.io/read/01hevx2v2cte7a5mbry13ayzc4)) #Highlight #[[2023-11-10]]
- 根据系统配置，运行时日志文件被存储在 `/run/log/journal/`。而这些在每次启动时都会被删除 ([View Highlight](https://read.readwise.io/read/01hevx2kh8f26sqp9ah3s91he1)) #Highlight #[[2023-11-10]]
- 清理日志文件的有效方法应该是通过 `journald.conf` 配置文件来完成。正常情况下，即使 `journalctl` 提供了删除日志文件的工具，你也不应该手动删除这些文件 ([View Highlight](https://read.readwise.io/read/01hevx3egahv96fjvrs3np9n6p)) #Highlight #[[2023-11-10]]