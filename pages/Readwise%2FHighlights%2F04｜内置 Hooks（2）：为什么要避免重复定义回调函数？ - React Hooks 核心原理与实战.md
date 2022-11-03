title:: Readwise/Highlights/04｜内置 Hooks（2）：为什么要避免重复定义回调函数？ - React Hooks 核心原理与实战
author:: [[王沛]]
full-title:: 04｜内置 Hooks（2）：为什么要避免重复定义回调函数？ - React Hooks 核心原理与实战
category:: #articles
url:: https://time.geekbang.org/column/article/380210

- 在 React 的开发中，除了像 Theme、Language 等一目了然的需要全局设置的变量外，我们很少会使用 Context 来做太多数据的共享。需要再三强调的是，Context 更多的是提供了一个强大的机制，让 React 应用具备定义全局的响应式数据的能力。 #Highlight #[[2022-09-22]]
- 当这个 Context 的数据发生变化时，使用这个数据的组件就能够自动刷新。 #Highlight #[[2022-09-22]]
- 使用 useRef 保存的数据一般是和 UI 的渲染无关的，因此当 ref 的值发生变化时，是不会触发组件的重新渲染的，这也是 useRef 区别于 useState 的地方 #Highlight #[[2022-09-22]]
- 我们可以把 useRef 看作是在函数组件之外创建的一个容器空间。在这个容器上，我们可以通过唯一的 current 属设置一个值，从而在函数组件的多次渲染之间共享这个值。 #Highlight #[[2022-09-22]]
- 如果某个数据是通过其它数据计算得到的，那么只有当用到的数据，也就是依赖的数据发生变化的时候，才应该需要重新计算。 #Highlight #[[2022-09-22]]
- useCallback 缓存的是一个函数，而 useMemo 缓存的是计算的结果。 #Highlight #[[2022-09-22]]