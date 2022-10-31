- #iptables
-
- ## 备份
	- ```bash
	   iptables-save > my.ipt
	  ```
- ## 恢复
	- ```bash
	  iptables -F # 清空已有规则
	  iptables-restore < my.ipt
	  ```