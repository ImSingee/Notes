title:: Readwise/Highlights/32｜Fabric：新渲染器的演进之路 - React Native 新架构实战课
author:: [[蒋宏伟]]
full-title:: 32｜Fabric：新渲染器的演进之路 - React Native 新架构实战课
category:: #articles
url:: https://time.geekbang.org/column/article/625169
- Fiber 节点也分两种，一种是由合成组件生成的 Element 所映射的 Fiber 节点，它没有对应的宿主组件的实例；一种是由宿主组件生成 Element 所映射的 Fiber 节点，它拥有对应的宿主组件实例。 #Highlight #[[2023-04-17]]
- Fiber Tree 是由若干个 Fiber 节点组成的，如果某个 Fiber 节点是通过用于描述宿主视图的 Element 生成的，那么该 Fiber 会对应一个同样的宿主视图。
  Fiber 是 React 16 之后引入的新能力，它使得 React 每次可渲染的颗粒度更小了，由 React 16 之前的一次 render 所有节点，变为了一次 render 时可分批次对节点进行操作。因此，从渲染角度，我们还可以将 Fiber 节点看做每次 render 的最小的渲染单位，让它能 Fabric 渲染器更快更智能。 #Highlight #[[2023-04-17]]