title:: Readwise/Highlights/38 | 从外界连通Service与Service调试“三板斧” - 深入剖析Kubernetes
author:: [[张磊]]
full-title:: 38 | 从外界连通Service与Service调试“三板斧” - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/68964

- 所谓 Service，其实就是 Kubernetes 为 Pod 分配的、固定的、基于 iptables（或者 IPVS）的访问入口。而这些访问入口代理的 Pod 信息，则来自于 Etcd，由 kube-proxy 通过控制循环来维护。 #Highlight #[[2023-07-11]]