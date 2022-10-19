title:: Readwise/Highlights/13｜Form：Hooks 给 Form 处理带来了哪些新变化？ - React Hooks 核心原理与实战
author:: [[王沛]]
full-title:: 13｜Form：Hooks 给 Form 处理带来了哪些新变化？ - React Hooks 核心原理与实战
category:: #articles
url:: https://time.geekbang.org/column/article/387824

- React 统一了表单组件的 onChange 事件，这样的话，用户不管输入什么字符，都会触发 onChange 事件。而标准的 input 的 onchange 事件，则只有当输入框失去焦点时才会触发。React 的这种 onChange 的机制，其实让我们对表单组件有了更灵活的控制。 #Highlight #[[2022-09-23]]
- Formik 将所有的表单状态都，通过 render props 的回调函数传递给了表单的 UI 展现层。这样，你就可以根据这些状态进行 UI 的渲染。当然，在 Hooks 出现之后，Formik 也提供了 Hook 的 API 去实现表单逻辑。 #Highlight #[[2022-09-23]]
- Formik 只提供了表单状态逻辑的重用，并没有限制使用何种 UI 库，这就意味着 Formik 在提供灵活性的同时，也意味着你要自己管理如何进行 UI 布局以及错误信息的展示 #Highlight #[[2022-09-23]]
- 非受控组件，就是表单元素的值不是由父组件决定的，而是完全内部的状态。联系第 8 讲提到的唯一数据源的原则，一般我们就不会再用额外的 state 去保存某个组件的值。而是在需要使用的时候，直接从这个组件获取值 #Highlight #[[2022-09-23]]