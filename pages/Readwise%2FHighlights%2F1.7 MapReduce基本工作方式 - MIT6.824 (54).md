title:: Readwise/Highlights/1.7 MapReduce基本工作方式 - MIT6.824 (54)
author:: [[mit-public-courses-cn-translatio.gitbook.io]]
full-title:: 1.7 MapReduce基本工作方式 - MIT6.824
category:: #articles
url:: https://mit-public-courses-cn-translatio.gitbook.io/mit6-824/lecture-01-introduction/1.7-mapreduce-chu-tan

- MapReduce的思想是，应用程序设计人员和分布式运算的使用者，只需要写简单的Map函数和Reduce函数，而不需要知道任何有关分布式的事情，MapReduce框架会处理剩下的事情。 #Highlight #[[2022-03-07]]
- 一个典型的MapReduce Job。从整体来看，为了保证完整性，有一些术语要介绍一下：Job。整个MapReduce计算称为Job。Task。每一次MapReduce调用称为Task。所以，对于一个完整的MapReduce Job，它由一些Map Task和一些Reduce Task组成。所以这是一个单词计数器的例子，它解释了MapReduce的基本工作方式。 #Highlight #[[2022-03-07]]