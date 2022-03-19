- ## 安装
- https://smallstep.com/docs/step-ca/installation/
-
- ## systemd
- https://smallstep.com/docs/step-ca/certificate-authority-server-production#running-step-ca-as-a-daemon
-
- ## 连接到 CA
-
- > 仅当 Step CLI 使用机器和 CA 机器不一致时需要
  > 
  > 相关参数来源于 CA 机器上的 `$(step path)/config/defaults.json` 文件
- ```
  step ca bootstrap --ca-url https://<domain> --fingerprint <fingerprint>
  ```
-
- ## 利用 CSR 签发证书
- ```
  step ca sign <csr-file> <crt-file> --not-after=8888h
  ```
-
- `--not-after` 指定了证书有效期，8888h 约为 370 天
-
- ## 直接签发证书
-
- ```
  ```