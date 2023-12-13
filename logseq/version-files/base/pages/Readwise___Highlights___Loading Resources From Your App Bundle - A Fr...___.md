title:: Readwise/Highlights/Loading Resources From Your App Bundle - A Fr...
author:: [[hackingwithswift.com]]
full-title:: Loading Resources From Your App Bundle - A Free Hacking With iOS: SwiftUI Edition Tutorial
category:: #articles
url:: https://www.hackingwithswift.com/books/ios-swiftui/loading-resources-from-your-app-bundle

- When we use Image views, SwiftUI knows to look in your app’s asset catalog to find the artwork, and it even automatically adjusts the artwork so it loads the correct picture for the current screen resolution – that’s the @2x and @3x stuff we looked at earlier. #Highlight #[[2023-11-19]]
- When Xcode builds your iOS app, it creates something called a “bundle”. This happens on all of Apple’s platforms, including macOS, and it allows the system to store all the files for a single app in one place – the binary code (the actual compiled Swift stuff we wrote), all the artwork, plus any extra files we need all in one place. #Highlight #[[2023-11-19]]
- What’s inside the URL doesn’t really matter, because iOS uses paths that are impossible to guess – our app lives in its own sandbox, and we shouldn’t try to read outside of it. #Highlight #[[2023-11-19]]