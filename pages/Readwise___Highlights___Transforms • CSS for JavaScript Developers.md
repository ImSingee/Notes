title:: Readwise/Highlights/Transforms • CSS for JavaScript Developers
author:: [[courses.joshwcomeau.com]]
full-title:: Transforms • CSS for JavaScript Developers
category:: #articles
url:: https://courses.joshwcomeau.com/css-for-js/08-animations/01-transforms

- We can use translate to shift an item along in either axis: x moves side to side, y moves up and down. Positive values move down and to the right. Negative values move up and to the left.Critically, the item's in-flow position doesn't change. As far as our layout algorithms are concerned, from Flow to Flexbox to Grid, this property has no effect. #Highlight #[[2022-06-25]]
- When we use a percentage value in translate, that percentage refers to the element's own size, instead of the available space in the parent container #Highlight #[[2022-06-25]]
- Scale uses a unitless value that represents a multiple, similar to line-height. scale(2) means that the element should be 2x as big as it would normally be. #Highlight #[[2022-06-25]]
- elements are flattened into a texture. All of these transforms essentially treat our element like a flat image, warping and contorting it as you might in Photoshop. #Highlight #[[2022-06-25]]
- The turn unit represents how many turns the element should make. 1 turn is equal to 360 degrees. #Highlight #[[2022-06-25]]
- Every element has an origin, the anchor that the transform functions execute from. #Highlight #[[2022-06-25]]
- One common gotcha with transforms is that they don't work with inline elements in Flow layout. #Highlight #[[2022-06-25]]