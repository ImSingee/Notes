- since Linux 2.6.24; CONFIG_CGROUP_CPUACCT
- 对应 systemd CPUAccounting=yes
- [文档](https://github.com/torvalds/linux/blob/master/Documentation/admin-guide/cgroup-v1/cpuacct.rst)
-
- cpuacct.stat：存储进程占用的 cpu 时间信息
	- user: Time spent by tasks of the cgroup in user mode
	- system: Time spent by tasks of the cgroup in kernel mode
	- 单位是 [[USER_HZ]]，即 10ms
	- 该统计结果并不精确
- cpuacct.usage：所有 CPU 核的累加使用时间，单位为 ns
- cpuacct.usage_percpu：针对多核，输出的是每个 CPU 的使用时间，单位为 ns
-