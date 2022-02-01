retrieved:: [[2022-02-01]], 2:41:29 PM
              author:: [[mp.weixin.qq.com]]
              category:: [[articles]]
              source:: [[hypothesis]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)
- ## [[Readwise Highlights]]
	- 当你按下开机键的那一刻，在主板上提前写死的固件程序 BIOS 会将硬盘中启动区的 512 字节的数据，原封不动复制到内存中的 0x7c00 这个位置，并跳转到那个位置进行执行。
	                link:: [null](null)
	                on:: [[2022-01-13]]
	                tags::
	- 只要硬盘中的 0 盘 0 道 1 扇区的 512 个字节的最后两个字节分别是 0x55 和 0xaa，那么 BIOS 就会认为它是个启动区。
	                link:: [null](null)
	                on:: [[2022-01-13]]
	                tags::
	- 为操作系统的开发人员，仅仅需要把操作系统最开始的那段代码，编译并存储在硬盘的 0 盘 0 道 1 扇区即可。之后 BIOS 会帮我们把它放到内存里，并且跳过去执行。
	                link:: [null](null)
	                on:: [[2022-01-13]]
	                tags::