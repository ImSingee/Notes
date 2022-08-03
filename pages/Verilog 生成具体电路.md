- > 本文针对 Apple Silicon Mac，理论上也支持 Intel Mac
- ## 安装依赖
	- ```bash
	  brew install icarus-verilog
	  brew install --cask gtkwave
	  
	  # https://ughe.github.io/2018/11/06/gtkwave-osx
	  cpan install Switch # all default
	  xattr -d -r com.apple.quarantine /Applications/gtkwave.app
	  rm /opt/homebrew/bin/gtkwave
	  echo 'export PATH=/Applications/gtkwave.app/Contents/Resources/bin/:$PATH' >> ~/.zshrc
	  ```
-