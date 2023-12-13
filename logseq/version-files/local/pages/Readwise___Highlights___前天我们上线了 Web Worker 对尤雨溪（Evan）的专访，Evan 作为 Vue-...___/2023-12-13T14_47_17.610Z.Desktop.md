title:: Readwise/Highlights/前天我们上线了 Web Worker 对尤雨溪（Evan）的专访，Evan 作为 Vue-...
author:: [[Kai]]
full-title:: 前天我们上线了 Web Worker 对尤雨溪（Evan）的专访，Evan 作为 Vue/Vite 两个顶流开源项目作者，从自己的视角回答了前端领域讨论度比较高的一些问题，这里以文字形式记录其中的一部分。
category:: #articles
url:: https://twitter.com/real_kai42/status/1732280926233866750

![](https://pbs.twimg.com/profile_images/1706347168393764864/DoRcb3kd_normal.jpg)

- 对于开源项目来说需要解决用户的核心痛点，而不仅仅是自嗨。  
  比如 volar 就真实解决了痛点，几乎所有 vue 用户都在用。不只是你觉得用更牛逼的方式实现了一个东西，就一定会有人用，需求是第一位的。  
  例如做一个框架去挑战 react/vue，如果想要有用户，必须要有一些本质上跟现在方案完全不一样的东西来吸引用户，才能平衡掉在生态和成熟度的劣势。 ([View Highlight](https://read.readwise.io/read/01hhbtprkw1gar7htgvhe3qtn7)) #Highlight #[[2023-12-11]]
- 优秀的贡献者也会从你的角度去思考，会在 pr 中把你应该知道的信息全部写下来，方便你 review 和 merge。 ([View Highlight](https://read.readwise.io/read/01hhbtqctv6je0crxkdjhvptdc)) #Highlight #[[2023-12-11]]
- 你需要去观察一个贡献者的代码是否符合你的直觉，是否跟你的实现方式类似。有些人的脑波会跟你比较合拍，一个 pr 中解决的方式、取舍的方式跟你的思考模式都是一样的。这种就是宝藏贡献者就需要你主动出击，主动让他贡献一些功能，他也会觉得自己感到重视，让他的贡献体验变得更好。 ([View Highlight](https://read.readwise.io/read/01hhbtqmxmss8x1p7pzmgy64e4)) #Highlight #[[2023-12-11]]
- 思考需求而不是技术。 开源/公司/独立开发项目都是这样的，思考这个 产品/feature 能够为用户解决什么问题，而不是背后的技术多么巧妙，或者自己觉得用户会喜欢 xx 功能。  
  这 说/理解 很容易，但因为我们是技术出身，在思考的时候总是会被技术拉回去，因为我们很难拒绝那种优雅流畅的技术实现带来的爽快感，但要时刻提醒自己这不是用户所需要的，也不是用户所关心的。 ([View Highlight](https://read.readwise.io/read/01hhbtr0v7jn2frpb3sg2h07md)) #Highlight #[[2023-12-11]]
- bun 和 deno 作为偏商业化的项目和开源项目的思考行事逻辑是不一样的，需要为投资人和商业故事思考。比开源项目更多的宣发能力也可能带偏了整体氛围。 我记得无论是 deno 还是 bun 出来的时候都是刷屏级的讨论度。  
  当然不是拒绝商业化，还是放到实际使用中去做对比，谈体验。 ([View Highlight](https://read.readwise.io/read/01hhbtswwct3vyqkc67qx7zy3m)) #Highlight #[[2023-12-11]]
- rsc 的另一个核心问题，它默认了你每次请求都需要跑 server rendering，所以你有很多 server component 是跑在 server 端的，每次交互都需要在 server 跑东西，也就是 server compute 的增加，这是 vercel 从来不提的，因为他们从中盈利。  
  因为 vercel 是一个融了很多钱的公司，他也有很多盈利的压力，他自己说自己做的技术决策跟盈利无关他自己都不会信的。如果我为自己公司去挑一个技术栈，用 rsc 要在 vercel 上多付很多钱，这也是一个需要考虑的点。 ([View Highlight](https://read.readwise.io/read/01hhbttthks385jj8cn89eh1r1)) #Highlight #[[2023-12-11]]
- rsc 也不会带来本质上的提升，只在电商这种要求首屏速度、数据多样化和要求数据的 freshness，且每个用户看到的数据是不一样的场景，不是所有人都在做这样的应用。所以我觉得他不是一个银弹。 ([View Highlight](https://read.readwise.io/read/01hhbttzts100wr5gtwhxwa0h1)) #Highlight #[[2023-12-11]]
- next 想要强推一个东西，就需要 react 进行比较大的改动去支持。他们现在耦合度太高了，比如 remix 一直想上 rsc 但考虑到 next 和 rsc 的 耦合太深了，对他们就很有风险 ([View Highlight](https://read.readwise.io/read/01hhbtvp9rnrz8rk0c5vdazjwx)) #Highlight #[[2023-12-11]]
- llm 对独创性没那么高的任务还可以，但对需要创造性、或者需要高层次的设计和精炼的任务上还是一个很粗糙的阶段 ([View Highlight](https://read.readwise.io/read/01hhbtw94sbxq4z7c79ntmzqfg)) #Highlight #[[2023-12-11]]