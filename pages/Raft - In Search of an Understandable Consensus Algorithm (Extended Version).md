file-path:: ../assets/raft-extended_1654411095297_0.pdf
file:: [raft-extended_1654411095297_0.pdf](../assets/raft-extended_1654411095297_0.pdf)
title:: Raft - In Search of an Understandable Consensus Algorithm (Extended Version)

- Raft 是一个为了管理副本日志（replicated log）的共识（consensus）算法
	- Raft 的结果与 (multi-)Paxos 相同并且更高效，但实现方法不尽相同
	- Raft 同时关注 understandable
	- Raft 的组成包括
	  hl-page:: 1
	  ls-type:: annotation
	  id:: 629c50c0-281d-4281-b796-286639681a46
		- 领导者选举 leader election
		- 日志同步 log replication
		- 安全性safety
	- Raft 执行了更强的一致性，以减少必须考虑的状态的数量
- 介绍
	- [[共识算法]] 允许一组机器作为一个共识组（consensus group）
		- 可以 survive the failures of some of its members
		- 常用于 build reliable large-scale software systems
	- Raft 的 novel feature（新奇的功能点）
		- Strong leader
			- 所有 log entry 仅会从 leader 流向其他机器
		- Leader Election
			- Raft 使用随机计时器 randomized timer 来选举 leader
		- Membership changes
			- Raft 在修改集群中的服务器时使用 joint consensus 算法
			- 这可以让配置修改过程中集群可以正常提供服务
- 复制状态机 replicated state machine
	- 被广泛用于分布式系统中实现 Fault Tolerance
	- ((6364d5c2-48c8-4123-b89d-26c7ed3bd39e))
	- ff