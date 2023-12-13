title:: Readwise/Highlights/EDNS Client Subnet 协议简介
author:: [[涛叔]]
full-title:: EDNS Client Subnet 协议简介
category:: #articles
url:: https://taoshu.in/dns/edns-client-subnet.html
tags:: #[[inoreader]] #[[star]] #[[博客]]
- 使用公共的 DoH 递归解析服务器后，权威DNS服务器只能获取递归解析服务器的地址，但无法获取用户的地址。所以于地理位置的智能解析就无法工作了。为了解决这个问题，人们制定了 EDNS Client Subnet (ECS) 协议 ([View Highlight](https://read.readwise.io/read/01he4v5pasmhryfw6ctvs171wj)) #Highlight #[[2023-11-01]]
- ECS 简单说就是把用户的IP信息暴露给权威DNS服务器。但为了保护用户隐私，递归服务器并不直接把用户的IP发给权威服务器。相反，只把用户IP所在的网段发给权威DNS服务器。如果客户使用 IPv4，那发送的网络前缀为 24，如果是 IP6，那网络前缀为56。一般来说，同网段的客户地址位置相近。这里的网段就叫 client subnet。 ([View Highlight](https://read.readwise.io/read/01he4v6p8zkbsj3rcek0ekdtnj)) #Highlight #[[2023-11-01]]