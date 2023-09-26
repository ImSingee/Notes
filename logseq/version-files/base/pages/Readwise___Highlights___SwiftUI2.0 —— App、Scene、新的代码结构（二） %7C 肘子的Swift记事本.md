title:: Readwise/Highlights/SwiftUI2.0 —— App、Scene、新的代码结构（二） | 肘子的Swift记事本
author:: [[fatbobman.com]]
full-title:: SwiftUI2.0 —— App、Scene、新的代码结构（二） | 肘子的Swift记事本
category:: #articles
url:: https://www.fatbobman.com/posts/swiftui2-new-feature-2/

- @AppStorage
  
  AppStorage 是苹果官方提供的用于操作 UserDefault 的属性包装器。这个功能在 Swift 提供了 propertyWrapper 特性后，已经有众多的开发者编写了类似的代码。功能上没有任何特别之处，不过名称对应了新的 App 协议，让人更容易了解其可适用的周期。
  
  •   数据可持久化，app 退出后数据仍保留
  •   仅包装了 UserDefault，数据可以 UserDefault 正常读取
  •   可保存的数据类型同 UserDefault，不适合保存复杂类型数据
  •   在 app 的任意 View 层级都可适用，不过在 app 层使用并不起作用（不报错） ([View Highlight](https://read.readwise.io/read/01hb8701f94xhzqkhmmvm9d6sw)) #Highlight #[[2023-09-26]]
- ![propertyWrapperSheet](https://cdn.fatbobman.com/swiftui2-new-feature-2-propertyWrapperSheet.png) ([View Highlight](https://read.readwise.io/read/01hb871n63bahqc30ytq7s2qhj)) #Highlight #[[2023-09-26]]