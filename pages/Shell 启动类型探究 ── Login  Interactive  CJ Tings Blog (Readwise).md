retrieved:: [[2022-02-01]], 2:44:55 PM
              author:: [[cjting.me]]
              category:: [[articles]]
              source:: [[hypothesis]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article1.be68295a7e40.png)
- ## [[Readwise Highlights]]
	- 我们先来看字典对 Shell 的释义：
	  
	  the hard outer covering of something, especially nuts, eggs, and some animals.
	  
	  从这个解释来看 Shell 指的是物体表面的外壳，在计算机中这其实是一个比喻，Shell 是 Kernel 的外壳。
	  这个链接 对这个问题回答地很好，我摘录如下：
	  
	  A shell is a program that prints a prompt, reads a line of input from you, and then interprets it as one or more commands to manipulate files or run other programs. Before the invention of the GUI, the shell was the primary user interface of an OS.
	  
	  Shell 首先是一个程序，这个程序用来和 Kernel 进行交互，在 GUI 发明之前，Shell 是和 Kernel 交互的唯一方式。
	                link:: [null](null)
	                on:: [[2021-05-24]]
	                tags::
	- 当我们使用终端登录一台主机时，主机会为我们启动一个 Shell，由于是登录以后启动的，所以是 login Shell。
	  login Shell 会初始化一些针对整个登录会话的任务，比如说，我希望我每次登录主机，就自动发一封邮件出去，那么这个任务就可以在 login Shell 的启动文件中完成。
	  其他情况的 Shell 就是 non-login 的，比如我登录以后，输入 bash 再启动一个 Shell，那么这个 Shell 就是 non-login 的。
	                link:: [null](null)
	                on:: [[2021-05-24]]
	                tags::
	- 检测是否是 login Shell 还有一个办法，那就是输入 logout，如果是 login Shell，效果相当于 exit，如果不是，会提示 logout: not login shell。
	                link:: [null](null)
	                on:: [[2021-05-24]]
	                tags::
	- 我们首先 SSH 到我们的 Manjaro 主机上，此时得到的 Shell 就是 login + interactive 的。
	                link:: [null](null)
	                on:: [[2021-05-24]]
	                tags::
	- -l 参数可以强制 Bash 变成 login Shell，默认情况下，已经登录后再使用 Bash 得到的是 non-login Shell。
	                link:: [null](null)
	                on:: [[2021-05-24]]
	                tags::
	- 日常使用中，对于 Bash 的配置就放在 ~/.bashrc 中即可。~/.bash_profile 一般会含有 source ~/.bashrc 的代码，所以不管 login 还是 non-login， .bashrc 文件都会被执行。
	                link:: [null](null)
	                on:: [[2021-05-24]]
	                tags::
	- 如果 Bash 发现自己是以 /bin/sh 的身份启动的，也就是 $0 是 /bin/sh 的话，它的行为会发生改变，包括启动文件，会调整自己尽量和 sh(Bourne shell) 兼容。比如说，在 non-login + non-interactive 情况下它不会 source $BASH_ENV
	                link:: [null](null)
	                on:: [[2021-05-24]]
	                tags::