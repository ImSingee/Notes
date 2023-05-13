title:: Readwise/Highlights/12｜页面实战：如何搭建一个电商首页？ - React Native 新架构实战课
author:: [[蒋宏伟]]
full-title:: 12｜页面实战：如何搭建一个电商首页？ - React Native 新架构实战课
category:: #articles
url:: https://time.geekbang.org/column/article/510659

- features：业务组件和其后端接口数据的处理逻辑部分，它们是最容易变动的，而且关联性很强，因此我把它们看作一个功能，有时候代码行数不多我也会偷懒不拆，直接把这组件和组件的后端数据处理逻辑放到同一个文件中。按功能 feature 拆分而不是按组件本身进行拆分的思路，我是从 Redux 的最佳实践中学来的。
  “Structure Files as Feature Folders with Single-File Logic”，相同 feature 的文件，都放在同一个文件夹下。 #Highlight #[[2023-04-24]]
- 整体设计思路是把通用代码放到最外面的 api、components、utils 目录，把纯业务相关的功能代码收拢在 features 目录中 #Highlight #[[2023-04-24]]