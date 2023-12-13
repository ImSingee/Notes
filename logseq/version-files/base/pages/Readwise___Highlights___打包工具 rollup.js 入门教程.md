title:: Readwise/Highlights/打包工具 rollup.js 入门教程
author:: [[作者： 阮一峰]]
full-title:: 打包工具 rollup.js 入门教程
category:: #articles
url:: http://www.ruanyifeng.com/blog/2022/05/rollup.html
tags:: #[[inoreader]] #[[star]] #[[博客]]
- rollup.js 的开发本意，是打造一款简单易用的 ES 模块打包工具，不必配置，直接使用。这一点，它确实做到了。
  
  后来经过不断发展，它也可以打包 CommonJS 模块。但是，这时需要经过复杂配置，实际上并没有比 Webpack 简单多少。
  
  因此建议，**只把 rollup.js 用于打包 ES 模块**，这样才能充分发挥它的优势。下面你会看到，那是多么简单的一件事。
  
  如果你的项目使用 CommonJS 模块，不推荐使用 rollup.js，优势不大。 ([View Highlight](https://read.readwise.io/read/01hf1thwk9vh4gv1ja8hjdtqd0)) #Highlight #[[2023-11-12]]