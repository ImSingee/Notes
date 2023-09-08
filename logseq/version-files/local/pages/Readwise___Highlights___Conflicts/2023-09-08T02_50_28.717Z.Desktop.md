title:: Readwise/Highlights/Conflicts
author:: [[pouchdb.com]]
full-title:: Conflicts
category:: #articles
url:: https://pouchdb.com/guides/conflicts.html

- you can present both versions to the user, or resolve the conflict automatically using your preferred conflict resolution strategy: last write wins, first write wins, RCS, etc. #Highlight #[[2022-07-31]]
- To mark a conflict as resolved, all you need to do is remove() the unwanted revisions. #Highlight #[[2022-07-31]]
- If you want to resolve the conflict by creating a new revision, you simply put() a new document on top of the current winner, and make sure that the losing revision is deleted. #Highlight #[[2022-07-31]]
- Another conflict resolution strategy is to design your database so that conflicts are impossible. In practice, this means that you never update or remove existing documents – you only create new documents.
  
  This strategy has been called the "every doc is a delta" strategy. A classic use-case for this would be a checkbook app, where every document is simply an operation that increases or decreases the account balance: #Highlight #[[2022-07-31]]
- Like a diligent accountant, your app can just add new documents when you want to make a change, rather than going back and scrubbing out previous changes #Highlight #[[2022-07-31]]