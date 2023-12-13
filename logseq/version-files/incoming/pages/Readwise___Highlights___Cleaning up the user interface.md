title:: Readwise/Highlights/Cleaning up the user interface
author:: [[Paul Hudson]]
full-title:: Cleaning up the user interface
category:: #articles
url:: https://www.hackingwithswift.com/books/ios-swiftui/cleaning-up-the-user-interface
- The last change we're going to make is small, but magical. Take a look at this code again, which shows how many cups of coffee the user has had:
  
    Stepper("\(coffeeAmount) cup(s)", value: $coffeeAmount, in: 1...20)
  
  Writing "cup(s)" works, but it's a bit lazy. Ideally we'd show "1 cup", but "2 cups", "3 cups", and so on – we'd have correct plurals here.
  
  We *could* correct that with a ternary operator like this:
  
    Stepper(coffeeAmount == 1 ? "1 cup" : "\(coffeeAmount) cup(s)", value: $coffeeAmount, in: 1...20)
  
  But SwiftUI has an even better solution: it can handle the pluralization for us! Change your code to this:
  
    Stepper("^[\(coffeeAmount) cup](inflect: true)", value: $coffeeAmount, in: 1...20)
  
  This is odd syntax, I know, but it's actually a specialized form of Markdown, which is a common text-format. This syntax tells SwiftUI that the word "cup" needs to be inflected to match whatever is in the `coffeeAmount` variable, which in this case means it will automatically be converted from "cup" to "cups" as appropriate. ([View Highlight](https://read.readwise.io/read/01hfcq4c1xccrh7nssv8j7msst)) #Highlight #[[2023-11-17]]