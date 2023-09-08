title:: Readwise/Highlights/21｜混合应用：如何从零开始集成 React Native？ - React Native...
author:: [[蒋宏伟]]
full-title:: 21｜混合应用：如何从零开始集成 React Native？ - React Native 新架构实战课
category:: #articles
url:: https://time.geekbang.org/column/article/518965

- 一个简单的载体页只需要初始化、加载渲染、生命周期管理、组件注册能力即可 #Highlight #[[2023-04-16]]
- 一个可用于商业上线的载体页，需要提供初始化、加载渲染 React Native 页面、热更新、缓存管理、生命周期管理、Native & JavaScript 通信、错误处理、错误上报、内置基础组件、组件注册等能力。 #Highlight #[[2023-04-16]]
- 但在实际开发中，我们使用 React Native，除了看中它跨平台的优势外，还需要它的热更新能力。并且，为了进行 Bug 调试和分析，需要具备错误处理、上报能力，以及复杂业务中，Native & JavaScript 通信还需要提供通信能力。甚至，根据业务需求，还需要提供一些通用内置组件、组件注册能力，等等。 #Highlight #[[2023-04-16]]
- 在启动性能上，Hermes 比 JSC 更快。Hermes 采用的是 AOT 提前编译的方案，它支持字节码文件，相比于 JSC，Hermes 不用先将 JavaScript 文本编译为字节码，节约了编译字节码的耗时，自然启动性能更好。
  在运行性能上，JSC 比 Herems 更快。JSC 使用的是 JIT 即时编译方案，该方案支持动态缓存热点代码，因此运行性能上更快。
  但整体而言，由于 Hermes 引擎是专门为移动端定制的，在引擎大小、启动速度、运行内存、通信性能等方面都优于 JSC。如果你的是新项目，没有历史负担，建议你直接使用 Hermes 引擎。如果是之前已使用 JSC 引擎上线的项目，可以往 Hermes 引擎进行升级。 #Highlight #[[2023-04-16]]