- ## Git diff
	- 目标
		- 比较工作目录和 staged：默认（无需额外参数）
		- 比较 staged 和 latest commit：`--staged`
		- 比较工作目录和 latest commit：`HEAD`
	- 只展示文件名 ``
- ## Lib
	- ### Git status 等命令中文路径乱码
		- ```
		  git config --global core.quotepath false
		  ```
	- Git diff 只