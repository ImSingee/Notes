- ## 创建 Caddyfile
	- ```
	  https://xxx.com {
	      reverse_proxy http://yyy.com
	  }
	  ```
- ## 应用 Caddyfile
	- ```
	  # 将 Caddyfile 放置于当前目录下
	  # 直接运行
	  ./caddy run
	  ```