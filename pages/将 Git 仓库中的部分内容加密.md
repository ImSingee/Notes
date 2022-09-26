- 工具：[git-crypt](https://github.com/AGWA/git-crypt)
-
- > 关联阅读：[[完全加密某 Git 仓库]]
- ## 安装
	- ```shell
	  # macOS
	  brew install git-crypt
	  ```
- ## 配置（首次）
	- 首次：在仓库中运行以下命令来初始化（并生成密钥）
		- ```bash
		  git-crypt init
		  ```
	- 配置 `.gitattributes` 文件，指定 `filter=git-crypt diff=git-crypt`
		- 例如
		- ```plain
		  secretfile filter=git-crypt diff=git-crypt
		  *.key filter=git-crypt diff=git-crypt
		  secretdir/** filter=git-crypt diff=git-crypt
		  ```
	- 将 GPG 用户添加为信任
		- ```shell
		  git-crypt add-gpg-user USER_ID
		  ```
			- USER_ID 可以为 key ID / full fingerprint / an email address，相关内容需要已经添加至本地 GPG
			- 可利用 `gpg --list-public-keys` 查看所有本地已知 key
- ## 配置（克隆）
	- clone 仓库后在仓库运行以下命令来初始化（解密，并在未来自动加密）
	- ```bash
	  git-crypt unlock
	  ```
- ## 使用
	- 配置完成后，直接 push/pull 会完成透明加解密