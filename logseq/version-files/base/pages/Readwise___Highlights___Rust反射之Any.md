title:: Readwise/Highlights/Rust反射之Any
author:: [[张小凯的博客]]
full-title:: Rust反射之Any
category:: #articles
url:: https://jasonkayzk.github.io/2022/11/24/Rust%E5%8F%8D%E5%B0%84%E4%B9%8BAny/
tags:: #[[inoreader]] #[[博客]] #[[张小凯的博客]]

- 在Rust中只有编译期反射，并且主要是通过Any来实现的 ([View Highlight](https://read.readwise.io/read/01gjtjwje0yv3sderpnrj5tdhe)) #Highlight #[[2022-11-27]]
- **所有拥有静态生命周期的类型都会实现Any，未来可能会考虑加入生命周期是非‘static的情况** ([View Highlight](https://read.readwise.io/read/01gjtk1gqbymh0r89ht30d7m00)) #Highlight #[[2022-11-27]]
- intrinsic 库函数是指：**由编译器内置实现的函数** ([View Highlight](https://read.readwise.io/read/01gjtk274menaep61n2rbhaaed)) #Highlight #[[2022-11-27]]
- •   **反射打破了原有的封装原则，可以任意访问结构体的内容，不安全；**
  •   **反射的存在使得代码过于臃肿，移除后编译器会简化很多；**
  •   **反射功能设计的比较弱，开发者对于是否在未来的版本中还拥有反射功能存疑；** ([View Highlight](https://read.readwise.io/read/01hf5z9anytn7b2kvzq4r114w0)) #Highlight #[[2023-11-14]]
- 保留any的原因：
  
  •   **在调试范型类型相关的代码的时候，有TypeId会更方便，更容易给出正确的错误提示；**
  •   **有利于编译器作出代码的优化；** ([View Highlight](https://read.readwise.io/read/01hf5z9gakdfq9bzzxf0tvwksw)) #Highlight #[[2023-11-14]]