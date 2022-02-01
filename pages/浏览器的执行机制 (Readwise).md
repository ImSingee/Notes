retrieved:: [[2022-02-01]], 2:44:56 PM
              author:: [[juejin.cn]]
              category:: [[articles]]
              source:: [[instapaper]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png)
- ## [[Readwise Highlights]]
	- Node中的事件循环和浏览器中的事件循环有什么区别？
	  
	  宏任务的执行顺序：
	  
	  timers定时器：执行已经安排的 setTimeout 和 setInterval 的回调函数
	  pending callback 待定回调：执行延迟到下一个循环迭代的 I/O 回调
	  idle, prepare: 仅系统内部使用
	  poll: 检索新的 I/O 事件，执行与 I/O 相关的回调
	  check: 执行 setImmediate() 回调函数
	  close callbacks: socket.on('close', () => {})
	  微任务和宏任务在node的执行顺序：
	  
	  Node v10及以前：
	  
	  执行完一个阶段中的所有任务
	  执行nextTick队列里的内容
	  执行完微任务队列的内容
	  Node v10以后： 浏览器的行为和Node统一了
	                link:: [https://instapaper.com/read/1415373085/16509862](https://instapaper.com/read/1415373085/16509862)
	                on:: [[2021-05-27]]
	                tags::