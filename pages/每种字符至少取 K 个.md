alias:: Take K of Each Character From Left and Right
- #CruelCoding #2023-01-06 #Medium #[[Two Pointers]] [讲解](https://youtu.be/KvQK3RXuTFc)
- #算法 #Medium #[[滑动窗口]] #[[字符串]] #[[哈希表]]
- #Leetcode #Leetcode-2516 [LC国际](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/) [LC中国](https://leetcode.cn/problems/take-k-of-each-character-from-left-and-right/)
- # 题目
	- 给你一个由字符 `'a'`、`'b'`、`'c'` 组成的字符串 `s` 和一个非负整数 `k` 。每分钟，你可以选择取走 `s` **最左侧** 还是 **最右侧** 的那个字符。
	- 你必须取走每种字符 **至少** `k` 个，返回需要的 **最少** 分钟数；如果无法取到，则返回`-1` 。
	-
	- **示例 1：**
		- **输入：**s = "aabaaaacaabc", k = 2
		- **输出：**8
		- **解释：**
		- 从 s 的左侧取三个字符，现在共取到两个字符 'a' 、一个字符 'b' 。
		- 从 s 的右侧取五个字符，现在共取到四个字符 'a' 、两个字符 'b' 和两个字符 'c' 。
		- 共需要 3 + 5 = 8 分钟。
		- 可以证明需要的最少分钟数是 8 。
	- **示例 2：**
		- **输入：**s = "a", k = 1
		- **输出：**-1
		- **解释：**无法取到一个字符 'b' 或者 'c'，所以返回 -1 。
		-
	- **提示：**
		- `1 <= s.length <= 105`
		- `s` 仅由字母 `'a'`、`'b'`、`'c'` 组成
		- `0 <= k <= s.length`
- # 解
	- 逆向思维
	- 即寻找 [i, j) 中的最长部分
	- ```go
	  func takeCharacters(s string, k int) int {
	      var M []int = make([]int, 3)
	      for _, c := range s {
	          M[c-'a']++
	      }
	      for i := range M {
	          M[i] -= k
	      }
	      var m []int = make([]int, 3)
	      yes := func() bool {
	          for i, v := range m {
	              if v > M[i] {
	                  return false
	              }
	          }
	          return true
	      }
	      if !yes() {
	          return -1
	      }
	      
	      add := func(c byte) {
	          m[c-'a']++
	      }
	      minus := func(c byte) {
	          m[c-'a']--
	      }
	      
	      maxlen := 0
	      j := 0
	  
	      for i := range s {
	          for yes() { // [i, j)
	              maxlen = max(maxlen, j-i)
	              if j == len(s) {
	                  break
	              }
	              
	              add(s[j])
	              j++
	          }
	          
	          minus(s[i])
	      }
	  
	      return len(s)-maxlen
	  }
	  
	  func max(a, b int) int {
	      if a > b { return a } else { return b }
	  }
	  ```