title:: Readwise/Highlights/Debugging SwiftUI Views: What Caused That Cha...
author:: [[Antoine van der Lee]]
full-title:: Debugging SwiftUI Views: What Caused That Change? - SwiftLee --- 调试 SwiftUI 视图：是什么导致了这种变化？- SwiftLee
category:: #articles
url:: https://www.avanderlee.com/swiftui/debugging-swiftui-views/

![](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_182549/imagegenerator_iB2dNJV.php)
- Swift provides us with a private static method `Self._printChanges()` that prints out the trigger of a redraw. We can use it by setting a breakpoint in our SwiftUI body and typing `po Self._printChanges()` inside the console ([View Highlight](https://read.readwise.io/read/01haypg1v47gc6yc33v6j1k7ht)) #Highlight #[[2023-09-22]]