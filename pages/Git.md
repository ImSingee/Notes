- ## Git diff
	- 目标
		- 比较工作目录和 staged：默认（无需额外参数）
		- 比较 staged 和 latest commit：`--staged`
			- 或 `--cached` 是其别名
		- 比较工作目录和 latest commit：`HEAD`
	- 只展示文件名 `--name-only`
		- 使用 \0 分隔：`-z`
	- 根据类型筛选 `--diff-filter=xxx`
		- [Diff Filter](https://git-scm.com/docs/git-diff#Documentation/git-diff.txt---diff-filterACDMRTUXB82308203)
		- Select only files that are Added ( `A` ), Copied ( `C` ), Deleted ( `D` ), Modified ( `M` ), Renamed ( `R` ), have their type (i.e. regular file, symlink, submodule, …​) changed ( `T` ), are Unmerged ( `U` ), are Unknown ( `X` ), or have had their pairing Broken ( `B` ). Any combination of the filter characters (including none) can be used. When  `*`  (All-or-none) is added to the combination, all paths are selected if there is any file that matches other criteria in the comparison; if there is no file that matches other criteria, nothing is selected.
		- Also, these upper-case letters can be downcased to exclude. E.g.  `--diff-filter=ad`  excludes added and deleted paths.
		- Note that not all diffs can feature all types. For instance, copied and renamed entries cannot appear if detection for those types is disabled.
		-
- ## Lib
	- ### Git status 等命令中文路径乱码
		- ```
		  git config --global core.quotepath false
		  ```
	-