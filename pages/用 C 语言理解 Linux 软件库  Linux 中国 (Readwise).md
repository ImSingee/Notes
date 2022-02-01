retrieved:: [[2022-02-01]], 2:44:47 PM
              author:: [[mp.weixin.qq.com]]
              category:: [[articles]]
              source:: [[instapaper]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)
- ## [[Readwise Highlights]]
	- 每个在 C 语言中的函数都有一个存储类，它决定了函数的范围
	                link:: [https://instapaper.com/read/1415016267/16515840](https://instapaper.com/read/1415016267/16515840)
	                on:: [[2021-05-28]]
	                tags::
	- 存储类 static 将一个函数的的范围限制到函数被定义的文件中
	                link:: [https://instapaper.com/read/1415016267/16515841](https://instapaper.com/read/1415016267/16515841)
	                on:: [[2021-05-28]]
	                tags::
	- 函数默认的存储类是 extern，它给了函数一个全局域
	                link:: [https://instapaper.com/read/1415016267/16515844](https://instapaper.com/read/1415016267/16515844)
	                on:: [[2021-05-28]]
	                tags::
	- 库的逻辑名字
	                link:: [https://instapaper.com/read/1415016267/16515849](https://instapaper.com/read/1415016267/16515849)
	                on:: [[2021-05-28]]
	                tags::
	- 库的物理文件名字
	                link:: [https://instapaper.com/read/1415016267/16515850](https://instapaper.com/read/1415016267/16515850)
	                on:: [[2021-05-28]]
	                tags::
	- 为了保持逻辑名不变的同时允许物理名随着新版本而发生变化
	                link:: [https://instapaper.com/read/1415016267/16515851](https://instapaper.com/read/1415016267/16515851)
	                on:: [[2021-05-28]]
	                tags::
	- 在物理文件名 libshprimes.so.1 中最后的 1 代表是第一个库的版本。尽管逻辑文件名和物理文件名可以是相同的，但是最佳做法是将它们命名为不同的名字。一个客户程序将会通过逻辑名（本例中为 libshprimes.so）来访问库
	                link:: [https://instapaper.com/read/1415016267/16515854](https://instapaper.com/read/1415016267/16515854)
	                on:: [[2021-05-28]]
	                tags::
	- 逻辑名 libshprimes.so 不应该改变，但是符号链接的目标（libshrimes.so.1）可以根据需要进行更新，新的库实现可以是修复了 bug，提高性能等。
	                link:: [https://instapaper.com/read/1415016267/16515858](https://instapaper.com/read/1415016267/16515858)
	                on:: [[2021-05-28]]
	                tags::
	- 链接器是懒惰的，这意味着链接标志的顺序是需要考虑的
	                link:: [https://instapaper.com/read/1415016267/16515863](https://instapaper.com/read/1415016267/16515863)
	                on:: [[2021-05-28]]
	                tags::