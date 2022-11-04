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
-
	-
-