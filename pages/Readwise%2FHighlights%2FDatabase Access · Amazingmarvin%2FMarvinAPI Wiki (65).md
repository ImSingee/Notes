title:: Readwise/Highlights/Database Access · Amazingmarvin/MarvinAPI Wiki (65)
author:: [[Sign up]]
full-title:: Database Access · Amazingmarvin/MarvinAPI Wiki
category:: #articles
url:: https://github.com/amazingmarvin/MarvinAPI/wiki/Database-Access

- When Marvin finds conflicts like v.4 and v.5 above, it applies a simple conflict resolution algorithm to decide what to show within Marvin. Items in Marvin's database have a `fieldUpdates` object. This object is modified each time Marvin edits a field with the current unix timestamp (in milliseconds) when the change was made. Then all of the conflicting documents are merged together with the most recently changed field winning. In the above example Marvin would create a document that's due tomorrow and starred. ([View Highlight](https://read.readwise.io/read/01g9c36qgmah58xqhzfke5nq64)) #Highlight #[[2022-08-01]]