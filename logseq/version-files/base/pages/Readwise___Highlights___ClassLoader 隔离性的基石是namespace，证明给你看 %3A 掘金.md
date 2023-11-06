title:: Readwise/Highlights/ClassLoader 隔离性的基石是namespace，证明给你看 : 掘金
author:: [[juejin.cn]]
full-title:: ClassLoader 隔离性的基石是namespace，证明给你看 : 掘金
category:: #articles
url:: https://juejin.cn/post/7177671182550827063
tags:: #[[inoreader]] #[[read]] #[[掘金 - 后端]]

- `ClassLoader` 是个抽象类，其子类 `UrlClassLoader` 引入 `URL` 资源概念，以此方式来约束自己只加载 `URL` 覆盖范围内的类文件；`ExtClassLoader`、`AppClassLoader` 都是 `UrlClassLoader` 的子类，各自分管的资源路径不同，即给定的 `URL` 不同则管辖范围不同，并通过委派执行类加载来保障这种分治能力，进而达到了类资源的隔离性。 ([View Highlight](https://read.readwise.io/read/01heh7gn2hgeyptaf7x85t0zj9)) #Highlight #[[2023-11-06]]
- 标准的委派机制，总结为2个方面：
  
  1.  父加载器能加载 父加载器来加载：
    
    •   自己在加载资源之前，先让父类加载器去加载。父类再找其父类，直到`BootStrapClassLoader`（它没有父类加载器）。
    •   保证了等级越高，加载的优先权越高
  2.  父加载器不加载 我就来加载（findClass)；我加载不了的子加载器来加载：
    
    •   若父类加载器没有加载成功，才逐级下放这个加载权。
    •   子类加载器不能加载父类加载器能加载的类，如 `java.lang.String` ，即使用户自己编造一份这个类型，启动类加载器优先将 `java.lang.String` 加载成功后，应用类加载器就不会再加载用户自己编造的。 ([View Highlight](https://read.readwise.io/read/01heh7hpjvxkvgj932g5bw0k2v)) #Highlight #[[2023-11-06]]
- 每个类加载器都对应一个`namespace` ([View Highlight](https://read.readwise.io/read/01heh7k3kcypqzp7sp440hqwhc)) #Highlight #[[2023-11-06]]
- 同一个命名空间中，类只加载一份 ([View Highlight](https://read.readwise.io/read/01heh7k53rhtcvjjp48yme4xh8)) #Highlight #[[2023-11-06]]