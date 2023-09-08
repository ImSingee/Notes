title:: Readwise/Highlights/在 Rust 里将一个值传递给类型为 "Dyn...
author:: [[@hemashushu on Twitter]]
full-title:: 在 Rust 里将一个值传递给类型为 "Dyn...
category:: #tweets
url:: https://twitter.com/hemashushu/status/1694273704245809512

- 在 Rust 里将一个值传递给类型为 "dyn trait" 的变量或者参数时（情况跟在java里将一个对象实例传递给一个接口时），会被包裹为 “trait 对象”——一个“胖指针”，后续调用这个对象的方法时会调用其中的vtable（虚拟函数表），这种特性叫“动态分派”
  https://t.co/M2ALcwiYdN
  
  (续 ([View Tweet](https://twitter.com/hemashushu/status/1694273704245809512)) #Highlight #[[2023-08-23]]
- trait对象包含两个指针，一个指向原始数据，另一个指向vtable，当你的程序开始包含泛型和生命周期标注和trait时……
  
  你的浓密头发会开始焦躁不安甚至开始松动
  
  所以，推荐深入了解一下trait对象的内部
  
  https://t.co/R8ZPGYzP5I
  
  p.s. slice 也是一个胖指针，不过一个指向数组，另一个是元素数量 ([View Tweet](https://twitter.com/hemashushu/status/1694273706472984689)) #Highlight #[[2023-08-23]]
- rust 的 “胖指针” 有个较好的设计是第一个指针是指向数据的，所以可以使用类似下面的方法获得数据的普通指针，比如：
  let v:Vec<u8> = vec![1,2,3]
  let p_fat = &v[..] as *const _; // 这是胖的
  let p_thin = p_fat as *const (); // 这是瘦的
  let addr = p_thin as usize; // 地址值 ([View Tweet](https://twitter.com/hemashushu/status/1694276348628681192)) #Highlight #[[2023-08-23]]