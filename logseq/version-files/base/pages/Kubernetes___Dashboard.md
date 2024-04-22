- [Repo](https://github.com/kubernetes/dashboard)
-
- 安装
- ```bash
  # Add kubernetes-dashboard repository
  helm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/
  # Deploy a Helm Release named "kubernetes-dashboard" using the kubernetes-dashboard chart
  helm upgrade --install kubernetes-dashboard kubernetes-dashboard/kubernetes-dashboard --create-namespace --namespace kubernetes-dashboard
  ```
- 安装后检查
- ```bash
  ```