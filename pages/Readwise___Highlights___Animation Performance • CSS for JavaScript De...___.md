title:: Readwise/Highlights/Animation Performance • CSS for JavaScript De...
author:: [[courses.joshwcomeau.com]]
full-title:: Animation Performance • CSS for JavaScript Developers
category:: #articles
url:: https://courses.joshwcomeau.com/css-for-js/08-animations/08-animation-performance
- it's best to try and avoid animating any properties that affect 
        
          layout
          (布局)
        
        : this is things like width, height, padding, margin. #Highlight #[[2022-12-29]]
- will-change is a property that allows us to hint to the browser that we're going to animate the selected element, and that it should optimize for this case.In practice, what this means is that the browser will let the GPU handle this element all the time. No more handing-off between CPU and GPU, no more telltale “
        
          snapping
          (抓拍)
        
         into place”.will-change lets us be 
        
          intentional
          (故意)
        
         about which elements should be hardware-accelerated. Browsers have their own 
        
          inscrutable
          (高深莫测)
        
         
        
          logic
          (逻辑)
        
         around this stuff, and I'd rather not leave it up to chance. #Highlight #[[2022-12-29]]