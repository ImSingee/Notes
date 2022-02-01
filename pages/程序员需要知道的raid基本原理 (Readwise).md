retrieved:: [[2022-02-01]], 2:45:53 PM
              author:: [[oserror.com]]
              category:: [[articles]]
              source:: [[hypothesis]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)
- ## [[Readwise Highlights]]
	- RAID6RAID6是把数据块按照分块分别存在不同的磁盘中，并且冗余信息为两份奇偶校验码，分布在多块磁盘中，其结构如下：
	  
	  如上图，读数据时，当数据分布在多块盘时，能够利用多块数据盘的带宽；写数据时，如果数据分布在多块盘时，能利用多块数据盘带宽，同时写校验数据也分散在多块盘中，但因为要额外写入两份校验数据，因此，写数据的性能要略微下降。N块盘的RAID6的特性如下：
	  
	  读性能是N倍
	  写性能略微弱于RAID0
	  空间利用率为(N-2)/N
	  坏掉两块盘，RAID还能正常工作
	                link:: [null](null)
	                on:: [[2021-04-01]]
	                tags::