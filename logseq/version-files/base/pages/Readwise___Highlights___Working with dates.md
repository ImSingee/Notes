title:: Readwise/Highlights/Working with dates
author:: [[Paul Hudson]]
full-title:: Working with dates
category:: #articles
url:: https://www.hackingwithswift.com/books/ios-swiftui/working-with-dates
- That might seem easy enough, but do all days have 86,400 seconds? If they did, a lot of people would be out of jobs! Think about daylight savings time: sometimes clocks go forward (losing an hour) and sometimes go backwards (gaining an hour), meaning that we might have 23 or 25 hours in those days. Then there are leap seconds: times that get added to the clocks in order to adjust for the Earth’s slowing rotation.
  
  If you think that’s hard, try running this from your Mac’s terminal: `cal`. This prints a simple calendar for the current month, showing you the days of the week. Now try running `cal 9 1752`, which shows you the calendar for September 1752 – you’ll notice 12 whole days are missing, thanks to the calendar moving from Julian to Gregorian. ([View Highlight](https://read.readwise.io/read/01hf8c6epnq39y9qp9kz7n8bj0)) #Highlight #[[2023-11-15]]
- Swift gives us `Date` for working with dates, and that encapsulates the year, month, date, hour, minute, second, timezone, and more. However, we don’t want to think about most of that – we want to say “give me an 8am wake up time, regardless of what day it is today.”
  
  Swift has a slightly different type for that purpose, called `DateComponents`, which lets us read or write specific parts of a date rather than the whole thing. ([View Highlight](https://read.readwise.io/read/01hf8c8p22r5pyfrsymk44abdv)) #Highlight #[[2023-11-15]]