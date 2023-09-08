title:: Readwise/Highlights/26 | 基于角色的权限控制：RBAC - 深入剖析Kubernetes
author:: [[张磊]]
full-title:: 26 | 基于角色的权限控制：RBAC - 深入剖析Kubernetes
category:: #articles
url:: https://time.geekbang.org/column/article/42154

- Kubernetes 中所有的 API 对象，都保存在 Etcd 里。可是，对这些 API 对象的操作，却一定都是通过访问 kube-apiserver 实现的。其中一个非常重要的原因，就是你需要 APIServer 来帮助你做授权工作 #Highlight #[[2023-06-13]]
- 在 Kubernetes 项目中，负责完成授权（Authorization）工作的机制，就是 RBAC：基于角色的访问控制（Role-Based Access Control） #Highlight #[[2023-06-13]]
- Role：角色，它其实是一组规则，定义了一组对 Kubernetes API 对象的操作权限。
  Subject：被作用者，既可以是“人”，也可以是“机器”，也可以是你在 Kubernetes 里定义的“用户”。
  RoleBinding：定义了“被作用者”和“角色”的绑定关系。 #Highlight #[[2023-06-13]]
- Role 和 RoleBinding 对象都是 Namespaced 对象（Namespaced Object），它们对权限的限制规则仅在它们自己的 Namespace 内有效，roleRef 也只能引用当前 Namespace 里的 Role 对象 #Highlight #[[2023-06-13]]
- 对于非 Namespaced（Non-namespaced）对象（比如：Node），或者，某一个 Role 想要作用于所有的 Namespace 的时候，我们又该如何去做授权呢？
  这时候，我们就必须要使用 ClusterRole 和 ClusterRoleBinding 这两个组合了。这两个 API 对象的用法跟 Role 和 RoleBinding 完全一样。只不过，它们的定义里，没有了 Namespace 字段 #Highlight #[[2023-06-13]]
- 在大多数时候，我们其实都不太使用“用户”这个功能，而是直接使用 Kubernetes 里的“内置用户”。
  这个由 Kubernetes 负责管理的“内置用户”，正是我们前面曾经提到过的：ServiceAccount。 #Highlight #[[2023-06-13]]
- Kubernetes 会为一个 ServiceAccount 自动创建并分配一个 Secret 对象，即：上述 ServiceAcount 定义里最下面的 secrets 字段。
  这个 Secret，就是这个 ServiceAccount 对应的、用来跟 APIServer 进行交互的授权文件，我们一般称它为：Token。Token 文件的内容一般是证书或者密码，它以一个 Secret 对象的方式保存在 Etcd 当中 #Highlight #[[2023-06-13]]
- 如果一个 Pod 没有声明 serviceAccountName，Kubernetes 会自动在它的 Namespace 下创建一个名叫 default 的默认 ServiceAccount，然后分配给这个 Pod。
  但在这种情况下，这个默认 ServiceAccount 并没有关联任何 Role #Highlight #[[2023-06-13]]
- 在 Kubernetes 中已经内置了很多个为系统保留的 ClusterRole，它们的名字都以 system: 开头。你可以通过 kubectl get clusterroles 查看到它们 #Highlight #[[2023-06-13]]