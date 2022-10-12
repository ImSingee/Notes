- # 预装工具
	- [Homebrew](https://brew.sh/)
		- ```shell
		  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
		  ```
	- [iTerm 2](https://iterm2.com/)
		- ```shell
		  brew install --cask iterm2
		  ```
	- [Fig](https://fig.io/)
		- ```shell
		  brew install fig
		  ```
- ## 字体
	- [Powerline fonts](https://github.com/powerline/fonts)
		- ```shell
		  git clone --depth=1  https://github.com/powerline/fonts.git /tmp/powerline-fonts
		  cd /tmp/powerline-fonts && ./install.sh
		  ```
	- [Powerline-status](https://pypi.org/project/powerline-status/)
		- ```shell
		  pip install powerline-status
		  ```
- ## iTerm 2 配置
	- **主题**
		- Preference → Profile → Default → Colors → （右下角）Color Presets
		- 选用 Solarized Dark 主题
		- Solarized Dark 主题 iTerm 2 已内置，也可从 [https://ethanschoonover.com/solarized/](https://ethanschoonover.com/solarized/) 下载
	- **字体**
		- Preference → Profile → Default → Text
		- Font 设定为 「Dejavu Sans Mono for Powerline」
		- 设定相应的粗细、大小即可（我习惯设定为大小 14 行间距 120）
	- **Natual Key Bindings**
		- Preference → Profile → Default → Keys → Key Mappings 右下角添加
			- `⌥ ←`  ：Send Escape Sequence - b
				- Jump to beginning of word
			- `⌥ →`  ：Send Escape Sequence - f
				- Jump to end of word
			- `⌘ delete`: Send Hex Code - 0x15
				- Delete entire line
			- `⌥ delete`: Send Hex Code - 0x17
				- Delete single word
			- `⌘ ←`: Send Hex Code - 0x01
				- Jump to beginning of line
			- `⌘ →`: Send Hex Code - 0x05
				- Jump to end of line
		-
- ## Fig 配置
	- ### oh-my-zsh
		- 直接安装 Fig 插件 ohmyzsh，或手动安装
			- ```shell
			  sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
			  ```
		- 配置主题为 agnoster
			- 直接在 Fig 插件设置中修改，或修改 .zshrc 的 THEME
			- 可能需要额外配置环境变量 `DEFAULT_USER=$(whoami)`
		- 开启插件 `git` `docker` `docker-compose`
			- 当前在 Fig 中插件可能无效
- ## 插件安装
	- [zsh-autosuggestion](https://github.com/zsh-users/zsh-autosuggestions)
		- Fig：直接安装同名插件
		- 手动
			- ```shell
			  git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
			  ```
			- 修改 `~/.zshrc` 文件，在 plugins 中添加 `zsh-autosuggestions`
		- **Solarized Dark 与 zsh-autosuggestions 颜色冲突**
			- Fig
				- 将配置中的 Highlight Style 改成 `fg=60`
			- 手动
				- 执行 `echo ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE=\'fg=60\' >> $ZSH_CUSTOM/zsh-autosuggestions_custom.zsh` 修改提示文本的颜色
	- [autojump](https://github.com/wting/autojump)
		- Fig：直接安装同名插件
		- 手动
			- ```shell
			  brew install autojump
			  ```
			- 按照 brew 安装完成后的提示信息操作，目前版本是修改 `~/.zshrc` 文件，添加`[ -f /usr/local/etc/profile.d/autojump.sh ] && . /usr/local/etc/profile.d/autojump.sh`  一行
	- [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)
		- Fig：直接安装同名插件
		- 手动
			- ```shell
			  git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
			  ```
			- 修改 `~/.zshrc` 文件，在 plugins 中添加 `zsh-syntax-highlighting`，需要注意，**必须保证此项在 plugins 中位于最后**
	- Thin blinking cursor
		- 添加下面一行到 Fig Scripts Config 或 `~/.zshrc`
			- ```shell
			  echo '\e[5 q'
			  ```