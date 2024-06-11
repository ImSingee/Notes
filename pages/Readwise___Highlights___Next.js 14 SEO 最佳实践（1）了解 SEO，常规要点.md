title:: Readwise/Highlights/Next.js 14 SEO 最佳实践（1）了解 SEO，常规要点
author:: [[山维空间]]
full-title:: Next.js 14 SEO 最佳实践（1）了解 SEO，常规要点
category:: #articles
url:: https://blog.meathill.com/seo/next-js-14-seo-best-practice-1-what-is-seo-and-concepts.html

![](https://blog.meathill.com/wp-content/uploads/2024/02/2.webp)
近日搞 SEO 比较多，本来想写篇“Nuxt3 SEO 最佳实践”，但是列完大纲，发现内容不太够，基本上只需要…

- 确保页面上有合适的 SEO 内容
  
  1.  `<title>`
  2.  `<meta name="description" content="{description}" />`
  3.  `<link ref="canonical" href="{canonical link}" />`
  4.  `<link hreflang="{语言}" href="{其它语言链接}" />`
  5.  使用 og 库添加 OpenGraph 信息
  6.  大量可以被搜索引擎阅读和理解的文本，少用图片
  7.  图片、音频、视频等，要配备 `alt` 等文本信息
  8.  使用 `aria-*` 帮助搜索引擎链接页面
  9.  使用超链接时，使用 `rel` 来告诉搜索引擎链接目标和本页面的关系 ([View Highlight](https://read.readwise.io/read/01j02kxqnfh5805f1k96mza7pg)) #Highlight #[[2024-06-11]]
- •   搜索引擎希望能一次抓取所有内容，这样它才能正确地索引全部内容，以及爬取剩下的内容。
  •   有时候我们基于页面容量，会倾向于把一些内容隐藏起来，等待用户满足特定条件才展开。比如 tab、carousel 等。此时，我们最好使用 CSS 控制显示效果，而不是只输出部分内容。
  •   当然，如果涉及到付费墙、私密信息等，可以不显示所有内容。 ([View Highlight](https://read.readwise.io/read/01j02ky2f2yj9y00p4achepjdg)) #Highlight #[[2024-06-11]]
- 良好的 URL 可以帮助搜索引擎理解我们的内容结构 ([View Highlight](https://read.readwise.io/read/01j02kydcwwygpb4k0afhj4fz6)) #Highlight #[[2024-06-11]]