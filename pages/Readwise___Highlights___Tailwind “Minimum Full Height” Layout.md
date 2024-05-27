title:: Readwise/Highlights/Tailwind “Minimum Full Height” Layout
author:: [[Kyle Shevlin]]
full-title:: Tailwind “Minimum Full Height” Layout
category:: #articles
url:: https://kyleshevlin.com/tailwind-minimum-full-height-layout/
tags:: #[[css]] #[[love]] #[[star]]  
![](https://kyleshevlin.com/images/beard-og-image.jpg)
标题: Tailwind “最小全高度”布局
作者: Kyle Shevlin
领域: kyleshevlin.com
最近我在很多项目中都在使用Tailwind CSS。几乎所有我的布局都是一种“最小全高度”布局的版本，我想快速向你展示如何在Tailwind中实现这一点。
关键点如下：
\- html 元素必须设置高度为 100%
- body 元素必须设置最小高度为 100%
- body 元素必须是一个 Flex 列容器
- main (或者你选择的其他元素) 的 flex-grow 属性为 1

以下是你需要查看的重要标记片段：
```html
<html class="h-full">
  <body class="flex min-h-full flex-col">
    <header></header>
    <main class="grow"></main>
    <footer></footer>
  </body>
</html>
```

百分比高度仅在其父元素具有固定高度时才有效。在这种情况下，由于最顶层父元素设置为浏览器窗口的全高度，我们可以在其直接子元素body元素上使用基于百分比的高度。
由于我们希望body元素能够在具有大量内容时延伸超出浏览器的全高度，因此我们只在其上使用min-h-full。
接下来，通过将body设置为Flex列布局，我们可以在其子元素上使用flex-grow属性，告诉布局引擎：“将这个元素扩展到任何剩余可用空间”。在这种情况下，这个元素是main元素。
因此，通过这个标记，我们的header和footer将占据它们所需的空间，而main元素将占据其余的空间，直到浏览器的全高度，如果内容不足以填充空间，则会继续扩展

- On mobile screens, `h-dvh` will track the full height and adjust if any other UI obstructs the viewport, such as the native navigation and such. So anything pinned to the bottom like our `footer` is, will track along with the viewport resizing as those bits of UI change. ([View Highlight](https://read.readwise.io/read/01hyw01ggh762ed28zat0kfh3v)) #Highlight #[[2024-05-27]]