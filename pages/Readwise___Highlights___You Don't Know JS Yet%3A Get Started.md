title:: Readwise/Highlights/You Don't Know JS Yet: Get Started
author:: [[Kyle Simpson]]
full-title:: You Don't Know JS Yet: Get Started
category:: #books
- One common misconception is that a function’s this refers to the function itself. Because of how this works in other languages, another misconception is that this points the instance that a method belongs to. Both are incorrect. #Highlight #[[2023-06-04]]
- A series of objects linked together via prototypes is called the “prototype chain.” #Highlight #[[2023-06-04]]
- The purpose of this prototype linkage (i.e., from an object B to another object A) is so that accesses against B for properties/methods that B does not have, are delegated to A to handle. Delegation of property/method access allows two (or more!) objects to cooperate with each other to perform a task. #Highlight #[[2023-06-04]]
- default prototype linkage connects to the Object.prototype object, which has common built-in methods on it like toString() and valueOf(), among others. #Highlight #[[2023-06-04]]
- To define an object prototype linkage, you can create the object using the Object.create(..) utility: #Highlight #[[2023-06-04]]
- Delegation through the prototype chain only applies for accesses to lookup the value in a property. If you assign to a property of an object, that will apply directly to the object regardless of where that object is prototype linked to. #Highlight #[[2023-06-04]]