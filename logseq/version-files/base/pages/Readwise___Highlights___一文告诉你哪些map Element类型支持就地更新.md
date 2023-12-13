title:: Readwise/Highlights/一文告诉你哪些map Element类型支持就地更新
author:: [[tonybai.com]]
full-title:: 一文告诉你哪些map Element类型支持就地更新
category:: #articles
url:: https://tonybai.com/2023/04/02/map-element-types-support-in-place-update/
tags:: #[[golang]] #[[inoreader]] #[[tony bai]] #[[博客]]
- 地址是map在runtime层维护的内存地址，一旦暴露出来至少会有如下两个问题：
  
  •   并发访问时会导致该element数据的竞争问题；
  •   map自动扩容后，**element地址会变更**，通过上述代码获取的地址可能变为无效。
  
  当然第二点更为重要，也正是因为这个原因，**Go决定不支持对map的element取地址**。 ([View Highlight](https://read.readwise.io/read/01hdjekksgmey85h0xffqehyw9)) #Highlight #[[2023-10-25]]