title:: Readwise/Highlights/Containing Blocks • CSS for JavaScript Developers
author:: [[courses.joshwcomeau.com]]
full-title:: Containing Blocks • CSS for JavaScript Developers
category:: #articles
url:: https://courses.joshwcomeau.com/css-for-js/02-rendering-logic-2/04-containing-blocks

- When we set the position of an element using top / left / right / bottom, we're positioning the element based on the element's containing block. #Highlight #[[2022-07-01]]
- Absolute elements can only be contained by other elements using Positioned layout. #Highlight #[[2022-07-01]]
- the absolute box ignores the padding of the containing block. It sits right up against the border, even though each of these boxes has 16px of padding.
  
  The way to think about this: padding is used in Flow layout calculations, and absolute elements are taken out-of-flow. Those rules don't apply. #Highlight #[[2022-07-01]]