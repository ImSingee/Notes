title:: Readwise/Highlights/I've Been Diving Into Th...
author:: [[@penberg on Twitter]]
full-title:: I've Been Diving Into Th...
category:: #tweets
url:: https://twitter.com/penberg/status/1695681909227913448
- I've been diving into the SQLite read path and on-disk format recently. @benbjohnson's blog post (https://t.co/0sE9x4f2Ik) is great starting point, but it doesn't cover some topics that are important to understand what happens when you read from SQLite database file.
  
  🧵 1/ ([View Tweet](https://twitter.com/penberg/status/1695681909227913448)) #Highlight #[[2023-08-28]]
- SQLite stores all the data in a single database file, which consists of N fixed-size pages (e.g. 4 KiB). The first page is special because the first 100 bytes are dedicated for the database header that, for example, contains the page size used. 2/ 
  
  ![](https://pbs.twimg.com/media/F4hDkdSWwAA2SZt.jpg) ([View Tweet](https://twitter.com/penberg/status/1695681911119655178)) #Highlight #[[2023-08-28]]
- The first page also always contains the B-Tree for the "sqlite_schema" table, which describes the schema of the database file (tables and indexes) and the root BTree pages of the tables. 3/ ([View Tweet](https://twitter.com/penberg/status/1695681913703354466)) #Highlight #[[2023-08-28]]
- If you are performing a query such as `SELECT username FROM users`, the first thing you need to do is parse the database file header to determine the page size, then read the "sqlite_schema" table to discover the root page of the `users` table. 4/ ([View Tweet](https://twitter.com/penberg/status/1695681915502637134)) #Highlight #[[2023-08-28]]
- And now we can finally start to read the actual table BTree. SQLite has few different types of pages that vary in their representation. However, at high-level each page has a header, cell pointer array, unallocated space, and cell content area. 5/ 
  
  ![](https://pbs.twimg.com/media/F4hEbqZXcAEguhl.jpg) ([View Tweet](https://twitter.com/penberg/status/1695681917151072390)) #Highlight #[[2023-08-28]]
- The cell pointer array is an array of pointers within the page to the cell content area, which contains some payload. The payload is in the record format, which Ben's blog post goes into plenty of detail. These are essentially the rows your `SELECT` query returns! 6/ ([View Tweet](https://twitter.com/penberg/status/1695681919277572377)) #Highlight #[[2023-08-28]]
- So that's the on-disk format, but what about query execution? SQLite has an in-memory page cache (a buffer pool) to reduce I/O so when it traverses the B-Tree, it first checks if the page is already in the page cache. 7/ ([View Tweet](https://twitter.com/penberg/status/1695681920992964889)) #Highlight #[[2023-08-28]]
- The page cache keeps pages in the on-disk format. When you are retrieving a column, the SQLite virtual machine (VDBE) that executes the statement translates the serialized on-disk format into an in-memory format that your CPU works with. 8/ ([View Tweet](https://twitter.com/penberg/status/1695681922725277784)) #Highlight #[[2023-08-28]]
- That's the SQLite read path in nutshell! 9/9 ([View Tweet](https://twitter.com/penberg/status/1695681924524613688)) #Highlight #[[2023-08-28]]