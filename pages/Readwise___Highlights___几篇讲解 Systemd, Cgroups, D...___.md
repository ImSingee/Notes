title:: Readwise/Highlights/几篇讲解 Systemd, Cgroups, D...
author:: [[@hemashushu on Twitter]]
full-title:: 几篇讲解 Systemd, Cgroups, D...
category:: #tweets
url:: https://twitter.com/hemashushu/status/1682325446585909248

- 几篇讲解 systemd, cgroups, dbus 不错的文章：
  
  注：#systemd 是内核启动后第一个执行的程序，取代了sysvinit几乎成为所有发行版默认的init程序（除了alpine和gentoo，它们用openrc），所以要了解系统的构成，systemd 就绕不过了。然而它的内容非常多，想彻底搞清楚需要好几篇/系列文章。
  
  （续 ([View Tweet](https://twitter.com/hemashushu/status/1682325446585909248)) #Highlight #[[2023-07-21]]
- 续）
  1. Understanding and administering systemd
  https://t.co/h7BzsbgBRU
  
  非常易懂的文章，分别 systemd 的使用方法。
  
  2. Resource Management Guide
  https://t.co/uKEhuU97Pk
  
  #cgroups 是内核提供资源控制机制，用于设置进程的cpu、内存、io等使用率。上面这篇讲得比较全面，还有实例。
  
  （续 ([View Tweet](https://twitter.com/hemashushu/status/1682325451082182656)) #Highlight #[[2023-07-21]]
- 续）
  3.1 D-Bus Tutorial
  https://t.co/WMP5owTaPi
  
  3.2 D-Bus and Polkit, No More Mysticism and Confusion
  https://t.co/FXlZSDSF9g
  
  D-Bus 是IPC机制的一种，不单桌面应用程序依赖它，systemd 也依赖，上面两篇分别介绍 #DBus 的原始及高阶的调用方法。 ([View Tweet](https://twitter.com/hemashushu/status/1682325454601216000)) #Highlight #[[2023-07-21]]
- 续）
  如果从学习角度来说，我还是比较喜欢比较简单的init，而 systemd 是有一点点包揽太多的感觉，作者的 blog 有讲解他的所思所想，大家有闲情的话可以了解一下：
  https://t.co/LcP16K2dek
  
  上面是索引，从《Rethinking PID 1》开始，后面还有一系列文章。 ([View Tweet](https://twitter.com/hemashushu/status/1682326860716449793)) #Highlight #[[2023-07-21]]