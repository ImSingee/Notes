retrieved:: [[2022-02-01]], 2:43:47 PM
              author:: [[mp.weixin.qq.com]]
              category:: [[articles]]
              source:: [[hypothesis]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)
- ## [[Readwise Highlights]]
	- ext4 文件的文件操作函数集被设置为 ext4_file_operations（也说就是：file->f_op = ext4_file_operations），从上面代码可以看出，ext4_file_operations 并没有提供 poll 接口。所以，当调用 epoll_ctl 把文件添加到 epoll 中进行监听时，就会返回 Operation not permitted 的错误。
	                link:: [null](null)
	                on:: [[2021-05-27]]
	                tags::