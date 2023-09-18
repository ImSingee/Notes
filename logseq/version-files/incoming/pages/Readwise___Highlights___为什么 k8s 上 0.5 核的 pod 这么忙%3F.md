title:: Readwise/Highlights/为什么 k8s 上 0.5 核的 pod 这么忙?
author:: [[Summer]]
full-title:: 为什么 k8s 上 0.5 核的 pod 这么忙?
category:: #articles
url:: https://learnku.com/articles/83626
tags:: #[[favorite]] #[[golang]]
- 当 `GOMAXPROCS` 大于核心数量的时候，会导致线程不断的切换，然后 `cpu` 有一部分时间被切换占用了 (**设置为 `cpu` 的核心数可以减少切换，但还是会有切换的场景**) ([View Highlight](https://read.readwise.io/read/01hak0rknnhwr7wd99mrbsmsff)) #Highlight #[[2023-09-18]]