title:: Readwise/Highlights/onAppear 的调用时机
author:: [[fatbobman.com]]
full-title:: onAppear 的调用时机
category:: #articles
url:: https://www.fatbobman.com/posts/onAppear-call-timing/
tags:: #[[Swift]]

- onAppear 的调用时机是在布局之后、渲染之前 ([View Highlight](https://read.readwise.io/read/01ha77xjx30t5fxnea738jr69m)) #Highlight #[[2023-09-13]]
- •   SwiftUI 首先对视图进行求值（ 由外向内 ）
  •   在全部求值结束后开始进行布局（ 由父视图到子视图 ）
  •   在布局结束后，调用视图对应的 onAppear 闭包（ 顺序不明，不要假定 onAppear 之间的执行顺序 ）
  •   渲染视图 ([View Highlight](https://read.readwise.io/read/01haxfj1mhd4c4prqpmpyhyffw)) #Highlight #[[2023-09-22]]