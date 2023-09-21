title:: Readwise/Highlights/RunLoop.main vs DispatchQueue.main: The diffe...
author:: [[Antoine van der Lee]]
full-title:: RunLoop.main vs DispatchQueue.main: The differences explained RunLoop.main 与 DispatchQueue.main：区别说明
category:: #articles
url:: https://www.avanderlee.com/combine/runloop-main-vs-dispatchqueue-main/
tags:: #[[Swift]]  
![](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_182549/imagegenerator.php)
- The most significant difference between RunLoop.main and DispatchQueue.main is that the latter executes directly while the RunLoop might be busy ... In other words: the execution of closures scheduled on the main run loop will be delayed for execution whenever user interaction occurs #Highlight #[[2023-09-21]]
- The RunLoop.main uses several modes and switches to a non-default mode when user interaction occurs. However, RunLoop.main as a Combine scheduler only executes when the default mode is active. In other words, the mode is switched back to default when user interaction ends and the Combine closure executes. ([View Highlight](https://read.readwise.io/read/01havkhyffmwwmef69xh3k01ck)) #Highlight #[[2023-09-21]]
- My advice would be to use the DispatchQueue.main by default as a Combine scheduler when you want to update the user interface. It’s unlikely that you want to wait for user interaction to end before processing new updates to your views.  
  我的建议是，在需要更新用户界面时，默认使用 DispatchQueue.main 作为联合调度程序。在处理视图的新更新之前，您不太可能希望等待用户交互结束。
  
  However, updating your UI while scrolling might affect the frames per second (FPS) and smooth scrolling. It could be that your UI update isn’t as necessary when the user is scrolling. In that case, it might make sense to opt-in to using RunLoop.main as a scheduler.  
  不过，在滚动时更新用户界面可能会影响每秒帧数（FPS）和滚动的流畅性。在用户滚动时，用户界面更新可能没有那么必要。在这种情况下，选择使用 RunLoop.main 作为调度程序可能会比较合理。 ([View Highlight](https://read.readwise.io/read/01havkjndb0zjevbsmcpzn04es)) #Highlight #[[2023-09-21]]