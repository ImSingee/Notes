title:: Readwise/Highlights/一个白学家眼里的 WebAssembly (15)
author:: [[zhuanlan.zhihu.com]]
full-title:: 一个白学家眼里的 WebAssembly
category:: #articles
url:: https://zhuanlan.zhihu.com/p/102692865

- WASM 里的 Assembly 并不意味着真正的汇编码，而只是种新约定的字节码，也是需要解释器运行 ([View Highlight](https://instapaper.com/read/1415666578/16516050)) #Highlight #[[2021-05-28]]
- JS 上了 JIT 后整体性能大致是机器码 1/20 的水平，而 WASM 则可以跑到机器码 1/3 的量级 ([View Highlight](https://instapaper.com/read/1415666578/16516051)) #Highlight #[[2021-05-28]]
- WASM 并不能在所有应用场景都显示出压倒性的性能优势 ([View Highlight](https://instapaper.com/read/1415666578/16516053)) #Highlight #[[2021-05-28]]
- WASM 能保证相同参数下的计算结果和 JS 一致，但 WebGL 则不行 ([View Highlight](https://instapaper.com/read/1415666578/16516076)) #Highlight #[[2021-05-28]]
- 像在 JS 和 WASM 之间的调用终于变快了 这篇文章中，Lin Clark 非常精彩地论述了整个优化过程，最终使得 JS 和 WASM 间的函数调用，比非内联的 JS 函数间调用要快。不过，至于和被 JIT 内联掉的 JS 函数调用相比起来如何，这篇文章就没有提及了。 ([View Highlight](https://instapaper.com/read/1415666578/16516081)) #Highlight #[[2021-05-28]]
- WASM 只有 int 和 float 之流的数据类型，连 string 都没有，因此对于稍复杂一点的对象，都很难手写出 JS 和 WASM 两边各自的结构 ([View Highlight](https://instapaper.com/read/1415666578/16516090)) #Highlight #[[2021-05-28]]