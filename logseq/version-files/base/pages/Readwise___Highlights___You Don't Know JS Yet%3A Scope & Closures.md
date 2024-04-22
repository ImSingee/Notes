title:: Readwise/Highlights/You Don't Know JS Yet: Scope & Closures
author:: [[Kyle Simpson]]
full-title:: You Don't Know JS Yet: Scope & Closures
category:: #books


![](https://res.weread.qq.com/wrepub/CB_7cGGH2GGJGE76dX6cN_parsecover)
None
- JS通常被归类为解释型脚本语言，因此大多数人认为JS程序在单次自顶向下的处理中进行处理。但事实上，在执行开始之前，JS代码在单独的解析/编译阶段进行解析/编译。在初始解析/编译阶段，根据作用域规则，分析代码作者关于变量、函数和块之间位置的决策。 #Highlight #[[2024-02-07]]
- JS functions are themselves first-class values; they can be assigned and passed around just like numbers or strings. But since these functions hold and access variables, they maintain their original scope no matter where in the program the functions are eventually executed. This is called closure. #Highlight #[[2024-02-07]]
- 通常情况下，真正重要的是程序的结果，而不是程序是如何编写的，或者它是如何/为什么工作的。 #Highlight #[[2024-02-07]]
- 如果你更完全地了解你的代码如何工作，而不是仅仅让它产生所需的结果，那么你在开发工作中将始终更有效率 #Highlight #[[2024-02-07]]
- 在基于浏览器的 JS 应用程序中，您可能会遇到一个令人惊讶的全局行为：具有 id 属性的 DOM 元素会自动创建一个引用它的全局变量。 #Highlight #[[2024-02-09]]
- name实际上是window对象上的一个预定义的getter/setter，它坚持其值是一个字符串值 #Highlight #[[2024-02-09]]
- 是否可以解析程序，然后通过解释AST中表示的操作来执行该程序，而无需首先编译该程序？是的，这是可能的。但这是极不可能的，主要是因为它在性能方面非常低效。 #Highlight #[[2024-02-07]]
- ESM 文件假定是严格模式，不需要在顶部使用“use strict”pragma。没有办法将 ESM 定义为非严格模式 #Highlight #[[2024-02-13]]
- The reason I prefer to take advantage of function hoisting is that it puts the executable code in any scope at the top, and any further declarations (functions) below. This means it’s easier to find the code that will run in any given area, rather than having to scroll and scroll, hoping to find a trailing } marking the end of a scope/function somewhere. #Highlight #[[2024-02-13]]
- 不惜一切代价，避免 eval（..） （至少，eval（..） 创建声明）和 with。同样，这些作弊方法在严格模式下都不可用，所以如果你只使用严格模式（你应该！），那么诱惑就消失了！ #Highlight #[[2024-02-07]]
	- **Note**: 在严格模式下，eval 不会污染外部作用域、with 不可用
- As of ES2020, JS has finally defined a standardized reference to the global scope object, called globalThis. #Highlight #[[2024-02-09]]
- 我们甚至可以尝试定义一个跨环境polyfill，在pre-globalThis JS环境中更安全，例如：
  const theGlobalScopeObject =     (typeof globalThis != "undefined") ? globalThis :     (typeof global != "undefined") ? global :     (typeof window != "undefined") ? window :     (typeof self != "undefined") ? self :     (new Function("return this"))();
  Phew! That’s certainly not ideal, but it works if you find yourself needing a reliable global scope reference. #Highlight #[[2024-02-09]]
- TDZ errors occur because let/const declarations do hoist their declarations to the top of their scopes, but unlike var, they defer the auto-initialization of their variables until the moment in the code’s sequencing where the original declaration appeared. This window of time (hint: temporal), whatever its length, is the TDZ. #Highlight #[[2024-02-11]]