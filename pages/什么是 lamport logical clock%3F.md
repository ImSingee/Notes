title:: 什么是 lamport logical clock?

- #CruelFundamental #[[2022-08-26]] [讨论](https://github.com/CYZH1307/CruelFundamental/tree/main/homework/202208/26)
-
- 一个**逻辑时钟**，用于给分布式消息排序
-
- 原理
	- ![Replaced by Image Uploader](https://vip2.loli.io/2022/08/25/U8tizF1LJSN3I5Z.png)
	- 1. 每个事件对应一个 Lamport 时间戳，初始值为 0
	- 2. 如果事件在节点内发生，本地进程中的时间戳加 1
	- 3. 如果事件属于发送事件，本地进程中的时间戳加 1 并在消息中带上该时间戳
	       如果事件属于接收事件，本地进程中的时间戳 = Max (本地时间戳，消息中的时间戳) + 1
-