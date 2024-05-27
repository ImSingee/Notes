## 文档
- https://apisix.apache.org/docs/helm-chart/apisix/
-
- ## 步骤
- ### 添加 Apache APISIX Helm 仓库
- ```bash
  helm repo add apisix https://charts.apiseven.com
  helm repo add bitnami https://charts.bitnami.com/bitnami
  helm repo update
  ```
- ### 安装 Apache APISIX
- ```bash
  helm install apisix apisix/apisix \
    --set dashboard.enabled=true \
    --set ingress-controller.enabled=true \
    --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix \
    --set gateway.type=LoadBalancer \
    --set ingress-controller.gateway.type=LoadBalancer \
    --namespace ingress-apisix --create-namespace
  ```