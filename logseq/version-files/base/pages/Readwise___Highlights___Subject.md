title:: Readwise/Highlights/Subject
author:: [[rxjs.dev]]
full-title:: Subject
category:: #articles
url:: https://rxjs.dev/guide/subject

![](https://readwise-assets.s3.amazonaws.com/static/images/article3.5c705a01b476.png)

- An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers. While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subjects are multicast.
  
  A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners. ([View Highlight](https://read.readwise.io/read/01hhe4sp2yh6bdcm1gn8wnc58e)) #Highlight #[[2023-12-12]]