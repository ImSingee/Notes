title:: Readwise/Highlights/浏览器的执行机制 (35)
author:: [[juejin.cn]]
full-title:: 浏览器的执行机制
category:: #articles
url:: https://juejin.cn/post/6966773253557714980

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
  Node v10以后： 浏览器的行为和Node统一了 ([View Highlight](https://instapaper.com/read/1415373085/16509862)) #Highlight #[[2021-05-27]]