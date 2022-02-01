retrieved:: [[2022-02-01]], 2:40:24 PM
              author:: [[v2ex.com]]
              category:: [[articles]]
              source:: [[hypothesis]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)
- ## [[Readwise Highlights]]
	- 根据我的经验总结，只需要牢记一些常识就行：
	  1. mysql 的 tps 你就按 5000 算，每秒超过 5000 请求，直接用 myql 肯定不行
	  2. 单机 redis 的 qps 可以到 100k ，把一些数据 /缓存，存到 redis ，能有效提高并发
	  3. 利用消息队列实现削峰，实现生产与消费的解耦
	  4. 保证处理逻辑可以并行，可以扩展，谨慎使用锁
	  5. 尽量将服务做成无状态可扩展的，把状态扔给 redis 或者其他高效的存储
	                link:: [null](null)
	                on:: [[2022-01-25]]
	                tags::