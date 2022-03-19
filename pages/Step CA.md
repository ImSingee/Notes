- ## 安装
- https://smallstep.com/docs/step-ca/installation/
-
- ## systemd
- https://smallstep.com/docs/step-ca/certificate-authority-server-production#running-step-ca-as-a-daemon
-
- ## 连接到 CA
- ```
  step ca bootstrap --ca-url https://<domain> --fingerprint <fingerprint>
  ```