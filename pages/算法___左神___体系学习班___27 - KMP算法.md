alias:: 算法/左神/体系学习班/27, KMP

-
- See [[找出字符串中第一个匹配项的下标]]
-
- # 扩展题目
	- **给定一个字符串 `s`，请计算输出含有连续两个 `s` 作为子串的最短字符串。注意两个 `s` 可能有重叠部分。例如，`ababa` 含有两个 `aba`。**
		- 思路：找寻整个字符串的前缀子串和后缀子串相同的最大值，将其余部分拼在后面
		- 实现：利用 KMP 的 next 数组计算过程实现
		- ```cpp
		  string jd2018(string &str1) { // 稍微改造 getNextArr 方法
		      vector<int> next(str1.length() + 1); // 增加 next 数组长度
		      next[0] = -1;
		      next[1] = 0;
		      int i = 2;
		      int cn = 0;
		      while (i <= str1.length()) { // 多存放一个
		          if (str1[i - 1] == str1[cn]) {
		              next[i++] = ++cn;
		          } else if (cn > 0) {
		              cn = next[cn];
		          } else {
		              next[i++] = 0;
		          }
		      }
		    	// 返回原字符串 + 新复制的部分
		      return str1 + str1.substr(next[str1.length()]);
		  }
		  ```
	- **判断 str1 和 str2 是否互为旋转字符串**
		- 思路：在二者长度相同的情况下，判断 str2 是否为 str1+str1 的子串
		- [代码](https://github.com/algorithmzuo/algorithmbasic2020/blob/master/src/class27/Code03_IsRotation.java)
	-