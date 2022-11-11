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
	- 分布式算法的作用：保证集群中各个机器看到的 replicated log 一致(consistent)
	- 分布式算法的需求
		- 安全性
			- 在任何情况（不考虑拜占庭问题）下，保证返回数据的正确性
			- 异常情况可能为网络延迟、网络分区、丢包、网络包重复、网络包乱序
		- 可用性：只要集群中的大多数（过半）机器存活就可以正常提供服务；异常的机器恢复时可以自动恢复状态并重新加入集群
		- 不依赖时钟
		- 只要集群中的大部分（过半）机器响应了就可以回复给客户端，性能不受少量机器的影响
- Raft 共识算法
	- 实现
		- 首先选举 Leader
		- 由 Leader 进行完全的 replicated log 管理
			- Leader 从客户端接受 log entries
			- 将其同步到其他服务器
			- 在合适时机告知其他服务器将日志加入至自己的状态机
	- Raft 将共识问题分为
		- Leader 选举
		- 日志同步
		- 状态机安全性：日志一旦进入服务器的状态机就不会修改
	- Raft 基础
		- 一个 Raft 集群包括多台机器，可以容忍不过半的异常
			- 典型的 Raft 集群包括 5 台机器、可以容忍 2 台异常
		- 任何一刻一台服务器必处于 Leader、Follower、Candidate 中的一种状态
			- 在通常时刻（非选举时）存在 1 个 Leader、其他均为 Follower
		- Follower 是 passive 的：他们不自己发送请求，而是回复 Leader/Follower；对于客户端请求会将请求转发给 Leader
		- Raft 将时段用 term 做划分，一个 term 的时间是尽可能长的
			- term 是一个连续递增整数
			- 一个 Term 开始于选举（一个或多个 Candidate 试图称为 Leader）
				- 如果一个 Candidate 得到多数票，那么其称为 Leader
				- 如果存在平票，启动新一轮选举
				- 一个 Term 至多只存在一个 Leader
			- 任何一个服务器均存储当前的 term，在发送/响应任何请求时均会带上当前 term
				- 如果
				- 如果 Leader 或 Candidate 发现了更新的 term，
		-
		-
	-