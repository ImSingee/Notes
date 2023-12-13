title:: Readwise/Highlights/How to Limit Access to Internal Data Using Ac...
author:: [[hackingwithswift.com]]
full-title:: How to Limit Access to Internal Data Using Access Control - A Free Swift for Complete Beginners Tutorial
category:: #articles
url:: https://www.hackingwithswift.com/quick-start/beginners/how-to-limit-access-to-internal-data-using-access-control
- Swift provides us with several options, but when you’re learning you’ll only need a handful: 
  
  Use private for “don’t let anything outside the struct use this.”
  Use fileprivate for “don’t let anything outside the current file use this.”
  Use public for “let anyone, anywhere use this.”
  
  There’s one extra option that is sometimes useful for learners, which is this: private(set). This means “let anyone read this property, but only let my methods write it.” #Highlight #[[2023-10-29]]
- If you use private access control for one or more properties, chances are you’ll need to create your own initializer. #Highlight #[[2023-10-29]]