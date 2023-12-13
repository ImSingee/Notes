title:: Readwise/Highlights/简单聊聊容器中的 UID 中的一点小坑
首先在一个 Linux UserNamespace 中，UID 默认的范围是从 0 - 60000。其中 UID 0 是 Root 的保留 UID。从理论上来讲，用户 UID/GID 的创建的范围是从 1 到 60000

但是实际上可能会更复杂一些，通常各发行版的内置的一些服务，可能会自带一些特殊的用户，比如经典的 www-data （之前没事喜欢搭博客的同学对这个肯定不陌生）。所以实践中，一个 User Namespace 内，一个 UID 的起始，通常是 500 或者 1000。具体的设置，取决于一个特殊文件的设置，[login.defs](https://man7.org/linux/man-pages/man5/login.defs.5.html)，路径是 `/etc/login.defs` ... Range of user IDs used for the creation of regular users by useradd or newusers. The default value for UID_MIN (resp. UID_MAX) is 1000 (resp. 60000). #Highlight #[[2023-10-30]]
- pip 在用户态安装的时候，如果不存在 .local 目录，那么会创建 .local 目录并将权限设置为 700 ([View Highlight](https://read.readwise.io/read/01hdz9f0684f0q8ybt4mx9mngp)) #Highlight #[[2023-10-30]]