- #ESXi #SSH
- ## 上传公钥
	- 将 Public Key 加入至 `/etc/ssh/keys-root/authorized_keys`
	- 修改 `/etc/ssh/sshd_config` 增加一行 `PubkeyAcceptedKeyTypes=+ssh-ed25519`
		- 可能需要将 `ssh-ed25519` 替换成其他类型（即公钥最前面的内容）
- ## 重启
	- ```shell
	  /etc/init.d/SSH restart
	  ```
-
- ## Troubleshoot
	- ### sshd 日志文件
		- /var/log/auth.log
	- 其他
		- [Allowing SSH access to ESXi/ESX hosts with public/private key authentication (1002866)](https://kb.vmware.com/s/article/1002866)
		- [Auditing ESXi Shell logins and commands (2004810)](https://kb.vmware.com/s/article/2004810)
		- [ESXi Log File Locations](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.monitoring.doc/GUID-832A2618-6B11-4A28-9672-93296DA931D0.html)