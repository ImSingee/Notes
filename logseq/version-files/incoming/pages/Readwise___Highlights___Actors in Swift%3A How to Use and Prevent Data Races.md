title:: Readwise/Highlights/Actors in Swift: How to Use and Prevent Data Races
author:: [[Antoine van der Lee]]
full-title:: Actors in Swift: How to Use and Prevent Data Races
category:: #articles
url:: https://www.avanderlee.com/swift/actors/
tags:: #[[favorite]] #[[Swift]]
- Actors are like other Swift types as they can also have initializers, methods, properties, and subscripts, while you can also use them with protocols and generics. Furthermore, unlike structs, an actor requires defining initializers when your defined properties require so manually. Lastly, it’s important to realize actors are reference types. ... Actors have an important difference compared to classes: they do not support inheritance. ... Not supporting inheritance means there’s no need for features like the convenience and required initializers, overriding, class members, or `open` and `final` statements.
  
  However, the biggest difference is defined by the main responsibility of Actors, which is isolating access to data. #Highlight #[[2023-09-21]]
- We can mark our method with the `nonisolated` keyword to tell the Swift compiler our method is not accessing any isolated data ([View Highlight](https://read.readwise.io/read/01havc0219k49hgxd9xsrkfjne)) #Highlight #[[2023-09-21]]