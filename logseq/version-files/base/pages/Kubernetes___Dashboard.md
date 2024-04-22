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
- ### 授权
	- [创建管理员用户来访问控制面板](https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md)
	- ```yaml
	  apiVersion: v1
	  kind: ServiceAccount
	  metadata:
	    name: admin-user
	    namespace: kubernetes-dashboard
	  
	  ---
	  
	  apiVersion: rbac.authorization.k8s.io/v1
	  kind: ClusterRoleBinding
	  metadata:
	    name: admin-user
	  roleRef:
	    apiGroup: rbac.authorization.k8s.io
	    kind: ClusterRole
	    name: cluster-admin
	  subjects:
	  - kind: ServiceAccount
	    name: admin-user
	    namespace: kubernetes-dashboard
	  
	  ---
	  
	  apiVersion: v1
	  kind: Secret
	  metadata:
	    name: admin-user
	    namespace: kubernetes-dashboard
	    annotations:
	      kubernetes.io/service-account.name: "admin-user"
	  type: kubernetes.io/service-account-token
	  ```
		- 安装后利用 `kubectl get secret admin-user -n kubernetes-dashboard -o jsonpath={".data.token"} | base64 -d` 来获取 admin-user 的 token
		- 临时使用也可以不去创建最后的 Secret，而是用 `kubectl -n kubernetes-dashboard create token admin-user -d 1h` 来生成 Token
-