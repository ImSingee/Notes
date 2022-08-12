- #gRPC #TLS #证书 #OpenSSL
-
-
- ## 生成 CA
	- ```bash
	  # 私钥
	  openssl genrsa -out ca.key 4096
	  
	  # 证书
	  export CERT_SUBJECT="/C=CN/ST=Shanghai/L=Shanghai/O=Tophant/OU=Tophant/CN=ARS"
	  openssl req -new -x509 -days 3650 -key ca.key -out ca.crt -subj "$CERT_SUBJECT"
	  
	  
	  ```