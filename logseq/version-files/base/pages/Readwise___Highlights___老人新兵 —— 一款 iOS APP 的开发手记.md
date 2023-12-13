title:: Readwise/Highlights/老人新兵 —— 一款 iOS APP 的开发手记
author:: [[fatbobman.com]]
full-title:: 老人新兵 —— 一款 iOS APP 的开发手记
category:: #articles
url:: https://www.fatbobman.com/posts/healthNote_development_log_2020/
tags:: #[[Swift]]
- 不要用数据库的思路使用 Core Data. ([View Highlight](https://read.readwise.io/read/01hdzrare82pq7jdv31ag33xt9)) #Highlight #[[2023-10-30]]
- RelationShip 是一个好东西，系统会自动维护数据之间的关系。
  
  由于有了 RelationShip，多数情况下无需自己设计主键，这是一个极大的便利，但当需要将数据库手动导出备份时却出现了问题。你无法使用系统内置的主键或 ObjectID。最后还是在需要导出的 Entite 中追加了可标识的属性。平时的程序运行完全不依赖于该属性，在导出 JSON 时则依赖这些属性来标注他们之间的 relationship. ([View Highlight](https://read.readwise.io/read/01hdzrawy0f2p2mbe2s2xkesq5)) #Highlight #[[2023-10-30]]
- @FetchRequest 对数据的动态管理非常好，在 SwiftUI 中数据的任何变化都能动态体现。
  
  @FetchRequest 目前只能在 init 中通过参数动态设置一次（ 无法动态修改 ），如果需要显示不同的谓词或排序结果，只能通过上层视图重新设置。
  
  @FetchRequest 没办法设置 fetchLimit 等更多优化参数。 ([View Highlight](https://read.readwise.io/read/01hdzrb8rj2w7xnj9vqkaev3n0)) #Highlight #[[2023-10-30]]