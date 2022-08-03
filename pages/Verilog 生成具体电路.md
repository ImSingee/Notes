- > 本文针对 Apple Silicon Mac，理论上也支持 Intel Mac（但 Homebrew 相关路径可能有问题，请自行下面各种命令中的替换 /opt/homebrew 到适当的位置）
- ## 安装依赖
	- ```bash
	  # 自行安装 Homebrew https://brew.sh/
	  
	  brew install icarus-verilog
	  
	  brew install --cask gtkwave
	  cpan install Switch # all default
	  xattr -d -r com.apple.quarantine /Applications/gtkwave.app
	  rm /opt/homebrew/bin/gtkwave
	  echo 'export PATH=/Applications/gtkwave.app/Contents/Resources/bin/:$PATH' >> ~/.zshrc
	  
	  brew install yosys
	  
	  brew install graphviz
	  ```
- ## 下载代码
	- ```bash
	  git clone https://github.com/singee-study/geektime-computer-basic.git
	  
	  # 进入 04 的代码文件夹
	  cd geektime-computer-basic/04/src
	  ```
- ## 尝试运行查看结果
	- **make compile** 用于编译
	- **make show** 用于查看仿真波形图
	- **make image** 用于查看逻辑电路图
	- **make clean** 用于清理文件