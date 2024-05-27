### 安装 Charts
- ```bash
  helm repo add traefik https://helm.traefik.io/traefik
  helm repo update
  ```
- ### 安装 Traefik
- ```bash
  helm install traefik traefik/traefik \
    --namespace ingress-traefik --create-namespace
  ```
- ### 访问 dashboard
- ```bash
  kubectl -n ingress-traefik port-forward \
    $(kubectl get pods --selector "app.kubernetes.io/name=traefik" --output=name -n ingress-traefik) \
    9000:9000
  ```
- 然后访问 https://127.0.0.1:9000/dashboard/
-