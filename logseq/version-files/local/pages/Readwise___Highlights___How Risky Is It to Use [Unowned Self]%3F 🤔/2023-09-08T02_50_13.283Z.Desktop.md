title:: Readwise/Highlights/How Risky Is It to Use [Unowned Self]? 🤔
author:: [[Vincent Pradeilles]]
full-title:: How Risky Is It to Use [Unowned Self]? 🤔
category:: #articles
url:: https://www.swiftwithvincent.com/newsletter/how-risky-is-it-to-use-unowned-self

- > Like a `**weak**` reference, an `**unowned**` reference doesn’t keep a strong hold on the instance it refers to.
  > 
  > Unlike a `**weak**` reference, an `**unowned**` reference is expected to always have a value. As a result, marking a value as `**unowned**` doesn’t make it optional, and ARC never sets an `**unowned**` reference’s value to `**nil**`. ([View Highlight](https://read.readwise.io/read/01h84nkjrj4n5sqwwf7vjv4n3q)) #Highlight #[[2023-08-18]]