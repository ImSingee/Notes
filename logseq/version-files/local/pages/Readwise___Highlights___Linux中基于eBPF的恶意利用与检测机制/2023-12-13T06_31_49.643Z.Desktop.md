title:: Readwise/Highlights/Linux中基于eBPF的恶意利用与检测机制
author:: [[meituan.com]]
full-title:: Linux中基于eBPF的恶意利用与检测机制
category:: #articles
url:: https://tech.meituan.com/2022/03/29/how-to-detect-bad-ebpf-used-in-linux.html
tags:: #[[inoreader]] #[[star]] #[[博客]]

- ![eBPF hook位置](https://p0.meituan.net/travelcube/5d1334dbd4bdc0a5c12aeaafcc0297e9478380.png)
  
  eBPF hook位置 ([View Highlight](https://read.readwise.io/read/01hfqv4mn24717zsw0e8kayrf6)) #Highlight #[[2023-11-21]]
- eBPF的hook点功能包括以下几部分：
  
  1.  可以在Storage、Network等与内核交互之间；
  2.  也可以在内核中的功能模块交互之间；
  3.  又可以在内核态与用户态交互之间；
  4.  更可以在用户态进程空间。 ([View Highlight](https://read.readwise.io/read/01hfqv5t4rnxtpa3qgpvzcamxy)) #Highlight #[[2023-11-21]]
- eBPF的功能覆盖XDP、TC、Probe、Socket等，每个功能点都能实现内核态的篡改行为 ([View Highlight](https://read.readwise.io/read/01hfqv5ebq33kvrre659thpcz3)) #Highlight #[[2023-11-21]]