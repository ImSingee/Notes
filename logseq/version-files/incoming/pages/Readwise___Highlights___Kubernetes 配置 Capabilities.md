title:: Readwise/Highlights/Kubernetes 配置 Capabilities
author:: [[阳明的博客]]
full-title:: Kubernetes 配置 Capabilities
category:: #articles
url:: https://www.qikqiak.com/post/capabilities-on-k8s/
- 从内核 2.2 开始，Linux 将传统上与超级用户 root 关联的特权划分为不同的单元，称为 `capabilites`。`Capabilites` 每个单元都可以独立启用和禁用。这样当系统在作权限检查的时候就变成了：**在执行特权操作时，如果进程的有效身份不是 root，就去检查是否具有该特权操作所对应的 capabilites，并以此决定是否可以进行该特权操作**。 ([View Highlight](https://read.readwise.io/read/01hav9zdy6zd1zw3a4bv7c1ebn)) #Highlight #[[2023-09-21]]
- 我们可以通过 `getcap` 和 `setcap` 两条命令来分别查看和设置程序文件的 属性 ([View Highlight](https://read.readwise.io/read/01hava0jxbhmhx67yer333p8cd)) #Highlight #[[2023-09-21]]
- 对于可执行文件的属性中有三个集合来保存三类 `capabilities`，它们分别是：
  
  •   Permitted：在进程执行时，Permitted 集合中的 capabilites 自动被加入到进程的 Permitted 集合中。
  •   Inheritable：Inheritable 集合中的 capabilites 会与进程的 Inheritable 集合执行与操作，以确定进程在执行 execve 函数后哪些 capabilites 被继承。
  •   Effective：Effective 只是一个 bit。如果设置为开启，那么在执行 execve 函数后，Permitted 集合中新增的 capabilities 会自动出现在进程的 Effective 集合中。
  
  对于进程中有五种 `capabilities` 集合类型，相比文件的 `capabilites`，进程的 `capabilities` 多了两个集合，分别是 `Bounding` 和 `Ambient`。 ([View Highlight](https://read.readwise.io/read/01hava4gy6yaq5ycf64g1pspwz)) #Highlight #[[2023-09-21]]
- 默认情况下 Docker 会删除必须的 `capabilities` 之外的所有 `capabilities`，因为在容器中我们经常会以 root 用户来运行，使用 `capabilities` 现在后，容器中的使用的 root 用户权限就比我们平时在宿主机上使用的 root 用户权限要少很多了，这样即使出现了安全漏洞，也很难破坏或者获取宿主机的 root 权限，所以 Docker 支持 `Capabilities` 对于容器的安全性来说是非常有必要的。
  
  不过我们在运行容器的时候可以通过指定 `--privileded` 参数来开启容器的超级权限，这个参数一定要慎用，因为他会获取系统 root 用户所有能力赋值给容器，并且会扫描宿主机的所有设备文件挂载到容器内部，所以是非常危险的操作 ([View Highlight](https://read.readwise.io/read/01hava5nm87qj7sqm1vj70d4sj)) #Highlight #[[2023-09-21]]