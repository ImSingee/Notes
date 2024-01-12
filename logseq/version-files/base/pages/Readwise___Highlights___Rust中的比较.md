title:: Readwise/Highlights/Rust中的比较
author:: [[rustcc.cn]]
full-title:: Rust中的比较
category:: #articles
url:: https://rustcc.cn/article?id=6b1d9149-b557-45ea-81f2-8bd4fd9c8e6f
tags:: #[[favorite]] #[[Rust]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)

- `Eq Trait` 实现了 [等价关系 Equivalence_relation](https://en.wikipedia.org/wiki/Equivalence_relation)，该数值关系具有以下特性：
  
  •   **对称性 (symmetric(对称))：如果 `a == b`，那么 `b == a`；**
  •   **可传递性 (transitive)：如果 `a == b` 且 `b == c`，那么 `a == c`；**
  •   **自反性 (reflexive)：`a == a`；**
  
  **`Eq Trait` 基于 `PartialEq Trait`，并且在此之上并没有添加新的方法定义；**
  
  > **这个 Trait 只是用于告诉编译器，这是个 `等价关系` 而非 `部分等价关系`；**
  > 
  > **因为编译器并不能检测 `自反性 (reflexive)`；**
  
  在标准库中，只有 f32 和 f64 没有实现 `Eq Trait`，因为浮点值有两个特殊的值：
  
  •   **NAN：非数值不可比较，`NAN != NAN`；**
  •   **INFINITY：无穷大；** ([View Highlight](https://read.readwise.io/read/01hj5gzsf2a046d1bdwth0phsa)) #Highlight #[[2023-12-21]]
- 偏序关系有以下特性：
  
  •   **不对称性 antisymmetry：如果 `a < b` 那么 `!(a > b)`；**
  •   **可传递性 transitive：如果 `a < b` 且 `b < c` 那么 `a < c`；** ([View Highlight](https://read.readwise.io/read/01hj5h2k3am1cd36dy8ywg9x0e)) #Highlight #[[2023-12-21]]
- 全序关系有以下特性：
  
  •   **完整的不对称性 total antisymmetry：`a < b`，`a == b`，`a > b` 这三种结果只有一个是真；**
  •   **可传递性 transitive：如果 `a < b` 且 `b < c` 那么 `a < c`；** ([View Highlight](https://read.readwise.io/read/01hj5h5n6srvjnf41wgbr3vdpz)) #Highlight #[[2023-12-21]]
- Ord 意味着一个类型的所有值都可以进行排序，而 PartialOrd 则不然 ([View Highlight](https://read.readwise.io/read/01hj5h75n5cs2rn6rfwje4nftg)) #Highlight #[[2023-12-21]]