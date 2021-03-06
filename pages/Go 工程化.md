- 来源于 [Go工程化](https://lailin.xyz/post/go-training-week4-clean-arch.html) 系列
-
- 编程范式
	- 编程范式指的是程序的编写模式，与具体的编程语言关系相对较小。这些范式会告诉你应该在什么时候采用什么样的代码结构
	- 当前的三种编程范式
		- 结构化编程（面向过程）
			- 结构化编程对程序控制权的直接转移进行了限制和规范
			- 限制了 goto 语句的使用
		- 面向对象
			- 面向对象编程对程序控制权的间接转移进行了限制和规范
			- 限制了函数指针的使用
		- 函数式编程
			- 函数式编程对程序中的赋值进行了限制和规范。
			- 限制了赋值语句的使用
	-
	- 这里的三种编程范式很常见，但这个「限制」的角度很新颖
-
-
- 设计模式
	- SRP 单一职责
		- 任何一个软件模块都应该有且仅有一个被修改的原因。
		- 任何一个软件模块都应该只对一个用户（User）或系统利益相关者（Stakeholder）负责。
		- 任何一个软件模块都应该只对某一类行为者负责
		-
		- 反例: 代码合并冲突
			- 多人为了不同的目的修改了同一份源代码，这很容易造成问题的产生。
			- 避免这种问题产生的方法就是将服务不同行为者的代码进行切分。
			-
		- 单一职责原则非常容易被误认为「每个模块应该只做一件事」！虽然这个描述没错，但是这并不是 SRP 的全部
	- OCP 开闭原则
	- LSP 里氏替换原则
	- ISP 接口隔离原则