title:: Readwise/Highlights/深度解读 Observation —— SwiftUI 性能提升的新途径
author:: [[fatbobman.com]]
full-title:: 深度解读 Observation —— SwiftUI 性能提升的新途径
category:: #articles
url:: https://www.fatbobman.com/posts/mastering-Observation
tags:: #[[favorite]] #[[inoreader]] #[[博客]] #[[肘子的swift记事本]]

- Observation 框架从两方面改善了可观察对象在 SwiftUI 中的性能表现：
  
  •   通过观察视图中的可观察属性而不是可观察对象，可以减少大量无效的视图更新。
  •   相较于 Combine 的发布者-订阅者模式，Observation 的回调机制更加高效。
  
  然而，由于 Observation 框架暂不支持创建可持续性的观察行为，每次评估后视图都需要重新创建观察操作（ 用时极少 ）。我们需要更多时间来评估这是否会导致新的性能问题。 ([View Highlight](https://read.readwise.io/read/01hd3cpvrffq160zcgkq0j09pa)) #Highlight #[[2023-10-19]]
- 当前开发者通常会使用结构体（ Struct ）来构建应用的状态模型。使用了 Observation 框架后，为了实现属性级别的观察，我们应该改用 Observation 框架创建可观察对象，甚至多层嵌套的对可观察对象来构建状态模型 ([View Highlight](https://read.readwise.io/read/01hd3cq5n8r7wxm97y7egd2gc4)) #Highlight #[[2023-10-19]]