title:: Readwise/Highlights/What is navigation? 什么是导航？
author:: [[Documentation]]
full-title:: What is navigation? 什么是导航？
category:: #articles
url:: https://pointfreeco.github.io/swift-composable-architecture/main/documentation/composablearchitecture/whatisnavigation
tags:: #[[swift]] #[[Swift]]  
![](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_182549/developer-og.jpg)
- Most real-world applications will use a mixture of tree-based and stack-based navigation. For example, the root of your application may use stack-based navigation with a `NavigationStack` view, but then each feature inside the stack may use tree-based navigation for showing sheets, popovers, alerts, etc. But, there are pros and cons to each form of navigation, and so it can be important to be aware of their differences when modeling your domains.  
  现实世界中的大多数应用程序都会混合使用树形导航和堆栈导航。例如，应用程序的根节点可能会使用基于堆栈的导航，并使用 `NavigationStack` 视图，但堆栈内的每个功能可能会使用基于树的导航来显示工作表、弹出窗口、警报等。但是，每种导航形式都有利弊，因此在对域进行建模时，一定要注意它们之间的区别。 ([View Highlight](https://read.readwise.io/read/01he4zpjjf708y0en30hb80ra2)) #Highlight #[[2023-11-01]]
- If you modularize the features of your application, then those feature modules will be more self-contained when built with the tools of tree-based navigation. This means that Xcode previews and preview apps built for the feature will be fully functional.  
  如果您将应用程序的功能模块化，那么在使用基于树的导航工具构建时，这些功能模块将更加自成一体。这意味着为该功能构建的 Xcode 预览版和预览版应用程序将功能齐全。 ([View Highlight](https://read.readwise.io/read/01he4zqvextq4y323da6pd8n6r)) #Highlight #[[2023-11-01]]
- Unfortunately it can be cumbersome to express complex or recursive navigation paths using tree-based navigation. For example, in a movie application you can navigate to a movie, then a list of actors in the movies, then to a particular actor, and then to the same movie you started at. This creates a recursive dependency between features that can be difficult to model in Swift data types.  
  遗憾的是，使用基于树的导航来表达复杂或递归的导航路径可能比较麻烦。例如，在电影应用程序中，您可以导航到一部电影，然后是电影中的演员列表，接着是某个演员，然后是您开始导航的同一部电影。这在 Swift 数据类型中很难建模的功能之间创建了递归依赖关系。 ([View Highlight](https://read.readwise.io/read/01he4ztb7ekthvdh2vasyf42b2)) #Highlight #[[2023-11-01]]
- Stack-based navigation is not a concise tool. It makes it possible to expressive navigation paths that are completely non-sensical. For example, even though it only makes sense to navigate to an edit screen from a detail screen, in a stack it would be possible to present the features in the reverse order:  
  基于堆栈的导航不是一种简洁的工具。它使完全不合理的导航路径成为可能。例如，尽管从细节界面导航到编辑界面才是合理的，但在堆栈中却可以以相反的顺序显示功能 ([View Highlight](https://read.readwise.io/read/01he4zt4xnv3qvespq9ds2z4hg)) #Highlight #[[2023-11-01]]