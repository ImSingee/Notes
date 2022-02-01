retrieved:: [[2022-02-01]], 2:41:25 PM
              author:: [[mp.weixin.qq.com]]
              category:: [[articles]]
              source:: [[command]]
              tags::

- ![book_image](https://readwise-assets.s3.amazonaws.com/static/images/article2.74d541386bbf.png)
- ## [[Readwise Highlights]]
	- 信号的默认行为：
	  term：信号终止进程
	  core：产生核心转储文件并退出
	  ignore：忽略信号
	  stop：信号停止进程
	  cont：信号恢复一个已停止的进程
	                link:: [null](null)
	                on:: [[2021-05-29]]
	                tags::
	- 信号	值	默认动作	说明
	  SIGHUP	1	Term	HUP (hang up)：终端控制进程结束(终端连接断开)
	  SIGINT	2	Term	INT (interrupt)：用户发送INTR字符(Ctrl+C)触发（强制进程结束）
	  SIGQUIT	3	Core	QUIT (quit)：用户发送QUIT字符(Ctrl+/)触发（进程结束）
	  SIGKILL	9	Term	KILL (non-catchable, non-ignorable kill)：无条件结束程序(不能被捕获、阻塞或忽略)
	  SIGUSR1	30,10,16	Term	用户自定义信号1
	  SIGUSR2	31,12,17	Term	用户自定义信号2
	  SIGKILL	15	KILL (non-catchable, non-ignorable kill)	TERM (software termination signal)：程序终止信号
	                link:: [null](null)
	                on:: [[2021-05-29]]
	                tags::