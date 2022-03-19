- ## 安装
- https://smallstep.com/docs/step-ca/installation/
-
- ## systemd
- https://smallstep.com/docs/step-ca/certificate-authority-server-production#running-step-ca-as-a-daemon
-
- ## 连接到 CA
-
- > 仅当 Step CLI 使用机器和 CA 机器不一致时需要
- ```
  step ca bootstrap --ca-url https://<domain> --fingerprint <fingerprint>
  ```
-
	-