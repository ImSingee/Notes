title:: Readwise/Highlights/23 | 声明式API与Kubernetes编程范式 - 深入剖析Kubernetes
author:: [[张磊]]
full-title:: 23 | 声明式API与Kubernetes编程范式 - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/41769

- kubectl replace 的执行过程，是使用新的 YAML 文件中的 API 对象，替换原有的 API 对象；而 kubectl apply，则是执行了一个对原有 API 对象的 PATCH 操作 #Highlight #[[2023-06-09]]
- Istio 最根本的组件，是运行在每一个应用 Pod 里的 Envoy 容器。
  这个 Envoy 项目是 Lyft 公司推出的一个高性能 C++ 网络代理，也是 Lyft 公司对 Istio 项目的唯一贡献。
  而 Istio 项目，则把这个代理服务以 sidecar 容器的方式，运行在了每一个被治理的应用 Pod 中。我们知道，Pod 里的所有容器都共享同一个 Network Namespace。所以，Envoy 容器就能够通过配置 Pod 里的 iptables 规则，把整个 Pod 的进出流量接管下来。
  这时候，Istio 的控制层（Control Plane）里的 Pilot 组件，就能够通过调用每个 Envoy 容器的 API，对这个 Envoy 代理进行配置，从而实现微服务治理。 #Highlight #[[2023-06-09]]
- Kubernetes 项目为我们额外提供了一种“热插拔”式的 Admission 机制，它就是 Dynamic Admission Control，也叫作：Initializer。 #Highlight #[[2023-06-09]]
- Istio 项目的核心，就是由无数个运行在应用 Pod 中的 Envoy 容器组成的服务代理网格。这也正是 Service Mesh 的含义。 #Highlight #[[2023-06-09]]
- 声明式 API，才是 Kubernetes 项目编排能力“赖以生存”的核心所在 #Highlight #[[2023-06-09]]
- 无论是对 sidecar 容器的巧妙设计，还是对 Initializer 的合理利用，Istio 项目的设计与实现，其实都依托于 Kubernetes 的声明式 API 和它所提供的各种编排能力。可以说，Istio 是在 Kubernetes 项目使用上的一位“集大成者”。 #Highlight #[[2023-06-09]]