title:: Readwise/Highlights/（1-6）最近照着 React 的思路写 Tui...
author:: [[@sxyazi on Twitter]]
full-title:: （1/6）最近照着 React 的思路写 Tui...
category:: #tweets
url:: https://twitter.com/sxyazi/status/1688692887968796672
- （1/6）最近照着 React 的思路写 tui，有点新体会。
  
  ratatui 作为一个 Rust 的纯 UI 库，只负责渲染，状态完全自己管理，这使得状态/逻辑和 UI 分离很容易，以后迁移到其它 UI 库很简单，没有强绑定，no strings attached。 https://t.co/dXcs50DUyF ([View Tweet](https://twitter.com/sxyazi/status/1688692887968796672)) #Highlight #[[2023-08-09]]
- （2/6）状态/逻辑部分可读、可写，UI 渲染时“只读”（这点很重要），这是 React 单向数据流、副作用的概念。不应该在渲染途中改变某个状态，否则会产生副作用（effect）。同时状态的单向流动也很重要，如果状态变化 -> UI更新，就不能反过来 UI更新 -> 状态变化，违反这个就构不成“只读”的条件。 ([View Tweet](https://twitter.com/sxyazi/status/1688692890653044736)) #Highlight #[[2023-08-09]]
- （3/6）因为所有状态在渲染期间“只读”，不存在数据争用，可以很廉价的在多个 thread/coroutine/... 共享，因此很自然 React 就出现了并发渲染（Concurrent rendering），这是水到渠成的。 ([View Tweet](https://twitter.com/sxyazi/status/1688692892896997376)) #Highlight #[[2023-08-09]]
- （4/6）同时由于状态不变，达成部分函数式特征，不管水合还是测试，确定性都很重要，并且（局部）渲染结果也可以很容易被缓存和复用。这个“只读”真的很重要，一旦有了确定性，能做的事就太多了，最简单我能想到的比如渲染可中断，合并多个（不同）渲染，等等。 ([View Tweet](https://twitter.com/sxyazi/status/1688692895010926593)) #Highlight #[[2023-08-09]]
- （5/6）状态变化 emit!(Render) 一下完事，我不太敢想象使用 reactivity 思路开发需要付出多大努力，tui 也并不像 browser 提供各种工具监测每个状态变化，而自己实现一套可能性能反而更差，没法和 browser 长年累月的优化和各种黑魔法媲美。 ([View Tweet](https://twitter.com/sxyazi/status/1688692897217236992)) #Highlight #[[2023-08-09]]
- （6/6）不过好处是 React 这套不强依赖特定平台特性，所有平台适用，且容易移植。有些人写 React 思路转换不过来，可能是因为他们一直都在以“可读可写”、“指针在手，天下我有”、“指哪打哪”的模式开发应用，没有做更细微的状态边界划分，就像一个类全是 public method。（这句太得罪人，先提前谢罪🥹 ([View Tweet](https://twitter.com/sxyazi/status/1688692899339448320)) #Highlight #[[2023-08-09]]