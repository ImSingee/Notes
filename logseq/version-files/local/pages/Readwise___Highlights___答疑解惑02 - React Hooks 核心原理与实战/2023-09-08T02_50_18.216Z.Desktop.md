title:: Readwise/Highlights/答疑解惑02 - React Hooks 核心原理与实战
author:: [[王沛]]
full-title:: 答疑解惑02 - React Hooks 核心原理与实战
category:: #articles
url:: https://time.geekbang.org/column/article/394526

- 合 React.lazy 和 Suspense 可以实现 react-loadable 的功能。但是呢，react-loadabale 提供了更丰富的 API，比如可以设置如果加载事件小于 300 毫秒，就不显示 loading 状态。这在使用 service worker 时可以让用户感知不到按需加载的存在，体验更好。因为有研究表明，如果加载时间本来很短，你却一闪而过一个 loading 状态，会让用户觉得时间很长。另外就是，react-loadable 提供了服务器端渲染的支持，而 React.lazy 是不行的。 #Highlight #[[2022-09-23]]
- “?." 是一个名为 optional chaining 的新语法，是刚刚进入 ECMAScript 的标准。借助于 Babel 我们现在可以放心使用 #Highlight #[[2022-09-23]]