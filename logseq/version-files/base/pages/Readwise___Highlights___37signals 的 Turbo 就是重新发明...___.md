title:: Readwise/Highlights/37signals 的 Turbo 就是重新发明...
author:: [[@CatChen on Twitter]]
full-title:: 37signals 的 Turbo 就是重新发明...
category:: #tweets
url:: https://twitter.com/CatChen/status/1700759550893367334
- 37signals 的 Turbo 就是重新发明了 Facebook 十多年前的 BigPipe，把 Facebook 只分享了概念没有开源的 BigPipe 以非常轻量级的方式实现了。这其实是好事情，因为 BigPipe 当年是一个大家听到概念后表示膜拜但重来没见识过的东西。那是一个 Ajax 还叫做 Ajax 的年代…… ([View Tweet](https://twitter.com/CatChen/status/1700759550893367334)) #Highlight #[[2023-09-10]]
- BigPipe 的核心原理就是 Turbo 那样子，或者说是 Hotwire 那样子，异步传输的是页面上一个区域的 HTML，HTML 加载进去后再执行 JS 激活交互。那时候的 Facebook 先加载一个页面框框，然后 feed 里面的 story 逐步通过 BigPipe 批量加载，feed 以外其它复杂的区域也会是 BigPipe 加载。 ([View Tweet](https://twitter.com/CatChen/status/1700759553762341286)) #Highlight #[[2023-09-10]]
- BigPipe 的内部实现比 Hotwire 复杂非常多，因为 Facebook 后端设计为能够无缝调用前端。你可以这样理解：前端任何一个模块 export 的函数都可以标记为后端能直接调用，后端渲染 HTML 时就会掉用对应的前端函数激活前端交互。所有调用函数和参数以 JSON 传输到前端，等 HTML 好了之后才真正进行调用。 ([View Tweet](https://twitter.com/CatChen/status/1700759555754566015)) #Highlight #[[2023-09-10]]
- BigPipe 真正 amazing 的地方是，后端不需要知道前端模块的依赖关系！你不需要再 HTML 里面引入你以来的模块或 bundle，你需要调用哪个模块哪个函数就直接写。前后端能够互相配合加载你调用的模块及其依赖的所有模块！而且当时还是按 bundle 加载的，不是每个模块一个 JS 文件。 ([View Tweet](https://twitter.com/CatChen/status/1700759557679763473)) #Highlight #[[2023-09-10]]
- BigPipe 不仅仅自己能梳理好 JS 模块的依赖关系，CSS 模块也会一起处理好。前端会保证，一个区域的 HTML 准备好后必须先等它依赖的所有 CSS 加载好，然后再把 HTML 写进页面，最后 JS 函数调用当然也要等依赖的 JS 都加载好了才能进行。 ([View Tweet](https://twitter.com/CatChen/status/1700759559756026129)) #Highlight #[[2023-09-10]]
- BigPipe 还允许手工把 JS 和 CSS 调用标记为「显示相关」和「显示无关」，后者是非阻塞的，什么时候执行都可以。BigPipe 还允许不同的区域设置不同的优先级，优先级低的区域依赖的 JS 和 CSS 必须先让道给优先级高的区域的依赖。这些功能是多次迭代加上去的，最后复杂到非常难以维护。 ([View Tweet](https://twitter.com/CatChen/status/1700759561731486113)) #Highlight #[[2023-09-10]]
- 这种必须前后端配合的工具，只开源一端没有用。Hotwire 显然没有 GraphQL 那种想要推动社区做多种语言且互相兼容的前后端的志向，现在 Turbo 把前端的信心搞死了，后面就不会再有人关注了。 ([View Tweet](https://twitter.com/CatChen/status/1700759564185223330)) #Highlight #[[2023-09-10]]