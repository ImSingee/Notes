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
	- 光标快速移动
		- Preference → Profile → Default → Keys → Key Mappings 右下角添加
			- `Option + <-`  ：Send Escape Sequence - b
			- `Option + ->`  ：Send Escape Sequence - f
		- 然后就可以利用 Option + 左右键来以单词为单位移动了
- ## Fig 配置
	- ### oh-my-zsh
	-