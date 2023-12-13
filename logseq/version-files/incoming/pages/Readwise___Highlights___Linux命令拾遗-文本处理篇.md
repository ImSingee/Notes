title:: Readwise/Highlights/Linux命令拾遗-文本处理篇
author:: [[扣钉日记]]
full-title:: Linux命令拾遗-文本处理篇
category:: #articles
url:: https://mp.weixin.qq.com/s/P5Bcx34Jy8gxzfYgFcY4yA
- 在没有指定`-d`选项时，xargs默认会忽略掉`'`,`"`,`\`，而有`-d`时则不会忽略。 ([View Highlight](https://read.readwise.io/read/01he5vmfn37kdvpga3sca6gme3)) #Highlight #[[2023-11-02]]
- 在没指定`-d`时，`-n`默认使用空白符(包含空格、TAB与换行符)来分拆参数，而`-L`，默认使用换行符来分拆参数 ([View Highlight](https://read.readwise.io/read/01he5vnd13hzj904fm96d0qh6e)) #Highlight #[[2023-11-02]]
- pattern部分可以使用正则表达式，注意sed中的正则也不能使用\d，且记得时常搭配-E选项 ([View Highlight](https://read.readwise.io/read/01he5vs73xbvwv25w3m49g4cx2)) #Highlight #[[2023-11-02]]
- pattern部分也可以是逗号分隔的两个正则表达式，匹配从找到第一个正则表达式开始的行，到找到第二个正则表达式的行结束 ([View Highlight](https://read.readwise.io/read/01he5vt3jyfsyc65sw3ptqx88v)) #Highlight #[[2023-11-02]]