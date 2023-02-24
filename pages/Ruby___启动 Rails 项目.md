- > 首先需要安装好对应的 Ruby/Gem/Bundler 环境，需要版本完全匹配
- ## 安装依赖
	- > 该命令会自动安装工具链所需的各种版本，只要保证使用的 Ruby 版本与 `Gemfile` 一致即可
	- ```bash
	  bundle install
	  ```
	- ```bash
	  gem install rails # Rails 需要独立安装
	  ```
- ## 启动
	- ```bash
	  bin/rails server
	  ```