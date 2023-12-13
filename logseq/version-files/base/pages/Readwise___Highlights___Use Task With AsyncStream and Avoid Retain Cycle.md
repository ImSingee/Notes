title:: Readwise/Highlights/Use Task With AsyncStream and Avoid Retain Cycle
author:: [[Thomas Ricouard]]
full-title:: Use Task With AsyncStream and Avoid Retain Cycle
category:: #articles
url:: https://medium.com/p/4c92dddf30ef
- Task created using the .task modifier in SwiftUI will automatically get cancelled once the view disapear. #Highlight #[[2023-10-19]]
- As it’s async code, we need to wrap it in a Task. As it’s a long runing task, we need to keep a reference to it, as Apple documentation is stating, we’re responsible for cancelling the Task. So it makes sense to keep a reference to it and cancel it int the deinit. #Highlight #[[2023-10-19]]
- The truth is, wether it’s a long running Task or a one shot short running Task (just an await call to an async returning function), the release of owner of the Task will not be done until the Task is finished or cancelled (and so release all owned code). #Highlight #[[2023-10-19]]
- As Task init closure is @escaping, you actually don’t need an explicit self, but it’ll still be captured and retained #Highlight #[[2023-10-19]]