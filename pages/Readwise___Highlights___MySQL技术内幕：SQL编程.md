title:: Readwise/Highlights/MySQL技术内幕：SQL编程
author:: [[姜承尧]]
full-title:: MySQL技术内幕：SQL编程
category:: #books
- 在MySQL数据库中，对于UNSIGNED数的操作，其返回值都是UNSIGNED的。 #Highlight #[[2021-05-10]]
- 笔者个人的看法是尽量不要使用UNSIGNED，因为可能会带来一些意想不到的效果。另外，对于INT类型可能存放不了的数据，INT UNSIGNED同样可能存放不了，与其如此，还不如在数据库设计阶段将INT类型提升为BIGINT类型。 #Highlight #[[2021-05-10]]
- 其实如果没有ZEROFILL这个属性，括号内的数字是毫无意义的。 #Highlight #[[2021-05-10]]
- 严格模式是指将SQL_MODE变量设置为STRICT_TRANS_TABLES或STRICT_ALL_TABLES中的至少一种。 #Highlight #[[2021-05-10]]
- CURRENT_TIMESTAMP是NOW的同义词，也就是说两者是相同的。
  ￼SYSDATE函数返回的是执行到当前函数时的时间，而NOW返回的是执行SQL语句时的时间。 #Highlight #[[2021-05-11]]
- NOW（）函数可以返回时间，也可以返回一个数字，就看用户如何使用。 #Highlight #[[2021-05-11]]