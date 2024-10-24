title:: Readwise/Highlights/Day 1: Custom Properties and Fallbacks
author:: [[Manuel Matuzović]]
full-title:: Day 1: Custom Properties and Fallbacks
category:: #articles
url:: https://www.matuzo.at/blog/2022/100daysof-day1
tags:: #[[css]]  
![](https://res.cloudinary.com/dp3mem7or/image/upload/w_1200/articles/sm_100days-day1.jpg)
"Day 1: custom properties and fallbacks" is part of the #100DaysOfMoreOrLessModernCSS challenge, where the author aims to learn more about modern CSS. The document discusses the concept of fallbacks in CSS, which allows a second value to be set as a fallback when the primary property has not been defined. Examples are provided to illustrate how fallbacks work, including cases where the fallback is another custom property. The document also explains what happens when fallbacks fail, such as when an invalid value is used or when a custom property does not exist.
- If you're not working with custom properties and you set a valid value for a property followed by another declaration with an invalid value, the second declaration will be ignored. ([View Highlight](https://read.readwise.io/read/01hp91h4g4vaqaf45z7ehme1p3)) #Highlight #[[2024-02-10]]
- When the value in the second declaration is a custom property that doesn't exist, the declaration is not ignored. Either the property’s inherited value or its initial value, depending on whether the property is inherited or not, will be used instead. ([View Highlight](https://read.readwise.io/read/01hp91h6zrsrfk0v0r55wa86s8)) #Highlight #[[2024-02-10]]