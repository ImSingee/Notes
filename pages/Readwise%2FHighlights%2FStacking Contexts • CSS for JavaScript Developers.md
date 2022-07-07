title:: Readwise/Highlights/Stacking Contexts • CSS for JavaScript Developers
author:: [[courses.joshwcomeau.com]]
full-title:: Stacking Contexts • CSS for JavaScript Developers
category:: #articles
url:: https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/07-stacking-contexts

- in Flow layout, content is painted separately from the background. #Highlight #[[2022-07-02]]
- positioned elements will always render on top of non-positioned ones. #Highlight #[[2022-07-01]]
- When all siblings are rendered in Flow layout, the DOM order controls how the background elements overlap, but the content will always float to the front. #Highlight #[[2022-07-02]]
- z-index only works with positioned elements*. It will have no effect on an element being rendered in Flow layout. #Highlight #[[2022-07-02]]
- The default value of the z-index property is auto, which is equivalent to the number 0. Therefore, any value greater than 0 can be used to "promote" an element to sit in front of its siblings: #Highlight #[[2022-07-02]]
- z-index values must be integers, and they're allowed to be negative. #Highlight #[[2022-07-02]]