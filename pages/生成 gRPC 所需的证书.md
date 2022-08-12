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
	- 需修改上述脚本中的 CERT_SUBJECT 环境变量
		- C = 国家字母缩写，例如中国 CN (Country)
		- ST = 省份 (State / Province)
		- L = 城市 (Locality)
		- O = 单位名称 (Organization Name)
			- 对于 SSL 证书，一般为网站域名
			- 对于代码签名证书则为申请单位名称
			- 对于客户端单位证书则为证书申请者所在单位名称
		- CN = 公用名称 (Common Name)
			- 对于 SSL 证书，一般为网站域名
			- 对于代码签名证书则为申请单位名称
			- 对于客户端证书则为证书申请者的姓名