title:: Readwise/Highlights/Anchor Links and How to Make Them Awesome
author:: [[codersblock.com]]
full-title:: Anchor Links and How to Make Them Awesome
category:: #articles
url:: https://codersblock.com/blog/anchor-links-and-how-to-make-them-awesome/
tags:: #[[css]] #[[favorite]] #[[go inbox]] #[[inoreader]] #[[read]] #[[sidebar]]  
![](https://codersblock.com/apple-touch-icon.png)
Anchor links (also called jump links) are an easy way to provide in-page navigation. For example, a table of contents could use anchor links to take readers straight to various sections in a page. They’re super easy to set up, but sprinkle a little CSS on top and you can really make them shine.

- Our anchor links so far have scrolled the page anchor to the very top edge of the viewport. Wouldn’t it be nice if there was a little breathing room there? We can make that happen by setting `scroll-margin-top` on the page anchor. ([View Highlight](https://read.readwise.io/read/01hzp7f27eghn5m5g67k6a4wwr)) #Highlight #[[2024-06-06]]
- We’ve used `scroll-margin-top` before, but in Chrome and Edge, it won’t work here. The scroll margin won’t extend outside of the nested scroll container. ([View Highlight](https://read.readwise.io/read/01hzp7h35k42zg6behchvf0h4x)) #Highlight #[[2024-06-06]]
- •   `scroll-margin` is used on the page anchor.
  •   `scroll-padding` is used on the scroll container. ([View Highlight](https://read.readwise.io/read/01hzp7haqb97hnkndzzt3ws9dd)) #Highlight #[[2024-06-06]]