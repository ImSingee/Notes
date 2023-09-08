---
title: ulimit
---

- ulimit 用来获取和**临时**设定 #linux 系统中的一些配置

- 

- 使用 `ulimit -a` 参数可以查看所有的配置
	 - -t: cpu time (seconds)              unlimited

	 - -f: file size (blocks)              unlimited

	 - -d: data seg size (kbytes)          unlimited

	 - -s: stack size (kbytes)             8176

	 - -c: core file size (blocks)         0

	 - -v: address space (kbytes)          unlimited

	 - -l: locked-in-memory size (kbytes)  unlimited

	 - -u: processes                       2666

	 - -n: file descriptors                256

- 使用 `ulimit -[type]` 可以查看指定配置，例如 `ulimit -s` 可以查看 stack size

- 使用 `ulimit -[type] [newvalue]` 可以临时设置指定配置的值，例如 `ulimit -s 1024` 可以将 stack size 设置为只有 1024 (kbytes)，这个设置是临时的，在系统重启后会恢复

- 添加 `-H` 参数以查看硬限制（Hard Limit，只有 root 用户可以修改），添加 `-S` 参数以查看软限制（Soft Link），实际情况会同时应用二者的限制

- 

- 持久化
	 - ulimit 所设定的配置是临时的，在系统重启后会恢复，如果想要持久化保存，需要修改 `/etc/security/limits.conf` 文件（或者 `/etc/security/limits.d` 文件夹下的文件）
