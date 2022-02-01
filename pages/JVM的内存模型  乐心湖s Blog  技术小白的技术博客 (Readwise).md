retrieved:: [[2022-02-01]], 2:43:48 PM
              author:: [[xn2001.com]]
              category:: [[articles]]
              source:: [[hypothesis]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)
- ## [[Readwise Highlights]]
	- jdk1.8的内存模型是由2部分组成，年轻代 + 年老代。
	  年轻代：Eden + 2*Survivor
	  年老代：OldGen
	                link:: [null](null)
	                on:: [[2021-05-28]]
	                tags::
	- 在jdk1.8中变化最大的Perm区，用Metaspace（元数据空间）进行了替换。
	                link:: [null](null)
	                on:: [[2021-05-28]]
	                tags::
	- Metaspace所占用的内存空间不是在虚拟机内部，而是在本地内存空间中，这也是与1.7的永久代最大的区别所在。
	                link:: [null](null)
	                on:: [[2021-05-28]]
	                tags::
	- 由于永久代内存经常不够用或发生内存泄露，爆出异常java.lang.OutOfMemoryError: PermGen。基于此，将永久区废弃，而改用元空间，改为了使用本地内存空间。
	                link:: [null](null)
	                on:: [[2021-05-28]]
	                tags::