title:: Readwise/Highlights/聊一聊systemd
author:: [[watermelonwater]]
full-title:: 聊一聊systemd
category:: #articles
url:: https://watermelonwater.tech/%e8%81%8a%e4%b8%80%e8%81%8asystemd/
tags:: #[[inoreader]] #[[wmw blog]] #[[博客]]
- 查看所有已启动的服务列表：systemctl list-units --type service
  
  查看所有的服务：systemctl list-units --type service --all
  
  查看开机自启的服务情况：systemctl list-unit-files --type service ([View Highlight](https://read.readwise.io/read/01h3rtxfjfcaxf064angfccvf4)) #Highlight #[[2023-06-25]]
- Target Units：用于模拟实现运行级别（runlevel），0-6 级。 ([View Highlight](https://read.readwise.io/read/01h3rtxxt30teebbwgnvyy1c6s)) #Highlight #[[2023-06-25]]
- init 0 # 切换到运行级别 0（关机） init 1 # 切换到运行级别 1（单用户模式） init 2 # 切换到运行级别 2（多用户模式，无网络支持） init 3 # 切换到运行级别 3（多用户文本模式） init 4 # 切换到运行级别 4（保留） init 5 # 切换到运行级别 5（多用户图形模式） init 6 # 切换到运行级别 6（系统重启） 在systemd中发生了转化: 0:runlevel0.target,poweroff.target 1:runlevel1.target,rescue.target 2-4:runlevel2-4.target,multi-user.target 5:runlevel5.target,graphical.target 6:runlevel6.target,reboot.target ([View Highlight](https://read.readwise.io/read/01h3rtyg36vk2qtg8ygr8nb392)) #Highlight #[[2023-06-25]]
- 级别切换:  
  init N >> systemctl isolate name.target ([View Highlight](https://read.readwise.io/read/01h3rtzd4x2ac8aprc7egbw0zz)) #Highlight #[[2023-06-25]]
- 查看目前级别:  
  runlevel >> systemctl list-units --type=target --state=active ([View Highlight](https://read.readwise.io/read/01h3rtzgtaet9w624n0mypbfsk)) #Highlight #[[2023-06-25]]
- 获取默认运行级别:  
  /etc/inittab >> systemctl get-default ([View Highlight](https://read.readwise.io/read/01h3rtzpnzdnba9ftvx80ghnra)) #Highlight #[[2023-06-25]]
- 修改默认级别:  
  /etc/inittab >> systemctl set-default name.target ([View Highlight](https://read.readwise.io/read/01h3rtztyz8z5x3w3jbk440pcs)) #Highlight #[[2023-06-25]]