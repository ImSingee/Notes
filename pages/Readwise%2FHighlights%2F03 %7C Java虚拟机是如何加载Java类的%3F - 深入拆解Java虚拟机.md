title:: Readwise/Highlights/03 | Java虚拟机是如何加载Java类的? - 深入拆解Java虚拟机
author:: [[郑雨迪]]
full-title:: 03 | Java虚拟机是如何加载Java类的? - 深入拆解Java虚拟机
category:: #articles
url:: https://time.geekbang.org/column/article/11523

- 通过 JVM 参数 -verbose:class 来打印类加载的先后顺序 #Highlight #[[2021-07-08]]
- 由于类初始化是线程安全的，并且仅被执行一次，因此程序可以确保多线程环境下有且仅有一个 Singleton 实例。 #Highlight #[[2021-07-08]]
- 如果直接赋值的静态字段被 final 所修饰，并且它的类型是基本类型或字符串时，那么该字段便会被 Java 编译器标记成常量值（ConstantValue），其初始化直接由 Java 虚拟机完成。除此之外的直接赋值操作，以及所有静态代码块中的代码，则会被 Java 编译器置于同一方法中，并把它命名为 < clinit >。 #Highlight #[[2021-07-08]]
- 村里的建筑师有一个潜规则，就是接到单子自己不能着手干，得先给师傅过过目。师傅不接手的情况下，才能自己来。在 Java 虚拟机中，这个潜规则有个特别的名字，叫双亲委派模型。每当一个类加载器接收到加载请求时，它会先将请求转发给父类加载器。在父类加载器没有找到所请求的类的情况下，该类加载器才会尝试去加载。 #Highlight #[[2021-07-08]]