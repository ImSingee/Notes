title:: Readwise/Highlights/Buttons and images
author:: [[Paul Hudson]]
full-title:: Buttons and images
category:: #articles
url:: https://www.hackingwithswift.com/books/ios-swiftui/buttons-and-images
- SwiftUI has a dedicated `Image` type for handling pictures in your apps, and there are three main ways you will create them:
  
  •   `Image("pencil")` will load an image called “Pencil” that you have added to your project.
  •   `Image(decorative: "pencil")` will load the same image, but won’t read it out for users who have enabled the screen reader. This is useful for images that don’t convey additional important information. ([View Highlight](https://read.readwise.io/read/01het38n7jat6hv7q1g2qnnty5)) #Highlight #[[2023-11-09]]
- By default the screen reader will read your image name if it is enabled, so make sure you give your images clear names if you want to avoid confusing the user. Or, if they don’t actually add information that isn’t already elsewhere on the screen, use the `Image(decorative:)` initializer. ([View Highlight](https://read.readwise.io/read/01het391bfm9sqa8hh7sxvcw70)) #Highlight #[[2023-11-09]]