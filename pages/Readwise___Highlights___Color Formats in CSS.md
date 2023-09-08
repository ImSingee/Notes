title:: Readwise/Highlights/Color Formats in CSS
author:: [[joshwcomeau.com]]
full-title:: Color Formats in CSS
category:: #articles
url:: https://www.joshwcomeau.com/css/color-formats/
tags:: #[[inoreader]] #[[josh comeau\'s blog]] #[[博客]]
- It probably goes without saying, but we generally don't use named colors in production applications. 140 colors just isn't enough—it's even less than the 8-bit color palette available on the original NES console! ([View Highlight](https://read.readwise.io/read/01gk0yjgr4qkre7ax737x2qttc)) #Highlight #[[2022-11-29]]
- “darkgray” is actually a *lighter* color than “gray”??
  
  This is because the 140 named web colors are sourced from different places, including the HTML4 spec, the X11 Unix windowing system, and a [heartbreaking memorial](https://meyerweb.com/eric/thoughts/2014/06/19/rebeccapurple/). It's a hodgepodge of different palettes, and so it isn't always super consistent. ([View Highlight](https://read.readwise.io/read/01gk0ykh6jtc5p3fgsd8s3d6jq)) #Highlight #[[2022-11-29]]
- we can pass an *eight digit* hex code if we want to include an alpha channel ([View Highlight](https://read.readwise.io/read/01gk0yvd6m7q5psy211cgdptsy)) #Highlight #[[2022-11-29]]
- In HSL, “lightness” is a scale between black and white. 0% lightness is always black, 100% lightness is always white. If we want a bright, vivid, saturated color, we should lock our lightness at 50%, halfway between black and white.
  
  In HSB, things are a bit more complicated. "Brightness" is still a measure of lightness, and 0% will still produce black, but 100% no longer always produces white. It depends on the saturation: at full brightness, 0% saturation is white, and 100% saturation is our bright, vivid color.
  
  Honestly, I kinda like the HSB model, **but it's not an option in CSS.** We only have `hsl()`, not `hsb()`.
  
  If you ever wind up getting an HSB color value from a designer, a quick google search turns up lots of online tools you can use to convert HSB to HSL. ([View Highlight](https://read.readwise.io/read/01gk0z6hcn5vms6tgmf5xfssj3)) #Highlight #[[2022-11-29]]
- A color space is a collection of available colors, the palettes we have to pick from. There are millions of possible colors in sRGB, but it doesn't come close to capturing the full range of colors the human eye is capable of seeing. ([View Highlight](https://read.readwise.io/read/01gk0z7w45my8s5nnjf0cftwdy)) #Highlight #[[2022-11-29]]
- P3 extends the standard sRGB color space, giving us access to brighter and more vibrant colors. ([View Highlight](https://read.readwise.io/read/01gk0zax3vd8wbq26pxdve3c4h)) #Highlight #[[2022-11-29]]
- The `color()` function takes a color space, and then a set of R/G/B values. Instead of ranging from 0 to 255, it uses decimal values from 0 to 1. ([View Highlight](https://read.readwise.io/read/01gk0zdjft5bvr2aye7vywnv4r)) #Highlight #[[2022-11-29]]
- When we save images in software like Photoshop, we can choose the color space that the image uses, allowing us to “embed” the P3 color space inside an image. When we display that image in browsers like Chrome, we'll see the more-vibrant colors even though the CSS `color()` function isn't supported!*
  
  This can be a handy way to sneak some brighter colors into your projects today, while we wait for browsers to catch up. ([View Highlight](https://read.readwise.io/read/01gk0zecwmcf1a814rkzcj1a9d)) #Highlight #[[2022-11-29]]
- The HSL color format is modeled after math/physics. It doesn't take human perception into account. And, it turns out, humans don't perceive colors very accurately!
  
  **LCH is a color format that aims to be perceptually uniform to humans.** Two colors with an equivalent “lightness” value should feel equally light! ([View Highlight](https://read.readwise.io/read/01gk0zg5f4spz1re75ecxmzs6n)) #Highlight #[[2022-11-29]]
- LCH stands for “Lightness Chroma Hue”. “Chroma” is more-or-less a synonym of “saturation”*. It's conceptually very similar to HSL, but with two big differences:
  
  1.  As noted, it prioritizes human perception, so that two colors that share the same “lightness” value will *feel* equally light.
    
  2.  It isn't bound to any particular color space. ([View Highlight](https://read.readwise.io/read/01gk0zk398thw8vs1y2smtq6b4)) #Highlight #[[2022-11-29]]
- I don't even need to open a color picker. If I want my color to be a bit darker, I can decrement the *lightness* percentage. If I want it to be more vivid and intense, I can crank up the *saturation*. ([View Highlight](https://read.readwise.io/read/01gk0zrbqq30n0he6vrwen9zdc)) #Highlight #[[2022-11-29]]