title:: Readwise/Highlights/Optimizing builds with cache management | Doc...
author:: [[docs.docker.com]]
full-title:: Optimizing builds with cache management | Docker Docs
category:: #articles
url:: https://docs.docker.com/build/cache/

![](https://readwise-assets.s3.amazonaws.com/media/uploaded_book_covers/profile_182549/docs2x.ico)

- Suppose you have a `RUN apt-get update && apt-get upgrade -y` step in your Dockerfile to upgrade all the software packages in your Debian-based image to the latest version.
  
  This doesn't mean that the images you build are always up to date. Rebuilding the image on the same host one week later will still get you the same packages as before. The only way to force a rebuild is by making sure that a layer before it has changed, or by clearing the build cache using [`docker builder prune`](https://docs.docker.com/engine/reference/commandline/builder_prune/). ([View Highlight](https://read.readwise.io/read/01hbcx14fkg63ymp9m7j2spm2n)) #Highlight #[[2023-09-28]]