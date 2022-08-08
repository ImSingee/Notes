title:: 什么是 TIME_WAIT 状态，为什么需要 TIME_WAIT 状态？时间是多久，为什么？

- #CruelFundamental #[[2022-08-08]] #计算机网络 #TCP
-
- ![Replaced by Image Uploader](https://vip2.loli.io/2022/08/08/aw5coTdSxhbDQCs.png)
-
- [[TCP]] 中，在终止连接时（**任何一端均可主动终止连接**）会发送 FIN，同时对端在接收到此 FIN 且自己的消息也发送完后向发起终止方发送 FIN，发起终止方接收到对端发送的 FIN 后进入 TIME_WAIT 状态
- > TIME_WAIT 状态不属于客户端也不属于服务端，它属于的是要求终止的一端（首先发送 FIN 的）
- TIME_WAIT 的主要作用在于 **防止数据延迟** 与 **防止 ACK 丢失**，需等待 2 * [[MSL]]
-
- ## 防止数据延迟
-
-
-
-