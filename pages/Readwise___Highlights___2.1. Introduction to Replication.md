title:: Readwise/Highlights/2.1. Introduction to Replication
author:: [[couchdb.org]]
full-title:: 2.1. Introduction to Replication
category:: #articles
url:: https://docs.couchdb.org/en/stable/replication/intro.html

- Using a selector provides performance benefits when compared with using a [Filter Functions](https://docs.couchdb.org/en/stable/replication/intro.html/../ddocs/ddocs.html#filterfun). You should use [Selector Objects](https://docs.couchdb.org/en/stable/replication/intro.html/replicator.html#selectorobj) where possible. ([View Highlight](https://read.readwise.io/read/01g9c2evxym0vptkn9n6jpxh9x)) #Highlight #[[2022-08-01]]
- When using replication filters that depend on the document’s content, deleted documents may pose a problem, since the document passed to the filter will not contain any of the document’s content. This can be resolved by adding a `_deleted:true` field to the document instead of using the DELETE HTTP method, paired with the use of a [validate document update](https://docs.couchdb.org/en/stable/replication/intro.html/../ddocs/ddocs.html#vdufun) handler to ensure the fields required for replication filters are always present. Take note, though, that the deleted document will still contain all of its data (including attachments)! ([View Highlight](https://read.readwise.io/read/01g9c2g6kjggkb83yre4h4efg3)) #Highlight #[[2022-08-01]]