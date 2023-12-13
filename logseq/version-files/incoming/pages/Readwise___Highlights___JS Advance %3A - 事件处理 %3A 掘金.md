title:: Readwise/Highlights/JS Advance : - 事件处理 : 掘金
author:: [[首页]]
full-title:: JS Advance : - 事件处理 : 掘金
category:: #articles
url:: https://juejin.cn/post/7031197843482378247
tags:: #[[coding]] #[[frontend]] #[[inoreader]] #[[newspaper]]
- // addEventListener第三个参数就是用来控制对应的事件是使用冒泡的方式被触发，而是使用捕获的方式被触发 // 默认false --- 使用冒泡方式被触发 // 设置为true的时候，使用捕获的方式被触发 el.addEventListener('click', () => console.log('box被点击了2'), true) ([View Highlight](https://read.readwise.io/read/01hdefywggv12fdz5rc7m3yaze)) #Highlight #[[2023-10-23]]
- // 如果一个元素上被绑定了多个事件响应函数 // 使用stopImmediatePropagation会阻止除当前事件处理函数之外的全部事件处理函数 // 包括绑定在同一个元素上的其它事件处理函数 ([View Highlight](https://read.readwise.io/read/01hdeg0mvy8mqpxp9ht05h47wg)) #Highlight #[[2023-10-23]]
- // 使用Propagation会阻止除当前事件处理函数之外的全部事件处理函数 // 如果一个元素上被绑定了多个事件响应函数 // 这些事件处理函数都会被触发 ([View Highlight](https://read.readwise.io/read/01hdeg1fr76ymwxvxejbwqv4n3)) #Highlight #[[2023-10-23]]