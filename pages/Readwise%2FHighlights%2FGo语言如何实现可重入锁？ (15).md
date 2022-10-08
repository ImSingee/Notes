title:: Readwise/Highlights/Go语言如何实现可重入锁？ (15)
author:: [[segmentfault.com]]
full-title:: Go语言如何实现可重入锁？
category:: #articles
url:: https://segmentfault.com/a/1190000040092635

- Go语言中完全没有必要使用可重入锁，如果我们发现我们的代码要使用到可重入锁了，那一定是我们写的代码有问题了，请检查代码结构，修改他 #Highlight #[[2021-06-11]]