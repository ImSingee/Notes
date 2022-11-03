title:: Readwise/Highlights/11｜事件处理：如何创建自定义事件？ - React Hooks 核心原理与实战
author:: [[王沛]]
full-title:: 11｜事件处理：如何创建自定义事件？ - React Hooks 核心原理与实战
category:: #articles
url:: https://time.geekbang.org/column/article/385964

- Hooks 具备绑定任何数据源的能力 #Highlight #[[2022-09-23]]
- 在浏览器的原生机制中，事件会从被触发的节点往父节点冒泡，然后沿着整个路径一直到根节点，所以根节点其实是可以收到所有的事件的。这也称之为浏览器事件的冒泡模型。 #Highlight #[[2022-09-23]]
- 由于虚拟 DOM 的存在，在 React 中即使绑定一个事件到原生的 DOM 节点，事件也并不是绑定在对应的节点上，而是所有的事件都是绑定在根节点上。然后由 React 统一监听和管理，获取事件后再分发到具体的虚拟 DOM 节点上。
  在 React 17 之前，所有的事件都是绑定在 document 上的，而从 React 17 开始，所有的事件都绑定在整个 App 上的根节点上，这主要是为了以后页面上可能存在多版本 React 的考虑。 #Highlight #[[2022-09-23]]