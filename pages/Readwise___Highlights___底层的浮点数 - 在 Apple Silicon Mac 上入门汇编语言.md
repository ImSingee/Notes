title:: Readwise/Highlights/底层的浮点数 - 在 Apple Silicon Mac 上入门汇编语言
author:: [[evian-zhang.github.io]]
full-title:: 底层的浮点数 - 在 Apple Silicon Mac 上入门汇编语言
category:: #articles
url:: https://evian-zhang.github.io/learn-assembly-on-Apple-Silicon-Mac/2-%E5%BA%95%E5%B1%82%E7%9A%84%E6%B5%AE%E7%82%B9%E6%95%B0.html

- 任何数都可以唯一地表示成符号、尾数和指数的组合。 #Highlight #[[2022-08-05]]
- Ord trait，就是全序关系。集合XXX上可以建立全序关系，意思就是说：
  对于XXX中的元素aaa, bbb, ccc有：
  
  
  反对称性
  如果a≤ba≤ba\leq b且b≤ab≤ab\leq a，则a=ba=ba=b
  
  
  传递性
  如果a≤ba≤ba\leq b且b≤cb≤cb\leq c，则a≤ca≤ca\leq c
  
  
  完全性
  对于XXX中的任意元素aaa和bbb，都有a≤ba≤ba\leq b或b≤ab≤ab\leq a
  
  
  对于我们最常接触的整数来说，这些性质是非常显然的，因此整数可以建立全序关系。 #Highlight #[[2022-08-05]]
- 由于NAN与任何数都不相等，因此浮点数不可以建立全序关系，从而不满足Ord trait。 #Highlight #[[2022-08-05]]