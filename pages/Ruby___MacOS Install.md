- ## 安装 rvm
	- ```bash
	  \curl -sSL https://get.rvm.io | bash -s stable --auto-dotfiles
	  ```
- ## 安装特定版本
	- > 需要预先 brew install openssl, 下面的用来解决 `__rvm_log_dotted:23: permission denied:` 错误
	- ```bash
	  rvm install 3.1.2 --with-openssl-dir=`brew --prefix openssl`
	  ```