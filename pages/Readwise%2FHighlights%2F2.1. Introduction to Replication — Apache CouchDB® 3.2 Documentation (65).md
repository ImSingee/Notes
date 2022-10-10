title:: Readwise/Highlights/2.1. Introduction to Replication — Apache CouchDB® 3.2 Documentation (65)
author:: [[Changes Feeds]]
full-title:: 2.1. Introduction to Replication — Apache CouchDB® 3.2 Documentation
category:: #articles
url:: https://docs.couchdb.org/en/stable/replication/intro.html

- One replication task will only transfer changes in one direction. To achieve master-master replication, it is possible to set up two replication tasks in opposite direction. When a change is replicated from database A to B by the first task, the second task from B to A will discover that the new change on B already exists in A and will wait for further changes. ([View Highlight](https://read.readwise.io/read/01g9c2chsbmxfq5ad31k1j9fz1)) #Highlight #[[2022-08-01]]