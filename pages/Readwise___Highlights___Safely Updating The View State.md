title:: Readwise/Highlights/Safely Updating The View State
author:: [[javier]]
full-title:: Safely Updating The View State
category:: #articles
url:: https://swiftui-lab.com/state-changes/
tags:: #[[Swift]]

- SwiftUI is wise enough to know the body does not need to be re-computed every time, only when the state really changed. That means that unless you set a different value in the state, the view will not get invalidated. In the case above: only when the cardinal direction is different it will request a new body. ([View Highlight](https://read.readwise.io/read/01he1qy7qqktdfa5m3cavd244y)) #Highlight #[[2023-10-31]]