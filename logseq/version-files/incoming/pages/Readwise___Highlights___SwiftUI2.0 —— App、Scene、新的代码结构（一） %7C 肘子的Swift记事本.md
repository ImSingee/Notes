title:: Readwise/Highlights/SwiftUI2.0 —— App、Scene、新的代码结构（一） | 肘子的Swift记事本
author:: [[fatbobman.com]]
full-title:: SwiftUI2.0 —— App、Scene、新的代码结构（一） | 肘子的Swift记事本
category:: #articles
url:: https://www.fatbobman.com/posts/swiftui2-new-feature-1/
tags:: #[[favorite]] #[[swift]] #[[Swift]] #[[肘子的swift记事本]]
- App
  
  SwiftUI2.0 提供的全新协议。通过声明一个符合 App 协议的结构来创建一个程序，并通过计算属性 body 来实现程序的内容。
  
  •   通过@main(swift5.3 新特性）设定程序的入口，每个项目只能有一个进入点
  •   管理整个 app 的生命周期
  
  •   在这个作用域下声明的常量、变量其生命周期与整个 app 是完全一致的。
  
  Scene
  
  场景是视图（View）层次结构的容器。通过在 App 实例的 body 中组合一个或多个符合 Scene 协议的实例来呈现具体程序。
  
  •   生命周期由系统管理
  •   系统会根据运行平台的不同而调整场景的展示行为（比如相同的代码在 iOS 和 macOS 下的呈现不同，或者某些场景仅能运行于特定的平台）
  •   SwiftUI2.0 提供了几个预置的场景，用户也可以自己编写符合 Scene 协议的场景。上述代码中便是使用的一个预置场景 WindowGroup
  
  通过 App 和 Scene 的加入，绝不是仅仅减少代码量这么简单。通过这个明确的层级设定，我们可以更好的掌握在不同作用域下各个部分的生命周期、更精准数据传递、以及更便利的多平台代码共享。本文后面会用具体代码来逐个阐述。
  
  *App 和 Scene 都是通过各自的 functionBuilder 来解析的，也就是说，新的模板从程序的入口开始便是使用 DSL 来描述的。* ([View Highlight](https://read.readwise.io/read/01hb86shre9475wtgkakhh8mz5)) #Highlight #[[2023-09-26]]
- 在 iOS 系统下，通过使用@UIApplicationDelegateAdaptor 可以方便的实现之前 AppDelegate.swfit 中提供的功能 ([View Highlight](https://read.readwise.io/read/01hb86szpssnhjwbpr8n8q498g)) #Highlight #[[2023-09-26]]
- •   **WindowGroup**
  
  最常用的场景，可以呈现一组结构相同的窗口。使用该场景，我们无需在代码上做修改，只需要在项目中设定是否支持多窗口，系统将会按照运行平台的特性自动管理。
  
  在 iOS 中，只能呈现一个运行窗口。
  
  在 PadOS 中（如打开多窗口支持），最多可以打开两个运行窗口，可以分屏显示，也可以全屏独立显示。
  
  在 macOS 中，可以打开多个窗口，并通过程序菜单中的窗口菜单来进行多窗口管理。 ([View Highlight](https://read.readwise.io/read/01hb86w6ct8zwta26vgjkm75se)) #Highlight #[[2023-09-26]]
- 如果在一个 WindowGroup 里加入多个 View, 呈现状态有点类似 VStack。
  
  在一个 Scene 中加入多个 WindowGroup，只有最前面的可以被显示。 ([View Highlight](https://read.readwise.io/read/01hb86wptq5s2mkm5sevd33qbz)) #Highlight #[[2023-09-26]]