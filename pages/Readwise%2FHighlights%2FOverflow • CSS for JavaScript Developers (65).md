title:: Readwise/Highlights/Overflow • CSS for JavaScript Developers (65)
author:: [[courses.joshwcomeau.com]]
full-title:: Overflow • CSS for JavaScript Developers
category:: #articles
url:: https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/14-overflow

- overflow defaults to visible, which allows an element's content to extend beyond its bounds. #Highlight #[[2022-07-03]]
- overflow: auto is a "have your cake and eat it too" kind of property. It's recommended for most situations where you want a given element to be scrollable. #Highlight #[[2022-07-03]]
- Adding detailed comments when using overflow: hidden is absolutely critical. Otherwise, you'll never remember why you set the property. If you refactor this property away, it won't be immediately obvious that you've broken something #Highlight #[[2022-07-03]]
- Sometimes, we'll want to use overflow-x or overflow-y to clip the overflow in one axis, but not affect the other. Unfortunately, this isn't possible in CSS. #Highlight #[[2022-07-03]]
- Children of a scroll container are essentially locked inside that box. They can't ever spill outside its parent's bounds. It doesn't matter if we only set overflow-x or overflow-y. There's no such thing as a scroll container that only scrolls in one axis. #Highlight #[[2022-07-03]]
- when we set overflow: hidden, what we're actually doing is removing the scrollbars. Essentially, overflow: hidden is an overflow: scroll container without the ability to scroll. #Highlight #[[2022-07-03]]