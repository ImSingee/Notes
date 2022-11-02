title:: Readwise/Highlights/18 | 单元测试：自定义 Hooks 应该如何进行单元测试？ - React Hooks 核心原理与实战
author:: [[王沛]]
full-title:: 18 | 单元测试：自定义 Hooks 应该如何进行单元测试？ - React Hooks 核心原理与实战
category:: #articles
url:: https://time.geekbang.org/column/article/391977

- 只有对那些可重用的 Hooks，才需要单独的单元测试。 #Highlight #[[2022-09-23]]
- 有了 @testing-library/react-hooks 这个包，我们就能更加语义化地去创建自定义 Hooks 的单元测试。虽然使用这个包的原理还是通过一个组件去调用 Hooks，但是测试代码中，你就不需要自己创建多余的测试组件了。 #Highlight #[[2022-09-23]]
- 我们使用 了 act 这样一个函数来封装对 Hook 返回值的方法调用。这个其实是 React 提供的一个测试用的函数，用于模拟一个真实的 React 组件的执行步骤，从而保证在 act 的回调函数执行完成后，还会等 React 组件的生命周期都执行完毕，比如 useEffect。这样才能在随后对组件的渲染结果进行验证。 #Highlight #[[2022-09-23]]
- 在单元测试的运行环境中，要想脱离函数组件，单独运行 Hooks 进行单元测试，那是不可行的 #Highlight #[[2022-09-23]]
- jsdom 这样一个 npm 的模块去实现。它可以在 nodejs 环境中提供一个虚拟的浏览器环境，包括了几乎所有的浏览器 API，比如 document, window 等等，从而你的组件可以在内存中运行。 #Highlight #[[2022-09-23]]
- 在默认设置中，Jest 会寻找 src 目录下所有的以 .test.js(ts, jsx, tsx 等） 结尾的文件，以及 tests 文件夹中的文件，并将其作为测试文件。 #Highlight #[[2022-09-23]]
- Jest 是 Facebook 推出的 JavaScript 的单元测试框架，主要特点是开箱即用，零配置就能提供并发测试、测试覆盖率、Mock 工具、断言 API 等功能，非常易于上手。 #Highlight #[[2022-09-23]]
- 通用的 JS 测试框架有 Mocha，Jasmine，Jest 等等；而测试 React 的框架有 Enzyme，Testing Library 等。 #Highlight #[[2022-09-23]]