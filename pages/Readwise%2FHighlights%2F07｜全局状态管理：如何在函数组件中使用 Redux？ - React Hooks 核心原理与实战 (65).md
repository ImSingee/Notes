title:: Readwise/Highlights/07｜全局状态管理：如何在函数组件中使用 Redux？ - React Hooks 核心原理与实战 (65)
author:: [[王沛]]
full-title:: 07｜全局状态管理：如何在函数组件中使用 Redux？ - React Hooks 核心原理与实战
category:: #articles
url:: https://time.geekbang.org/column/article/382459

- 异步 Action 并不是一个具体的概念，而可以把它看作是 Redux 的一个使用模式。它通过组合使用同步 Action ，在没有引入新概念的同时，用一致的方式提供了处理异步逻辑的方案。 #Highlight #[[2022-09-22]]
- Redux 中的 Action 不仅仅可以是一个 Object，它可以是任何东西，也可以是一个函数。利用这个机制，Redux 提供了 redux-thunk 这样一个中间件，它如果发现接受到的 action 是一个函数，那么就不会传递给 Reducer，而是执行这个函数，并把 dispatch 作为参数传给这个函数，从而在这个函数中你可以自由决定何时，如何发送 Action #Highlight #[[2022-09-22]]
- Redux 中提供了 middleware 这样一个机制，让我们可以巧妙地实现所谓异步 Action 的概念。
  简单来说，middleware 可以让你提供一个拦截器在 reducer 处理 action 之前被调用。在这个拦截器中，你可以自由处理获得的 action。无论是把这个 action 直接传递到 reducer，或者构建新的 action 发送到 reducer，都是可以的。 #Highlight #[[2022-09-22]]
- 在 Redux 中，处理异步逻辑也常常被称为异步 Action #Highlight #[[2022-09-22]]
- 在函数组件中使用 Redux 就非常简单了：利用 react-redux 提供的 useSelector 和 useDispatch 这两个 Hooks #Highlight #[[2022-09-22]]
- 在 react-redux 的实现中，为了确保需要绑定的组件能够访问到全局唯一的 Redux Store，利用了 React 的 Context 机制去存放 Store 的信息。通常我们会将这个 Context 作为整个 React 应用程序的根节点 #Highlight #[[2022-09-22]]
- 对于复杂的数据结构，也有一些第三方的库可以帮助操作不可变数据，比如 Immutable、Immer 等等 #Highlight #[[2022-09-22]]
- 在 Reducer 中，我们每次都必须返回一个新的对象，确保不可变数据（Immutable）的原则 #Highlight #[[2022-09-22]]
- Reducer 则是一个函数，接收 Action 和 State 并作为参数，通过计算得到新的 Store #Highlight #[[2022-09-22]]