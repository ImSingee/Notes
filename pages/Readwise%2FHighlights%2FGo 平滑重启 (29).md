title:: Readwise/Highlights/Go 平滑重启 (29)
author:: [[mp.weixin.qq.com]]
full-title:: Go 平滑重启
category:: #articles
url:: https://mp.weixin.qq.com/s?__biz=MzAwNjMxMTgwNw%3D%3D&mid=2247488246&idx=1&sn=94580ae9943e3c099af61cc5e9d51be3&chksm=9b0e08e6ac7981f034e983b41207b921f58d632c249142c7e76287d80f003bf338d1c7ad115f&cmdid=4C9UZCOHD285Z3#rd

- 信号的默认行为：
  term：信号终止进程
  core：产生核心转储文件并退出
  ignore：忽略信号
  stop：信号停止进程
  cont：信号恢复一个已停止的进程 #Highlight #[[2021-05-29]]
- 信号	值	默认动作	说明
  SIGHUP	1	Term	HUP (hang up)：终端控制进程结束(终端连接断开)
  SIGINT	2	Term	INT (interrupt)：用户发送INTR字符(Ctrl+C)触发（强制进程结束）
  SIGQUIT	3	Core	QUIT (quit)：用户发送QUIT字符(Ctrl+/)触发（进程结束）
  SIGKILL	9	Term	KILL (non-catchable, non-ignorable kill)：无条件结束程序(不能被捕获、阻塞或忽略)
  SIGUSR1	30,10,16	Term	用户自定义信号1
  SIGUSR2	31,12,17	Term	用户自定义信号2
  SIGKILL	15	KILL (non-catchable, non-ignorable kill)	TERM (software termination signal)：程序终止信号 #Highlight #[[2021-05-29]]