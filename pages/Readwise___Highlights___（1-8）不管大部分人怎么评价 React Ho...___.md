title:: Readwise/Highlights/（1-8）不管大部分人怎么评价 React Ho...
author:: [[@isukkaw on Twitter]]
full-title:: （1/8）不管大部分人怎么评价 React Ho...
category:: #tweets
url:: https://twitter.com/isukkaw/status/1688077064359079936

- （1/8）不管大部分人怎么评价 React Hooks、React Concurrent Rendering、RSC 的心智模型多么复杂和难以理解，从我过去五个月的经历来看，Vue 的 Everyday DX 是远远不如 React 的 —— 不至于 Bad，但是非常 Annoying。开个串聊一下（千字长文预警） ([View Tweet](https://twitter.com/isukkaw/status/1688077064359079936)) #Highlight #[[2023-08-06]]
- （2/8）楔子：五个月前，公司让我接手维护一个 Vue 3 based 的项目。接手前，公司给了我一周时间学习 Vue 3。在花了一周从零开始学习 Vue 3 后，我至少已经学到「在组件生命周期外的 module level 声明的 ref 虽然也可以在多个组件中共享状态，但是在 SSR 中是 thread unsafe 的」这一步了。（待续） ([View Tweet](https://twitter.com/isukkaw/status/1688077206176899072)) #Highlight #[[2023-08-06]]
- （3/8）首先就是 VSCode 上一塌糊涂的 Vue TypeScript 支持。自从接手这个 Vue 项目以来，我每天需要 Command + P 然后 Reload Window 三次以上。每当我 import 完一个 module，发现 Intellisense 不能自动提示和补全导出时，我就知道需要 Reload VSCode Window 了。（待续） ([View Tweet](https://twitter.com/isukkaw/status/1688077318882050048)) #Highlight #[[2023-08-06]]
- （4/8）我试过，仅 Reload TypeScript LSP 或者仅 Reload Volar.js 是不够的，只有 Reload Window 才能恢复自动补全。
  按照写 Vue 3 没群友们的说法，他们每天都得重启 VSCode 八次以上，我只 Reload VSCode  Window 三次，已经算非常少的了。（待续） ([View Tweet](https://twitter.com/isukkaw/status/1688077464571092993)) #Highlight #[[2023-08-06]]
- （5/8）然后就是 Vue SFC 的 HMR 体验。和 React Fast Refresh 会尽可能保留组件状态不同，Vue 的 HMR 在绝大部分情况下（例如更改 <script> 内容）都需要 re-mount 组件，因此在组件里声明的所有状态都会丢失。过去一周我在调试项目中一个复杂的分页表单组件时，这个「特性」被无限放大了。（待续） ([View Tweet](https://twitter.com/isukkaw/status/1688077545336655872)) #Highlight #[[2023-08-06]]
- （6/8）为了调试复现这个复杂分页表单组件的问题，我填了一堆信息，才走到有问题的状态。改一下代码，Command + S 以后，整个表单组件的状态都丢失了，整个表单都需要我从头填。当然，就连 HMR 这件事本身，Vite + Vue 也做不好（待续） ([View Tweet](https://twitter.com/isukkaw/status/1688077598918860800)) #Highlight #[[2023-08-06]]
- （7/8）从我接手这个 Vue 项目开始，每三次 HMR 一定发生一次「can not access variable before initialized」。一旦撞了 TDZ（给不懂的人解释一下。TDZ 是 Temporal Dead Zone 的缩写），Vite 的 HMR 就挂掉、不能 recovery 了，必须 Command + R 刷新页面。（待续） ([View Tweet](https://twitter.com/isukkaw/status/1688077668145872896)) #Highlight #[[2023-08-06]]
- （8/8）感谢 Vite 和 Vite Vue Plugin，每次刷新页面都要浪费我 10 秒时间。
  我花了一天研究编译产物，发现 Vite HMR 后会把 const xxx = 放在 call site 的后面、而不是前面，不知道这个锅该给 Vite Vue Plugin 还是 Vue SFC Compiler，反正不能甩给 Vite，Vite + React Fresh 跑得就好好的。（EOF） ([View Tweet](https://twitter.com/isukkaw/status/1688077877642977281)) #Highlight #[[2023-08-06]]
- sed /没群友/们群友/ -i ([View Tweet](https://twitter.com/isukkaw/status/1688080675008921601)) #Highlight #[[2023-08-06]]
- 尾声：过去五个月里，我一直在尝试找出 Vite Vue HMR 撞 TDZ 的最小复现、好去开 issue，但是最小复现还是没找到。 ([View Tweet](https://twitter.com/isukkaw/status/1688084171577815040)) #Highlight #[[2023-08-06]]