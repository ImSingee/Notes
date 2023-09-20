title:: Readwise/Highlights/ObservableObject 研究——想说爱你不容易 | 肘子的Swift记事本
author:: [[fatbobman.com]]
full-title:: ObservableObject 研究——想说爱你不容易 | 肘子的Swift记事本
category:: #articles
url:: https://www.fatbobman.com/posts/observableObject-study/
- •   将 app 当作一个状态机，状态决定用户界面。
  
  •   这些状态都保存在一个 Store 对象中，被称为 State。
  
  •   View 不能直接操作 State，而只能通过发送 Action 的方式，间接改变存储在 Store 中的 State。
  
  •   Reducer 接受原有的 State 和发送过来的 Action，生成新的 State。
  
  •   用新的 State 替换 Store 中原有的状态，并用新状态来驱动更新界面。 ([View Highlight](https://read.readwise.io/read/01harkn3qars91nc0jzar6vwpp)) #Highlight #[[2023-09-20]]