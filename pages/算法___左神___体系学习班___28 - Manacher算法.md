alias:: 算法/左神/体系学习班/28, Manacher

-
- Ref: [[最长回文子串]]
-
- # 扩展题目
	- **给定一个字符串 str，只能在 str 的后面添加字符，想让 str 整体变成回文串，返回至少要添加几个字符**
		- 思路：计算出包含最后一个字符的回文子串，返回总长与该子串长度的差
		- 实现：Manacher 过程中，当 R 触碰到最后一个字符时停止
		- [代码](https://github.com/algorithmzuo/algorithmbasic2020/blob/master/src/class28/Code02_AddShortestEnd.java)