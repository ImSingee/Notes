title:: Readwise/Highlights/CSS Flex排版：为什么垂直居中这么难？ - 重学前端
author:: [[程劭非（winter）]]
full-title:: CSS Flex排版：为什么垂直居中这么难？ - 重学前端
category:: #articles
url:: https://time.geekbang.org/column/article/90148

- Flex 布局中有一种特殊的情况，那就是 flex 容器没有被指定主轴尺寸，这个时候，实际上 Flex 属性完全没有用了，所有 Flex 尺寸都可以被当做 0 来处理，Flex 容器的主轴尺寸等于其它所有 flex 项主轴尺寸之和。 #Highlight #[[2023-04-25]]
- 我们把 Flex 延伸的方向称为“主轴”，把跟它垂直的方向称为“交叉轴”。 #Highlight #[[2023-04-25]]
- flex 项如果有 flex 属性，会根据 flex 方向代替宽 / 高属性，形成“填补剩余尺寸”的特性，这是一种典型的“根据外部容器决定内部尺寸”的思路，也是我们最常用的 Windows 和 Apple 窗口系统的设计思路。 #Highlight #[[2023-04-25]]
- CSS 三大经典问题：垂直居中问题，两列等高问题，自适应宽问题 #Highlight #[[2023-04-25]]
- 在早年的 CSS 中，“使盒按照外部尺寸变化”的能力非常弱 #Highlight #[[2023-04-25]]
- 文字排版的思路是“改变文字和盒的相对位置，把它放进特定的版面中”，而软件界面的思路则是“改变盒的大小，使得它们的结构保持固定”。 #Highlight #[[2023-04-25]]