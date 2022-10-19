title:: Readwise/Highlights/15 张图带你深入理解浮点数
author:: [[studygolang.com]]
full-title:: 15 张图带你深入理解浮点数
category:: #articles
url:: https://polarisxu.studygolang.com/posts/basic/diagram-float-point/

- 浮点数名称的由来在于小数点是浮动的。但具体存储时，需要固定一种形式，这叫做尾数的标准化。IEEE754 规定，在二进制数中，通过移位，将小数点前面的值固定为 1。IEEE754 称这种形式的浮点数为规范化浮点数（normal number）。 ([View Highlight](https://read.readwise.io/read/01ga0ax1fkqctwqy5nnwnneb1k)) #Highlight #[[2022-08-12]]
- 对于规范化浮点数，尾数其实比实际的多 1 位，也就是说单精度的是 24 位，双精度是 53 位。为了作区分，IEEE754 称这种尾数为 significand。 ([View Highlight](https://read.readwise.io/read/01ga0b716h0p1dqvypckzq449m)) #Highlight #[[2022-08-12]]
- 尾数决定了精度，对于单精度浮点数，因为只有 23 位，而 `1<<23` 对应十进制是 8388608，因此不能完整表示全部的 7 个十进制位，所以说，单精度浮点数**有效小数位**最多 7 位；双精度的**有效小数位**是 15 位；切记切记，有精度问题！！ ([View Highlight](https://read.readwise.io/read/01ga0azjwzbt91bk9qq600mgbp)) #Highlight #[[2022-08-12]]
- 因为指数有正、有负，为了避免使用符号位，同时方便比较、排序，指数部分采用了 **The Biased exponent (指数)** （有偏指数）。IEEE754 规定，2ᵉ⁻¹-1 的值是 0，其中 e 表示指数部分的位数，小于这个值表示负数，大于这个值表示正数。因此，对于单精度浮点数而言， 2⁸⁻¹-1 = 127 是 0；双精度浮点数，2¹¹⁻¹-1 = 1023 是 0。 ([View Highlight](https://read.readwise.io/read/01ga0b8thc3a49t8b1134fz4p4)) #Highlight #[[2022-08-12]]