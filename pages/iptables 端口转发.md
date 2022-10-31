- #iptables
- ## 确保内核开启了路由转发功能
	- ```bash
	  # 本次生效
	  echo 1 > /proc/sys/net/ipv4/ip_forward
	  
	  # 下次启动后也生效
	  sysctl -w net.ipv4.ip_forward=1
	  ```
- ##
## 将本机的端口转发到其他机器
	- 假设有 A、B、C 三台机器，期望 A 可以通过 B 的 6666 端口访问到 C 的 7777 端口
	- 在 B 上进行如下配置
	- ```bash
	  iptables -t nat -A PREROUTING -p tcp --dport 6666 -j DNAT --to-destination C:7777
	  iptables -t nat -A POSTROUTING -p tcp -d C --dport 7777 -j SNAT --to-source B
	  
	  # 存储变更
	  iptables-save
	  ```
-
- ## 参考
	- [iptables 做 TCP/UDP 端口转发【转】 ](https://www.cnblogs.com/paul8339/p/14688156.html)