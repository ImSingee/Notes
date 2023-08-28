title:: Readwise/Highlights/3.17 动画基础及进阶 Animations
author:: [[王禹效]]
full-title:: 3.17 动画基础及进阶 Animations
category:: #articles
url:: https://sspai.com/post/81033

![](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_182549/f2a03903-0e1b-2739-c413-e4acd1affa0b.jpg)

- 告知 SwiftUI 系统谁要动有两种方法，分别是： **Implicit 隐式写法和 Explicit 显式写法**。
  
  在英文中，Implicit 可以被理解为间接说明，不明着说；而 Explicit 则指的是明确指出其本源。对于动画来说，其最终效果是被动画修饰的视图 View 作出改变，以此为基础对二者进行区分。视图动画修改器 `.animation()` 是隐式写法，因为其所修饰的位置是最终结果，即视图本身；而 `withAnimation {}` 则是显示写法，即关注于被修饰变量的改变，从而触发动画，即关注动画触发本源的数据改变。
  
  之所以会出现这两个变种，是因为在实际开发过程中，大部分情况下被修改对象都是视图，因此用直接修饰视图修改器 .animation() 写法上更方便些，且能直接指出谁要动，目的十分明了。相对应地，还有一些情况下可能有多个视图被修饰、或触发动画的变量与被修饰视图不在一个层级中，此时视图修改器使用起来过于麻烦，因此更适合直接使用表明变化的显式写法 `withAnimation {}`。 ([View Highlight](https://read.readwise.io/read/01h8x8qte7g65p9qt0dqhbqzdq)) #Highlight #[[2023-08-28]]