- [Repo](https://github.com/kubernetes/dashboard)
-
- 安装
- ```shell
  # Add kubernetes-dashboard repository
  helm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/
  # Deploy a Helm Release named "kubernetes-dashboard" using the kubernetes-dashboard chart
  helm upgrade --install kubernetes-dashboard kubernetes-dashboard/kubernetes-dashboard --create-namespace --namespace kubernetes-dashboard
  ```
- 安装后检查
- ```shell
  helm ls -n kubernetes-dashboard
  kubectl get all -n kubernetes-dashboard
  ```
-
- 服务在 `service/kubernetes-dashboard-kong-proxy` 下 443 端口（需要 HTTPS 访问）
- 利用 `kubectl -n kubernetes-dashboard port-forward svc/kubernetes-dashboard-kong-proxy 8443:443` 来建立本地 localhost:8443 到 Kubernetes Dashboard 的端口转发
-
- ### Token
	-
	-
-