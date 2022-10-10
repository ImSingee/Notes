title:: Readwise/Highlights/ThreadSanitizerAlgorithm · Google/Sanitizers Wiki (65)
author:: [[github.com]]
full-title:: ThreadSanitizerAlgorithm · Google/Sanitizers Wiki
category:: #articles
url:: https://github.com/google/sanitizers/wiki/ThreadSanitizerAlgorithm

- All accesses to Shadow Words are 64-bit atomic loads/stores,
  but otherwise no locking is involved.
  Even if two threads are modifying the same Shadow State at the same time,
  the Shadow State will remain consistent.
  There is tiny probability to miss a data race though. #Highlight #[[2022-07-01]]