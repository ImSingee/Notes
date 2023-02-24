- > 首先需要安装好对应的 Ruby/Gem/Bundler 环境，需要版本完全匹配
- ## 安装依赖
	- > 该命令会自动安装工具链所需的各种版本，只要保证使用的 Ruby 版本与 `Gemfile` 一致即可
	- ```bash
	  bundle install
	  ```
- ## 启动
	- > [使用 `bin/rails` 而不是 `rails`](https://stackoverflow.com/questions/25334160/what-is-the-difference-between-rails-vs-bin-rails)
	- ```bash
	  bin/rails server
	  ```