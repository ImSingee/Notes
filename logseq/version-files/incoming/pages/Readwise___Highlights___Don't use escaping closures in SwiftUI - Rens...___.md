title:: Readwise/Highlights/Don't use escaping closures in SwiftUI - Rens...
author:: [[rens breur]]
full-title:: Don't use escaping closures in SwiftUI - Rens Breur
category:: #articles
url:: https://rensbr.eu/blog/swiftui-escaping-closures/
tags:: #[[favorite]] #[[swift]]
- SwiftUI views in runtime are just a collection of the constants and variables they are initialized with, and a reference to their `body`. ([View Highlight](https://read.readwise.io/read/01hcy3cshrtxz6yrp9rfv6hrd8)) #Highlight #[[2023-10-17]]
- if the view uses a model object accessed using the `@StateObject` property wrapper, this model object is not created until the view is displayed either. This is one of the reasons a `StateObject` is initialized [with an autoclosure](https://developer.apple.com/documentation/swiftui/stateobject/init(wrappedvalue:)). ([View Highlight](https://read.readwise.io/read/01hcy3gdsjb28x1x9kwsfkbzva)) #Highlight #[[2023-10-17]]