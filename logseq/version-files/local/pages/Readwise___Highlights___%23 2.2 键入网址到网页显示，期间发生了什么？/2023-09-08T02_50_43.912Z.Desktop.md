title:: Readwise/Highlights/# 2.2 键入网址到网页显示，期间发生了什么？
author:: [[小林coding]]
full-title:: \# 2.2 键入网址到网页显示，期间发生了什么？
category:: #articles
url:: https://xiaolincoding.com/network/1_base/what_happen_url.html#%E4%B8%A4%E7%82%B9%E4%BC%A0%E8%BE%93-mac

![](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_182549/icon.webp)

- 一般在 TCP/IP 通信里，MAC 包头的**协议类型**只使用：
  
  •   `0800` ： IP 协议
  •   `0806` ： ARP 协议 ([View Highlight](https://read.readwise.io/read/01h77ph9jqw5bstvm4dvc46r7v)) #Highlight #[[2023-08-07]]
- ARP 协议会在以太网中以**广播**的形式，对以太网所有的设备喊出：“这个 IP 地址是谁的？请把你的 MAC 地址告诉我”。
  
  然后就会有人回答：“这个 IP 地址是我的，我的 MAC 地址是 XXXX”。
  
  如果对方和自己处于同一个子网中，那么通过上面的操作就可以得到对方的 MAC 地址。然后，我们将这个 MAC 地址写入 MAC 头部，MAC 头部就完成了。 ([View Highlight](https://read.readwise.io/read/01h77pjsfbabgtr71m4qb09jev)) #Highlight #[[2023-08-07]]
- 操作系统会把本次查询结果放到一块叫做 **ARP 缓存**的内存空间留着以后用，不过缓存的时间就几分钟 ([View Highlight](https://read.readwise.io/read/01h77pk38mf65ezgbzdj9ayy44)) #Highlight #[[2023-08-07]]
- 在 Linux 系统中，我们可以使用 `arp -a` 命令来查看 ARP 缓存的内容。 ([View Highlight](https://read.readwise.io/read/01h77pk930b96cxwwffcm23kmq)) #Highlight #[[2023-08-07]]
- 网络包只是存放在内存中的一串二进制数字信息，没有办法直接发送给对方。因此，我们需要将**数字信息转换为电信号**，才能在网线上传输，也就是说，这才是真正的数据发送过程。
  
  负责执行这一操作的是**网卡**，要控制网卡还需要靠**网卡驱动程序**。
  
  网卡驱动获取网络包之后，会将其**复制**到网卡内的缓存区中，接着会在其**开头加上报头和起始帧分界符，在末尾加上用于检测错误的帧校验序列**。 ([View Highlight](https://read.readwise.io/read/01h77pm055dday7yfyef02769g)) #Highlight #[[2023-08-07]]