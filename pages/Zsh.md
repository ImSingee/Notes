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
	- **光标快速移动**
		- Preference → Profile → Default → Keys → Key Mappings 右下角添加
			- `Option + <-`  ：Send Escape Sequence - b
			- `Option + ->`  ：Send Escape Sequence - f
		- 然后就可以利用 Option + 左右键来以单词为单位移动了
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
	- zsh-autosuggestion
		- Fig：直接安装同名插件
		- 手动
			- ```shell
			  git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
			  ```
			- 修改 `~/.zshrc` 文件，在 plugins 中添加 `zsh-autosuggestions`
	- autojump
		- Fig：直接安装同名插件
		- 手动
			- ```shell
			  brew install autojump
			  ```
			- 按照 brew 安装完成后的提示信息操作，目前版本是修改 `~/.zshrc` 文件，添加`[ -f /usr/local/etc/profile.d/autojump.sh ] && . /usr/local/etc/profile.d/autojump.sh`  一行
	- zsh-syntax-highlighting
		- Fig：直接安装同名插件
		-