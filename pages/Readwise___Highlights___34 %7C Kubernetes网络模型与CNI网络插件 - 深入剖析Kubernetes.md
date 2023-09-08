title:: Readwise/Highlights/34 | Kubernetes网络模型与CNI网络插件 - 深入剖析Kubernetes
author:: [[张磊]]
full-title:: 34 | Kubernetes网络模型与CNI网络插件 - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/67351
- Kubernetes 是通过一个叫作 CNI 的接口，维护了一个单独的网桥来代替 docker0。这个网桥的名字就叫作：CNI 网桥，它在宿主机上的设备名称默认是：cni0 #Highlight #[[2023-06-13]]
- CNI 的设计思想，就是：Kubernetes 在启动 Infra 容器之后，就可以直接调用 CNI 网络插件，为这个 Infra 容器的 Network Namespace，配置符合预期的网络栈 #Highlight #[[2023-06-13]]
- 在 Kubernetes 中，处理容器网络相关的逻辑并不会在 kubelet 主干代码里执行，而是会在具体的 CRI（Container Runtime Interface，容器运行时接口）实现里完成 #Highlight #[[2023-06-13]]
- 在默认情况下，网桥设备是不允许一个数据包从一个端口进来后，再从这个端口发出去的。但是，它允许你为这个端口开启 Hairpin Mode，从而取消这个限制 #Highlight #[[2023-06-13]]