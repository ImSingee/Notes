title:: Readwise/Highlights/03｜内置 Hooks（1）：如何保存组件状态和使用生命周期？ - React Hooks 核心原理与实战
author:: [[王沛]]
full-title:: 03｜内置 Hooks（1）：如何保存组件状态和使用生命周期？ - React Hooks 核心原理与实战
category:: #articles
url:: https://time.geekbang.org/column/article/379299

- Hooks 不能在循环、条件判断或者嵌套函数内执行，而必须是在顶层。同时 Hooks 在组件的多次渲染之间，必须按顺序被执行。 #Highlight #[[2022-09-22]]
- Hooks 的使用规则包括以下两个：只能在函数组件的顶级作用域使用；只能在函数组件或者其他 Hooks 中使用 #Highlight #[[2022-09-22]]
- React 会使用浅比较来对比依赖项是否发生了变化，所以要特别注意数组或者对象类型。如果你是每次创建一个新对象，即使和之前的值是等价的，也会被认为是依赖项发生了变化。这是一个刚开始使用 Hooks 时很容易导致 Bug 的地方。 #Highlight #[[2022-09-22]]
- Hooks 提供了让你监听某个数据变化的能力。这个变化可能会触发组件的刷新，也可能是去创建一个副作用，又或者是刷新一个缓存。那么定义要监听哪些数据变化的机制，其实就是指定 Hooks 的依赖项 #Highlight #[[2022-09-22]]
- useEffect 让我们能够在下面四种时机去执行一个回调函数产生副作用：
  每次 render 后执行：不提供第二个依赖项参数。比如
  useEffect(() => {})。
  仅第一次 render 后执行：提供一个空数组作为依赖项。比如
  useEffect(() => {}, [])。
  第一次以及依赖项发生变化后执行：提供依赖项数组。比如
  useEffect(() => {}, [deps])。
  组件 unmount 后执行：返回一个回调函数。比如
  useEffect() => { return () => {} }, [])。 #Highlight #[[2022-09-22]]
- 从 cookie、localStorage 中读取的值。通常来说，也是每次要用的时候直接去读取，而不是读出来后放到 state 里。 #Highlight #[[2022-09-22]]
- state 是 React 组件非常重要的一个机制，那么什么样的值应该保存在 state 中呢？这是日常开发中需要经常思考的问题。通常来说，我们要遵循的一个原则就是：state 中永远不要保存可以通过计算得到的值。 #Highlight #[[2022-09-22]]