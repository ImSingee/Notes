title:: Readwise/Highlights/（1-3）为什么说 Tmux 这类 Multip...
author:: [[@sxyazi on Twitter]]
full-title:: （1/3）为什么说 Tmux 这类 Multip...
category:: #tweets
url:: https://twitter.com/sxyazi/status/1692161818289160554
- （1/3）为什么说 tmux 这类 multiplexer 是性能杀手？除了 CSI 序列需要被翻译两遍外，我还找到另外一个原因：
  
  昨天翻 wezterm 代码，发现为了适配 tmux 和 ConPty 被逼的只能加 sleep。ConPty 是 Windows 为了向后兼容在真实 TTY 和 Terminal emulator 加得一个兼容层，原理和 screen/tmux 类似。 
  
  ![](https://pbs.twimg.com/media/F3vD7mSakAAUOop.jpg) ([View Tweet](https://twitter.com/sxyazi/status/1692161818289160554)) #Highlight #[[2023-08-18]]
- （2/3）不过 Windows 这个属于系统性设计失误，Windows terminal devs 已经承认这点，它不仅导致性能下降，还导致像 Kitty、Sixel 这些图像协议/格式完全没法工作 —— 作为 multiplexer，它只向用户终端转达它认识的那些序列，Kitty、Sixel 这些它不认识，因此根本没机会到达终端进而显示成图片。 ([View Tweet](https://twitter.com/sxyazi/status/1692161822584181216)) #Highlight #[[2023-08-18]]
- （3/3）虽然有让 ConPty 支持 Sixel 和直通真实 TTY 的提案，但都没啥进展。对了，我已经抛弃 tmux 很长时间了，使用 kitty 自带的 Tab 和分屏功能，感觉完全够用。 ([View Tweet](https://twitter.com/sxyazi/status/1692161827097170125)) #Highlight #[[2023-08-18]]