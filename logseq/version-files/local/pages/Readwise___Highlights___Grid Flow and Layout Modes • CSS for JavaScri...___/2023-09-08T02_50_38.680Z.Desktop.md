title:: Readwise/Highlights/Grid Flow and Layout Modes • CSS for JavaScri...
author:: [[courses.joshwcomeau.com]]
full-title:: Grid Flow and Layout Modes • CSS for JavaScript Developers
category:: #articles
url:: https://courses.joshwcomeau.com/css-for-js/07-css-grid/04-grid-flow

- We can change the flow direction for implicit grids with the grid-auto-flow property: #Highlight #[[2022-12-12]]
- CSS Grid has rows and columns. The rows are always arranged along the "block" axis. In English and other horizontal languages, this is the vertical axis. Rows are always stacked one on top of the other. Columns are always arranged along the "inline" axis (horizontally) #Highlight #[[2022-12-12]]
- When we change grid-auto-flow from row to column, we're not fundamentally changing the orientation of our grid; everything stays the same, except for the fact that our grid will have multiple columns instead of multiple rows. #Highlight #[[2022-12-12]]
- Grid parents aren't always block-level elements though. For example, we can have our grid parent be an inline element with display: inline-grid (though I have yet to uncover a realistic use case for this). #Highlight #[[2022-12-12]]
- display: inline is a declaration that only makes sense in a Flow context #Highlight #[[2022-12-12]]
- The left property only makes sense within a positioned layout context. #Highlight #[[2022-12-12]]
- An absolutely-positioned child cannot participate in grid layout. As far as the parent grid is concerned, this element doesn't exist. #Highlight #[[2022-12-12]]
- When we say "out of flow", what we really mean is that the element isn't participating in the current layout. An out-of-flow child will ignore all of the rules that would otherwise apply to it. #Highlight #[[2022-12-12]]