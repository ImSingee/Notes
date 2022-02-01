retrieved:: [[2022-02-01]], 2:40:23 PM
              author:: [[time.geekbang.org]]
              category:: [[articles]]
              source:: [[hypothesis]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)
- ## [[Readwise Highlights]]
	- 从服务端断开连接使用的是 kill connection + id 的命令， 一个客户端处于 sleep 状态时，它的连接被服务端主动断开后，这个客户端并不会马上知道。直到客户端在发起下一个请求的时候，才会收到这样的报错“ERROR 2013 (HY000): Lost connection to MySQL server during query”。从数据库端主动断开连接可能是有损的，尤其是有的应用端收到这个错误后，不重新连接，而是直接用这个已经不能用的句柄重试查询。这会导致从应用端看上去，“MySQL 一直没恢复”。
	                link:: [null](null)
	                on:: [[2022-01-24]]
	                tags::