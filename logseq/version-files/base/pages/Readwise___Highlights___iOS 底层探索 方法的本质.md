title:: Readwise/Highlights/iOS 底层探索 方法的本质
author:: [[juejin.cn]]
full-title:: iOS 底层探索 方法的本质
category:: #articles
url:: https://juejin.cn/post/6959861997194182692
tags:: #[[favorite]] #[[ifttt]] #[[instapaper]] #[[Objective-C]]  
![](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)
将一段简单的方法调用代码，放在main方法中，然后使用clang命令编译。 ZPerson *person = [ZPerson alloc]; [person sayHello]; 复制代码 然后使用clang -rewrite-objc main.
- OC方法的本质就是通过`objc_msgSend`来发送消息。 `objc_msgSend`包含有方法的调用的两个隐藏参数：`self（消息接受者）`和`sel（方法编号）`。 `sel_registerName`等同于oc中的`@selector()`，可以根据传进的方法名得到一个`sel`。 ([View Highlight](https://read.readwise.io/read/01hq7bvqehmsynmm5pf2wr7fhq)) #Highlight #[[2024-02-22]]