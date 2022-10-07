title:: Readwise/Highlights/你管这破玩意叫操作系统源码 | 第一回 最开始的两行代码 (3)
author:: [[mp.weixin.qq.com]]
full-title:: 你管这破玩意叫操作系统源码 | 第一回 最开始的两行代码
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=Mzk0MjE3NDE0Ng==&mid=2247499226&idx=1&sn=1ff3d54a3608423b7781142ae3ac62ca&chksm=c2c58777f5b20e61664a51d31ab779bbe68c317c3459218c7cd4b9530887dbb33470628c3248&cur_album_id=2123743679373688834&scene=189

- 当你按下开机键的那一刻，在主板上提前写死的固件程序 BIOS 会将硬盘中启动区的 512 字节的数据，原封不动复制到内存中的 0x7c00 这个位置，并跳转到那个位置进行执行。 #Highlight #[[2022-01-13]]
- 只要硬盘中的 0 盘 0 道 1 扇区的 512 个字节的最后两个字节分别是 0x55 和 0xaa，那么 BIOS 就会认为它是个启动区。 #Highlight #[[2022-01-13]]
- 为操作系统的开发人员，仅仅需要把操作系统最开始的那段代码，编译并存储在硬盘的 0 盘 0 道 1 扇区即可。之后 BIOS 会帮我们把它放到内存里，并且跳过去执行。 #Highlight #[[2022-01-13]]